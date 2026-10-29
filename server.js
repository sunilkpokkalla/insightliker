/**
 * InSightLiker Real Land — production API
 * Accounts, listings, and site visits live in data/*.json.
 * Buyers browse and book visits. Landowners list and manage their own parcels.
 */

const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');
const crypto = require('crypto');

const PORT = process.env.PORT || 3000;
const ROOT = path.resolve(__dirname);
const DATA_DIR = path.join(ROOT, 'data');
const PROPERTIES_FILE = path.join(DATA_DIR, 'properties.json');
const VISITS_FILE = path.join(DATA_DIR, 'site_visits.json');
const REPORTS_FILE = path.join(DATA_DIR, 'broker_reports.json');
const USERS_FILE = path.join(DATA_DIR, 'users.json');
const SESSIONS_FILE = path.join(DATA_DIR, 'sessions.json');
const SESSION_DAYS = 14;

const BLOCKED_PREFIXES = ['data', 'node_modules', '.git'];
const BLOCKED_FILES = new Set(['server.js', 'package.json', 'package-lock.json', '.gitignore', '.assetsignore']);

if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

function readJsonFile(filePath, defaultValue = []) {
  try {
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, 'utf8');
      return JSON.parse(content);
    }
  } catch (err) {
    console.error(`Error reading ${filePath}:`, err.message);
  }
  return defaultValue;
}

function writeJsonFile(filePath, data) {
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    return true;
  } catch (err) {
    console.error(`Error writing ${filePath}:`, err.message);
    return false;
  }
}

for (const file of [PROPERTIES_FILE, VISITS_FILE, REPORTS_FILE, USERS_FILE, SESSIONS_FILE]) {
  if (!fs.existsSync(file)) writeJsonFile(file, []);
}

function hashPassword(password, salt) {
  return crypto.scryptSync(password, salt, 64).toString('hex');
}

function publicUser(user) {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    phone: user.phone || '',
    role: user.role,
    createdAt: user.createdAt
  };
}

function seedDemoAccounts() {
  const users = readJsonFile(USERS_FILE, []);
  if (users.length > 0) return;
  const samples = [
    { id: 'user-buyer', name: 'Anitha Reddy', email: 'buyer@insightliker.com', password: 'Buyer@123', role: 'buyer', phone: '+91 90000 11111' },
    { id: 'user-seller', name: 'K. Ramakrishna Rao', email: 'seller@insightliker.com', password: 'Seller@123', role: 'seller', phone: '+91 98480 12345' }
  ];
  const seeded = samples.map((sample) => {
    const salt = crypto.randomBytes(16).toString('hex');
    return {
      id: sample.id,
      name: sample.name,
      email: sample.email,
      phone: sample.phone,
      role: sample.role,
      salt,
      passwordHash: hashPassword(sample.password, salt),
      createdAt: new Date().toISOString()
    };
  });
  writeJsonFile(USERS_FILE, seeded);
  console.log('[Auth] Demo accounts ready: buyer@insightliker.com / Buyer@123 and seller@insightliker.com / Seller@123');
}

seedDemoAccounts();

function createSession(userId) {
  const token = crypto.randomBytes(32).toString('hex');
  const expiresAt = new Date(Date.now() + SESSION_DAYS * 24 * 60 * 60 * 1000).toISOString();
  const sessions = readJsonFile(SESSIONS_FILE, []).filter((session) => new Date(session.expiresAt) > new Date());
  sessions.push({ token, userId, expiresAt });
  writeJsonFile(SESSIONS_FILE, sessions);
  return { token, expiresAt };
}

function getAuthUser(req) {
  const header = req.headers.authorization || '';
  const token = header.startsWith('Bearer ') ? header.slice(7).trim() : '';
  if (!token) return null;
  const sessions = readJsonFile(SESSIONS_FILE, []);
  const session = sessions.find((item) => item.token === token && new Date(item.expiresAt) > new Date());
  if (!session) return null;
  const users = readJsonFile(USERS_FILE, []);
  return users.find((user) => user.id === session.userId) || null;
}

