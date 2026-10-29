/**
 * InSightLiker - Firebase Authentication & Data Services
 * 
 * Supports:
 * - Google Sign-In (Popup)
 * - Email / Password Sign-Up & Sign-In
 * - Role-Based Profiles (Land Buyer vs Direct Landowner/Seller)
 * - Persistent Auth State (Firebase Auth + localStorage sync)
 * - Live Firebase connection with graceful offline/demo fallback
 */

// Default or Local Storage Firebase Configuration
const DEFAULT_FIREBASE_CONFIG = {
  apiKey: "AIzaSyDEMO-KEY-INSIGHTLIKER-REALESTATE-2026",
  authDomain: "insightliker-realland.firebaseapp.com",
  projectId: "insightliker-realland",
  storageBucket: "insightliker-realland.appspot.com",
  messagingSenderId: "109823471092",
  appId: "1:109823471092:web:98f7e2a41d082b6c9342ef"
};

class FirebaseAuthService {
  constructor() {
    this.config = this.loadConfig();
    this.currentUser = null;
    this.currentRole = localStorage.getItem('insightliker_auth_role') || 'buyer'; // 'buyer' | 'seller'
    this.listeners = [];
    this.isFirebaseInitialized = false;
    this.authInstance = null;
    this.isLiveFirebase = false;

    this.init();
  }

  loadConfig() {
    try {
      const stored = localStorage.getItem('insightliker_firebase_config');
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.warn('Error reading saved Firebase config', e);
    }
    return DEFAULT_FIREBASE_CONFIG;
  }

  saveConfig(newConfig) {
    try {
      this.config = { ...this.config, ...newConfig };
      localStorage.setItem('insightliker_firebase_config', JSON.stringify(this.config));
      // Re-initialize with new credentials
      this.initFirebase();
      return true;
    } catch (e) {
      console.error('Error saving Firebase config', e);
      return false;
    }
  }

  async init() {
    // Check if there is an active session in local storage first
    this.loadPersistedSession();
    await this.initFirebase();
  }

  async initFirebase() {
    try {
      // Dynamically import Firebase Modular SDK from Google CDN
      const { initializeApp } = await import('https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js');
      const { 
        getAuth, 
        onAuthStateChanged, 
        signInWithPopup, 
        GoogleAuthProvider, 
        signInWithEmailAndPassword, 
        createUserWithEmailAndPassword, 
        updateProfile, 
        signOut 
      } = await import('https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js');

      // Check if config has real live keys (not placeholder demo keys)
      const hasLiveKeys = this.config.apiKey && 
                          !this.config.apiKey.includes('DEMO-KEY') && 
                          this.config.projectId && 
                          !this.config.projectId.includes('DEMO');

      if (hasLiveKeys) {
        this.firebaseApp = initializeApp(this.config);
        this.authInstance = getAuth(this.firebaseApp);
        this.googleProvider = new GoogleAuthProvider();

        // Initialize Cloud Firestore modular instance
        try {
          const { getFirestore } = await import('https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js');
          this.firestoreInstance = getFirestore(this.firebaseApp);
          console.log('⚡ Cloud Firestore: Connected to Live Database for Project:', this.config.projectId);
        } catch (dbErr) {
          console.warn('Firestore initialization notice:', dbErr.message);
        }

        this.isLiveFirebase = true;

        // Listen for live Firebase auth state changes
        onAuthStateChanged(this.authInstance, (user) => {
          if (user) {
            this.handleFirebaseUser(user);
          } else {
            this.handleSignOutClean();
          }
        });
        console.log('⚡ Firebase Auth: Connected to Live Firebase Project:', this.config.projectId);
      } else {
        console.log('ℹ️ Firebase Auth: Running in Demo / Sandbox mode with full local persistence. Add live Firebase keys in settings anytime.');
        this.isLiveFirebase = false;
      }
      this.isFirebaseInitialized = true;
    } catch (err) {
      console.warn('Firebase CDN initialization notice (operating in reliable local auth mode):', err.message);
      this.isLiveFirebase = false;
      this.isFirebaseInitialized = true;
    }
  }

  loadPersistedSession() {
    try {
      const storedUser = localStorage.getItem('insightliker_current_user');
      if (storedUser) {
        this.currentUser = JSON.parse(storedUser);
        this.currentRole = this.currentUser.role || this.currentRole || 'buyer';
        this.notifyListeners();
      }
    } catch (e) {
      console.warn('Error reading persisted auth session', e);
    }
  }

  persistSession(userData) {
    this.currentUser = userData;
    this.currentRole = userData.role || this.currentRole;
    localStorage.setItem('insightliker_current_user', JSON.stringify(userData));
    localStorage.setItem('insightliker_auth_role', this.currentRole);
    this.notifyListeners();
  }

  handleFirebaseUser(fbUser) {
    const userRole = localStorage.getItem('insightliker_auth_role') || 'buyer';
    const userData = {
      uid: fbUser.uid,
      displayName: fbUser.displayName || fbUser.email.split('@')[0],
      email: fbUser.email,
      photoURL: fbUser.photoURL || null,
      role: userRole,
      isVerified: fbUser.emailVerified || true,
      provider: fbUser.providerData?.[0]?.providerId || 'password',
      createdAt: fbUser.metadata?.creationTime || new Date().toISOString()
    };
    this.persistSession(userData);
  }

  handleSignOutClean() {
    this.currentUser = null;
    localStorage.removeItem('insightliker_current_user');
    this.notifyListeners();
  }

  onAuthStateChanged(callback) {
    this.listeners.push(callback);
    // Immediately notify with current state
    callback(this.currentUser);
    return () => {
      this.listeners = this.listeners.filter(cb => cb !== callback);
    };
  }

  notifyListeners() {
    this.listeners.forEach(cb => {
      try {
        cb(this.currentUser);
      } catch (e) {
        console.error('Error in auth listener callback', e);
      }
    });
  }

  // --- Auth Actions ---

  async signInWithGoogle() {
    if (this.isLiveFirebase && this.authInstance) {
      try {
        const { signInWithPopup, GoogleAuthProvider } = await import('https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js');
        const provider = new GoogleAuthProvider();
        provider.setCustomParameters({ prompt: 'select_account' });
        const result = await signInWithPopup(this.authInstance, provider);
        this.handleFirebaseUser(result.user);
        return { success: true, user: this.currentUser };
      } catch (err) {
        console.warn('Live Google Sign-In popup notice:', err.code, err.message);
        if (err.code === 'auth/unauthorized-domain') {
          throw new Error('Authorized Domain Required: Please add this domain or localhost in Firebase Console > Authentication > Settings > Authorized Domains.');
        }
        throw err;
      }
    } else {
      // Demo / Offline Simulation mode (Immediate interactive login without blocking)
      await new Promise(resolve => setTimeout(resolve, 400));
      const demoUser = {
        uid: `google-user-${Date.now()}`,
        displayName: "Sri K. Ramakrishna (Google Verified)",
        email: "ramakrishna.rao@example.com",
        photoURL: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
        role: this.currentRole || 'seller',
        isVerified: true,
        provider: 'google.com',
        createdAt: new Date().toISOString()
      };
      this.persistSession(demoUser);
      return { success: true, user: demoUser, isDemo: true };
    }
  }

  async signInWithEmail(email, password) {
    if (!email || !password) {
      throw new Error("Please enter both email and password.");
    }

    if (this.isLiveFirebase && this.authInstance) {
      try {
        const { signInWithEmailAndPassword } = await import('https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js');
        const credential = await signInWithEmailAndPassword(this.authInstance, email, password);
        this.handleFirebaseUser(credential.user);
        return { success: true, user: this.currentUser };
      } catch (err) {
        console.error('Firebase Email Sign-In Error:', err.code, err.message);
        if (err.code === 'auth/invalid-credential' || err.code === 'auth/user-not-found' || err.code === 'auth/wrong-password') {
          throw new Error("Invalid email or password. Please verify your credentials or register.");
        }
        throw err;
      }
    } else {
      // Local verification from stored users
      await new Promise(resolve => setTimeout(resolve, 350));
      const registeredUsers = JSON.parse(localStorage.getItem('insightliker_registered_users') || '[]');
      const found = registeredUsers.find(u => u.email.toLowerCase() === email.toLowerCase());

      if (found && found.password === password) {
        const userData = { ...found };
        delete userData.password;
        this.persistSession(userData);
        return { success: true, user: userData };
      } else if (!found) {
        // First-time demo sign in fallback: automatically create session
        const namePart = email.split('@')[0];
        const formattedName = namePart.charAt(0).toUpperCase() + namePart.slice(1);
        const userData = {
          uid: `user-${Date.now()}`,
          displayName: formattedName,
          email: email,
          photoURL: null,
          role: this.currentRole || 'buyer',
          isVerified: true,
          provider: 'password',
          createdAt: new Date().toISOString()
        };
        this.persistSession(userData);
        return { success: true, user: userData, note: "Demo account initialized" };
      } else {
        throw new Error("Incorrect password for this registered email.");
      }
    }
  }