function destroySession(req) {
  const header = req.headers.authorization || '';
  const token = header.startsWith('Bearer ') ? header.slice(7).trim() : '';
  if (!token) return;
  const sessions = readJsonFile(SESSIONS_FILE, []).filter((session) => session.token !== token);
  writeJsonFile(SESSIONS_FILE, sessions);
}

function maskPhone(phone) {
  const digits = String(phone || '').replace(/\D/g, '');
  if (digits.length < 6) return 'Sign in to view';
  return `+${digits.slice(0, 2)} ${digits.slice(2, 7)} •••••`;
}

function presentProperty(property, viewer, revealContact) {
  const clone = JSON.parse(JSON.stringify(property));
  const isOwner = Boolean(viewer && clone.ownerUid && viewer.id === clone.ownerUid);
  const canSeeContact = isOwner || (revealContact && Boolean(viewer));
  if (!canSeeContact && clone.owner) {
    const display = clone.owner.phoneDisplay || maskPhone(clone.owner.phone);
    clone.owner = {
      ...clone.owner,
      phone: display,
      phoneDisplay: display,
      whatsapp: ''
    };
    clone.contactLocked = true;
  } else {
    clone.contactLocked = false;
  }
  return clone;
}

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp'
};

function sendJson(res, statusCode, data) {
  res.writeHead(statusCode, {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization'
  });
  res.end(JSON.stringify(data));
}

function parseBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk.toString();
      if (body.length > 8 * 1024 * 1024) {
        req.destroy();
        reject(new Error('Payload too large'));
      }
    });
    req.on('end', () => {
      if (!body) return resolve({});
      try {
        resolve(JSON.parse(body));
      } catch (err) {
        reject(new Error('Invalid JSON format'));
      }
    });
    req.on('error', reject);
  });
}

function requireUser(res, user) {
  if (user) return true;
  sendJson(res, 401, { success: false, error: 'Sign in required.' });
  return false;
}

function visitsForUser(authUser) {
  const visits = readJsonFile(VISITS_FILE, []);
  const listings = readJsonFile(PROPERTIES_FILE, []);
  if (authUser.role === 'buyer') {
    return visits.filter((visit) => visit.buyerId === authUser.id);
  }
  const ownedIds = new Set(listings.filter((property) => property.ownerUid === authUser.id).map((property) => property.id));
  const knownIds = new Set(listings.map((property) => property.id));
  return visits.filter((visit) => {
    if (ownedIds.has(visit.propertyId)) return true;
    return authUser.id === 'user-seller' && !knownIds.has(visit.propertyId);
  });
}