  async signUpWithEmail(name, email, password, role = 'buyer', phone = '') {
    if (!email || !password || !name) {
      throw new Error("Please complete all required fields: Name, Email and Password.");
    }
    if (password.length < 6) {
      throw new Error("Password must be at least 6 characters.");
    }

    // Save chosen role
    this.currentRole = role;
    localStorage.setItem('insightliker_auth_role', role);

    if (this.isLiveFirebase && this.authInstance) {
      try {
        const { createUserWithEmailAndPassword, updateProfile } = await import('https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js');
        const cred = await createUserWithEmailAndPassword(this.authInstance, email, password);
        await updateProfile(cred.user, { displayName: name });
        this.handleFirebaseUser(cred.user);
        return { success: true, user: this.currentUser };
      } catch (err) {
        console.error('Firebase Email Sign-Up Error:', err.code, err.message);
        if (err.code === 'auth/email-already-in-use') {
          throw new Error("An account with this email already exists. Please sign in instead.");
        }
        throw err;
      }
    } else {
      // Store in local simulated registry
      await new Promise(resolve => setTimeout(resolve, 400));
      const registeredUsers = JSON.parse(localStorage.getItem('insightliker_registered_users') || '[]');
      
      const existing = registeredUsers.find(u => u.email.toLowerCase() === email.toLowerCase());
      if (existing) {
        throw new Error("An account with this email already exists. Please sign in instead.");
      }

      const newUser = {
        uid: `user-${Date.now()}`,
        displayName: name,
        email: email,
        phone: phone,
        role: role,
        photoURL: null,
        isVerified: true,
        provider: 'password',
        password: password, // For demo sign in matching
        createdAt: new Date().toISOString()
      };

      registeredUsers.push(newUser);
      localStorage.setItem('insightliker_registered_users', JSON.stringify(registeredUsers));

      const sessionUser = { ...newUser };
      delete sessionUser.password;
      this.persistSession(sessionUser);
      return { success: true, user: sessionUser };
    }
  }

  // Phone OTP Authentication Flow
  async sendPhoneOtp(phoneNumber, recaptchaVerifier = null) {
    if (!phoneNumber || phoneNumber.length < 10) {
      throw new Error("Please enter a valid 10-digit mobile number with country code (+91).");
    }

    if (this.isLiveFirebase && this.authInstance) {
      try {
        const { signInWithPhoneNumber, RecaptchaVerifier } = await import('https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js');
        const verifier = recaptchaVerifier || new RecaptchaVerifier(this.authInstance, 'recaptchaContainer', { size: 'invisible' });
        const confirmationResult = await signInWithPhoneNumber(this.authInstance, phoneNumber, verifier);
        return { success: true, confirmationResult, isLive: true };
      } catch (err) {
        console.error('Firebase Phone Auth Error:', err);
        throw new Error(err.message || "Failed to send SMS OTP.");
      }
    } else {
      // Demo / Sandbox Simulation mode (immediate reliable testing)
      await new Promise(resolve => setTimeout(resolve, 350));
      return {
        success: true,
        isDemo: true,
        phoneNumber: phoneNumber,
        confirm: async (otp) => {
          if (otp === '123456' || (otp && otp.length === 6)) {
            const demoUser = {
              uid: `phone-${phoneNumber.replace(/[^0-9]/g, '')}`,
              displayName: `Landowner (+91 ${phoneNumber.slice(-4)})`,
              phone: phoneNumber,
              email: `${phoneNumber.replace(/[^0-9]/g, '')}@phone.insightliker.com`,
              role: this.currentRole || 'seller',
              isVerified: true,
              provider: 'phone',
              createdAt: new Date().toISOString()
            };
            this.persistSession(demoUser);
            return { user: demoUser };
          } else {
            throw new Error("Invalid OTP code. In demo mode, please enter 123456.");
          }
        }
      };
    }
  }

  // --- Cloud Firestore Integration Helpers ---
  async syncPropertyToCloud(property) {
    if (this.isLiveFirebase && this.firestoreInstance) {
      try {
        const { doc, setDoc } = await import('https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js');
        await setDoc(doc(this.firestoreInstance, 'properties', property.id), property, { merge: true });
        console.log('☁️ Property synced to Cloud Firestore:', property.id);
      } catch (err) {
        console.warn('Firestore write notice:', err.message);
      }
    }
  }

  async syncVisitToCloud(visit) {
    if (this.isLiveFirebase && this.firestoreInstance) {
      try {
        const { doc, setDoc } = await import('https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js');
        await setDoc(doc(this.firestoreInstance, 'site_visits', visit.id), visit, { merge: true });
        console.log('☁️ Field visit synced to Cloud Firestore:', visit.id);
      } catch (err) {
        console.warn('Firestore visit notice:', err.message);
      }
    }
  }

  async deletePropertyFromCloud(propertyId) {
    if (this.isLiveFirebase && this.firestoreInstance) {
      try {
        const { doc, deleteDoc } = await import('https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js');
        await deleteDoc(doc(this.firestoreInstance, 'properties', propertyId));
        console.log('☁️ Property removed from Cloud Firestore:', propertyId);
      } catch (err) {
        console.warn('Firestore delete notice:', err.message);
      }
    }
  }

  async signOut() {
    if (this.isLiveFirebase && this.authInstance) {
      try {
        const { signOut } = await import('https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js');
        await signOut(this.authInstance);
      } catch (err) {
        console.warn('Error signing out of live Firebase', err);
      }
    }
    this.handleSignOutClean();
    return { success: true };
  }

  switchRole(newRole) {
    if (newRole !== 'buyer' && newRole !== 'seller') return;
    this.currentRole = newRole;
    localStorage.setItem('insightliker_auth_role', newRole);
    if (this.currentUser) {
      this.currentUser.role = newRole;
      localStorage.setItem('insightliker_current_user', JSON.stringify(this.currentUser));
      this.notifyListeners();
    }
  }
}

// Global Single Instance
window.firebaseAuth = new FirebaseAuthService();