const server = http.createServer(async (req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;
  const method = req.method;
  const authUser = getAuthUser(req);

  if (method === 'OPTIONS') {
    res.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization'
    });
    return res.end();
  }

  if (pathname === '/api/auth/register' && method === 'POST') {
    try {
      const payload = await parseBody(req);
      const name = String(payload.name || '').trim();
      const email = String(payload.email || '').trim().toLowerCase();
      const password = String(payload.password || '');
      const role = payload.role === 'seller' ? 'seller' : payload.role === 'buyer' ? 'buyer' : '';
      const phone = String(payload.phone || '').trim();

      if (!name || !email || !password || !role) {
        return sendJson(res, 400, { success: false, error: 'Name, email, password, and role are required.' });
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return sendJson(res, 400, { success: false, error: 'Enter a valid email address.' });
      }
      if (password.length < 6) {
        return sendJson(res, 400, { success: false, error: 'Password must be at least 6 characters.' });
      }

      const users = readJsonFile(USERS_FILE, []);
      if (users.some((user) => user.email === email)) {
        return sendJson(res, 409, { success: false, error: 'An account with this email already exists. Sign in instead.' });
      }

      const salt = crypto.randomBytes(16).toString('hex');
      const user = {
        id: `user-${Date.now()}`,
        name,
        email,
        phone,
        role,
        salt,
        passwordHash: hashPassword(password, salt),
        createdAt: new Date().toISOString()
      };
      users.push(user);
      writeJsonFile(USERS_FILE, users);
      const session = createSession(user.id);
      console.log(`[Auth] Registered ${role}: ${email}`);
      return sendJson(res, 201, { success: true, token: session.token, user: publicUser(user) });
    } catch (err) {
      return sendJson(res, 400, { success: false, error: err.message });
    }
  }

  if (pathname === '/api/auth/login' && method === 'POST') {
    try {
      const payload = await parseBody(req);
      const email = String(payload.email || '').trim().toLowerCase();
      const password = String(payload.password || '');
      const users = readJsonFile(USERS_FILE, []);
      const user = users.find((item) => item.email === email);
      if (!user || hashPassword(password, user.salt) !== user.passwordHash) {
        return sendJson(res, 401, { success: false, error: 'Invalid email or password.' });
      }
      const session = createSession(user.id);
      console.log(`[Auth] Signed in: ${email} (${user.role})`);
      return sendJson(res, 200, { success: true, token: session.token, user: publicUser(user) });
    } catch (err) {
      return sendJson(res, 400, { success: false, error: err.message });
    }
  }

  if (pathname === '/api/auth/logout' && method === 'POST') {
    destroySession(req);
    return sendJson(res, 200, { success: true });
  }

  if (pathname === '/api/auth/me' && method === 'GET') {
    if (!requireUser(res, authUser)) return;
    return sendJson(res, 200, { success: true, user: publicUser(authUser) });
  }

  if (pathname === '/api/properties' && method === 'GET') {
    const listings = readJsonFile(PROPERTIES_FILE, [])
      .filter((property) => property.listingStatus !== 'Sold')
      .map((property) => presentProperty(property, authUser, false));
    return sendJson(res, 200, { success: true, count: listings.length, data: listings });
  }

  if (pathname === '/api/me/listings' && method === 'GET') {
    if (!requireUser(res, authUser)) return;
    const listings = readJsonFile(PROPERTIES_FILE, [])
      .filter((property) => property.ownerUid === authUser.id)
      .map((property) => presentProperty(property, authUser, true));
    return sendJson(res, 200, { success: true, count: listings.length, data: listings });
  }

  if (pathname === '/api/properties' && method === 'POST') {
    try {
      if (!requireUser(res, authUser)) return;
      if (authUser.role !== 'seller') {
        return sendJson(res, 403, { success: false, error: 'Only landowner accounts can publish a listing.' });
      }
      const payload = await parseBody(req);
      if (!payload.title || !payload.state || !payload.owner || !payload.owner.name) {
        return sendJson(res, 400, { success: false, error: 'Title, state, and owner name are required.' });
      }
      if (!Number.isFinite(Number(payload.priceTotalNum)) || Number(payload.priceTotalNum) <= 0) {
        return sendJson(res, 400, { success: false, error: 'Enter a valid price per unit so the total can be calculated.' });
      }

      const listings = readJsonFile(PROPERTIES_FILE, []);
      const newProperty = {
        ...payload,
        id: `prop-${authUser.id}-${Date.now()}`,
        ownerUid: authUser.id,
        createdAt: new Date().toISOString(),
        listingStatus: 'Available',
        featured: true,
        catalog: false,
        priceTotalNum: Number(payload.priceTotalNum)
      };
      listings.unshift(newProperty);
      writeJsonFile(PROPERTIES_FILE, listings);
      console.log(`[API] Listed "${newProperty.title}" by ${authUser.email}`);
      return sendJson(res, 201, {
        success: true,
        message: 'Property published. Buyers can view it now.',
        property: presentProperty(newProperty, authUser, true)
      });
    } catch (err) {
      return sendJson(res, 400, { success: false, error: err.message });
    }
  }

  if (pathname.startsWith('/api/properties/') && method === 'GET') {
    const propId = decodeURIComponent(pathname.slice('/api/properties/'.length));
    const listings = readJsonFile(PROPERTIES_FILE, []);
    const found = listings.find((property) => property.id === propId);
    if (!found) return sendJson(res, 404, { success: false, error: 'Property not found' });
    return sendJson(res, 200, { success: true, property: presentProperty(found, authUser, true) });
  }

  if (pathname.startsWith('/api/properties/') && method === 'PUT') {
    try {
      if (!requireUser(res, authUser)) return;
      const propId = decodeURIComponent(pathname.slice('/api/properties/'.length));
      const updates = await parseBody(req);
      const listings = readJsonFile(PROPERTIES_FILE, []);
      const idx = listings.findIndex((property) => property.id === propId);
      if (idx === -1) return sendJson(res, 404, { success: false, error: 'Property not found' });
      if (listings[idx].ownerUid !== authUser.id) {
        return sendJson(res, 403, { success: false, error: 'You can update only your own listings.' });
      }
      const allowed = {};
      if (updates.listingStatus) allowed.listingStatus = updates.listingStatus;
      if (updates.title) allowed.title = updates.title;
      if (updates.description) allowed.description = updates.description;
      listings[idx] = { ...listings[idx], ...allowed, updatedAt: new Date().toISOString(), ownerUid: authUser.id };
      writeJsonFile(PROPERTIES_FILE, listings);
      return sendJson(res, 200, { success: true, property: presentProperty(listings[idx], authUser, true) });
    } catch (err) {
      return sendJson(res, 400, { success: false, error: err.message });
    }
  }

  if (pathname.startsWith('/api/properties/') && method === 'DELETE') {
    if (!requireUser(res, authUser)) return;
    const propId = decodeURIComponent(pathname.slice('/api/properties/'.length));
    const listings = readJsonFile(PROPERTIES_FILE, []);
    const found = listings.find((property) => property.id === propId);
    if (!found) return sendJson(res, 404, { success: false, error: 'Property not found' });
    if (found.ownerUid !== authUser.id) {
      return sendJson(res, 403, { success: false, error: 'You can delete only your own listings.' });
    }
    writeJsonFile(PROPERTIES_FILE, listings.filter((property) => property.id !== propId));
    return sendJson(res, 200, { success: true, message: 'Property listing removed' });
  }

  if (pathname === '/api/site-visits' && method === 'POST') {
    try {
      if (!requireUser(res, authUser)) return;
      if (authUser.role !== 'buyer') {
        return sendJson(res, 403, { success: false, error: 'Sign in with a buyer account to request a field visit.' });
      }
      const payload = await parseBody(req);
      if (!payload.propertyId || !payload.buyerName || !payload.phone) {
        return sendJson(res, 400, { success: false, error: 'Property, name, and phone are required.' });
      }
      const listings = readJsonFile(PROPERTIES_FILE, []);
      const property = listings.find((item) => item.id === payload.propertyId);
      const visits = readJsonFile(VISITS_FILE, []);
      const newVisit = {
        id: `visit-${Date.now()}`,
        timestamp: new Date().toISOString(),
        status: 'Scheduled',
        propertyId: payload.propertyId,
        propertyTitle: property ? property.title : payload.propertyTitle || 'Land parcel',
        buyerId: authUser.id,
        buyerName: String(payload.buyerName).trim(),
        buyerEmail: authUser.email,
        phone: String(payload.phone).trim(),
        preferredDate: payload.preferredDate || '',
        notes: payload.notes || ''
      };
      visits.unshift(newVisit);
      writeJsonFile(VISITS_FILE, visits);
      console.log(`[API] Visit requested by ${authUser.email} for ${newVisit.propertyId}`);
      return sendJson(res, 201, { success: true, message: 'Field visit request sent to the landowner.', visit: newVisit });
    } catch (err) {
      return sendJson(res, 400, { success: false, error: err.message });
    }
  }

  if ((pathname === '/api/me/visits' || pathname === '/api/site-visits') && method === 'GET') {
    if (!requireUser(res, authUser)) return;
    const mine = visitsForUser(authUser);
    return sendJson(res, 200, { success: true, count: mine.length, data: mine });
  }

  if (pathname.startsWith('/api/site-visits/') && method === 'PUT') {
    try {
      if (!requireUser(res, authUser)) return;
      if (authUser.role !== 'seller') {
        return sendJson(res, 403, { success: false, error: 'Only the landowner can update a visit.' });
      }
      const visitId = decodeURIComponent(pathname.slice('/api/site-visits/'.length));
      const updates = await parseBody(req);
      const visits = readJsonFile(VISITS_FILE, []);
      const idx = visits.findIndex((visit) => visit.id === visitId);
      if (idx === -1) return sendJson(res, 404, { success: false, error: 'Visit record not found' });
      const allowed = new Set(visitsForUser(authUser).map((visit) => visit.id));
      if (!allowed.has(visits[idx].id)) {
        return sendJson(res, 403, { success: false, error: 'This visit is for another landowner.' });
      }
      const status = ['Scheduled', 'Confirmed', 'Completed', 'Cancelled'].includes(updates.status)
        ? updates.status
        : visits[idx].status;
      visits[idx] = { ...visits[idx], status, updatedAt: new Date().toISOString() };
      writeJsonFile(VISITS_FILE, visits);
      return sendJson(res, 200, { success: true, visit: visits[idx] });
    } catch (err) {
      return sendJson(res, 400, { success: false, error: err.message });
    }
  }

  if (pathname === '/api/report-broker' && method === 'POST') {
    try {
      const payload = await parseBody(req);
      const reports = readJsonFile(REPORTS_FILE, []);
      const newReport = {
        id: `report-${Date.now()}`,
        timestamp: new Date().toISOString(),
        status: 'Under Investigation',
        reporterId: authUser ? authUser.id : null,
        brokerPhone: payload.brokerPhone || '',
        demandDetails: payload.demandDetails || '',
        reporterContact: payload.reporterContact || ''
      };
      reports.unshift(newReport);
      writeJsonFile(REPORTS_FILE, reports);
      return sendJson(res, 201, { success: true, message: 'Report logged.', report: { id: newReport.id, status: newReport.status } });
    } catch (err) {
      return sendJson(res, 400, { success: false, error: err.message });
    }
  }

  if (pathname === '/api/stats' && method === 'GET') {
    const properties = readJsonFile(PROPERTIES_FILE, []);
    const visits = readJsonFile(VISITS_FILE, []);
    const users = readJsonFile(USERS_FILE, []);
    return sendJson(res, 200, {
      success: true,
      stats: {
        serverTime: new Date().toISOString(),
        publishedPropertiesCount: properties.filter((property) => property.listingStatus !== 'Sold').length,
        buyerCount: users.filter((user) => user.role === 'buyer').length,
        sellerCount: users.filter((user) => user.role === 'seller').length,
        scheduledVisitsCount: visits.length,
        statesSupported: ['Telangana', 'Karnataka', 'Andhra Pradesh', 'Tamil Nadu', 'Kerala'],
        brokerageCommissionRate: '0%'
      }
    });
  }

  if (pathname.startsWith('/api/')) {
    return sendJson(res, 404, { success: false, error: 'Not found' });
  }

  let rel = pathname === '/' || pathname === '' ? 'index.html' : decodeURIComponent(pathname);
  rel = path.normalize(rel).replace(/^(\.\.[/\\])+/, '').replace(/^[/\\]+/, '');
  const top = rel.split(/[/\\]/)[0];
  if (BLOCKED_PREFIXES.includes(top) || BLOCKED_FILES.has(rel)) {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    return res.end('404 Not Found');
  }

  const filePath = path.resolve(ROOT, rel);
  if (filePath !== ROOT && !filePath.startsWith(ROOT + path.sep)) {
    res.writeHead(403, { 'Content-Type': 'text/plain' });
    return res.end('Forbidden');
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      const indexPath = path.join(ROOT, 'index.html');
      fs.readFile(indexPath, (indexErr, indexData) => {
        if (indexErr) {
          res.writeHead(404, { 'Content-Type': 'text/plain' });
          return res.end('404 Not Found');
        }
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(indexData);
      });
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';
    res.writeHead(200, {
      'Content-Type': contentType,
      'Cache-Control': ext === '.html' ? 'no-cache' : 'public, max-age=3600'
    });
    fs.createReadStream(filePath).pipe(res);
  });
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    const nextPort = Number(PORT) + 1;
    console.warn(`Port ${PORT} is in use. Trying port ${nextPort}...`);
    server.listen(nextPort, () => {
      console.log(`InSightLiker Real Land listening on http://localhost:${nextPort}`);
    });
  } else {
    console.error('Server error:', err);
  }
});

server.listen(PORT, () => {
  console.log(`InSightLiker Real Land listening on http://localhost:${PORT}`);
});
