/**
 * InSightLiker – Real Land
 * South India's Direct Land Marketplace (Telangana, AP, Karnataka, Tamil Nadu, Kerala)
 * 100% Direct Owners | Zero Brokerage | No Middle Man
 */

// Initial Seed Database
const INITIAL_PROPERTIES = [
  {
    id: "prop-1",
    title: "4.5 Acres Fertile Agricultural Land",
    category: "Agricultural",
    tagline: "High-yield red loam soil with 2 dedicated borewells & 30ft road",
    state: "Telangana",
    corridor: "Outer Hyderabad (Chevella / Vikarabad)",
    district: "Vikarabad / Rangareddy Border",
    village: "Malkapur Village, Chevella Mandal",
    pricePerUnit: "₹48 Lakhs / Acre",
    priceTotalNum: 21600000,
    priceDisplay: "₹2.16 Crores",
    unitType: "Acre",
    extent: "4.5 Acres (180 Guntas)",
    extentNum: 4.5,
    roadAccess: "30ft Panchayat Tar Road",
    roadWidth: 30,
    waterSource: "2 Deep Borewells (Yield 3.5 inches continuous)",
    soilType: "Rich Red Loam (Erra Nela) - High Organic Carbon",
    electricity: "3-Phase Dedicated Transformer (24x7 Agro Free Power)",
    fencing: "Stone Boundary Pillars with Barbed Wire",
    titleStatus: "Single Owner Patta (Dharani Passbook Cleared)",
    surveyNo: "Survey No. 142/A & 142/AA",
    govtPortal: "Telangana Dharani Portal Verified",
    govtPortalUrl: "https://dharani.telangana.gov.in",
    conversionStatus: "Agricultural (Patta Land)",
    suitableFor: "Paddy, Red Gram, Mango / Guava Orchard, Farmhouse, Organic Farming",
    featured: true,
    owner: {
      name: "K. Ramakrishna Rao",
      phone: "+91 98480 12345",
      phoneDisplay: "+91 98480 •••••",
      whatsapp: "919848012345",
      type: "Direct Landowner & Farmer",
      residence: "Chevella Mandal, Telangana",
      ownershipYears: "Family Ancestral Land (32+ Years)",
      verificationDate: "Verified Oct 2026",
      avatarInitials: "KR"
    },
    images: [
      "assets/images/hero_land.jpg",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAGuDMKM6I2s4kNvFZFaiUhpre4knjqstrlT1Xroxx7d0Q3Ek7WAqT9ZsOa1c5qKoow9qAp-tHfked-xdr0Xk1aZOGF7Dl2UqJyf18ygP6R7bSHau-VIa2O5IlTHXVVjcaK9pXP-0mjyAKDLtGB21pWkrhaoZA0bea34PU6nGv9ic_pWa8j9f_uJwE4F4TIsu-AW9e77tXmIC1g1XqGjY389-wyk76Ks25VEEpAbpM"
    ],
    coordinates: [17.3086, 78.1368],
    description: "Authentic ancestral agricultural land directly offered by owner Sri Ramakrishna Rao. Zero legal disputes. Dharani digital passbook is 100% clean with single name. Red soil is ideal for horticulture or commercial crop cultivation. 30ft wide all-weather approach road connects directly to Hyderabad-Bijapur Highway (NH-163) in 7 minutes.",
    documents: [
      { name: "Dharani e-Pattadar Passbook", status: "Verified & Downloaded", id: "TS-DH-849201" },
      { name: "30-Year Encumbrance Certificate (EC)", status: "Nil Encumbrance / Clean", id: "EC-2026-CHEV-491" },
      { name: "FMB / Tippon Field Survey Sketch", status: "Digitally Tagged with GPS Boundary", id: "FMB-142A" },
      { name: "1B Record of Rights", status: "Single Owner Verified", id: "ROR-1B-44" }
    ]
  },
  {
    id: "prop-2",
    title: "2,400 Sq.Ft Gated Residential Villa Plot",
    category: "Residential Plots",
    tagline: "East-facing luxury villa plot with BMRDA approval & Kaveri water line",
    state: "Karnataka",
    corridor: "Bengaluru Peripheral (Sarjapur / Attibele)",
    district: "Bengaluru Urban",
    village: "Somapura Village, Sarjapur Hobli",
    pricePerUnit: "₹3,400 / Sq.Ft",
    priceTotalNum: 8160000,
    priceDisplay: "₹81.6 Lakhs",
    unitType: "Sq.Ft",
    extent: "2,400 Sq.Ft (60 x 40 Ft)",
    extentNum: 0.055,
    roadAccess: "40ft Asphalt Blacktop Road",
    roadWidth: 40,
    waterSource: "Kaveri 2.0 Pipe Connection & Overhead Borewell",
    soilType: "Firm Foundation Red Soil",
    electricity: "Underground BESCOM Cabling with Streetlights",
    fencing: "Compound Wall Layout with Grand Arch Security",
    titleStatus: "BMRDA & RERA Approved Layout (E-Khata Clear)",
    surveyNo: "Survey No. 88/2, Plot #42",
    govtPortal: "Karnataka Bhoomi & Kaveri 2.0 Verified",
    govtPortalUrl: "https://kaveri.karnataka.gov.in",
    conversionStatus: "Residential Converted (A-Khata)",
    suitableFor: "Immediate Villa Construction, Long-Term Capital Appreciation",
    featured: true,
    owner: {
      name: "S. Venkatesh Murthy",
      phone: "+91 94480 23456",
      phoneDisplay: "+91 94480 •••••",
      whatsapp: "919448023456",
      type: "Direct Property Owner",
      residence: "HSR Layout, Bengaluru",
      ownershipYears: "Direct Allottee (7 Years)",
      verificationDate: "Verified Oct 2026",
      avatarInitials: "SV"
    },
    images: [
      "assets/images/residential_plots.jpg",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCD-1fc0fGILGNsYXQy_Y1ZqXIzPWSQ94bM0W0ilMamf702WM_pJK4Wt7YEDXUGCaPzxCnFkfca5uW1ldg5gSg2jSNlZzxp9pK3NGxIUBeo1s6xyjNfrRlkbYkU1KRPFMthMi2KTjOXMa7MZAVQEHPJVUF-UwDROZbn93vk8epzeJkIDHJyotJVwaZzAt4kQlLo-hUFBOi1-My4PIRWeLvGcTwG6js2UWQOHr9FMtw"
    ],
    coordinates: [12.8601, 77.7869],
    description: "East-facing premium plot inside Siri Meadows gated community. Direct owner selling without any broker. Clear E-Khata registered on Kaveri 2.0 portal. 15 minutes drive to Wipro SEZ Sarjapur road and upcoming peripheral ring road.",
    documents: [
      { name: "BMRDA Layout Sanction Plan", status: "Approved & Released", id: "BMRDA/LA/2019/312" },
      { name: "E-Khata Certificate (Kaveri 2.0)", status: "Clean Single Owner", id: "KA-EKT-99182" },
      { name: "30-Year Encumbrance Certificate", status: "Nil Encumbrance", id: "EC-SJP-2026-88" },
      { name: "RERA Registration Number", status: "Active RERA Approved", id: "PRM/KA/RERA/1251/308/PR/190823" }
    ]
  },
  {
    id: "prop-3",
    title: "2.2 Acres Industrial Plot with NH-44 Access",
    category: "Industrial Land",
    tagline: "Prime highway frontage industrial parcel with 100ft road frontage & high power line",
    state: "Andhra Pradesh",
    corridor: "Sri City / Tada Industrial Hub",
    district: "Tirupati / Sri Potti Sriramulu Nellore",
    village: "Tada Border / NH-16 (Old NH-5)",
    pricePerUnit: "₹1.10 Cr / Acre",
    priceTotalNum: 24200000,
    priceDisplay: "₹2.42 Crores",
    unitType: "Acre",
    extent: "2.2 Acres (220 Cents)",
    extentNum: 2.2,
    roadAccess: "100ft Direct Highway Service Road",
    roadWidth: 100,
    waterSource: "High capacity industrial pipeline + dedicated borewell",
    soilType: "Levelled Hard Compact Red Gravel - Ready for Heavy Foundations",
    electricity: "11KV High Tension Line Feeder adjacent to plot",
    fencing: "Concrete Boundary Pillars with Pre-Cast Compound Slats",
    titleStatus: "Yellow Zone Industrial Converted (Meebhoomi 1B Cleared)",
    surveyNo: "Survey No. 304/1B & 304/2",
    govtPortal: "AP Meebhoomi Portal Verified",
    govtPortalUrl: "https://meebhoomi.ap.gov.in",
    conversionStatus: "Industrial Converted (APIIC / Industrial Zone)",
    suitableFor: "Warehouse, Logistics Depot, Auto Ancillary, Cold Storage, Container Yard",
    featured: true,
    owner: {
      name: "M. Sundaram Reddy",
      phone: "+91 97000 34567",
      phoneDisplay: "+91 97000 •••••",
      whatsapp: "919700034567",
      type: "Direct Industrialist / Landowner",
      residence: "Nellore / Chennai",
      ownershipYears: "12 Years",
      verificationDate: "Verified Oct 2026",
      avatarInitials: "MS"
    },
    images: [
      "assets/images/industrial_land.jpg",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBdVVU-5AD5AydEcWVs4ic_RGqxectFYJ_xo-qo0pUOFMJWvvO2jVAQsTIUVoNDD5M89QaLmWlgxWcIix3_3yorCaY5Rl0lfPIxgZ_Uh2uNLK8dObq2nOcRySyXg2Ro0aDefVEpo-6RAJHbr41niOd4FW6Px7v1MdWleO4WY0_14Pe0U5bdwWDqi98gJRftW_nq5F633hNkPGHmT_t7IqGod4PUqhF4EjYupPM-KwY"
    ],
    coordinates: [13.5852, 80.0247],
    description: "Direct highway frontage industrial plot located right on the AP-Tamil Nadu corridor near Sri City. Clear title deed with single owner registered on AP Meebhoomi portal. Zero encumbrance. Fast-track licensing for industrial operations.",
    documents: [
      { name: "AP Meebhoomi 1B ROR", status: "Verified Digital Copy", id: "AP-MB-TD-304" },
      { name: "Zoning Classification Certificate", status: "Yellow Industrial Zone", id: "DTCP-AP-IND-2021" },
      { name: "Revenue Title & Adangal Extract", status: "Clean Revenue Record", id: "ADG-TADA-2026" },
      { name: "30-Year Encumbrance Certificate", status: "Nil Encumbrance", id: "EC-TADA-4021" }
    ]
  },
  {
    id: "prop-4",
    title: "2.5 Acres Cardamom & Coconut Plantation",
    category: "Farm Land",
    tagline: "Lush tropical plantation with natural stream canal & mountain views",
    state: "Kerala",
    corridor: "Palakkad Agricultural Belt",
    district: "Palakkad",
    village: "Kollengode / Nenmara Foothills",
    pricePerUnit: "₹52 Lakhs / Acre",
    priceTotalNum: 13000000,
    priceDisplay: "₹1.30 Crores",
    unitType: "Acre",
    extent: "2.5 Acres (250 Cents)",
    extentNum: 2.5,
    roadAccess: "24ft Tar Road from Main Highway",
    roadWidth: 24,
    waterSource: "Perennial Mountain Stream + Natural Pond (Never Dries)",
    soilType: "Rich Organic Forest Alluvial Soil",
    electricity: "Agricultural 3-Phase Power Connected",
    fencing: "Natural Granite Stone Boundary Wall",
    titleStatus: "Freehold Jenmam Title (e-Rekha Digital Patta Cleared)",
    surveyNo: "Re-Survey No. 215/4",
    govtPortal: "Kerala e-Rekha Portal Verified",
    govtPortalUrl: "https://erekha.kerala.gov.in",
    conversionStatus: "Plantation / Agricultural (Exempt from Land Ceiling)",
    suitableFor: "Organic Farming, Agro-Tourism Resort, Pepper/Cardamom Yield, Nature Retreat",
    featured: true,
    owner: {
      name: "George Varghese",
      phone: "+91 94470 45678",
      phoneDisplay: "+91 94470 •••••",
      whatsapp: "919447045678",
      type: "Direct Planter & Landowner",
      residence: "Palakkad, Kerala",
      ownershipYears: "Ancestral Family Estate (40+ Years)",
      verificationDate: "Verified Oct 2026",
      avatarInitials: "GV"
    },
    images: [
      "assets/images/kerala_plantation.jpg"
    ],
    coordinates: [10.6125, 76.6983],
    description: "Pristine Kerala plantation property with 250 mature coconut trees, black pepper vines, and cardamom. Natural perennial stream flows through property border with traditional granite stone retaining wall. Freehold Jenmam title verified on Kerala e-Rekha portal.",
    documents: [
      { name: "Kerala e-Rekha Digital Patta", status: "Verified Re-Survey Copy", id: "KL-ERK-PLK-215" },
      { name: "Thandaper Extract & Land Tax Receipt", status: "Up to Date (2026-27)", id: "TP-KL-98210" },
      { name: "Village Officer Possession Certificate", status: "Clear Possession", id: "POSS-KOL-2026" },
      { name: "30-Year Encumbrance Certificate", status: "Nil Encumbrance", id: "EC-NEM-1192" }
    ]
  },
  {
    id: "prop-5",
    title: "3.0 Acres Red Soil Fertile Farmland",
    category: "Agricultural",
    tagline: "Chikkaballapur corridor farmland with 2 borewells & Kaveri 2.0 clear title",
    state: "Karnataka",
    corridor: "Bengaluru Peripheral (Chikkaballapur / Devanahalli)",
    district: "Chikkaballapur",
    village: "Nandi Hobli, Chikkaballapur Taluk",
    pricePerUnit: "₹75 Lakhs / Acre",
    priceTotalNum: 22500000,
    priceDisplay: "₹2.25 Crores",
    unitType: "Acre",
    extent: "3.0 Acres (120 Guntas)",
    extentNum: 3.0,
    roadAccess: "30ft Metal Road Connecting to State Highway",
    roadWidth: 30,
    waterSource: "2 Dedicated High-Yield Borewells (1,200 ft with submersible pumps)",
    soilType: "Deep Red Loam Soil with Zero Stones",
    electricity: "15HP Dedicated Agricultural Power Connection",
    fencing: "Fully Fenced with Chain Link and Concrete Posts",
    titleStatus: "Bhoomi Pahani Cleared (Single Owner Ancestral)",
    surveyNo: "Survey No. 112/3",
    govtPortal: "Karnataka Bhoomi Portal Verified",
    govtPortalUrl: "https://bhoomi.karnataka.gov.in",
    conversionStatus: "Agricultural (Patta)",
    suitableFor: "Exotic Vegetable Farming, Floriculture, Weekend Farmhouse, Vineyard",
    featured: true,
    owner: {
      name: "B. Manjunath Gowda",
      phone: "+91 98450 56789",
      phoneDisplay: "+91 98450 •••••",
      whatsapp: "919845056789",
      type: "Direct Farmer & Landowner",
      residence: "Chikkaballapur, Karnataka",
      ownershipYears: "Ancestral (25+ Years)",
      verificationDate: "Verified Oct 2026",
      avatarInitials: "BM"
    },
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCQVes5ZcIO1tjc5aVLw1qK1DNQMLnjR4LNDIbCyCpsnHISA7eMGvR9lo6O8TjKuEpGn2QtJyFIA-3S34Cos0Wlhm8m6fYkgtgPo1qrGwNK78ye82hOKuK0gixKdVGSeyWn4ROdWjnfVuugmeDrI_iPgnrfqNYcqVD_EXFHRZ9p6rfIZIqYv-umBLoefUMvnmt4x8q2QsxESebGxtprsxd1FNdBUCIuszlt44jPc_E",
      "assets/images/hero_land.jpg"
    ],
    coordinates: [13.4325, 77.7275],
    description: "Top-tier fertile agricultural land just 35 minutes from Kempegowda International Airport (Devanahalli). Ideal soil for polyhouse farming, tomatoes, roses, and weekend villas. Owner Manjunath Gowda is dealing directly with prospective buyers. 100% clean title deed.",
    documents: [
      { name: "Karnataka Bhoomi RTC (Pahani)", status: "Digitally Signed 2026", id: "KA-BHM-CKB-112" },
      { name: "Mutation Register Extract (MR)", status: "Clear Inheritance Succession", id: "MR-T-842" },
      { name: "FMB / Tippan Sketch", status: "Surveyor Certified GPS Pegs", id: "FMB-NANDI-112" },
      { name: "30-Year Encumbrance Certificate", status: "Nil Encumbrance", id: "EC-CKB-2026-90" }
    ]
  },
  {
    id: "prop-6",
    title: "1.8 Acres Highway Commercial Frontage Plot",
    category: "Commercial Plots",
    tagline: "Direct frontage on Pollachi 4-lane highway with high vehicle traffic",
    state: "Tamil Nadu",
    corridor: "Coimbatore Outer (Pollachi Road)",
    district: "Coimbatore",
    village: "Kinathukadavu / Othakkalmandapam",
    pricePerUnit: "₹85 Lakhs / Acre",
    priceTotalNum: 15300000,
    priceDisplay: "₹1.53 Crores",
    unitType: "Acre",
    extent: "1.8 Acres (180 Cents)",
    extentNum: 1.8,
    roadAccess: "100ft National Highway Frontage (220ft frontage width)",
    roadWidth: 100,
    waterSource: "Groundwater borewell + TWAD Board Pipeline",
    soilType: "Levelled Commercial Ground",
    electricity: "High Tension Commercial Feeder Line on boundary",
    fencing: "Barbed wire with boundary stone demarcation",
    titleStatus: "DTCP Approved Commercial Land (Tamil Nilam Verified)",
    surveyNo: "Survey No. 248/1A",
    govtPortal: "Tamil Nadu AnyROR / Tamil Nilam Verified",
    govtPortalUrl: "https://eservices.tn.gov.in",
    conversionStatus: "Commercial Converted (DTCP)",
    suitableFor: "Fuel Station, Highway Motel, Automobile Showroom, Truck Terminal, Warehouse",
    featured: false,
    owner: {
      name: "R. Selvamurugan",
      phone: "+91 98420 67890",
      phoneDisplay: "+91 98420 •••••",
      whatsapp: "919842067890",
      type: "Direct Landowner",
      residence: "RS Puram, Coimbatore",
      ownershipYears: "15 Years",
      verificationDate: "Verified Oct 2026",
      avatarInitials: "RS"
    },
    images: [
      "assets/images/industrial_land.jpg",
      "assets/images/residential_plots.jpg"
    ],
    coordinates: [10.8241, 77.0189],
    description: "Outstanding commercial land parcel directly abutting the bustling Coimbatore - Pollachi Highway with wide 220-foot frontage. Perfect for commercial business operations. Direct owner deal with zero broker involvement.",
    documents: [
      { name: "Tamil Nilam Digital Patta Chitta", status: "Verified Active Record", id: "TN-NLM-CBE-248" },
      { name: "DTCP Commercial NOC", status: "Approved & Valid", id: "DTCP-CBE-2022-71" },
      { name: "Field Measurement Book (FMB)", status: "Surveyor Marked", id: "FMB-KINATHU-248" },
      { name: "30-Year Encumbrance Certificate", status: "Nil Encumbrance", id: "EC-TN-CBE-189" }
    ]
  },
  {
    id: "prop-7",
    title: "1,800 Sq.Ft East-Facing CMDA Approved Villa Plot",
    category: "Residential Plots",
    tagline: "CMDA approved layout in Chennai Outer Ring Road growth corridor",
    state: "Tamil Nadu",
    corridor: "Chennai Outer Ring (Sriperumbudur / Poonamallee)",
    district: "Kanchipuram / Tiruvallur Border",
    village: "Nemili / Mannur, Sriperumbudur Taluk",
    pricePerUnit: "₹2,850 / Sq.Ft",
    priceTotalNum: 5130000,
    priceDisplay: "₹51.3 Lakhs",
    unitType: "Sq.Ft",
    extent: "1,800 Sq.Ft (60 x 30 Ft)",
    extentNum: 0.041,
    roadAccess: "30ft Concrete Layout Road",
    roadWidth: 30,
    waterSource: "Good potable groundwater at 45ft depth",
    soilType: "Clay Loam with Solid Bearing Capacity",
    electricity: "TANGEDCO Underground Line Ready",
    fencing: "Compound wall on 3 sides with corner markers",
    titleStatus: "CMDA Approved Layout (Individual Patta Cleared)",
    surveyNo: "Survey No. 74/3, Plot #18",
    govtPortal: "Tamil Nadu e-Services / CMDA Verified",
    govtPortalUrl: "https://cmdachennai.gov.in",
    conversionStatus: "Residential (CMDA Approved)",
    suitableFor: "Immediate Home Construction, Investment in Chennai Industrial Belt",
    featured: false,
    owner: {
      name: "Priya Natarajan",
      phone: "+91 94440 78901",
      phoneDisplay: "+91 94440 •••••",
      whatsapp: "919444078901",
      type: "Direct Property Owner",
      residence: "Anna Nagar, Chennai",
      ownershipYears: "Direct Buyer (5 Years)",
      verificationDate: "Verified Oct 2026",
      avatarInitials: "PN"
    },
    images: [
      "assets/images/residential_plots.jpg"
    ],
    coordinates: [12.9833, 79.9458],
    description: "East-facing residential plot in a well-developed layout close to the Chennai Outer Ring Road and Hyundai manufacturing zone. Clear individual patta registered in owner's name. Direct sale without brokerage.",
    documents: [
      { name: "CMDA Planning Approval Order", status: "Approved Layout", id: "CMDA/PPD/LO/2020/54" },
      { name: "Individual Patta Transfer Order", status: "Issued & Verified", id: "PATTA-SPBR-7418" },
      { name: "30-Year Encumbrance Certificate", status: "Nil Encumbrance", id: "EC-SPBR-2026-302" }
    ]
  },
  {
    id: "prop-8",
    title: "5.0 Acres Red Loam Mango Orchard & Farmhouse Land",
    category: "Farm Land",
    tagline: "Mature Banganapalli mango trees with drip irrigation, cottage & transformer",
    state: "Telangana",
    corridor: "Outer Hyderabad (Moinabad / Shankarpally)",
    district: "Rangareddy",
    village: "Appojiguda, Moinabad Mandal",
    pricePerUnit: "₹1.25 Cr / Acre",
    priceTotalNum: 62500000,
    priceDisplay: "₹6.25 Crores",
    unitType: "Acre",
    extent: "5.0 Acres (200 Guntas)",
    extentNum: 5.0,
    roadAccess: "40ft Wide R&B Tar Road",
    roadWidth: 40,
    waterSource: "3 Heavy Yield Borewells with Automated Drip System",
    soilType: "Deep Red Loam Soil (Erra Mati)",
    electricity: "25 KVA Dedicated Private Transformer",
    fencing: "7ft High Chain Link Fencing with Iron Security Gate",
    titleStatus: "Single Patta Dharani Passbook Cleared",
    surveyNo: "Survey No. 89/1",
    govtPortal: "Telangana Dharani Portal Verified",
    govtPortalUrl: "https://dharani.telangana.gov.in",
    conversionStatus: "Agricultural (Patta Land)",
    suitableFor: "Luxury Weekend Farmhouse, Agro-Tourism, Fruit Export, Capital Asset",
    featured: false,
    owner: {
      name: "J. Narayana Rao",
      phone: "+91 98490 89012",
      phoneDisplay: "+91 98490 •••••",
      whatsapp: "919849089012",
      type: "Direct Landowner",
      residence: "Jubilee Hills, Hyderabad",
      ownershipYears: "18 Years",
      verificationDate: "Verified Oct 2026",
      avatarInitials: "JN"
    },
    images: [
      "assets/images/hero_land.jpg",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCQVes5ZcIO1tjc5aVLw1qK1DNQMLnjR4LNDIbCyCpsnHISA7eMGvR9lo6O8TjKuEpGn2QtJyFIA-3S34Cos0Wlhm8m6fYkgtgPo1qrGwNK78ye82hOKuK0gixKdVGSeyWn4ROdWjnfVuugmeDrI_iPgnrfqNYcqVD_EXFHRZ9p6rfIZIqYv-umBLoefUMvnmt4x8q2QsxESebGxtprsxd1FNdBUCIuszlt44jPc_E"
    ],
    coordinates: [17.3298, 78.2711],
    description: "Fully developed mango orchard with over 300 yielding Banganapalli and Himayat mango trees. Includes a small rustic caretaker farmhouse, modern drip irrigation lines, and clear 40ft road connectivity. 25 minutes from Financial District Gachibowli.",
    documents: [
      { name: "Dharani Green Pattadar Passbook", status: "Clean Single Title", id: "TS-DH-MOIN-891" },
      { name: "30-Year Encumbrance Certificate", status: "Zero Encumbrance", id: "EC-HYD-MOIN-2026" },
      { name: "FMB Survey Boundary Map", status: "GPS Demarcated", id: "FMB-APPOJI-89" }
    ]
  },
  {
    id: "prop-9",
    title: "10.0 Acres Vast Industrial Logistics Land",
    category: "Industrial Land",
    tagline: "Strategic logistics hub near Vijayawada airport with 80ft approach road",
    state: "Andhra Pradesh",
    corridor: "Amaravati / Vijayawada Hub (Gannavaram)",
    district: "Krishna / NTR District",
    village: "Surampalli / Gannavaram Industrial Belt",
    pricePerUnit: "₹95 Lakhs / Acre",
    priceTotalNum: 95000000,
    priceDisplay: "₹9.50 Crores",
    unitType: "Acre",
    extent: "10.0 Acres (1,000 Cents)",
    extentNum: 10.0,
    roadAccess: "80ft Direct Heavy-Vehicle Road connecting to NH-16",
    roadWidth: 80,
    waterSource: "Borewells + Municipal Bulk Water Supply line",
    soilType: "Level Compact Soil (Bearing Capacity 22 T/m²)",
    electricity: "Substation within 500 meters, 33KV Feeder Feasible",
    fencing: "Compound wall on 2 sides, stone pegs on balance",
    titleStatus: "AP Meebhoomi 1B Cleared (CRDA Master Plan Industrial)",
    surveyNo: "Survey No. 410/1 to 410/4",
    govtPortal: "AP Meebhoomi & CRDA Verified",
    govtPortalUrl: "https://meebhoomi.ap.gov.in",
    conversionStatus: "Industrial Converted",
    suitableFor: "E-Commerce Fulfillment Centre, Cold Storage, FMCG Warehouse, Manufacturing",
    featured: false,
    owner: {
      name: "C. Veerabhadra Rao",
      phone: "+91 98481 90123",
      phoneDisplay: "+91 98481 •••••",
      whatsapp: "919848190123",
      type: "Direct Landowner",
      residence: "Benz Circle, Vijayawada",
      ownershipYears: "20 Years",
      verificationDate: "Verified Oct 2026",
      avatarInitials: "CV"
    },
    images: [
      "assets/images/industrial_land.jpg"
    ],
    coordinates: [16.5412, 80.8015],
    description: "Vast 10-acre single-block parcel located just 6 km from Vijayawada International Airport. Directly within the notified industrial zone under CRDA master plan. Ideal for national 3PL logistics and warehouse operators. Single family ownership, direct deal.",
    documents: [
      { name: "AP Meebhoomi 1B & Adangal Extract", status: "Verified Digital Copy", id: "AP-MB-GNV-410" },
      { name: "CRDA Master Plan Zoning Certificate", status: "Industrial Logistics Zone", id: "CRDA-ZON-2023-11" },
      { name: "30-Year Encumbrance Certificate", status: "Nil Encumbrance", id: "EC-VJA-2026-781" }
    ]
  },
  {
    id: "prop-10",
    title: "1,500 Sq.Ft VMRDA Approved Plot in Anandapuram",
    category: "Residential Plots",
    tagline: "Gated residential layout in Vizag growth corridor with 40ft blacktop roads",
    state: "Andhra Pradesh",
    corridor: "Visakhapatnam (Anandapuram / Bhogapuram Corridor)",
    district: "Visakhapatnam",
    village: "Vemulavalasa, Anandapuram Mandal",
    pricePerUnit: "₹2,200 / Sq.Ft",
    priceTotalNum: 3300000,
    priceDisplay: "₹33.0 Lakhs",
    unitType: "Sq.Ft",
    extent: "1,500 Sq.Ft (50 x 30 Ft / 166.6 Sq.Yards)",
    extentNum: 0.034,
    roadAccess: "40ft BT Road with Avenue Plantation",
    roadWidth: 40,
    waterSource: "Underground sump & overhead tank connection",
    soilType: "Sandy Loam - Fast Drainage",
    electricity: "APEPDCL Underground Power Lines",
    fencing: "Demarcated with concrete curb stones",
    titleStatus: "VMRDA Layout Approved (Individual Patta Cleared)",
    surveyNo: "Survey No. 58/3, Plot #64",
    govtPortal: "AP Meebhoomi & VMRDA Verified",
    govtPortalUrl: "https://vmrda.gov.in",
    conversionStatus: "Residential Layout (VMRDA Approved)",
    suitableFor: "Immediate Construction, High Appreciation near Bhogapuram Airport",
    featured: false,
    owner: {
      name: "D. Satyanarayana Varma",
      phone: "+91 98492 01234",
      phoneDisplay: "+91 98492 •••••",
      whatsapp: "919849201234",
      type: "Direct Property Owner",
      residence: "MVP Colony, Visakhapatnam",
      ownershipYears: "Direct Allottee (6 Years)",
      verificationDate: "Verified Oct 2026",
      avatarInitials: "DS"
    },
    images: [
      "assets/images/residential_plots.jpg"
    ],
    coordinates: [17.9042, 83.4022],
    description: "East-facing residential plot in an approved VMRDA layout situated in the high-growth corridor between Vizag city and upcoming Bhogapuram International Airport. Clear registered title deed, ready for instant construction.",
    documents: [
      { name: "VMRDA Layout Sanction Copy", status: "Approved Layout LP No. 42/2018", id: "VMRDA-LP-2018-42" },
      { name: "Meebhoomi Title Deed Extract", status: "Clean Record", id: "AP-MB-ANDP-58" },
      { name: "30-Year Encumbrance Certificate", status: "Nil Encumbrance", id: "EC-VSP-2026-619" }
    ]
  },
  {
    id: "prop-11",
    title: "6.5 Acres Paddy Land with Canal Water Ayacut",
    category: "Agricultural",
    tagline: "Perennial Kakatiya canal irrigation with high fertility black cotton soil",
    state: "Telangana",
    corridor: "Warangal Agro Corridors",
    district: "Warangal Rural / Jangaon",
    village: "Narsampet Road, Warangal",
    pricePerUnit: "₹32 Lakhs / Acre",
    priceTotalNum: 20800000,
    priceDisplay: "₹2.08 Crores",
    unitType: "Acre",
    extent: "6.5 Acres (260 Guntas)",
    extentNum: 6.5,
    roadAccess: "24ft Panchayat Metal Road",
    roadWidth: 24,
    waterSource: "Kakatiya Main Canal Water + 2 Open Farm Wells",
    soilType: "Deep Black Cotton Soil (Nalla Regadi) - High Moisture Retention",
    electricity: "Agricultural Free Power Connection",
    fencing: "Clear boundary stone posts with boundary trenches",
    titleStatus: "Single Owner Dharani Passbook Cleared",
    surveyNo: "Survey No. 201/B",
    govtPortal: "Telangana Dharani Portal Verified",
    govtPortalUrl: "https://dharani.telangana.gov.in",
    conversionStatus: "Agricultural (Patta Land)",
    suitableFor: "Paddy, Cotton, Maize, Chilli, Commercial Seed Farming",
    featured: false,
    owner: {
      name: "T. Srinivas Reddy",
      phone: "+91 94400 12345",
      phoneDisplay: "+91 94400 •••••",
      whatsapp: "919440012345",
      type: "Direct Farmer & Landowner",
      residence: "Hanamkonda, Warangal",
      ownershipYears: "Ancestral (30+ Years)",
      verificationDate: "Verified Oct 2026",
      avatarInitials: "TS"
    },
    images: [
      "assets/images/hero_land.jpg"
    ],
    coordinates: [17.9689, 79.5941],
    description: "Highly productive agricultural land with guaranteed perennial canal water from the Kakatiya irrigation canal network. Superb yield record for two crop cycles per year. Dharani passbook in single farmer's name. Zero debt, zero encumbrance.",
    documents: [
      { name: "Dharani Digital Passbook", status: "Verified Single Owner", id: "TS-DH-WGL-201" },
      { name: "Irrigation Department Ayacut Certificate", status: "Perennial Water Right", id: "IRR-WGL-2025" },
      { name: "30-Year Encumbrance Certificate", status: "Nil Encumbrance", id: "EC-WGL-2026-118" }
    ]
  },
  {
    id: "prop-12",
    title: "3.2 Acres Coffee & Pepper Plantation in Wayanad",
    category: "Farm Land",
    tagline: "High-altitude organic coffee, pepper & arecanut plantation with stream",
    state: "Kerala",
    corridor: "Kochi & Hill Belts (Wayanad / Calicut Border)",
    district: "Wayanad",
    village: "Meppadi / Vythiri Valley",
    pricePerUnit: "₹45 Lakhs / Acre",
    priceTotalNum: 14400000,
    priceDisplay: "₹1.44 Crores",
    unitType: "Acre",
    extent: "3.2 Acres (320 Cents)",
    extentNum: 3.2,
    roadAccess: "20ft Tarred Estate Road",
    roadWidth: 20,
    waterSource: "Fresh Natural Stream Water & Spring Reservoir",
    soilType: "Volcanic Forest Humus Rich Soil",
    electricity: "Single Phase Domestic + Agricultural Power",
    fencing: "Natural Live Bio-Fencing & Granite Border Stones",
    titleStatus: "Freehold Jenmam Patta (e-Rekha Verified)",
    surveyNo: "Re-Survey No. 342/1",
    govtPortal: "Kerala e-Rekha & Revenue Verified",
    govtPortalUrl: "https://erekha.kerala.gov.in",
    conversionStatus: "Plantation (Exempted Land)",
    suitableFor: "Eco-Resort, Organic Coffee Brand, Serene Retirement Retreat",
    featured: false,
    owner: {
      name: "K. M. Mathew",
      phone: "+91 94472 34567",
      phoneDisplay: "+91 94472 •••••",
      whatsapp: "919447234567",
      type: "Direct Planter",
      residence: "Kalpetta, Wayanad",
      ownershipYears: "24 Years",
      verificationDate: "Verified Oct 2026",
      avatarInitials: "KM"
    },
    images: [
      "assets/images/kerala_plantation.jpg"
    ],
    coordinates: [11.5542, 76.1264],
    description: "Scenic plantation in Wayanad's lush green hills. Hundreds of robusta coffee shrubs, high-yield Panniyur pepper vines, and areca palms. Perennial mountain spring provides pure drinking water year-round. Direct owner sale.",
    documents: [
      { name: "Kerala e-Rekha Digital Patta", status: "Verified Jenmam Record", id: "KL-ERK-WYD-342" },
      { name: "Plantation Certificate", status: "Revenue Certified", id: "PLT-WYD-2024" },
      { name: "30-Year Encumbrance Certificate", status: "Clean Title", id: "EC-WYD-2026-402" }
    ]
  }
];

// ==========================================
// COMPREHENSIVE SOUTH INDIAN I18N DICTIONARY
// English, Telugu, Kannada, Tamil, Malayalam
// ==========================================
const TRANSLATIONS = {
  en: {
    trustBanner: "100% Direct Owners Only • Zero Brokerage & Zero Middlemen Guarantee",
    calcLink: "Land Area Calculator",
    navHome: "Home",
    navExplore: "Explore Lands",
    navListFree: "List Free",
    navDashboard: "Dashboard",
    navSaved: "Saved Lands",
    navConverter: "Converter",
    navSignIn: "Sign In",
    navSignOut: "Sign Out",
    heroTrustPill: "Zero Brokerage • 100% Direct Landowners Only",
    heroTitle: 'South India\'s Direct <br class="hidden sm:inline"><span class="text-transparent bg-clip-text bg-gradient-to-r from-tertiary-fixed via-secondary-container to-white">Land & Acreage Marketplace</span>',
    heroSubtitle: "South India's direct marketplace for Agricultural Land, Plots & Industrial Property with clean titles & direct landowner contacts.",
    heroSearchPlaceholder: "Search by Corridor (Chevella, Sarjapur, Tada, Coimbatore, Wayanad)...",
    heroSearchBtn: "Find Direct Lands",
    viewInLang: "View in:",
    pillar1Title: "100% Direct Owners",
    pillar1Desc: "Verified Aadhaar and land revenue records. Zero unauthorized middle-men.",
    pillar2Title: "Zero Brokerage (0%)",
    pillar2Desc: "Buyers and sellers talk directly. No 2% commission fees or hidden cuts.",
    pillar3Title: "Govt Portal Verified",
    pillar3Desc: "Cross-checked with Dharani (TG), Bhoomi (KA), Meebhoomi (AP), Patta Chitta (TN).",
    featuredTagline: "Direct Landowner Showcase",
    featuredHeading: "Featured Verified Parcels",
    featuredDesc: "Inspected survey boundary stones, direct road approach, and authenticated land records.",
    viewAllLands: "View All Land Parcels",
    farmerBadge: "For Farmers & Landowners",
    sellerBannerTitle: "Have Agricultural Land or Plots to Sell?",
    sellerBannerDesc: "Stop paying ₹50,000 to ₹5,00,000 in broker commissions! List your property completely free and get genuine buyers directly calling your phone.",
    sellerBannerBtn: "List Your Property 100% Free",
    sellerRegisterBtn: "Register as Landowner",
    brokerageSavedHero: "Brokerage Forever",
    exploreTitle: "Explore Direct Land Parcels",
    exploreSubtitle: "Filter by state, price, road width, and soil condition. Zero broker middle-man interference.",
    btnGridView: "Grid View",
    btnMap: "GPS Map",
    labelState: "State / Ledger",
    labelCategory: "Land Category",
    labelMaxBudget: "Max Budget:",
    labelCorridor: "Corridor or Mandal",
    filterSearchPlaceholder: "e.g. Chevella, Sarjapur, NH-44...",
    btnResetFilters: "Reset Filters",
    listTitle: "List Your Land 100% Free",
    listSubtitle: "Zero brokerage, zero listing fee. Reach genuine land buyers, investors, and agribusinesses directly.",
    step1Title: "Land Location & Type",
    step2Title: "Extent & Direct Asking Price",
    step3Title: "Road, Water & Infrastructure",
    step4Title: "Landowner Contact & Declaration",
    publishBtn: "Publish Direct Land Listing (100% Free)",
    dashTitle: "Management Dashboard",
    dashSubtitle: "Manage your direct land parcels, respond to buyer site visit inquiries, and track documents.",
    dashMyListings: "My Listings",
    dashVisits: "Visit Inquiries",
    dashGovtLedgers: "Govt Ledgers",
    dashBrokerageSaved: "Brokerage Saved",
    dashTabListings: "My Land Listings",
    dashTabVisits: "Buyer Field Visits & Inquiries",
    dashTabBuyerVisits: "My Scheduled Inspections (Buyer)",
    savedTitle: "Saved Land Parcels",
    savedSubtitle: "Your bookmarked direct properties for quick review, owner contact, and field visits.",
    calcTitle: "South Indian Land Area Calculator",
    calcSubtitle: "Instant conversion across Acres, Guntas, Cents, Grounds & Sq.Ft",
    authModalTitle: "Sign In to InSightLiker",
    authModalSubtitle: "Direct Land Marketplace for South India",
    authTabSignIn: "Sign In",
    authTabSignUp: "Register",
    authTabPhone: "Mobile OTP",
    authGoogleBtn: "Continue with Google",
    cardCallOwner: "Call Owner",
    cardScheduleVisit: "Schedule Visit",
    cardDirectOwner: "Direct Owner",
    cardZeroBrokerage: "0% Brokerage",
    cardOwnerListed: "Owner Listed",
    cardRoad: "Road",
    cardVerified: "Verified",
    toastLanguageChanged: "Language updated to English"
  },
  te: {
    trustBanner: "100% నేరుగా భూయజమానులే • జీరో బ్రోకరేజ్ & దళారులు లేరు",
    calcLink: "భూమి విస్తీర్ణ కాలిక్యులేటర్",
    navHome: "హోమ్",
    navExplore: "భూములు",
    navListFree: "లిస్ట్",
    navDashboard: "డాష్‌బోర్డ్",
    navSaved: "సేవ్",
    navConverter: "కాలిక్యులేటర్",
    navSignIn: "సైన్ ఇన్",
    navSignOut: "లాగ్ అవుట్",
    heroTrustPill: "జీరో బ్రోకరేజ్ • 100% నేరుగా భూయజమానులు మాత్రమే",
    heroTitle: 'దక్షిణ భారతదేశపు నేరుగా <br class="hidden sm:inline"><span class="text-transparent bg-clip-text bg-gradient-to-r from-tertiary-fixed via-secondary-container to-white">భూములు & ఎకరాల మార్కెట్‌ప్లేస్</span>',
    heroSubtitle: "వ్యవసాయ భూములు, ప్లాట్లు & ఇండస్ట్రియల్ స్థలాల కోసం ప్రత్యక్ష వేదిక. స్పష్టమైన డాక్యుమెంట్లు & యజమానుల ఫోన్ నంబర్లు.",
    heroSearchPlaceholder: "ప్రాంతం లేదా మండలం ద్వారా వెతకండి (చేవెళ్ల, సర్జాపూర్, తడ, కోయంబత్తూరు)...",
    heroSearchBtn: "భూములను వెతకండి",
    viewInLang: "భాష ఎంచుకోండి:",
    pillar1Title: "100% నేరుగా భూయజమానులు",
    pillar1Desc: "ఆధార్ మరియు రెవెన్యూ రికార్డులతో ధృవీకరించబడింది. దళారులకు ప్రవేశం లేదు.",
    pillar2Title: "జీరో బ్రోకరేజ్ (0%)",
    pillar2Desc: "కొనుగోలుదారులు మరియు యజమానులు నేరుగా మాట్లాడవచ్చు. ఎటువంటి కమీషన్ లేదు.",
    pillar3Title: "ప్రభుత్వ పోర్టల్ ధృవీకరణ",
    pillar3Desc: "ధరణి (TG), భూమి (KA), మీభూమి (AP), పట్టా చిట్టా (TN) తో ధృవీకరించబడింది.",
    featuredTagline: "నేరుగా భూయజమానుల భూములు",
    featuredHeading: "ప్రత్యేక ధృవీకరించిన భూములు",
    featuredDesc: "సర్వే సరిహద్దులు, నేరుగా రోడ్డు సదుపాయం మరియు ధృవీకరించిన రికార్డులు.",
    viewAllLands: "అన్ని భూములను చూడండి",
    farmerBadge: "రైతులు & భూయజమానుల కోసం",
    sellerBannerTitle: "మీకు అమ్మకానికి వ్యవసాయ భూమి లేదా ప్లాట్లు ఉన్నాయా?",
    sellerBannerDesc: "దళారులకు వేలాది రూపాయల కమీషన్లు చెల్లించడం ఆపండి! మీ భూమి వివరాలను ఉచితంగా నమోదు చేసి నేరుగా నిజమైన కొనుగోలుదారులను పొందండి.",
    sellerBannerBtn: "మీ భూమిని 100% ఉచితంగా లిస్ట్ చేయండి",
    sellerRegisterBtn: "యజమానిగా రిజిస్టర్ అవ్వండి",
    brokerageSavedHero: "బ్రోకరేజ్ ఎప్పటికీ ఉండదు",
    exploreTitle: "నేరుగా భూములను అన్వేషించండి",
    exploreSubtitle: "రాష్ట్రం, ధర, రోడ్డు వెడల్పు మరియు నేల రకం ఆధారంగా ఫిల్టర్ చేయండి. దళారులు లేరు.",
    btnGridView: "గ్రిడ్ వ్యూ",
    btnMap: "జీపీఎస్ మ్యాప్",
    labelState: "రాష్ట్రం / రెవెన్యూ",
    labelCategory: "భూమి రకం",
    labelMaxBudget: "గరిష్ట బడ్జెట్:",
    labelCorridor: "ప్రాంతం లేదా మండలం",
    filterSearchPlaceholder: "ఉదా: చేవెళ్ల, సర్జాపూర్, NH-44...",
    btnResetFilters: "ఫిల్టర్లు రీసెట్ చేయండి",
    listTitle: "మీ భూమిని 100% ఉచితంగా లిస్ట్ చేయండి",
    listSubtitle: "జీరో బ్రోకరేజ్, ఎటువంటి రుసుము లేదు. నిజమైన కొనుగోలుదారులను నేరుగా సంప్రదించండి.",
    step1Title: "భూమి ప్రాంతం & రకం",
    step2Title: "విస్తీర్ణం & నేరుగా ధర",
    step3Title: "రోడ్డు, నీరు & వసతులు",
    step4Title: "యజమాని సంప్రదింపు & డిక్లరేషన్",
    publishBtn: "ఉచితంగా భూమిని ప్రచురించండి",
    dashTitle: "మేనేజ్‌మెంట్ డాష్‌బోర్డ్",
    dashSubtitle: "మీ భూమి లిస్టింగ్‌లు మరియు కొనుగోలుదారుల విజిట్ అభ్యర్థనలను నిర్వహించండి.",
    dashMyListings: "నా లిస్టింగ్‌లు",
    dashVisits: "విజిట్ విచారణలు",
    dashGovtLedgers: "ప్రభుత్వ రికార్డులు",
    dashBrokerageSaved: "ఆదా అయిన బ్రోకరేజ్",
    dashTabListings: "నా భూముల జాబితా",
    dashTabVisits: "కొనుగోలుదారుల విజిట్‌లు",
    dashTabBuyerVisits: "నా షెడ్యూల్ చేసిన విజిట్‌లు",
    savedTitle: "సేవ్ చేసిన భూములు",
    savedSubtitle: "మీరు బుక్‌మార్క్ చేసిన నేరుగా భూములు. త్వరిత సంప్రదింపు కోసం.",
    calcTitle: "దక్షిణ భారత భూమి విస్తీర్ణ కాలిక్యులేటర్",
    calcSubtitle: "గుంటలు, ఎకరాలు, సెంట్లు, చదరపు గజాల మధ్య తక్షణ లెక్కింపు",
    authModalTitle: "ఇన్సైట్‌లైకర్ సురక్షిత లాగిన్",
    authModalSubtitle: "దక్షిణ భారతదేశపు ప్రత్యక్ష భూముల వేదిక",
    authTabSignIn: "సైన్ ఇన్",
    authTabSignUp: "రిజిస్టర్",
    authTabPhone: "మొబైల్ OTP",
    authGoogleBtn: "గూగుల్ ద్వారా కొనసాగించండి",
    cardCallOwner: "కాల్ చేయండి",
    cardScheduleVisit: "విజిట్ బుక్ చేయండి",
    cardDirectOwner: "నేరుగా యజమాని",
    cardZeroBrokerage: "0% బ్రోకరేజ్",
    cardOwnerListed: "యజమాని లిస్ట్ చేశారు",
    cardRoad: "రోడ్డు",
    cardVerified: "ధృవీకరించబడింది",
    toastLanguageChanged: "భాష తెలుగులోకి మార్చబడింది (Telugu)"
  },
  kn: {
    trustBanner: "100% ನೇರ ಭೂ ಮಾಲೀಕರು ಮಾತ್ರ • ಶೂನ್ಯ ದಲ್ಲಾಳಿ & ಮಧ್ಯವರ್ತಿಗಳಿಲ್ಲ",
    calcLink: "ಭೂ ವಿಸ್ತೀರ್ಣ ಕ್ಯಾಲ್ಕುಲೇಟರ್",
    navHome: "ಮುಖಪುಟ",
    navExplore: "ಜಮೀನು",
    navListFree: "ಪ್ರಕಟಿಸಿ",
    navDashboard: "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
    navSaved: "ಉಳಿಸಿದವು",
    navConverter: "ಕ್ಯಾಲ್ಕುಲೇಟರ್",
    navSignIn: "ಸೈನ್ ಇನ್",
    navSignOut: "ಸೈನ್ ಔಟ್",
    heroTrustPill: "ಶೂನ್ಯ ದಲ್ಲಾಳಿ • 100% ನೇರ ಭೂ ಮಾಲೀಕರು ಮಾತ್ರ",
    heroTitle: 'ದಕ್ಷಿಣ ಭಾರತದ ನೇರ <br class="hidden sm:inline"><span class="text-transparent bg-clip-text bg-gradient-to-r from-tertiary-fixed via-secondary-container to-white">ಭೂಮಿ ಮತ್ತು ಎಕರೆ ಮಾರುಕಟ್ಟೆ</span>',
    heroSubtitle: "ಕೃಷಿ ಭೂಮಿ, ನಿವೇಶನಗಳು ಮತ್ತು ಕೈಗಾರಿಕಾ ಭೂಮಿಗಾಗಿ ದಕ್ಷಿಣ ಭಾರತದ ನೇರ ವೇದಿಕೆ. ಸ್ಪಷ್ಟ ಪಹಣಿ ಮತ್ತು ನೇರ ಮಾಲೀಕರ ಸಂಪರ್ಕ.",
    heroSearchPlaceholder: "ಪ್ರದೇಶ ಅಥವಾ ತಾಲೂಕು ಮೂಲಕ ಹುಡುಕಿ (ಸರ್ಜಾಪುರ, ದೇವನಹಳ್ಳಿ, ಚೇವಲ್ಲಾ)...",
    heroSearchBtn: "ಭೂಮಿ ಹುಡುಕಿ",
    viewInLang: "ಭಾಷೆ ಆಯ್ಕೆಮಾಡಿ:",
    pillar1Title: "100% ನೇರ ಭೂ ಮಾಲೀಕರು",
    pillar1Desc: "ಆಧಾರ್ ಮತ್ತು ಕಂದಾಯ ದಾಖಲೆಗಳಿಂದ ಪರಿಶೀಲಿಸಲಾಗಿದೆ. ದಲ್ಲಾಳಿಗಳಿಗೆ ಅವಕಾಶವಿಲ್ಲ.",
    pillar2Title: "ಶೂನ್ಯ ದಲ್ಲಾಳಿ (0%)",
    pillar2Desc: "ಖರೀದಿದಾರರು ಮತ್ತು ಮಾಲೀಕರು ನೇರವಾಗಿ ಮಾತನಾಡುತ್ತಾರೆ. ಯಾವುದೇ ಕಮಿಷನ್ ಇಲ್ಲ.",
    pillar3Title: "ಸರ್ಕಾರಿ ಪೋರ್ಟಲ್ ಪರಿಶೀಲನೆ",
    pillar3Desc: "ಧರಣಿ (TG), ಭೂಮಿ (KA), ಮೀಭೂಮಿ (AP), ಪಟ್ಟಾ ಚಿಟ್ಟಾ (TN) ನೊಂದಿಗೆ ಪರಿಶೀಲಿಸಲಾಗಿದೆ.",
    featuredTagline: "ನೇರ ಭೂ ಮಾಲೀಕರ ಪ್ರದರ್ಶನ",
    featuredHeading: "ಪ್ರಮುಖ ಪರಿಶೀಲಿಸಿದ ಜಮೀನುಗಳು",
    featuredDesc: "ಸರ್ವೆ ಗಡಿ ಕಲ್ಲುಗಳು, ನೇರ ರಸ್ತೆ ಸಂಪರ್ಕ ಮತ್ತು ದೃಢೀಕೃತ ದಾಖಲೆಗಳು.",
    viewAllLands: "ಎಲ್ಲಾ ಜಮೀನುಗಳನ್ನು ವೀಕ್ಷಿಸಿ",
    farmerBadge: "ರೈತರು & ಭೂ ಮಾಲೀಕರಿಗಾಗಿ",
    sellerBannerTitle: "ಮಾರಾಟ ಮಾಡಲು ಕೃಷಿ ಜಮೀನು ಅಥವಾ ಸೈಟ್‌ಗಳಿವೆಯೇ?",
    sellerBannerDesc: "ದಲ್ಲಾಳಿಗಳಿಗೆ ಲಕ್ಷಾಂತರ ಕಮಿಷನ್ ಕೊಡುವುದನ್ನು ನಿಲ್ಲಿಸಿ! ನಿಮ್ಮ ಜಮೀನನ್ನು ಉಚಿತವಾಗಿ ನೊಂದಾಯಿಸಿ, ನೇರ ಖರೀದಿದಾರರನ್ನು ಪಡೆಯಿರಿ.",
    sellerBannerBtn: "ನಿಮ್ಮ ಜಮೀನನ್ನು 100% ಉಚಿತವಾಗಿ ಪ್ರಕಟಿಸಿ",
    sellerRegisterBtn: "ಭೂ ಮಾಲೀಕರಾಗಿ ನೊಂದಾಯಿಸಿ",
    brokerageSavedHero: "ದಲ್ಲಾಳಿ ಎಂದಿಗೂ ಇಲ್ಲ",
    exploreTitle: "ನೇರ ಜಮೀನುಗಳನ್ನು ಹುಡುಕಿ",
    exploreSubtitle: "ರಾಜ್ಯ, ಬೆಲೆ, ರಸ್ತೆ ಅಗಲ ಮತ್ತು ಮಣ್ಣಿನ ಪ್ರಕಾರದ ಆಧಾರದ ಮೇಲೆ ಫಿಲ್ಟರ್ ಮಾಡಿ. ಮಧ್ಯವರ್ತಿಗಳಿಲ್ಲ.",
    btnGridView: "ಗ್ರಿಡ್ ನೋಟ",
    btnMap: "ಜಿಪಿಎಸ್ ನಕ್ಷೆ",
    labelState: "ರಾಜ್ಯ / ಕಂದಾಯ",
    labelCategory: "ಜಮೀನಿನ ವರ್ಗ",
    labelMaxBudget: "ಗರಿಷ್ಠ ಬಜೆಟ್:",
    labelCorridor: "ಪ್ರದೇಶ ಅಥವಾ ತಾಲೂಕು",
    filterSearchPlaceholder: "ಉದಾ: ಸರ್ಜಾಪುರ, ದೇವನಹಳ್ಳಿ, NH-44...",
    btnResetFilters: "ಫಿಲ್ಟರ್ ಮರುಹೊಂದಿಸಿ",
    listTitle: "ನಿಮ್ಮ ಜಮೀನನ್ನು 100% ಉಚಿತವಾಗಿ ಪ್ರಕಟಿಸಿ",
    listSubtitle: "ಶೂನ್ಯ ದಲ್ಲಾಳಿ, ಯಾವುದೇ ಶುಲ್ಕವಿಲ್ಲ. ನೇರ ಖರೀದಿದಾರರನ್ನು ಸಂಪರ್ಕಿಸಿ.",
    step1Title: "ಜಮೀನಿನ ಸ್ಥಳ & ವರ್ಗ",
    step2Title: "ವಿಸ್ತೀರ್ಣ & ನೇರ ಬೆಲೆ",
    step3Title: "ರಸ್ತೆ, ನೀರು & ಮೂಲಸೌಕರ್ಯ",
    step4Title: "ಭೂ ಮಾಲೀಕರ ಸಂಪರ್ಕ & ಘೋಷಣೆ",
    publishBtn: "ಉಚಿತವಾಗಿ ಜಮೀನು ಪ್ರಕಟಿಸಿ",
    dashTitle: "ನಿರ್ವಹಣಾ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
    dashSubtitle: "ನಿಮ್ಮ ಜಮೀನು ಪ್ರಕಟಣೆಗಳು ಮತ್ತು ಭೇಟಿ ವಿನಂತಿಗಳನ್ನು ನಿರ್ವಹಿಸಿ.",
    dashMyListings: "ನನ್ನ ಜಮೀನುಗಳು",
    dashVisits: "ಭೇಟಿ ವಿಚಾರಣೆಗಳು",
    dashGovtLedgers: "ಸರ್ಕಾರಿ ದಾಖಲೆಗಳು",
    dashBrokerageSaved: "ಉಳಿಸಿದ ದಲ್ಲಾಳಿ ಹಣ",
    dashTabListings: "ನನ್ನ ಜಮೀನು ಪ್ರಕಟಣೆಗಳು",
    dashTabVisits: "ಖರೀದಿದಾರರ ಭೇಟಿಗಳು",
    dashTabBuyerVisits: "ನನ್ನ ನಿಗದಿತ ಭೇಟಿಗಳು",
    savedTitle: "ಉಳಿಸಿದ ಜಮೀನುಗಳು",
    savedSubtitle: "ನಿಮ್ಮ ಉಳಿಸಿದ ನೇರ ಜಮೀನುಗಳು. ತ್ವರಿತ ವೀಕ್ಷಣೆಗಾಗಿ.",
    calcTitle: "ದಕ್ಷಿಣ ಭಾರತದ ಭೂ ವಿಸ್ತೀರ್ಣ ಕ್ಯಾಲ್ಕುಲೇಟರ್",
    calcSubtitle: "ಎಕರೆ, ಗುಂಟೆ, ಸೆಂಟ್ಸ್, ಚದರ ಅಡಿ ನಡುವೆ ತ್ವರಿತ ಲೆಕ್ಕಾಚಾರ",
    authModalTitle: "ಸುರಕ್ಷಿತ ಲಾಗಿನ್",
    authModalSubtitle: "ದಕ್ಷಿಣ ಭಾರತದ ನೇರ ಭೂಮಿ ಮಾರುಕಟ್ಟೆ",
    authTabSignIn: "ಸೈನ್ ಇನ್",
    authTabSignUp: "ನೋಂದಣಿ",
    authTabPhone: "ಮೊಬೈಲ್ OTP",
    authGoogleBtn: "ಗೂಗಲ್ ಮೂಲಕ ಮುಂದುವರಿಯಿರಿ",
    cardCallOwner: "ಕರೆ ಮಾಡಿ",
    cardScheduleVisit: "ಭೇಟಿ ಬುಕ್ ಮಾಡಿ",
    cardDirectOwner: "ನೇರ ಮಾಲೀಕರು",
    cardZeroBrokerage: "0% ದಲ್ಲಾಳಿ",
    cardOwnerListed: "ಮಾಲೀಕರು ಪ್ರಕಟಿಸಿದ್ದು",
    cardRoad: "ರಸ್ತೆ",
    cardVerified: "ಪರಿಶೀಲಿಸಲಾಗಿದೆ",
    toastLanguageChanged: "ಭಾಷೆಯನ್ನು ಕನ್ನಡಕ್ಕೆ ಬದಲಾಯಿಸಲಾಗಿದೆ (Kannada)"
  },
  ta: {
    trustBanner: "100% நேரடி நில உரிமையாளர்கள் • பூஜ்ஜிய தரகு & இடைத்தரகர்கள் இல்லை",
    calcLink: "நில பரப்பளவு கால்குலேட்டர்",
    navHome: "முகப்பு",
    navExplore: "நிலங்கள்",
    navListFree: "பதிவிடு",
    navDashboard: "டாஷ்போர்டு",
    navSaved: "சேமித்தவை",
    navConverter: "பரப்பளவு மாற்றி",
    navSignIn: "உள்நுழை",
    navSignOut: "வெளியேறு",
    heroTrustPill: "பூஜ்ஜிய தரகு • 100% நேரடி உரிமையாளர்கள் மட்டும்",
    heroTitle: 'தென்னிந்தியாவின் நேரடி <br class="hidden sm:inline"><span class="text-transparent bg-clip-text bg-gradient-to-r from-tertiary-fixed via-secondary-container to-white">நிலங்கள் மற்றும் ஏக்கர் சந்தை</span>',
    heroSubtitle: "விவசாய நிலங்கள், வீட்டுமனைகள் மற்றும் தொழிற்பேட்டை நிலங்களுக்கான நேரடி தளம். தெளிவான பட்டா & நேரடி உரிமையாளர் தொடர்பு.",
    heroSearchPlaceholder: "பகுதி அல்லது மண்டலம் மூலம் தேடுங்கள் (கோயம்புத்தூர், காஞ்சிபுரம், ஓசூர்)...",
    heroSearchBtn: "நிலங்களை தேடு",
    viewInLang: "மொழியை தேர்ந்தெடுக்கவும்:",
    pillar1Title: "100% நேரடி உரிமையாளர்கள்",
    pillar1Desc: "ஆதார் மற்றும் வருவாய்த்துறை ஆவணங்கள் மூலம் சரிபார்க்கப்பட்டது. இடைத்தரகர்கள் இல்லை.",
    pillar2Title: "பூஜ்ஜிய தரகு (0%)",
    pillar2Desc: "வாங்குபவரும் விற்பவரும் நேரடியாகப் பேசலாம். கமிஷன் கட்டணம் கிடையாது.",
    pillar3Title: "அரசு போர்டல் சரிபார்ப்பு",
    pillar3Desc: "தரணி (TG), பூமி (KA), மீபூமி (AP), பட்டா சிட்டா (TN) மூலம் சரிபார்க்கப்பட்டது.",
    featuredTagline: "நேரடி நில உரிமையாளர் காட்சி",
    featuredHeading: "பிரத்யேக சரிபார்க்கப்பட்ட நிலங்கள்",
    featuredDesc: "எல்லைக் கற்கள், நேரடி சாலை அணுகல் மற்றும் உண்மையான நில ஆவணங்கள்.",
    viewAllLands: "அனைத்து நிலங்களையும் காண்க",
    farmerBadge: "விவசாயிகள் & நில உரிமையாளர்களுக்கு",
    sellerBannerTitle: "விற்க விவசாய நிலம் அல்லது மனைகள் உள்ளதா?",
    sellerBannerDesc: "இடைத்தரகர்களுக்கு லட்சக்கணக்கில் கமிஷன் கொடுப்பதை நிறுத்துங்கள்! இலவசமாக நிலத்தை பதிவிட்டு உண்மையான வாங்குபவர்களை நேரடியாகப் பெறுங்கள்.",
    sellerBannerBtn: "உங்கள் நிலத்தை 100% இலவசமாக பதிவிடுங்கள்",
    sellerRegisterBtn: "நில உரிமையாளராக பதிவு செய்",
    brokerageSavedHero: "எப்போதும் தரகு இல்லை",
    exploreTitle: "நேரடி நிலங்களை கண்டறியவும்",
    exploreSubtitle: "மாநிலம், விலை, சாலை அகலம் மற்றும் மண் வகை வாரியாக வடிகட்டவும். இடைத்தரகர் இல்லை.",
    btnGridView: "கட்டக் காட்சி",
    btnMap: "ஜிபிஎஸ் வரைபடம்",
    labelState: "மாநிலம் / வருவாய்",
    labelCategory: "நில வகை",
    labelMaxBudget: "அதிகபட்ச பட்ஜெட்:",
    labelCorridor: "பகுதி அல்லது மண்டலம்",
    filterSearchPlaceholder: "எ.கா: கோயம்புத்தூர், ஓசூர், NH-44...",
    btnResetFilters: "வடிகட்டிகளை மீட்டமை",
    listTitle: "உங்கள் நிலத்தை 100% இலவசமாக பதிவிடுங்கள்",
    listSubtitle: "பூஜ்ஜிய தரகு, கட்டணம் இல்லை. உண்மையான வாங்குபவர்களை நேரடியாக சென்றடையுங்கள்.",
    step1Title: "நிலத்தின் இருப்பிடம் & வகை",
    step2Title: "பரப்பளவு & நேரடி விலை",
    step3Title: "சாலை, நீர் & வசதிகள்",
    step4Title: "உரிமையாளர் தொடர்பு & உறுதிமொழி",
    publishBtn: "இலவசமாக நிலத்தை பதிவிடுங்கள்",
    dashTitle: "மேலாண்மை டாஷ்போர்டு",
    dashSubtitle: "உங்கள் நிலப் பதிவுகள் மற்றும் பார்வை கோரிக்கைகளை நிர்வகிக்கவும்.",
    dashMyListings: "எனது நிலங்கள்",
    dashVisits: "பார்வை கோரிக்கைகள்",
    dashGovtLedgers: "அரசு ஆவணங்கள்",
    dashBrokerageSaved: "சேமித்த தரகு",
    dashTabListings: "எனது நிலப் பதிவுகள்",
    dashTabVisits: "வாங்குபவர் பார்வை பதிவுகள்",
    dashTabBuyerVisits: "எனது பார்வை பதிவுகள்",
    savedTitle: "சேமித்த நிலங்கள்",
    savedSubtitle: "உங்கள் சேமிக்கப்பட்ட நேரடி நிலங்கள். விரைவான தொடர்புக்கு.",
    calcTitle: "தென்னிந்திய நில பரப்பளவு கால்குலேட்டர்",
    calcSubtitle: "ஏக்கர், சென்ட், குழி, சதுர அடி உடனடி மாற்றம்",
    authModalTitle: "பாதுகாப்பான உள்நுழைவு",
    authModalSubtitle: "தென்னிந்தியாவின் நேரடி நிலச் சந்தை",
    authTabSignIn: "உள்நுழை",
    authTabSignUp: "பதிவு செய்",
    authTabPhone: "மொபைல் OTP",
    authGoogleBtn: "கூகிள் மூலம் தொடரவும்",
    cardCallOwner: "அழைக்க",
    cardScheduleVisit: "முன்பதிவு செய்",
    cardDirectOwner: "நேரடி உரிமையாளர்",
    cardZeroBrokerage: "0% தரகு",
    cardOwnerListed: "உரிமையாளர் பதிவிட்டது",
    cardRoad: "சாலை",
    cardVerified: "சரிபார்க்கப்பட்டது",
    toastLanguageChanged: "மொழி தமிழுக்கு மாற்றப்பட்டது (Tamil)"
  },
  ml: {
    trustBanner: "100% നേരിട്ടുള്ള ഭൂവുടമകൾ മാത്രം • പൂജ്യം ബ്രോക്കറേജ് & ഇടനിലക്കാരില്ല",
    calcLink: "ഭൂമി അളവ് കാൽക്കുലേറ്റർ",
    navHome: "ഹോം",
    navExplore: "ഭൂമികൾ",
    navListFree: "ലിസ്റ്റ്",
    navDashboard: "ഡാഷ്‌ബോർഡ്",
    navSaved: "സേവ് ചെയ്തവ",
    navConverter: "കാൽക്കുലേറ്റർ",
    navSignIn: "സൈൻ ഇൻ",
    navSignOut: "ലോഗ് ഔട്ട്",
    heroTrustPill: "പൂജ്യം ബ്രോക്കറേജ് • 100% നേരിട്ടുള്ള ഭൂവുടമകൾ മാത്രം",
    heroTitle: 'ദക്ഷിണേന്ത്യയിലെ നേരിട്ടുള്ള <br class="hidden sm:inline"><span class="text-transparent bg-clip-text bg-gradient-to-r from-tertiary-fixed via-secondary-container to-white">ഭൂമി & ഏക്കർ വിപണി</span>',
    heroSubtitle: "കൃഷിഭൂമി, പ്ലോട്ടുകൾ, വ്യാവസായിക ഭൂമി എന്നിവയ്ക്കുള്ള നേരിട്ടുള്ള വിപണി. വ്യക്തമായ ആധാരങ്ങളും നേരിട്ടുള്ള ഉടമസ്ഥരുമായി ബന്ധപ്പെടലും.",
    heroSearchPlaceholder: "സ്ഥലം അല്ലെങ്കിൽ താലൂക്ക് പ്രകാരം തിരയുക (വയനാട്, പാലക്കാട്, ആലുവ)...",
    heroSearchBtn: "ഭൂമികൾ കണ്ടെത്തുക",
    viewInLang: "ഭാഷ തിരഞ്ഞെടുക്കുക:",
    pillar1Title: "100% നേരിട്ടുള്ള ഉടമകൾ",
    pillar1Desc: "ആധാർ, റവന്യൂ രേഖകൾ വഴി പരിശോധിച്ചുറപ്പിച്ചത്. ഇടനിലക്കാരില്ല.",
    pillar2Title: "പൂജ്യം ബ്രോക്കറേജ് (0%)",
    pillar2Desc: "വാങ്ങുന്നവരും വിൽക്കുന്നവരും നേരിട്ട് സംസാരിക്കുന്നു. കമ്മീഷൻ ഇല്ല.",
    pillar3Title: "സർക്കാർ പോർട്ടൽ പരിശോധന",
    pillar3Desc: "ധരണി (TG), ഭൂമി (KA), മീഭൂമി (AP), പട്ടാ ചിറ്റ (TN) എന്നിവ വഴി പരിശോധിച്ചത്.",
    featuredTagline: "നേരിട്ടുള്ള ഭൂവുടമകളുടെ തിരഞ്ഞെടുപ്പ്",
    featuredHeading: "തിരഞ്ഞെടുത്ത പരിശോധിച്ച ഭൂമികൾ",
    featuredDesc: "സർവേ അതിരുകൾ, നേരിട്ടുള്ള റോഡ് പ്രവേശനം, പരിശോധിച്ച രേഖകൾ.",
    viewAllLands: "എല്ലാ ഭൂമികളും കാണുക",
    farmerBadge: "കർഷകർക്കും ഭൂവുടമകൾക്കുമായി",
    sellerBannerTitle: "വിൽക്കാൻ കൃഷിഭൂമിയോ പ്ലോട്ടുകളോ ഉണ്ടോ?",
    sellerBannerDesc: "ദല്ലാളന്മാർക്ക് ലക്ഷങ്ങൾ കമ്മീഷൻ നൽകുന്നത് നിർത്തൂ! നിങ്ങളുടെ ഭൂമി സൗജന്യമായി ലിസ്റ്റ് ചെയ്ത് യഥാർത്ഥ വാങ്ങുന്നവരെ നേരിട്ട് കണ്ടെത്തൂ.",
    sellerBannerBtn: "നിങ്ങളുടെ ഭൂമി 100% സൗജന്യമായി ലിസ്റ്റ് ചെയ്യുക",
    sellerRegisterBtn: "ഭൂവുടമയായി രജിസ്റ്റർ ചെയ്യുക",
    brokerageSavedHero: "എന്നേക്കുമായി ബ്രോക്കറേജ് ഇല്ല",
    exploreTitle: "നേരിട്ടുള്ള ഭൂമികൾ തിരയുക",
    exploreSubtitle: "സംസ്ഥാനം, വില, റോഡ് വീതി, മണ്ണിന്റെ തരം എന്നിവ പ്രകാരം ഫിൽട്ടർ ചെയ്യുക. ഇടനിലക്കാരില്ല.",
    btnGridView: "ഗ്രിഡ് കാഴ്ച",
    btnMap: "ജിപിഎസ് മാപ്പ്",
    labelState: "സംസ്ഥാനം / റവന്യൂ",
    labelCategory: "ഭൂമി തരം",
    labelMaxBudget: "പരമാവധി ബജറ്റ്:",
    labelCorridor: "പ്രദേശം അല്ലെങ്കിൽ താലൂക്ക്",
    filterSearchPlaceholder: "ഉദാ: വയനാട്, പാലക്കാട്, NH-44...",
    btnResetFilters: "ഫിൽട്ടറുകൾ റീസെറ്റ് ചെയ്യുക",
    listTitle: "നിങ്ങളുടെ ഭൂമി 100% സൗജന്യമായി ലിസ്റ്റ് ചെയ്യുക",
    listSubtitle: "പൂജ്യം ബ്രോക്കറേജ്, സൗജന്യ ലിസ്റ്റിംഗ്. യഥാർത്ഥ വാങ്ങുന്നവരിലേക്ക് നേരിട്ടെത്തുക.",
    step1Title: "ഭൂമിയുടെ സ്ഥലം & തരം",
    step2Title: "അളവും നേരിട്ടുള്ള വിലയും",
    step3Title: "റോഡ്, വെള്ളം & സൗകര്യങ്ങൾ",
    step4Title: "ഉടമസ്ഥന്റെ വിവരങ്ങൾ & സത്യവാങ്മൂലം",
    publishBtn: "സൗജന്യമായി പ്രസിദ്ധീകരിക്കുക",
    dashTitle: "മാനേജ്‌മെന്റ് ഡാഷ്‌ബോർഡ്",
    dashSubtitle: "നിങ്ങളുടെ ലിസ്റ്റിംഗുകളും സന്ദർശന അഭ്യർത്ഥനകളും കൈകാര്യം ചെയ്യുക.",
    dashMyListings: "എന്റെ ലിസ്റ്റിംഗുകൾ",
    dashVisits: "സന്ദർശന അന്വേഷണങ്ങൾ",
    dashGovtLedgers: "സർക്കാർ രേഖകൾ",
    dashBrokerageSaved: "ലാഭിച്ച ബ്രോക്കറേജ്",
    dashTabListings: "എന്റെ ഭൂമി ലിസ്റ്റിംഗുകൾ",
    dashTabVisits: "വാങ്ങുന്നവരുടെ സന്ദർശനങ്ങൾ",
    dashTabBuyerVisits: "എന്റെ സന്ദർശനങ്ങൾ",
    savedTitle: "സേവ് ചെയ്ത ഭൂമികൾ",
    savedSubtitle: "നിങ്ങൾ സൂക്ഷിച്ച നേരിട്ടുള്ള ഭൂമികൾ. ഉടമസ്ഥരുമായി എളുപ്പത്തിൽ ബന്ധപ്പെടാൻ.",
    calcTitle: "ദക്ഷിണേന്ത്യൻ ഭൂമി അളവ് കാൽക്കുലേറ്റർ",
    calcSubtitle: "ഏക്കർ, സെന്റ്, സ്ക്വയർ ഫീറ്റ് എന്നിവ തൽക്ഷണം മാറ്റുക",
    authModalTitle: "സുരക്ഷിത ലോഗിൻ",
    authModalSubtitle: "ദക്ഷിണേന്ത്യയിലെ നേരിട്ടുള്ള ഭൂമി വിപണി",
    authTabSignIn: "സൈൻ ഇൻ",
    authTabSignUp: "രജിസ്റ്റർ",
    authTabPhone: "മൊബൈൽ OTP",
    authGoogleBtn: "ഗൂഗിൾ വഴി തുടരുക",
    cardCallOwner: "വിളിക്കുക",
    cardScheduleVisit: "സന്ദർശനം ബുക്ക് ചെയ്യുക",
    cardDirectOwner: "നേരിട്ടുള്ള ഉടമ",
    cardZeroBrokerage: "0% ബ്രോക്കറേജ്",
    cardOwnerListed: "ഉടമസ്ഥൻ ലിസ്റ്റ് ചെയ്തത്",
    cardRoad: "റോഡ്",
    cardVerified: "പരിശോധിച്ചു",
    toastLanguageChanged: "ഭാഷ മലയാളത്തിലേക്ക് മാറ്റി (Malayalam)"
  }
};

// App State Management
class LandApp {
  constructor() {
    this.properties = this.loadProperties();
    this.currentView = 'home';
    this.selectedPropertyId = null;
    this.savedPropertyIds = this.loadSavedProperties();
    this.activeFilters = {
      state: 'All',
      corridor: 'All',
      category: 'All',
      maxPriceCr: 10,
      minAreaAcre: 0,
      roadAccess: 'All',
      waterSource: 'All',
      conversionStatus: 'All',
      searchKeyword: ''
    };
    this.viewMode = 'grid'; // 'grid' | 'map'
    this.mapInstance = null;
    this.markersGroup = null;
    this.currentLanguage = 'en'; // 'en' | 'te' | 'kn' | 'ta' | 'ml'

    this.init();
  }

  loadProperties() {
    return [...INITIAL_PROPERTIES];
  }

  escapeHtml(value) {
    return String(value ?? '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  authHeaders(extra = {}) {
    const headers = { ...extra };
    const token = localStorage.getItem('insightliker_session_token');
    if (token) headers.Authorization = `Bearer ${token}`;
    return headers;
  }

  parseIndianAmount(text) {
    const cleaned = String(text || '').replace(/₹/g, '').replace(/,/g, '').trim().toLowerCase();
    const num = parseFloat(cleaned);
    if (!Number.isFinite(num) || num <= 0) return 0;
    if (cleaned.includes('crore') || /(^|\s)cr(\s|$)/.test(cleaned)) return num * 10000000;
    if (cleaned.includes('lakh') || cleaned.includes('lac')) return num * 100000;
    return num;
  }

  formatINR(amount) {
    if (amount >= 10000000) {
      const crores = amount / 10000000;
      return `₹${crores.toFixed(crores >= 10 ? 1 : 2)} Crores`;
    }
    if (amount >= 100000) {
      const lakhs = amount / 100000;
      return `₹${lakhs.toFixed(lakhs >= 10 ? 1 : 2)} Lakhs`;
    }
    return `₹${Math.round(amount).toLocaleString('en-IN')}`;
  }

  extentToAcres(value, unit) {
    switch (unit) {
      case 'Acres': return value;
      case 'Guntas': return value / 40;
      case 'Cents': return value / 100;
      case 'Sq.Yards': return (value * 9) / 43560;
      case 'Sq.Ft': return value / 43560;
      default: return value;
    }
  }

  applyAccount(user) {
    this.account = user || null;
    if (window.firebaseAuth) {
      window.firebaseAuth.currentUser = user ? {
        uid: user.id,
        displayName: user.name,
        email: user.email,
        phone: user.phone || '',
        role: user.role,
        photoURL: null,
        isVerified: true,
        provider: 'password'
      } : null;
      window.firebaseAuth.currentRole = user ? user.role : 'buyer';
    }
    this.onAuthStateChange(window.firebaseAuth ? window.firebaseAuth.currentUser : null);
    if (this.currentView === 'dashboard') this.renderDashboard();
    if (this.currentView === 'home') this.renderHome();
    if (this.currentView === 'properties') this.renderProperties();
  }

  async restoreSession() {
    const token = localStorage.getItem('insightliker_session_token');
    if (!token) return;
    try {
      const res = await fetch('/api/auth/me', { headers: this.authHeaders() });
      if (!res.ok) {
        localStorage.removeItem('insightliker_session_token');
        return;
      }
      const json = await res.json();
      this.applyAccount(json.user);
    } catch (err) {
      console.warn('Session restore skipped', err.message);
    }
  }

  upsertProperty(property) {
    const idx = this.properties.findIndex((item) => item.id === property.id);
    if (idx >= 0) this.properties[idx] = property;
    else this.properties.unshift(property);
  }

  loadSavedProperties() {
    try {
      const saved = localStorage.getItem('insightliker_saved_properties');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  }

  toggleSaveProperty(id) {
    const idx = this.savedPropertyIds.indexOf(id);
    if (idx > -1) {
      this.savedPropertyIds.splice(idx, 1);
      this.showToast("Property removed from Saved Listings");
    } else {
      this.savedPropertyIds.push(id);
      this.showToast("Property bookmarked to Saved Listings!");
    }
    localStorage.setItem('insightliker_saved_properties', JSON.stringify(this.savedPropertyIds));
    this.updateSavedBadgeCount();
    // Re-render currently visible card bookmarks
    document.querySelectorAll(`[data-bookmark-id="${id}"]`).forEach(btn => {
      const isSaved = this.savedPropertyIds.includes(id);
      btn.innerHTML = `<span class="material-symbols-outlined text-[20px] ${isSaved ? 'text-secondary fill-1' : 'text-on-surface-variant'}">${isSaved ? 'bookmark_added' : 'bookmark_border'}</span>`;
    });
  }

  updateSavedBadgeCount() {
    const count = this.savedPropertyIds.length;
    const badge = document.getElementById('savedNavBadge');
    if (badge) {
      badge.textContent = count;
      badge.classList.toggle('hidden', count === 0);
    }
  }

  init() {
    this.setupRouter();
    this.setupGlobalListeners();
    this.onAuthStateChange(this.account);
    this.initAuth();
    
    // Load persisted language or default to en
    try {
      const savedLang = localStorage.getItem('insightliker_lang') || 'en';
      this.setLanguage(savedLang, false);
    } catch (e) {
      this.currentLanguage = 'en';
    }

    this.renderHome();
    this.updateSavedBadgeCount();
    this.boot();
  }

  async boot() {
    await this.restoreSession();
    await this.syncServerProperties();
  }

  async syncServerProperties() {
    try {
      const res = await fetch('/api/properties', { headers: this.authHeaders() });
      if (!res.ok) return;
      const json = await res.json();
      const serverProps = Array.isArray(json.data) ? json.data : [];
      const serverIds = new Set(serverProps.map((property) => property.id));
      this.properties = [
        ...serverProps,
        ...INITIAL_PROPERTIES.filter((property) => !serverIds.has(property.id))
      ];

      if (this.account && this.account.role === 'seller') {
        const mineRes = await fetch('/api/me/listings', { headers: this.authHeaders() });
        if (mineRes.ok) {
          const mineJson = await mineRes.json();
          (mineJson.data || []).forEach((property) => this.upsertProperty(property));
        }
      }

      if (this.currentView === 'properties') this.renderProperties();
      else if (this.currentView === 'home') this.renderHome();
      else if (this.currentView === 'saved') this.renderSavedProperties();
      else if (this.currentView === 'dashboard') this.renderDashboard();
    } catch (e) {
      // Catalog seed stays visible if the API is offline.
    }
  }

  setupRouter() {
    const handleHash = () => {
      const hash = window.location.hash.slice(1) || 'home';
      const parts = hash.split('/');
      const mainRoute = parts[0];
      const param = parts[1];

      if (mainRoute === 'property' && param) {
        this.openPropertyDetail(param, false);
      } else {
        this.switchView(mainRoute, param);
      }
    };

    window.addEventListener('hashchange', handleHash);
    handleHash();
  }

  switchView(viewName, param = null) {
    this.currentView = viewName;
    const appViews = ['home', 'properties', 'list-property', 'dashboard', 'about', 'contact', 'saved'];
    
    appViews.forEach(v => {
      const el = document.getElementById(`view-${v}`);
      if (el) {
        el.classList.toggle('hidden', v !== viewName);
      }
    });

    // Close any open modals
    this.closeModal('propertyDetailModal');
    this.closeModal('ownerContactModal');
    this.closeModal('reportBrokerModal');
    this.closeModal('unitConverterModal');

    // Update active nav state
    this.updateNavHighlight(viewName);

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // View specific activations
    if (viewName === 'properties') {
      if (param && param.startsWith('state-')) {
        this.activeFilters.state = decodeURIComponent(param.replace('state-', ''));
        const stateSelect = document.getElementById('filterStateSelect');
        if (stateSelect) stateSelect.value = this.activeFilters.state;
      }
      this.renderProperties();
    } else if (viewName === 'saved') {
      this.renderSavedProperties();
    } else if (viewName === 'home') {
      this.renderHome();
    } else if (viewName === 'dashboard') {
      this.renderDashboard();
    }
  }

  updateNavHighlight(viewName) {
    document.querySelectorAll('[data-nav-target]').forEach(link => {
      const target = link.getAttribute('data-nav-target');
      const isActive = target === viewName;
      if (link.classList.contains('mobile-nav-item')) {
        link.classList.toggle('text-primary', isActive);
        link.classList.toggle('font-bold', isActive);
        link.classList.toggle('text-on-surface-variant', !isActive);
      } else {
        link.classList.toggle('text-primary', isActive);
        link.classList.toggle('font-semibold', isActive);
      }
    });
  }

  setupGlobalListeners() {
    // Mobile Drawer Toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileDrawer = document.getElementById('mobileDrawer');
    const closeDrawerBtn = document.getElementById('closeDrawerBtn');

    if (mobileMenuBtn && mobileDrawer) {
      mobileMenuBtn.addEventListener('click', () => {
        mobileDrawer.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
      });
    }
    if (closeDrawerBtn && mobileDrawer) {
      closeDrawerBtn.addEventListener('click', () => {
        mobileDrawer.classList.add('hidden');
        document.body.style.overflow = '';
      });
    }

    // State Header Selector
    const stateSelector = document.getElementById('headerStateSelect');
    if (stateSelector) {
      stateSelector.addEventListener('change', (e) => {
        const val = e.target.value;
        if (val === 'all') {
          this.activeFilters.state = 'All';
        } else {
          this.activeFilters.state = val;
        }
        window.location.hash = 'properties';
        this.renderProperties();
      });
    }

    const headerLang = document.getElementById('headerLangSelect');
    if (headerLang) {
      headerLang.addEventListener('change', (e) => this.setLanguage(e.target.value));
    }

    // Language Selector
    const langBtns = document.querySelectorAll('[data-lang]');
    langBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const lang = btn.getAttribute('data-lang');
        this.setLanguage(lang);
      });
    });

    // Unit Converter trigger
    const converterBtn = document.getElementById('unitConverterBtn');
    if (converterBtn) {
      converterBtn.addEventListener('click', () => {
        this.openUnitConverter();
      });
    }

    // Properties Live Filter Listeners
    const stateFilter = document.getElementById('filterStateSelect');
    if (stateFilter) {
      stateFilter.addEventListener('change', (e) => {
        this.activeFilters.state = e.target.value;
        this.renderProperties();
      });
    }

    const catFilter = document.getElementById('filterCategorySelect');
    if (catFilter) {
      catFilter.addEventListener('change', (e) => {
        this.activeFilters.category = e.target.value;
        this.renderProperties();
      });
    }

    const priceSlider = document.getElementById('filterPriceRange');
    const priceDisplay = document.getElementById('filterPriceDisplay');
    if (priceSlider) {
      priceSlider.addEventListener('input', (e) => {
        const val = parseFloat(e.target.value);
        this.activeFilters.maxPriceCr = val;
        if (priceDisplay) {
          priceDisplay.textContent = val >= 10 ? 'Up to ₹10+ Crores' : `Up to ₹${val.toFixed(1)} Crores`;
        }
        this.renderProperties();
      });
    }

    const searchInput = document.getElementById('filterSearchKeyword');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.activeFilters.searchKeyword = e.target.value.trim();
        this.renderProperties();
      });
    }

    // Click outside to close user dropdown menu
    document.addEventListener('click', (e) => {
      const userMenu = document.getElementById('authNavUser');
      const dropdown = document.getElementById('authUserDropdown');
      if (dropdown && !dropdown.classList.contains('hidden') && userMenu && !userMenu.contains(e.target)) {
        dropdown.classList.add('hidden');
      }
    });
  }

  setLanguage(lang, showToast = true) {
    if (!TRANSLATIONS[lang]) lang = 'en';
    this.currentLanguage = lang;
    try {
      localStorage.setItem('insightliker_lang', lang);
    } catch (e) {}

    document.documentElement.lang = lang;

    const headerSelect = document.getElementById('headerLangSelect');
    if (headerSelect && headerSelect.value !== lang) {
      headerSelect.value = lang;
    }

    document.querySelectorAll('[data-lang]').forEach(b => {
      const isSel = b.getAttribute('data-lang') === lang;
      b.classList.toggle('is-lang-active', isSel);
      b.setAttribute('aria-pressed', isSel ? 'true' : 'false');
    });

    const dict = TRANSLATIONS[lang] || TRANSLATIONS['en'];

    // Update all [data-i18n] text elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.innerHTML = dict[key];
      }
    });

    // Update all [data-i18n-placeholder] inputs
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (dict[key]) {
        el.setAttribute('placeholder', dict[key]);
      }
    });

    // Explicitly update Hero search placeholder
    const heroSearchInput = document.getElementById('heroSearchInput');
    if (heroSearchInput && dict.heroSearchPlaceholder) {
      heroSearchInput.setAttribute('placeholder', dict.heroSearchPlaceholder);
    }

    // Explicitly update Filter search placeholder
    const filterSearchKeyword = document.getElementById('filterSearchKeyword');
    if (filterSearchKeyword && dict.filterSearchPlaceholder) {
      filterSearchKeyword.setAttribute('placeholder', dict.filterSearchPlaceholder);
    }

    // Update hero subtitle hint
    const hintEl = document.getElementById('heroLangHint');
    if (hintEl && dict.heroSubtitle) {
      hintEl.textContent = dict.heroSubtitle;
    }

    // Re-render currently visible card collections so button labels and badges update
    if (this.currentView === 'home') {
      this.renderHome();
    } else if (this.currentView === 'properties') {
      this.renderProperties();
    } else if (this.currentView === 'saved') {
      this.renderSavedProperties();
    } else if (this.currentView === 'dashboard') {
      this.renderDashboard();
    }

    if (showToast && dict.toastLanguageChanged) {
      this.showToast(dict.toastLanguageChanged);
    }
  }

  showToast(message, type = 'info') {
    const toast = document.getElementById('globalToast');
    const toastMsg = document.getElementById('globalToastMessage');
    if (!toast || !toastMsg) return;

    toastMsg.textContent = message;
    toast.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-4');
    toast.classList.add('opacity-100', 'translate-y-0');

    clearTimeout(this.toastTimeout);
    this.toastTimeout = setTimeout(() => {
      toast.classList.add('opacity-0', 'pointer-events-none', 'translate-y-4');
      toast.classList.remove('opacity-100', 'translate-y-0');
    }, 3200);
  }

  closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.add('hidden');
      document.body.style.overflow = '';
    }
  }

  openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }
  }

  // Unit Converter Logic
  openUnitConverter() {
    this.openModal('unitConverterModal');
  }

  convertUnits(sourceUnit, value) {
    const val = parseFloat(value) || 0;
    // Standard Base Unit: Square Feet
    // 1 Acre = 43,560 sq.ft
    // 1 Gunta = 1,089 sq.ft (Telangana / Karnataka: 40 Guntas = 1 Acre)
    // 1 Cent = 435.6 sq.ft (Tamil Nadu / Kerala / AP: 100 Cents = 1 Acre)
    // 1 Ground = 2,400 sq.ft (Chennai / TN)
    // 1 Sq.Yard (Gajam) = 9 sq.ft
    // 1 Ankanam = 72 sq.ft (Rayalaseema / Nellore)
    let sqft = 0;
    switch (sourceUnit) {
      case 'acre': sqft = val * 43560; break;
      case 'gunta': sqft = val * 1089; break;
      case 'cent': sqft = val * 435.6; break;
      case 'ground': sqft = val * 2400; break;
      case 'sqyd': sqft = val * 9; break;
      case 'sqft': sqft = val; break;
    }

    const acres = (sqft / 43560).toFixed(4);
    const guntas = (sqft / 1089).toFixed(2);
    const cents = (sqft / 435.6).toFixed(2);
    const grounds = (sqft / 2400).toFixed(2);
    const sqyds = (sqft / 9).toFixed(1);
    const sqfeet = Math.round(sqft);

    const updateField = (id, computed) => {
      const el = document.getElementById(id);
      if (el && id !== `conv-${sourceUnit}`) {
        el.value = isNaN(computed) || val === 0 ? '' : computed;
      }
    };

    updateField('conv-acre', acres);
    updateField('conv-gunta', guntas);
    updateField('conv-cent', cents);
    updateField('conv-ground', grounds);
    updateField('conv-sqyd', sqyds);
    updateField('conv-sqft', sqfeet);
  }

  // Property Detail View & Owner Contact Modal
  openPropertyDetail(id, updateHash = true) {
    const prop = this.properties.find(p => p.id === id);
    if (!prop) return;

    this.selectedPropertyId = id;
    if (updateHash) {
      window.location.hash = `property/${id}`;
    }

    const modal = document.getElementById('propertyDetailModal');
    const container = document.getElementById('propertyDetailContent');
    if (!modal || !container) return;

    const isSaved = this.savedPropertyIds.includes(prop.id);

    container.innerHTML = `
      <div class="flex flex-col gap-6">
        <!-- Breadcrumbs & Quick Back -->
        <div class="flex items-center justify-between pb-3 border-b border-border-light">
          <div class="flex items-center gap-2 text-sm text-on-surface-variant flex-wrap">
            <a href="#properties" class="hover:text-primary transition-colors flex items-center gap-1 font-medium">
              <span class="material-symbols-outlined text-[18px]">arrow_back</span>
              All Properties
            </a>
            <span>/</span>
            <span class="text-primary font-semibold">${prop.state}</span>
            <span>/</span>
            <span class="text-on-surface font-medium truncate max-w-[200px]">${prop.corridor}</span>
          </div>

          <div class="flex items-center gap-2">
            <button onclick="app.toggleSaveProperty('${prop.id}')" data-bookmark-id="${prop.id}" class="w-10 h-10 rounded-full border border-border-light hover:bg-surface-container flex items-center justify-center transition-colors" title="Bookmark Property">
              <span class="material-symbols-outlined text-[20px] ${isSaved ? 'text-secondary fill-1' : 'text-on-surface-variant'}">${isSaved ? 'bookmark_added' : 'bookmark_border'}</span>
            </button>
            <button onclick="app.shareProperty('${prop.id}')" class="w-10 h-10 rounded-full border border-border-light hover:bg-surface-container flex items-center justify-center transition-colors" title="Share Listing">
              <span class="material-symbols-outlined text-[20px] text-on-surface-variant">share</span>
            </button>
            <button onclick="app.closeModal('propertyDetailModal')" class="w-10 h-10 rounded-full bg-surface-container hover:bg-surface-container-high flex items-center justify-center text-on-surface transition-colors" title="Close">
              <span class="material-symbols-outlined text-[22px]">close</span>
            </button>
          </div>
        </div>

        <!-- Hero Header & Trust Badges -->
        <div class="flex flex-col md:flex-row md:items-start justify-between gap-4">
          <div class="flex flex-col gap-2">
            <div class="flex flex-wrap items-center gap-2">
              <span class="px-3 py-1 rounded-full bg-surface-container text-primary font-semibold text-xs flex items-center gap-1">
                <span class="material-symbols-outlined text-[16px] text-primary">verified</span>
                ${prop.govtPortal}
              </span>
              <span class="owner-listed-chip px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                <span class="material-symbols-outlined text-[16px]">person_check</span>
                DIRECT OWNER LISTED (0% BROKERAGE)
              </span>
              <span class="px-2.5 py-1 rounded-full bg-surface-container-high text-on-surface font-semibold text-xs">
                ${prop.category}
              </span>
            </div>
            <h1 class="text-2xl md:text-3xl font-heading font-bold text-primary tracking-tight mt-1">
              ${prop.title}
            </h1>
            <p class="text-sm md:text-base text-secondary font-medium flex items-center gap-1.5">
              <span class="material-symbols-outlined text-[18px]">location_on</span>
              ${prop.village}, ${prop.corridor}, ${prop.state}
            </p>
          </div>

          <!-- Price & Extent Pill Box -->
          <div class="p-4 rounded-xl bg-surface-container-low border border-surface-container flex flex-col items-start md:items-end justify-center shrink-0">
            <span class="text-xs uppercase tracking-wider text-on-surface-variant font-medium">Direct Asking Price</span>
            <div class="text-2xl md:text-3xl font-heading font-extrabold text-primary">
              ${prop.priceDisplay}
            </div>
            <span class="text-xs font-semibold text-secondary mt-0.5">${prop.pricePerUnit} • ${prop.extent}</span>
          </div>
        </div>

        <!-- High-Resolution Visual Gallery -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-3 rounded-2xl overflow-hidden border border-border-light bg-surface-container">
          <div class="md:col-span-2 relative aspect-[16/10] overflow-hidden group">
            <img src="${prop.images[0]}" alt="${prop.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
            <div class="absolute bottom-3 left-3 px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-md text-white text-xs font-semibold flex items-center gap-1.5">
              <span class="material-symbols-outlined text-[16px] text-tertiary-fixed">photo_camera</span>
              Original Land Photo • Verified Site Pegs
            </div>
          </div>
          <div class="hidden md:flex flex-col gap-3">
            <div class="relative flex-1 aspect-[16/9] overflow-hidden">
              <img src="${prop.images[1] || prop.images[0]}" alt="Boundary overview" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500">
            </div>
            <div class="p-4 rounded-xl bg-surface-container-lowest border border-border-light flex flex-col justify-between">
              <div>
                <span class="text-xs font-bold text-secondary uppercase tracking-wider">Land Registry Sync</span>
                <p class="text-xs text-on-surface-variant mt-1 leading-relaxed">
                  Single-owner title verified on ${prop.state} digital land ledger. Direct registration at Sub-Registrar.
                </p>
              </div>
              <a href="${prop.govtPortalUrl}" target="_blank" rel="noopener" class="text-xs font-bold text-primary hover:text-secondary inline-flex items-center gap-1 mt-2">
                Verify on ${prop.state} Portal <span class="material-symbols-outlined text-[14px]">open_in_new</span>
              </a>
            </div>
          </div>
        </div>

        <!-- 2-Column Main Layout: Specs on Left, Direct Owner Contact on Right -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          <!-- Left Specs Column (8 Cols) -->
          <div class="lg:col-span-8 flex flex-col gap-6">

            <!-- Overview & Description -->
            <div class="p-6 rounded-2xl bg-white border border-border-light flex flex-col gap-3">
              <h2 class="text-lg font-heading font-bold text-primary flex items-center gap-2">
                <span class="material-symbols-outlined text-secondary">description</span>
                Land Overview & History
              </h2>
              <p class="text-sm md:text-base text-on-surface-variant leading-relaxed">
                ${prop.description}
              </p>
              <div class="pt-3 border-t border-border-light flex flex-wrap gap-2 text-xs">
                <span class="px-2.5 py-1 rounded bg-surface-container font-medium text-on-surface"><strong>Suitable For:</strong> ${prop.suitableFor}</span>
                <span class="px-2.5 py-1 rounded bg-surface-container font-medium text-on-surface"><strong>Survey Number:</strong> ${prop.surveyNo}</span>
              </div>
            </div>

            <!-- Land Specification Matrix -->
            <div class="p-6 rounded-2xl bg-white border border-border-light flex flex-col gap-4">
              <h2 class="text-lg font-heading font-bold text-primary flex items-center gap-2">
                <span class="material-symbols-outlined text-secondary">fact_check</span>
                Land Specifications & Water Audit
              </h2>
              
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div class="p-3 rounded-xl bg-surface-container-low flex flex-col gap-1">
                  <span class="text-xs text-on-surface-variant font-medium">Road Approach & Frontage</span>
                  <span class="font-bold text-on-surface flex items-center gap-1">
                    <span class="material-symbols-outlined text-[16px] text-secondary">add_road</span>
                    ${prop.roadAccess}
                  </span>
                </div>

                <div class="p-3 rounded-xl bg-surface-container-low flex flex-col gap-1">
                  <span class="text-xs text-on-surface-variant font-medium">Water Source & Borewell</span>
                  <span class="font-bold text-on-surface flex items-center gap-1">
                    <span class="material-symbols-outlined text-[16px] text-primary">water_drop</span>
                    ${prop.waterSource}
                  </span>
                </div>

                <div class="p-3 rounded-xl bg-surface-container-low flex flex-col gap-1">
                  <span class="text-xs text-on-surface-variant font-medium">Soil Classification</span>
                  <span class="font-bold text-on-surface flex items-center gap-1">
                    <span class="material-symbols-outlined text-[16px] text-secondary">terrain</span>
                    ${prop.soilType}
                  </span>
                </div>

                <div class="p-3 rounded-xl bg-surface-container-low flex flex-col gap-1">
                  <span class="text-xs text-on-surface-variant font-medium">Electricity Supply</span>
                  <span class="font-bold text-on-surface flex items-center gap-1">
                    <span class="material-symbols-outlined text-[16px] text-primary">bolt</span>
                    ${prop.electricity}
                  </span>
                </div>

                <div class="p-3 rounded-xl bg-surface-container-low flex flex-col gap-1">
                  <span class="text-xs text-on-surface-variant font-medium">Boundary & Fencing</span>
                  <span class="font-bold text-on-surface flex items-center gap-1">
                    <span class="material-symbols-outlined text-[16px] text-secondary">fence</span>
                    ${prop.fencing}
                  </span>
                </div>

                <div class="p-3 rounded-xl bg-surface-container-low flex flex-col gap-1">
                  <span class="text-xs text-on-surface-variant font-medium">Zoning & Conversion</span>
                  <span class="font-bold text-on-surface flex items-center gap-1">
                    <span class="material-symbols-outlined text-[16px] text-primary">gavel</span>
                    ${prop.conversionStatus}
                  </span>
                </div>
              </div>
            </div>

            <!-- Verified Document Checklist -->
            <div class="p-6 rounded-2xl bg-white border border-border-light flex flex-col gap-4">
              <div class="flex items-center justify-between">
                <h2 class="text-lg font-heading font-bold text-primary flex items-center gap-2">
                  <span class="material-symbols-outlined text-secondary">verified_user</span>
                  Verified Documents Checklist
                </h2>
                <span class="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary font-bold text-xs">100% Freehold Title</span>
              </div>
              <p class="text-xs text-on-surface-variant">
                Every listed document has been checked against official State land records. Buyers are encouraged to cross-check survey stones and EC prior to token payment.
              </p>

              <div class="flex flex-col gap-2">
                ${prop.documents.map(doc => `
                  <div class="p-3 rounded-xl bg-surface-container-lowest border border-border-light flex items-center justify-between">
                    <div class="flex items-center gap-3">
                      <div class="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                        <span class="material-symbols-outlined text-[18px]">check_circle</span>
                      </div>
                      <div class="flex flex-col">
                        <span class="font-bold text-sm text-on-surface">${doc.name}</span>
                        <span class="text-[11px] text-on-surface-variant">${doc.id}</span>
                      </div>
                    </div>
                    <span class="px-2.5 py-1 rounded bg-surface-container font-semibold text-xs text-primary">
                      ${doc.status}
                    </span>
                  </div>
                `).join('')}
              </div>
            </div>

            <!-- Regional Land Unit Breakdown (Acres, Guntas, Cents) -->
            <div class="p-6 rounded-2xl bg-surface-container-lowest border border-border-light flex flex-col gap-3">
              <h3 class="text-sm font-bold text-on-surface uppercase tracking-wider flex items-center gap-1.5">
                <span class="material-symbols-outlined text-[18px] text-secondary">calculate</span>
                Regional Extent Equivalents for South Indian Buyers
              </h3>
              <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
                <div class="p-2.5 rounded-lg bg-surface-container">
                  <span class="text-on-surface-variant block">Acres</span>
                  <span class="font-bold text-primary text-sm">${(prop.extentNum).toFixed(2)} Ac</span>
                </div>
                <div class="p-2.5 rounded-lg bg-surface-container">
                  <span class="text-on-surface-variant block">Guntas (TS/KA)</span>
                  <span class="font-bold text-primary text-sm">${(prop.extentNum * 40).toFixed(1)} Gts</span>
                </div>
                <div class="p-2.5 rounded-lg bg-surface-container">
                  <span class="text-on-surface-variant block">Cents (AP/TN/KL)</span>
                  <span class="font-bold text-primary text-sm">${(prop.extentNum * 100).toFixed(0)} Cents</span>
                </div>
                <div class="p-2.5 rounded-lg bg-surface-container">
                  <span class="text-on-surface-variant block">Sq. Yards (Gajalu)</span>
                  <span class="font-bold text-primary text-sm">${Math.round(prop.extentNum * 4840).toLocaleString()} Sq.Yds</span>
                </div>
              </div>
            </div>

          </div>

          <!-- Right Sticky Direct Owner Column (4 Cols) -->
          <div class="lg:col-span-4 sticky top-20 flex flex-col gap-4">
            
            <!-- Owner Contact Card -->
            <div class="p-6 rounded-2xl bg-white border-2 border-primary/20 shadow-md flex flex-col gap-4">
              <div class="flex items-center gap-3">
                <div class="w-14 h-14 rounded-full bg-primary-container text-white font-heading font-extrabold text-xl flex items-center justify-center shadow-sm">
                  ${prop.owner.avatarInitials}
                </div>
                <div class="flex flex-col">
                  <span class="text-xs font-bold text-secondary uppercase tracking-wider">Verified Direct Landowner</span>
                  <h3 class="text-lg font-heading font-bold text-on-surface">${prop.owner.name}</h3>
                  <span class="text-xs text-on-surface-variant">${prop.owner.ownershipYears}</span>
                </div>
              </div>

              <!-- Direct Guarantee Pill -->
              <div class="p-3 rounded-xl bg-surface-container-low border border-surface-container flex items-center gap-2">
                <span class="material-symbols-outlined text-secondary text-[22px] shrink-0">handshake</span>
                <p class="text-xs text-on-surface-variant leading-tight">
                  <strong class="text-primary">100% Direct Owner:</strong> No broker cut. You negotiate directly with Sri ${prop.owner.name}.
                </p>
              </div>

              <!-- Primary CTAs -->
              <div class="flex flex-col gap-2.5 pt-1">
                <button onclick="app.revealOwnerContact('${prop.id}', 'call')" class="w-full py-3.5 px-4 rounded-xl btn-primary-kinetic font-semibold text-sm flex items-center justify-center gap-2 shadow-sm">
                  <span class="material-symbols-outlined text-[20px]">call</span>
                  <span>Call Landowner Directly</span>
                </button>

                <button onclick="app.revealOwnerContact('${prop.id}', 'whatsapp')" class="w-full py-3 px-4 rounded-xl bg-surface-container-high hover:bg-surface-container text-primary font-semibold text-sm flex items-center justify-center gap-2 transition-colors">
                  <span class="material-symbols-outlined text-[20px] text-secondary">chat</span>
                  <span>WhatsApp Sri ${prop.owner.name.split(' ')[0]}</span>
                </button>

                <button onclick="app.openSiteVisitScheduler('${prop.id}')" class="w-full py-2.5 px-4 rounded-xl border border-primary text-primary hover:bg-primary/5 font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors">
                  <span class="material-symbols-outlined text-[18px]">calendar_month</span>
                  <span>Request Direct Field Visit</span>
                </button>
              </div>

              <!-- Zero Brokerage Assurance -->
              <div class="text-center pt-2 border-t border-border-light">
                <span class="text-[11px] font-semibold text-on-surface-variant block">
                  Zero Commission • No Registration Charge by InSightLiker
                </span>
                <button onclick="app.openReportBroker('${prop.id}')" class="text-[11px] text-secondary hover:underline mt-1 font-medium inline-flex items-center gap-1">
                  <span class="material-symbols-outlined text-[14px]">flag</span>
                  Report if anyone claims to be a broker
                </button>
              </div>
            </div>

            <!-- State Land Authority Assistance Box -->
            <div class="p-4 rounded-2xl bg-surface-container-low border border-border-light flex flex-col gap-2">
              <span class="text-xs font-bold text-primary flex items-center gap-1">
                <span class="material-symbols-outlined text-[16px]">account_balance</span>
                ${prop.state} Land Registration Steps
              </span>
              <ul class="text-xs text-on-surface-variant flex flex-col gap-1.5 pl-4 list-disc">
                <li>Verify Pattadar name on ${prop.govtPortal}</li>
                <li>Obtain 30-year online Nil Encumbrance (EC)</li>
                <li>Physical survey boundary stone inspection</li>
                <li>Direct slot booking at local Sub-Registrar Office</li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    `;

    this.openModal('propertyDetailModal');
  }

  shareProperty(id) {
    const url = `${window.location.origin}${window.location.pathname}#property/${id}`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(url).then(() => {
        this.showToast("Direct property link copied to clipboard!");
      });
    } else {
      this.showToast(`Direct Link: ${url}`);
    }
  }

  async revealOwnerContact(id, method = 'call') {
    if (!this.account) {
      this.openAuthModal('signin', 'buyer');
      this.showToast('Sign in to view the landowner phone number.');
      return;
    }
    let prop = this.properties.find(p => p.id === id);
    if (!prop) return;
    if (prop.contactLocked || !prop.owner?.whatsapp) {
      try {
        const res = await fetch(`/api/properties/${encodeURIComponent(id)}`, { headers: this.authHeaders() });
        if (res.ok) {
          const json = await res.json();
          if (json.property) {
            prop = json.property;
            this.upsertProperty(prop);
          }
        }
      } catch (err) {
        this.showToast('Could not load the landowner contact.', 'error');
        return;
      }
    }
    if (!prop.owner?.phone || prop.contactLocked) {
      this.showToast('Contact is available after you sign in.');
      return;
    }

    const modal = document.getElementById('ownerContactModal');
    const container = document.getElementById('ownerContactContent');
    if (!modal || !container) return;

    container.innerHTML = `
      <div class="flex flex-col gap-5 text-center">
        <div class="w-16 h-16 rounded-full bg-primary/10 text-primary mx-auto flex items-center justify-center">
          <span class="material-symbols-outlined text-[36px]">contact_phone</span>
        </div>

        <div>
          <span class="text-xs font-bold text-secondary uppercase tracking-wider">Direct Landowner Connection</span>
          <h3 class="text-xl font-heading font-bold text-on-surface mt-1">${prop.owner.name}</h3>
          <p class="text-xs text-on-surface-variant">${prop.village}, ${prop.corridor}</p>
        </div>

        <div class="p-4 rounded-xl bg-surface-container-low border border-surface-container flex flex-col gap-2">
          <span class="text-xs text-on-surface-variant font-medium">Verified Phone & WhatsApp:</span>
          <div class="text-2xl font-heading font-extrabold text-primary select-all">
            ${prop.owner.phone}
          </div>
          <span class="text-[11px] text-secondary font-semibold">Available for direct buyer conversations (9 AM - 8 PM)</span>
        </div>

        <div class="flex flex-col sm:flex-row gap-3">
          <a href="tel:${prop.owner.phone.replace(/[^0-9]/g, '')}" class="flex-1 py-3 px-4 rounded-xl btn-primary-kinetic font-semibold text-sm flex items-center justify-center gap-2">
            <span class="material-symbols-outlined text-[20px]">call</span>
            Call Sri ${prop.owner.name.split(' ')[0]}
          </a>
          <a href="https://wa.me/${prop.owner.whatsapp}?text=${encodeURIComponent(`Hello Sri ${prop.owner.name}, I found your direct land listing '${prop.title}' on InSightLiker Real Land. I would like to discuss purchasing details directly with you.`)}" target="_blank" rel="noopener" class="flex-1 py-3 px-4 rounded-xl bg-surface-container-high hover:bg-surface-container text-primary font-semibold text-sm flex items-center justify-center gap-2">
            <span class="material-symbols-outlined text-[20px] text-secondary">chat</span>
            Open WhatsApp
          </a>
        </div>

        <div class="p-3 rounded-lg bg-surface-container text-left text-xs text-on-surface-variant flex items-start gap-2">
          <span class="material-symbols-outlined text-primary text-[18px] shrink-0">shield</span>
          <span><strong>InSightLiker Anti-Broker Policy:</strong> Do not pay advance token without visiting survey site and checking Patta Passbook. Zero brokerage always.</span>
        </div>
      </div>
    `;

    this.openModal('ownerContactModal');
  }

  openSiteVisitScheduler(id) {
    const prop = this.properties.find(p => p.id === id);
    if (!prop) return;
    if (!this.account) {
      this.openAuthModal('signin', 'buyer');
      this.showToast('Sign in as a buyer to request a field visit.');
      return;
    }
    if (this.account.role !== 'buyer') {
      this.showToast('Visit requests are sent from a buyer account.');
      return;
    }

    const modal = document.getElementById('ownerContactModal');
    const container = document.getElementById('ownerContactContent');
    if (!modal || !container) return;

    const user = window.firebaseAuth?.currentUser;
    const prefillName = user?.displayName || '';
    const prefillPhone = user?.phone || '';

    container.innerHTML = `
      <div class="flex flex-col gap-4 text-left">
        <div>
          <span class="text-xs font-bold text-secondary uppercase tracking-wider">Direct Site Inspection</span>
          <h3 class="text-xl font-heading font-bold text-primary mt-0.5">Schedule Field Visit</h3>
          <p class="text-xs text-on-surface-variant">${prop.title} • ${prop.corridor}</p>
        </div>

        <form id="siteVisitForm" onsubmit="event.preventDefault(); app.handleSiteVisitSubmit('${prop.id}')" class="flex flex-col gap-3">
          <div>
            <label class="text-xs font-semibold text-on-surface block mb-1">Your Full Name</label>
            <input type="text" required value="${prefillName}" placeholder="e.g. Ramesh Kumar" class="w-full px-3 py-2 rounded-lg bg-surface-container-low border border-border-light text-sm focus:outline-none focus:border-primary">
          </div>
          <div class="grid grid-cols-2 gap-3">
            <div>
              <label class="text-xs font-semibold text-on-surface block mb-1">Phone Number</label>
              <input type="tel" required value="${prefillPhone}" placeholder="+91 98765 43210" class="w-full px-3 py-2 rounded-lg bg-surface-container-low border border-border-light text-sm focus:outline-none focus:border-primary">
            </div>
            <div>
              <label class="text-xs font-semibold text-on-surface block mb-1">Preferred Date</label>
              <input type="date" required class="w-full px-3 py-2 rounded-lg bg-surface-container-low border border-border-light text-sm focus:outline-none focus:border-primary">
            </div>
          </div>
          <div>
            <label class="text-xs font-semibold text-on-surface block mb-1">Message for Landowner</label>
            <textarea rows="2" placeholder="e.g. I am coming from Hyderabad/Bangalore to inspect survey boundaries and water yield." class="w-full px-3 py-2 rounded-lg bg-surface-container-low border border-border-light text-sm focus:outline-none focus:border-primary"></textarea>
          </div>
          
          <button type="submit" class="w-full py-3 rounded-xl btn-primary-kinetic font-semibold text-sm mt-2 flex items-center justify-center gap-2">
            <span class="material-symbols-outlined text-[18px]">send</span>
            Send Visit Request to Landowner
          </button>
        </form>
      </div>
    `;

    this.openModal('ownerContactModal');
  }

  async handleSiteVisitSubmit(id) {
    if (!this.account || this.account.role !== 'buyer') {
      this.openAuthModal('signin', 'buyer');
      this.showToast('Sign in as a buyer to request a field visit.');
      return;
    }
    const form = document.getElementById('siteVisitForm');
    const inputs = form ? form.querySelectorAll('input, textarea') : [];
    const property = this.properties.find((item) => item.id === id);
    const visitData = {
      propertyId: id,
      propertyTitle: property?.title || 'Land parcel',
      buyerName: inputs[0]?.value || this.account.name,
      phone: inputs[1]?.value || '',
      preferredDate: inputs[2]?.value || '',
      notes: inputs[3]?.value || ''
    };

    try {
      const res = await fetch('/api/site-visits', {
        method: 'POST',
        headers: this.authHeaders({ 'Content-Type': 'application/json' }),
        body: JSON.stringify(visitData)
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || 'Could not send the visit request.');
      this.closeModal('ownerContactModal');
      this.showToast('Visit request sent to the landowner. Track it in your buyer dashboard.');
    } catch (err) {
      this.showToast(err.message || 'Could not send the visit request.', 'error');
    }
  }

  openReportBroker(id) {
    const prop = this.properties.find(p => p.id === id);
    const modal = document.getElementById('reportBrokerModal');
    const container = document.getElementById('reportBrokerContent');
    if (!modal || !container) return;

    container.innerHTML = `
      <div class="flex flex-col gap-4 text-left">
        <div class="flex items-center gap-2 text-secondary">
          <span class="material-symbols-outlined text-[28px]">shield</span>
          <div>
            <h3 class="text-lg font-heading font-bold text-on-surface">Report Unauthorized Broker</h3>
            <span class="text-xs text-on-surface-variant">Help us enforce our 100% Direct Landowner Promise</span>
          </div>
        </div>

        <p class="text-xs text-on-surface-variant">
          If someone pretending to be the owner of <strong>${prop ? prop.title : 'this property'}</strong> asked for brokerage or commission, report their details immediately. We will verify and delist or flag them within 2 hours.
        </p>

        <form onsubmit="event.preventDefault(); app.handleReportSubmit()" class="flex flex-col gap-3">
          <div>
            <label class="text-xs font-semibold text-on-surface block mb-1">Broker / Person Phone Number</label>
            <input type="tel" required placeholder="+91 Phone number who contacted you" class="w-full px-3 py-2 rounded-lg bg-surface-container-low border border-border-light text-sm focus:outline-none focus:border-primary">
          </div>
          <div>
            <label class="text-xs font-semibold text-on-surface block mb-1">What did they demand?</label>
            <textarea required rows="2" placeholder="e.g. Asked for 2% commission or claimed to be an agent representing the farmer." class="w-full px-3 py-2 rounded-lg bg-surface-container-low border border-border-light text-sm focus:outline-none focus:border-primary"></textarea>
          </div>
          <div>
            <label class="text-xs font-semibold text-on-surface block mb-1">Your Contact (Confidential)</label>
            <input type="text" required placeholder="Your Name and Phone Number" class="w-full px-3 py-2 rounded-lg bg-surface-container-low border border-border-light text-sm focus:outline-none focus:border-primary">
          </div>
          <button type="submit" class="w-full py-3 rounded-xl btn-secondary-kinetic font-semibold text-sm mt-1">
            Submit Anti-Broker Report
          </button>
        </form>
      </div>
    `;

    this.openModal('reportBrokerModal');
  }

  handleReportSubmit() {
    const form = document.querySelector('#reportBrokerModal form');
    const inputs = form ? form.querySelectorAll('input, textarea') : [];
    const reportData = {
      brokerPhone: inputs[0]?.value || '',
      demandDetails: inputs[1]?.value || '',
      reporterContact: inputs[2]?.value || ''
    };

    if (typeof fetch !== 'undefined') {
      fetch('/api/report-broker', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(reportData)
      }).catch(() => {});
    }

    this.closeModal('reportBrokerModal');
    this.showToast("Report received. Our South India anti-broker team will investigate within 2 hours!");
  }

  // Render Home Page
  renderHome() {
    const featuredContainer = document.getElementById('homeFeaturedContainer');
    if (!featuredContainer) return;

    const featured = this.properties.filter(p => p.featured && p.listingStatus !== 'Sold').slice(0, 4);
    featuredContainer.innerHTML = featured.map(p => this.renderPropertyCard(p)).join('');
  }

  // Render Search / All Properties Page
  renderProperties() {
    const container = document.getElementById('propertiesGridContainer');
    const resultCountEl = document.getElementById('propertiesResultCount');
    if (!container) return;

    const filtered = this.getFilteredProperties();

    if (resultCountEl) {
      resultCountEl.textContent = `${filtered.length} Direct Land Parcels`;
    }

    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="col-span-full py-16 text-center flex flex-col items-center justify-center p-6 bg-white rounded-2xl border border-border-light">
          <span class="material-symbols-outlined text-[48px] text-on-surface-variant">explore_off</span>
          <h3 class="text-lg font-heading font-bold text-primary mt-2">No direct lands matched these filters</h3>
          <p class="text-sm text-on-surface-variant max-w-md mt-1">Try resetting the corridor or expanding your budget range to view more verified direct parcels.</p>
          <button onclick="app.resetFilters()" class="mt-4 px-4 py-2 rounded-lg btn-primary-kinetic text-xs font-semibold">
            Reset All Filters
          </button>
        </div>
      `;
    } else {
      container.innerHTML = filtered.map(p => this.renderPropertyCard(p)).join('');
    }

    // Sync map if visible
    if (this.viewMode === 'map') {
      this.updateMapMarkers(filtered);
    }
  }

  getFilteredProperties() {
    return this.properties.filter(p => {
      if (p.listingStatus === 'Sold') return false;
      // State
      if (this.activeFilters.state !== 'All' && p.state !== this.activeFilters.state) {
        return false;
      }
      // Category
      if (this.activeFilters.category !== 'All' && p.category !== this.activeFilters.category) {
        return false;
      }
      // Corridor
      if (this.activeFilters.corridor !== 'All' && !p.corridor.toLowerCase().includes(this.activeFilters.corridor.toLowerCase())) {
        return false;
      }
      // Max Price
      const maxPrice = this.activeFilters.maxPriceCr * 10000000;
      if (p.priceTotalNum > maxPrice) {
        return false;
      }
      // Min Area
      if (p.extentNum < this.activeFilters.minAreaAcre) {
        return false;
      }
      // Road Access
      if (this.activeFilters.roadAccess !== 'All' && !p.roadAccess.toLowerCase().includes(this.activeFilters.roadAccess.toLowerCase())) {
        return false;
      }
      // Water Source
      if (this.activeFilters.waterSource !== 'All' && !p.waterSource.toLowerCase().includes(this.activeFilters.waterSource.toLowerCase())) {
        return false;
      }
      // Keyword
      if (this.activeFilters.searchKeyword) {
        const kw = this.activeFilters.searchKeyword.toLowerCase();
        const matches = p.title.toLowerCase().includes(kw) ||
                        p.corridor.toLowerCase().includes(kw) ||
                        p.district.toLowerCase().includes(kw) ||
                        p.state.toLowerCase().includes(kw) ||
                        p.owner.name.toLowerCase().includes(kw);
        if (!matches) return false;
      }
      return true;
    });
  }

  resetFilters() {
    this.activeFilters = {
      state: 'All',
      corridor: 'All',
      category: 'All',
      maxPriceCr: 10,
      minAreaAcre: 0,
      roadAccess: 'All',
      waterSource: 'All',
      conversionStatus: 'All',
      searchKeyword: ''
    };

    // Reset Form elements if present
    const stateEl = document.getElementById('filterStateSelect');
    if (stateEl) stateEl.value = 'All';
    const catEl = document.getElementById('filterCategorySelect');
    if (catEl) catEl.value = 'All';
    const priceSlider = document.getElementById('filterPriceRange');
    if (priceSlider) priceSlider.value = 10;
    const priceDisplay = document.getElementById('filterPriceDisplay');
    if (priceDisplay) priceDisplay.textContent = 'Up to ₹10+ Crores';
    const searchInput = document.getElementById('filterSearchKeyword');
    if (searchInput) searchInput.value = '';

    this.renderProperties();
    this.showToast("All filters have been reset");
  }

  renderPropertyCard(p) {
    const raw = p;
    const e = (value) => this.escapeHtml(value);
    p = {
      ...raw,
      id: /^[A-Za-z0-9_-]+$/.test(String(raw.id)) ? raw.id : '',
      title: e(raw.title),
      corridor: e(raw.corridor),
      state: e(raw.state),
      tagline: e(raw.tagline),
      extent: e(raw.extent),
      roadWidth: e(raw.roadWidth),
      pricePerUnit: e(raw.pricePerUnit),
      priceDisplay: e(raw.priceDisplay),
      titleStatus: e(raw.titleStatus || 'Owner'),
      images: [e(raw.images?.[0] || '')],
      owner: {
        ...(raw.owner || {}),
        name: e(raw.owner?.name),
        avatarInitials: e(raw.owner?.avatarInitials || 'LL')
      }
    };
    const isSaved = this.savedPropertyIds.includes(p.id);
    const dict = TRANSLATIONS[this.currentLanguage] || TRANSLATIONS['en'];

    return `
      <article class="double-bezel-card overflow-hidden flex flex-col group">
        <!-- Visual & Badges -->
        <div class="relative w-full aspect-[16/10] overflow-hidden bg-surface-container cursor-pointer" onclick="app.openPropertyDetail('${p.id}')">
          <img src="${p.images[0]}" alt="${p.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy">
          
          <!-- Top Badges -->
          <div class="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
            <span class="px-2.5 py-1 rounded bg-primary-container/90 text-white font-semibold text-[11px] backdrop-blur-md flex items-center gap-1 shadow-sm">
              <span class="material-symbols-outlined text-[13px] text-tertiary-fixed">verified</span>
              ${p.titleStatus.split(' ')[0]} ${dict.cardVerified || 'Verified'}
            </span>
            <span class="owner-listed-chip px-2 py-0.5 rounded text-[11px] font-bold">
              ${dict.cardOwnerListed || 'Owner Listed'}
            </span>
          </div>

          <!-- Bookmark Button -->
          <button onclick="event.stopPropagation(); app.toggleSaveProperty('${p.id}')" data-bookmark-id="${p.id}" class="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/85 hover:bg-white backdrop-blur-md flex items-center justify-center transition-transform active:scale-90 z-10 shadow-sm" title="Bookmark">
            <span class="material-symbols-outlined text-[18px] ${isSaved ? 'text-secondary' : 'text-on-surface'}">${isSaved ? 'bookmark_added' : 'bookmark_border'}</span>
          </button>

          <!-- Price Overlay Tag -->
          <div class="absolute bottom-3 left-3 px-3 py-1.5 rounded-lg bg-black/75 backdrop-blur-md text-white flex items-baseline gap-1.5 shadow-md">
            <span class="font-heading font-extrabold text-base md:text-lg">${p.pricePerUnit}</span>
            <span class="text-[11px] text-gray-300">(${p.priceDisplay} Total)</span>
          </div>
        </div>

        <!-- Content Body -->
        <div class="p-4 flex flex-col flex-1 justify-between gap-3">
          <div class="flex flex-col gap-1 cursor-pointer" onclick="app.openPropertyDetail('${p.id}')">
            <div class="flex items-center justify-between text-[11px] text-secondary font-semibold uppercase tracking-wider">
              <span>${p.corridor}</span>
              <span>${p.state}</span>
            </div>
            
            <h3 class="font-heading font-bold text-base text-on-surface group-hover:text-primary transition-colors line-clamp-1">
              ${p.title}
            </h3>
            
            <p class="text-xs text-on-surface-variant line-clamp-2 mt-0.5 leading-relaxed">
              ${p.tagline}
            </p>
          </div>

          <!-- Feature Pills -->
          <div class="grid grid-cols-2 gap-1.5 text-[11px] text-on-surface-variant pt-2 border-t border-border-light">
            <div class="flex items-center gap-1 truncate">
              <span class="material-symbols-outlined text-[14px] text-primary">square_foot</span>
              <span class="truncate">${p.extent}</span>
            </div>
            <div class="flex items-center gap-1 truncate">
              <span class="material-symbols-outlined text-[14px] text-secondary">add_road</span>
              <span class="truncate">${p.roadWidth}ft ${dict.cardRoad || 'Road'}</span>
            </div>
          </div>

          <!-- Direct Owner Indicator & Action Buttons -->
          <div class="pt-2 border-t border-border-light flex flex-col gap-2">
            <div class="flex items-center justify-between text-xs">
              <div class="flex items-center gap-2">
                <div class="w-6 h-6 rounded-full bg-primary-container text-white flex items-center justify-center font-bold text-[10px]">
                  ${p.owner.avatarInitials}
                </div>
                <div class="flex flex-col">
                  <span class="font-semibold text-on-surface text-[12px]">${p.owner.name}</span>
                  <span class="text-[10px] text-primary flex items-center gap-0.5">
                    <span class="material-symbols-outlined text-[11px]">check_circle</span> ${dict.cardDirectOwner || 'Direct Owner'}
                  </span>
                </div>
              </div>
              <span class="px-2 py-0.5 rounded bg-surface-container font-semibold text-[11px] text-secondary">${dict.cardZeroBrokerage || '0% Brokerage'}</span>
            </div>

            <!-- Action Buttons -->
            <div class="grid grid-cols-2 gap-2 mt-1">
              <button onclick="app.revealOwnerContact('${p.id}', 'call')" class="py-2 px-2.5 rounded-lg btn-primary-kinetic font-semibold text-xs flex items-center justify-center gap-1">
                <span class="material-symbols-outlined text-[15px]">call</span>
                <span>${dict.cardCallOwner || 'Call Owner'}</span>
              </button>
              <button onclick="app.revealOwnerContact('${p.id}', 'whatsapp')" class="py-2 px-2.5 rounded-lg bg-surface-container-high hover:bg-surface-container text-primary font-semibold text-xs flex items-center justify-center gap-1 transition-colors">
                <span class="material-symbols-outlined text-[15px] text-secondary">chat</span>
                <span>WhatsApp</span>
              </button>
            </div>
          </div>

        </div>
      </article>
    `;
  }

  // Render Saved Properties
  renderSavedProperties() {
    const container = document.getElementById('savedPropertiesContainer');
    if (!container) return;

    const saved = this.properties.filter(p => this.savedPropertyIds.includes(p.id));

    if (saved.length === 0) {
      container.innerHTML = `
        <div class="col-span-full py-16 text-center flex flex-col items-center justify-center p-6 bg-white rounded-2xl border border-border-light">
          <span class="material-symbols-outlined text-[48px] text-on-surface-variant">bookmark_border</span>
          <h3 class="text-lg font-heading font-bold text-primary mt-2">No Saved Properties Yet</h3>
          <p class="text-sm text-on-surface-variant max-w-md mt-1">Tap the bookmark icon on any land listing to store it here for easy review and direct contact with owners.</p>
          <a href="#properties" class="mt-4 px-4 py-2 rounded-lg btn-primary-kinetic text-xs font-semibold inline-flex items-center gap-1">
            <span class="material-symbols-outlined text-[16px]">search</span>
            Explore Direct Listings
          </a>
        </div>
      `;
    } else {
      container.innerHTML = saved.map(p => this.renderPropertyCard(p)).join('');
    }
  }

  // Toggle Map / Grid View in Search
  setViewMode(mode) {
    this.viewMode = mode;
    const gridContainer = document.getElementById('propertiesGridContainer');
    const mapWrapper = document.getElementById('propertiesMapWrapper');
    const gridBtn = document.getElementById('viewModeGridBtn');
    const mapBtn = document.getElementById('viewModeMapBtn');

    if (mode === 'map') {
      if (gridContainer) gridContainer.classList.add('hidden');
      if (mapWrapper) mapWrapper.classList.remove('hidden');
      if (gridBtn) {
        gridBtn.classList.remove('bg-primary', 'text-white');
        gridBtn.classList.add('bg-surface-container', 'text-on-surface');
      }
      if (mapBtn) {
        mapBtn.classList.remove('bg-surface-container', 'text-on-surface');
        mapBtn.classList.add('bg-primary', 'text-white');
      }
      this.initMapIfNeeded();
    } else {
      if (gridContainer) gridContainer.classList.remove('hidden');
      if (mapWrapper) mapWrapper.classList.add('hidden');
      if (gridBtn) {
        gridBtn.classList.add('bg-primary', 'text-white');
        gridBtn.classList.remove('bg-surface-container', 'text-on-surface');
      }
      if (mapBtn) {
        mapBtn.classList.add('bg-surface-container', 'text-on-surface');
        mapBtn.classList.remove('bg-primary', 'text-white');
      }
    }
  }

  initMapIfNeeded() {
    const mapEl = document.getElementById('leafletMapContainer');
    if (!mapEl) return;

    if (!this.mapInstance && typeof L !== 'undefined') {
      // Center on South India
      this.mapInstance = L.map('leafletMapContainer').setView([13.8, 78.5], 6);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
      }).addTo(this.mapInstance);

      this.markersGroup = L.layerGroup().addTo(this.mapInstance);
      this.updateMapMarkers(this.getFilteredProperties());
    } else if (this.mapInstance) {
      setTimeout(() => {
        this.mapInstance.invalidateSize();
        this.updateMapMarkers(this.getFilteredProperties());
      }, 100);
    }
  }

  updateMapMarkers(filteredProperties) {
    if (!this.mapInstance || !this.markersGroup || typeof L === 'undefined') return;

    this.markersGroup.clearLayers();

    filteredProperties.forEach(p => {
      const [lat, lng] = p.coordinates;
      const customIcon = L.divIcon({
        className: 'custom-pin-cluster',
        html: `<div class="custom-map-marker">
                <span>${p.pricePerUnit.split('/')[0].trim()}</span>
               </div>`,
        iconSize: [60, 24],
        iconAnchor: [30, 24]
      });

      const marker = L.marker([lat, lng], { icon: customIcon });

      const popupContent = `
        <div style="min-width: 220px; font-family: Inter, sans-serif;">
          <img src="${p.images[0]}" style="width: 100%; height: 110px; object-fit: cover; border-radius: 8px;" />
          <div style="margin-top: 8px;">
            <span style="font-size: 10px; font-weight: 700; color: #8b4f27; text-transform: uppercase;">${p.corridor}</span>
            <h4 style="font-size: 13px; font-weight: 700; color: #003625; margin: 2px 0;">${p.title}</h4>
            <div style="font-size: 12px; font-weight: 800; color: #134e39;">${p.priceDisplay} (${p.extent})</div>
            <div style="font-size: 11px; color: #555; margin-top: 4px;">Owner: ${p.owner.name}</div>
            <button onclick="app.openPropertyDetail('${p.id}')" style="margin-top: 8px; width: 100%; padding: 6px; background: #134e39; color: white; border: none; border-radius: 6px; font-size: 11px; font-weight: 600; cursor: pointer;">
              View Full Details
            </button>
          </div>
        </div>
      `;

      marker.bindPopup(popupContent);
      this.markersGroup.addLayer(marker);
    });
  }

  // List Your Property Free 4-Step Form Wizard
  async handleListPropertySubmit(form) {
    if (!this.account || this.account.role !== 'seller') {
      this.openAuthModal('signup', 'seller');
      this.showToast('Create a landowner account to publish a listing.');
      return;
    }

    const formData = new FormData(form);

    const title = formData.get('title');
    const state = formData.get('state');
    const district = formData.get('district');
    const corridor = formData.get('corridor');
    const category = formData.get('category');
    const extentValue = parseFloat(formData.get('extentValue')) || 0;
    const extentUnit = formData.get('extentUnit') || 'Acres';
    const pricePerUnit = formData.get('pricePerUnit');
    const roadAccess = formData.get('roadAccess');
    const waterSource = formData.get('waterSource');
    const ownerName = formData.get('ownerName');
    const ownerPhone = formData.get('ownerPhone');
    const description = formData.get('description');
    const unitPrice = this.parseIndianAmount(pricePerUnit);
    const totalPrice = unitPrice * extentValue;
    if (!extentValue || !unitPrice) {
      this.showToast('Enter the extent and a price such as 45 Lakhs or 3400.', 'error');
      return;
    }

    const statePins = {
      Telangana: [17.385, 78.4867],
      Karnataka: [12.9716, 77.5946],
      'Andhra Pradesh': [15.9129, 79.74],
      'Tamil Nadu': [11.1271, 78.6569],
      Kerala: [10.8505, 76.2711]
    };
    const pin = statePins[state] || [13.0, 77.5];
    const newListing = {
      title: title || `${extentValue} ${extentUnit} ${category} in ${district || corridor}`,
      category: category,
      tagline: `Direct owner listing with ${roadAccess}`,
      state: state,
      corridor: corridor || `${district} Regional Belt`,
      district: district,
      village: corridor || district,
      pricePerUnit: `₹${pricePerUnit} / ${extentUnit}`,
      priceTotalNum: Math.round(totalPrice),
      priceDisplay: this.formatINR(totalPrice),
      unitType: extentUnit,
      extent: `${extentValue} ${extentUnit}`,
      extentNum: this.extentToAcres(extentValue, extentUnit),
      roadAccess: roadAccess,
      roadWidth: 30,
      waterSource: waterSource,
      soilType: "Natural Fertile Ground",
      electricity: "Power Supply Available",
      fencing: "Demarcated with Boundary Pegs",
      titleStatus: "Direct Owner Self-Declared Clean Patta",
      surveyNo: "Verified on Registration",
      govtPortal: `${state} Portal Document Pending Verification`,
      govtPortalUrl: "#",
      conversionStatus: `${category} Land`,
      suitableFor: "Multiple Purposes, Direct Buyer Inspection",
      featured: true,
      owner: {
        name: ownerName,
        phone: ownerPhone,
        phoneDisplay: `${ownerPhone.slice(0, 7)} •••••`,
        whatsapp: ownerPhone.replace(/[^0-9]/g, ''),
        type: "Direct Landowner",
        residence: district,
        ownershipYears: "Direct Title Holder",
        verificationDate: "Listed Today",
        avatarInitials: ownerName.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()
      },
      images: [
        this.uploadedPreviewImage || "assets/images/hero_land.jpg"
      ],
      coordinates: [pin[0] + (Math.random() - 0.5) * 0.4, pin[1] + (Math.random() - 0.5) * 0.4],
      description: description || "Directly offered by registered owner. No middlemen, zero brokerage. Genuine buyers can inspect survey stones and land records directly.",
      documents: [
        { name: "Pattadar Passbook / Title Deed", status: "Uploaded by Owner", id: "DOC-NEW" },
        { name: "Encumbrance Certificate", status: "Self-Certified Clean", id: "EC-NEW" }
      ]
    };

    try {
      const res = await fetch('/api/properties', {
        method: 'POST',
        headers: this.authHeaders({ 'Content-Type': 'application/json' }),
        body: JSON.stringify(newListing)
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || 'Could not publish this listing.');
      this.upsertProperty(json.property);
      form.reset();
      this.uploadedPreviewImage = null;
      const preview = document.getElementById('listPhotoPreview');
      if (preview) preview.classList.add('hidden');
      this.showToast('Your land is published. Buyers can view it now.');
      this.openPropertyDetail(json.property.id);
    } catch (err) {
      this.showToast(err.message || 'Could not publish this listing.', 'error');
    }
  }

  handleImageUpload(input) {
    if (input.files && input.files[0]) {
      if (input.files[0].size > 1.5 * 1024 * 1024) {
        this.showToast('Use a photo smaller than 1.5 MB.', 'error');
        input.value = '';
        return;
      }
      const reader = new FileReader();
      reader.onload = (e) => {
        this.uploadedPreviewImage = e.target.result;
        const preview = document.getElementById('listPhotoPreview');
        if (preview) {
          preview.src = e.target.result;
          preview.classList.remove('hidden');
        }
      };
      reader.readAsDataURL(input.files[0]);
    }
  }

  // --- Firebase Authentication Integration ---
  initAuth() {
    if (window.firebaseAuth) {
      window.firebaseAuth.onAuthStateChanged((user) => {
        this.onAuthStateChange(user);
      });
    }
  }

  onAuthStateChange(user) {
    const authNavBtn = document.getElementById('authNavBtn');
    const authNavUser = document.getElementById('authNavUser');
    const authUserName = document.getElementById('authUserName');
    const authUserAvatar = document.getElementById('authUserAvatar');
    const authUserRoleBadge = document.getElementById('authUserRoleBadge');
    const dropdownEmail = document.getElementById('dropdownUserEmail');
    const dropdownRoleLabel = document.getElementById('dropdownRoleLabel');

    // Mobile Drawer elements
    const mobileUnlogged = document.getElementById('mobileAuthUnlogged');
    const mobileLogged = document.getElementById('mobileAuthLogged');
    const mobileUserName = document.getElementById('mobileUserName');
    const mobileRoleBadge = document.getElementById('mobileUserRoleBadge');
    const mobileUserAvatar = document.getElementById('mobileUserAvatar');

    // List Property Notice elements
    const listAuthNotice = document.getElementById('listAuthNotice');
    const listAuthTitle = document.getElementById('listAuthTitle');
    const listAuthDesc = document.getElementById('listAuthDesc');
    const listAuthActionBtn = document.getElementById('listAuthActionBtn');
    const listOwnerName = document.getElementById('listOwnerName');
    const listOwnerPhone = document.getElementById('listOwnerPhone');
    const listGuestBlock = document.getElementById('listGuestBlock');
    const listBuyerBlock = document.getElementById('listBuyerBlock');
    const listSellerWorkspace = document.getElementById('listSellerWorkspace');

    const role = user ? (user.role || 'buyer') : null;
    if (listGuestBlock) listGuestBlock.classList.toggle('hidden', !!user);
    if (listBuyerBlock) listBuyerBlock.classList.toggle('hidden', role !== 'buyer');
    if (listSellerWorkspace) listSellerWorkspace.classList.toggle('hidden', role !== 'seller');

    // Show account-only links (Dashboard / Saved) only when authenticated
    document.querySelectorAll('[data-auth-only]').forEach((el) => {
      el.classList.toggle('hidden', !user);
    });
    const dropdownListLandLink = document.getElementById('dropdownListLandLink');
    if (dropdownListLandLink) {
      dropdownListLandLink.classList.toggle('hidden', role === 'buyer');
    }

    if (user) {
      const displayName = user.displayName || user.email.split('@')[0];
      const roleText = role === 'seller' ? 'Direct Landowner' : 'Verified Buyer';
      const initials = displayName.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase() || 'U';

      if (authNavBtn) {
        authNavBtn.classList.add('hidden');
        authNavBtn.style.display = 'none';
      }
      if (authNavUser) {
        authNavUser.classList.remove('hidden');
        authNavUser.style.display = '';
      }
      if (authUserName) authUserName.textContent = displayName;
      if (authUserRoleBadge) authUserRoleBadge.textContent = role === 'seller' ? 'Landowner' : 'Buyer';
      if (authUserAvatar) {
        if (user.photoURL) {
          authUserAvatar.innerHTML = `<img src="${user.photoURL}" class="w-full h-full object-cover">`;
        } else {
          authUserAvatar.textContent = initials;
        }
      }
      if (dropdownEmail) dropdownEmail.textContent = user.email;
      if (dropdownRoleLabel) dropdownRoleLabel.textContent = roleText;

      // Mobile sync
      if (mobileUnlogged) mobileUnlogged.classList.add('hidden');
      if (mobileLogged) mobileLogged.classList.remove('hidden');
      if (mobileUserName) mobileUserName.textContent = displayName;
      if (mobileRoleBadge) mobileRoleBadge.textContent = roleText;
      if (mobileUserAvatar) mobileUserAvatar.textContent = initials;

      // List Property view prefill
      if (listAuthTitle) listAuthTitle.textContent = `Listing as ${displayName}`;
      if (listAuthDesc) listAuthDesc.textContent = 'This listing is published on your landowner account and appears for buyers immediately.';
      if (listAuthActionBtn) {
        listAuthActionBtn.textContent = 'Open dashboard';
        listAuthActionBtn.onclick = () => { window.location.hash = 'dashboard'; };
      }

      if (role === 'seller') {
        if (listOwnerName && !listOwnerName.value) listOwnerName.value = displayName;
        if (listOwnerPhone && !listOwnerPhone.value && user.phone) listOwnerPhone.value = user.phone;
      }
    } else {
      if (authNavBtn) {
        authNavBtn.classList.remove('hidden');
        authNavBtn.style.display = '';
      }
      if (authNavUser) {
        authNavUser.classList.add('hidden');
        authNavUser.style.display = 'none';
      }
      if (mobileUnlogged) mobileUnlogged.classList.remove('hidden');
      if (mobileLogged) mobileLogged.classList.add('hidden');

      if (listAuthTitle) listAuthTitle.textContent = "Want to manage and track your listing?";
      if (listAuthDesc) listAuthDesc.textContent = "Sign in or register to link this property directly to your profile.";
      if (listAuthActionBtn) {
        listAuthActionBtn.textContent = "Sign In / Register";
        listAuthActionBtn.onclick = () => this.openAuthModal('signin', 'seller');
      }
    }
  }

  openAuthModal(tab = 'signin', role = 'buyer') {
    this.switchAuthTab(tab);
    const radio = document.querySelector(`input[name="authRole"][value="${role}"]`);
    if (radio) radio.checked = true;
    this.openModal('authModal');
  }

  switchAuthTab(tab) {
    this.authMode = tab; // 'signin' | 'signup' | 'phone'
    const tabSignIn = document.getElementById('authTabSignIn');
    const tabSignUp = document.getElementById('authTabSignUp');
    const tabPhone = document.getElementById('authTabPhone');
    const titleEl = document.getElementById('authModalTitle');
    const nameField = document.getElementById('authNameField');
    const submitText = document.getElementById('authSubmitText');
    const errorEl = document.getElementById('authErrorMessage');
    const authForm = document.getElementById('authForm');
    const authPhoneContainer = document.getElementById('authPhoneContainer');
    const googleBtn = document.querySelector('#authModal button[onclick*="handleGoogleAuth"]');
    const divider = document.querySelector('#authModal .my-4');

    if (errorEl) errorEl.classList.add('hidden');

    const updateTabPill = (btn, active) => {
      if (!btn) return;
      btn.classList.toggle('bg-primary-container', active);
      btn.classList.toggle('text-white', active);
      btn.classList.toggle('shadow-sm', active);
      btn.classList.toggle('text-on-surface-variant', !active);
    };

    updateTabPill(tabSignIn, tab === 'signin');
    updateTabPill(tabSignUp, tab === 'signup');
    updateTabPill(tabPhone, tab === 'phone');

    if (tab === 'phone') {
      if (titleEl) titleEl.textContent = "Sign In with Mobile OTP";
      if (authForm) authForm.classList.add('hidden');
      if (authPhoneContainer) authPhoneContainer.classList.remove('hidden');
      if (googleBtn) googleBtn.classList.remove('hidden');
      if (divider) divider.classList.add('hidden');
    } else {
      if (authForm) authForm.classList.remove('hidden');
      if (authPhoneContainer) authPhoneContainer.classList.add('hidden');
      if (googleBtn) googleBtn.classList.remove('hidden');
      if (divider) divider.classList.remove('hidden');

      const roleSection = document.getElementById('authRoleSection');
      if (tab === 'signin') {
        if (titleEl) titleEl.textContent = "Sign In to InSightLiker";
        if (nameField) nameField.classList.add('hidden');
        if (submitText) submitText.textContent = "Sign In";
        if (roleSection) roleSection.classList.add('hidden');
      } else {
        if (titleEl) titleEl.textContent = "Create Free Account";
        if (nameField) nameField.classList.remove('hidden');
        if (submitText) submitText.textContent = "Create Account";
        if (roleSection) roleSection.classList.remove('hidden');
      }
    }
  }

  async handleSendPhoneOtp() {
    const phoneInput = document.getElementById('authInputPhone');
    const phone = phoneInput ? phoneInput.value.trim() : '';
    const errorEl = document.getElementById('authErrorMessage');
    if (errorEl) errorEl.classList.add('hidden');

    if (!phone || phone.length < 10) {
      if (errorEl) {
        errorEl.textContent = "Please enter a valid 10-digit mobile number.";
        errorEl.classList.remove('hidden');
      }
      return;
    }

    const fullPhone = phone.startsWith('+') ? phone : `+91${phone}`;

    try {
      this.phoneConfirmation = await window.firebaseAuth.sendPhoneOtp(fullPhone);
      const stepNumber = document.getElementById('phoneStepNumber');
      const stepOtp = document.getElementById('phoneStepOtp');
      const display = document.getElementById('phoneTargetDisplay');
      if (stepNumber) stepNumber.classList.add('hidden');
      if (stepOtp) stepOtp.classList.remove('hidden');
      if (display) display.textContent = fullPhone;
      this.showToast("OTP sent successfully! In demo mode, enter 123456.");
    } catch (err) {
      if (errorEl) {
        errorEl.textContent = err.message || "Failed to send OTP.";
        errorEl.classList.remove('hidden');
      }
    }
  }

  async handleVerifyPhoneOtp() {
    const otpInput = document.getElementById('authInputOtp');
    const otp = otpInput ? otpInput.value.trim() : '';
    const errorEl = document.getElementById('authErrorMessage');
    if (errorEl) errorEl.classList.add('hidden');

    if (!otp || otp.length < 6) {
      if (errorEl) {
        errorEl.textContent = "Please enter the 6-digit OTP code (Use 123456).";
        errorEl.classList.remove('hidden');
      }
      return;
    }

    try {
      if (this.phoneConfirmation) {
        await this.phoneConfirmation.confirm(otp);
        this.closeModal('authModal');
        this.showToast("Welcome! Mobile number verified successfully.");
      }
    } catch (err) {
      if (errorEl) {
        errorEl.textContent = err.message || "Invalid OTP code.";
        errorEl.classList.remove('hidden');
      }
    }
  }

  fillDemoAccount(role) {
    this.switchAuthTab('signin');
    const email = document.getElementById('authInputEmail');
    const password = document.getElementById('authInputPassword');
    if (email) email.value = role === 'seller' ? 'seller@insightliker.com' : 'buyer@insightliker.com';
    if (password) password.value = role === 'seller' ? 'Seller@123' : 'Buyer@123';
  }

  async handleAuthSubmit(form) {
    const email = document.getElementById('authInputEmail')?.value.trim();
    const password = document.getElementById('authInputPassword')?.value;
    const name = document.getElementById('authInputName')?.value.trim();
    const roleRadio = document.querySelector('input[name="authRole"]:checked');
    const role = roleRadio ? roleRadio.value : 'buyer';
    const errorEl = document.getElementById('authErrorMessage');

    if (errorEl) errorEl.classList.add('hidden');

    try {
      const isSignup = this.authMode === 'signup';
      const res = await fetch(isSignup ? '/api/auth/register' : '/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(isSignup ? { name, email, password, role } : { email, password })
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || 'Authentication failed.');
      localStorage.setItem('insightliker_session_token', json.token);
      this.applyAccount(json.user);
      await this.syncServerProperties();
      this.closeModal('authModal');
      form.reset();
      const label = json.user.role === 'seller' ? 'landowner' : 'buyer';
      this.showToast(isSignup ? `Welcome ${json.user.name}. Your ${label} account is ready.` : `Signed in as ${label}.`);
      if (json.user.role === 'seller') window.location.hash = 'dashboard';
      else if (this.currentView === 'list-property') window.location.hash = 'properties';
      else if (this.currentView === 'dashboard') this.renderDashboard();
    } catch (err) {
      if (errorEl) {
        errorEl.textContent = err.message || "Authentication failed. Please check your credentials.";
        errorEl.classList.remove('hidden');
      }
    }
  }

  async handleGoogleAuth() {
    const errorEl = document.getElementById('authErrorMessage');
    if (errorEl) errorEl.classList.add('hidden');

    try {
      const res = await window.firebaseAuth.signInWithGoogle();
      this.closeModal('authModal');
      this.showToast(`Welcome ${res.user.displayName}! Signed in with Google.`);
    } catch (err) {
      if (errorEl) {
        errorEl.textContent = err.message || "Google Sign-In failed.";
        errorEl.classList.remove('hidden');
      }
    }
  }

  async handleSignOut() {
    const dropdown = document.getElementById('authUserDropdown');
    if (dropdown) dropdown.classList.add('hidden');
    try {
      await fetch('/api/auth/logout', { method: 'POST', headers: this.authHeaders() });
    } catch (err) {
      // Local sign-out still clears the session.
    }
    localStorage.removeItem('insightliker_session_token');
    this.applyAccount(null);
    await this.syncServerProperties();
    if (this.currentView === 'dashboard' || this.currentView === 'list-property') {
      window.location.hash = 'home';
    }
    this.showToast("You have been signed out.");
  }

  toggleUserMenu() {
    const dropdown = document.getElementById('authUserDropdown');
    if (dropdown) {
      dropdown.classList.toggle('hidden');
    }
  }

  toggleUserRole() {
    const role = this.account?.role === 'seller' ? 'landowner' : 'buyer';
    this.showToast(`This account is a ${role}. Register a second email if you need the other dashboard.`);
  }

  openFirebaseConfigModal() {
    const modal = document.getElementById('firebaseConfigModal');
    if (!modal) return;
    const cfg = window.firebaseAuth.config;
    const apiKeyInput = document.getElementById('fbCfgApiKey');
    const domainInput = document.getElementById('fbCfgAuthDomain');
    const projInput = document.getElementById('fbCfgProjectId');
    const appInput = document.getElementById('fbCfgAppId');
    const statusBadge = document.getElementById('fbLiveStatusBadge');

    if (apiKeyInput) apiKeyInput.value = cfg.apiKey || '';
    if (domainInput) domainInput.value = cfg.authDomain || '';
    if (projInput) projInput.value = cfg.projectId || '';
    if (appInput) appInput.value = cfg.appId || '';
    if (statusBadge) {
      statusBadge.textContent = window.firebaseAuth.isLiveFirebase ? "Connected to Live Firebase Project" : "Local Sandbox / Demo Mode Active";
      statusBadge.className = window.firebaseAuth.isLiveFirebase ? "font-bold text-emerald-600" : "font-bold text-amber-600";
    }

    this.openModal('firebaseConfigModal');
  }

  handleSaveFirebaseConfig(form) {
    const apiKey = document.getElementById('fbCfgApiKey')?.value.trim();
    const authDomain = document.getElementById('fbCfgAuthDomain')?.value.trim();
    const projectId = document.getElementById('fbCfgProjectId')?.value.trim();
    const appId = document.getElementById('fbCfgAppId')?.value.trim();

    if (apiKey && projectId) {
      window.firebaseAuth.saveConfig({ apiKey, authDomain, projectId, appId });
      this.closeModal('firebaseConfigModal');
      this.showToast("Firebase project configuration saved successfully!");
    } else {
      this.showToast("Please provide both API Key and Project ID.", "error");
    }
  }

  showEl(el, shown, display) {
    if (!el) return;
    el.classList.toggle('hidden', !shown);
    if (shown) el.style.display = display || '';
    else el.style.display = 'none';
  }

  // --- Landowner & Buyer Dashboard Management ---
  switchDashTab(tab) {
    this.currentDashTab = tab;
    const buttons = {
      listings: document.getElementById('dashTabListingsBtn'),
      visits: document.getElementById('dashTabVisitsBtn'),
      saved: document.getElementById('dashTabSavedBtn'),
      'buyer-visits': document.getElementById('dashTabBuyerVisitsBtn')
    };
    const sections = {
      listings: document.getElementById('dashSectionListings'),
      visits: document.getElementById('dashSectionVisits'),
      saved: document.getElementById('dashSectionSaved'),
      'buyer-visits': document.getElementById('dashSectionBuyerVisits')
    };

    Object.entries(buttons).forEach(([name, btn]) => {
      if (!btn) return;
      const active = name === tab;
      btn.classList.toggle('bg-primary-container', active);
      btn.classList.toggle('text-white', active);
      btn.classList.toggle('shadow-sm', active);
      btn.classList.toggle('text-on-surface-variant', !active);
    });

    Object.entries(sections).forEach(([name, section]) => {
      this.showEl(section, name === tab);
    });
    if (tab === 'saved') this.renderDashboardSaved();
  }

  renderDashboardSaved() {
    const container = document.getElementById('dashboardSavedContainer');
    if (!container) return;
    const saved = this.properties.filter((property) => this.savedPropertyIds.includes(property.id) && property.listingStatus !== 'Sold');
    if (saved.length === 0) {
      container.innerHTML = `
        <div class="col-span-full py-12 text-center bg-white rounded-3xl border border-border-light">
          <span class="material-symbols-outlined text-[40px] text-on-surface-variant">bookmark_border</span>
          <h3 class="font-heading font-bold text-lg text-primary mt-2">No saved lands yet</h3>
          <p class="text-xs text-on-surface-variant mt-1">Bookmark a parcel while you browse, then come back to it here.</p>
          <a href="#properties" class="inline-flex mt-4 py-2.5 px-5 rounded-xl btn-primary-kinetic text-xs font-bold">View properties</a>
        </div>
      `;
    } else {
      container.innerHTML = saved.map((property) => this.renderPropertyCard(property)).join('');
    }
  }

  async renderDashboard() {
    const gate = document.getElementById('dashboardGate');
    const shell = document.getElementById('dashboardShell');
    const user = this.account;

    if (!user) {
      this.showEl(gate, true);
      this.showEl(shell, false);
      return;
    }

    this.showEl(gate, false);
    this.showEl(shell, true);

    const isSeller = user.role === 'seller';
    const roleBadge = document.getElementById('dashRoleBadge');
    const title = document.getElementById('dashTitle');
    const subtitle = document.getElementById('dashSubtitle');
    const labelListings = document.getElementById('dashMetricLabelListings');
    const labelVisits = document.getElementById('dashMetricLabelVisits');
    const metricListings = document.getElementById('dashMetricListings');
    const metricVisits = document.getElementById('dashMetricVisits');
    const metricSaved = document.getElementById('dashMetricSaved');
    const visitsCountBadge = document.getElementById('dashVisitsCountBadge');
    const propsContainer = document.getElementById('dashboardPropertiesContainer');
    const visitsContainer = document.getElementById('dashboardVisitsContainer');
    const buyerVisitsContainer = document.getElementById('dashboardBuyerVisitsContainer');

    this.showEl(document.getElementById('dashListNewBtn'), isSeller, 'inline-flex');
    this.showEl(document.getElementById('dashTabListingsBtn'), isSeller, 'inline-flex');
    this.showEl(document.getElementById('dashTabVisitsBtn'), isSeller, 'inline-flex');
    this.showEl(document.getElementById('dashTabSavedBtn'), !isSeller, 'inline-flex');
    this.showEl(document.getElementById('dashTabBuyerVisitsBtn'), !isSeller, 'inline-flex');
    this.showEl(document.getElementById('dashTabBrowseBtn'), !isSeller, 'inline-flex');

    if (roleBadge) {
      roleBadge.textContent = isSeller ? 'Landowner' : 'Buyer';
      roleBadge.className = isSeller
        ? 'px-2.5 py-0.5 rounded-full bg-secondary text-white font-bold text-xs uppercase'
        : 'px-2.5 py-0.5 rounded-full bg-primary-container text-white font-bold text-xs uppercase';
    }
    if (title) title.textContent = isSeller ? 'Landowner dashboard' : 'Buyer dashboard';
    if (subtitle) {
      subtitle.textContent = isSeller
        ? 'Publish land and respond to buyer visit requests.'
        : 'View published lands, saved parcels, and your visit requests.';
    }
    if (labelListings) labelListings.textContent = isSeller ? 'My listings' : 'Saved lands';
    if (labelVisits) labelVisits.textContent = isSeller ? 'Visit requests' : 'My visits';

    let myProperties = [];
    let visits = [];
    try {
      if (isSeller) {
        const res = await fetch('/api/me/listings', { headers: this.authHeaders() });
        if (res.ok) {
          const json = await res.json();
          myProperties = json.data || [];
          myProperties.forEach((property) => this.upsertProperty(property));
        }
      }
      const visitRes = await fetch('/api/me/visits', { headers: this.authHeaders() });
      if (visitRes.ok) {
        const json = await visitRes.json();
        visits = json.data || [];
      }
    } catch (err) {
      this.showToast('Could not load your dashboard.', 'error');
    }

    const savedCount = this.savedPropertyIds.filter((id) => this.properties.some((property) => property.id === id)).length;
    if (metricListings) metricListings.textContent = String(isSeller ? myProperties.length : savedCount);
    if (metricVisits) metricVisits.textContent = String(visits.length);
    this.showEl(visitsCountBadge, visits.length > 0, 'inline-flex');
    if (visitsCountBadge) visitsCountBadge.textContent = String(visits.length);
    if (metricSaved) metricSaved.textContent = '₹0 Fee';

    if (propsContainer) {
      if (!isSeller) {
        propsContainer.innerHTML = '';
      } else if (myProperties.length === 0) {
        propsContainer.innerHTML = `
          <div class="p-8 text-center bg-white rounded-3xl border border-border-light shadow-sm flex flex-col items-center justify-center gap-3">
            <div class="w-16 h-16 rounded-2xl bg-surface-container text-primary flex items-center justify-center">
              <span class="material-symbols-outlined text-[36px]">add_business</span>
            </div>
            <h3 class="font-heading font-bold text-lg text-primary">No land listings yet</h3>
            <p class="text-xs text-on-surface-variant max-w-md">Publish your first parcel. Buyers will see it on Explore Lands.</p>
            <a href="#list-property" class="mt-2 py-2.5 px-5 rounded-xl btn-primary-kinetic text-xs font-bold inline-flex items-center gap-2">
              <span class="material-symbols-outlined text-[18px]">add_circle</span>
              <span>List your first land</span>
            </a>
          </div>
        `;
      } else {
        propsContainer.innerHTML = myProperties.map((property) => {
          const status = property.listingStatus || 'Available';
          const statusColors = {
            'Available': 'bg-emerald-100 text-emerald-800 border-emerald-300',
            'Under Negotiation': 'bg-amber-100 text-amber-800 border-amber-300',
            'Sold': 'bg-gray-100 text-gray-700 border-gray-300'
          };
          const badgeClass = statusColors[status] || statusColors.Available;
          const id = /^[A-Za-z0-9_-]+$/.test(property.id) ? property.id : '';
          return `
            <div class="p-4 md:p-5 rounded-2xl bg-white border border-border-light shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div class="flex items-center gap-4">
                <img src="${this.escapeHtml(property.images?.[0] || '')}" alt="" class="w-20 h-20 md:w-24 md:h-24 rounded-xl object-cover shrink-0 border border-border-light">
                <div class="flex flex-col gap-1">
                  <div class="flex items-center gap-2 flex-wrap">
                    <span class="px-2.5 py-0.5 rounded-full border text-[11px] font-bold ${badgeClass}">${this.escapeHtml(status)}</span>
                    <span class="text-xs text-secondary font-semibold uppercase tracking-wider">${this.escapeHtml(property.category)}</span>
                    <span class="text-xs text-on-surface-variant">${this.escapeHtml(property.state)}</span>
                  </div>
                  <h4 class="font-heading font-bold text-base text-primary hover:underline cursor-pointer" onclick="app.openPropertyDetail('${id}')">${this.escapeHtml(property.title)}</h4>
                  <div class="text-xs text-on-surface-variant flex items-center gap-2">
                    <span class="font-bold text-primary">${this.escapeHtml(property.priceDisplay)}</span>
                    <span>${this.escapeHtml(property.extent)}</span>
                  </div>
                </div>
              </div>
              <div class="flex items-center gap-2 flex-wrap self-end md:self-center">
                <button onclick="app.togglePropertyStatus('${id}')" class="py-2 px-3 rounded-xl bg-surface-container hover:bg-surface-container-high text-xs font-bold text-primary">Change status</button>
                <button onclick="app.openPropertyDetail('${id}')" class="py-2 px-3 rounded-xl border border-border-light hover:bg-surface-container text-xs font-bold text-on-surface">View</button>
                <button onclick="app.deleteProperty('${id}')" class="py-2 px-3 rounded-xl border border-red-200 hover:bg-red-50 text-xs font-bold text-red-600">Delete</button>
              </div>
            </div>
          `;
        }).join('');
      }
    }

    if (visitsContainer) {
      if (!isSeller || visits.length === 0) {
        visitsContainer.innerHTML = `
          <div class="p-8 text-center bg-white rounded-3xl border border-border-light shadow-sm">
            <span class="material-symbols-outlined text-[36px] text-on-surface-variant">event_busy</span>
            <h4 class="font-heading font-bold text-base text-primary mt-2">No visit requests yet</h4>
            <p class="text-xs text-on-surface-variant">When a buyer asks to inspect one of your parcels, the request shows up here.</p>
          </div>
        `;
      } else {
        visitsContainer.innerHTML = visits.map((visit) => {
          const cleanPhone = String(visit.phone || '').replace(/[^0-9]/g, '');
          const id = /^[A-Za-z0-9_-]+$/.test(visit.id) ? visit.id : '';
          return `
            <div class="p-4 md:p-5 rounded-2xl bg-white border border-border-light shadow-sm flex flex-col md:flex-row md:items-start justify-between gap-4">
              <div class="flex flex-col gap-1.5">
                <span class="px-2.5 py-0.5 rounded-full text-[11px] font-bold ${visit.status === 'Confirmed' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'} w-fit">${this.escapeHtml(visit.status || 'Scheduled')}</span>
                <h4 class="font-heading font-bold text-base text-primary">Buyer: ${this.escapeHtml(visit.buyerName)}</h4>
                <p class="text-xs text-secondary font-semibold">${this.escapeHtml(visit.propertyTitle || 'Land parcel')}</p>
                <p class="text-xs text-on-surface-variant">Preferred date: ${this.escapeHtml(visit.preferredDate || 'Flexible')}</p>
                ${visit.notes ? `<p class="text-xs text-on-surface-variant bg-surface-container-low p-2.5 rounded-xl border border-border-light mt-1">${this.escapeHtml(visit.notes)}</p>` : ''}
              </div>
              <div class="flex items-center gap-2 flex-wrap shrink-0">
                <a href="tel:${cleanPhone}" class="py-2 px-3 rounded-xl btn-primary-kinetic text-xs font-bold">Call buyer</a>
                <button onclick="app.updateVisitStatus('${id}', 'Confirmed')" class="py-2 px-3 rounded-xl border border-border-light text-xs font-bold text-primary">Confirm</button>
                <button onclick="app.updateVisitStatus('${id}', 'Completed')" class="py-2 px-3 rounded-xl border border-border-light text-xs font-bold text-primary">Completed</button>
              </div>
            </div>
          `;
        }).join('');
      }
    }

    if (buyerVisitsContainer) {
      if (isSeller || visits.length === 0) {
        buyerVisitsContainer.innerHTML = `
          <div class="p-8 text-center bg-white rounded-3xl border border-border-light shadow-sm">
            <span class="material-symbols-outlined text-[36px] text-on-surface-variant">map</span>
            <h4 class="font-heading font-bold text-base text-primary mt-2">No visit requests yet</h4>
            <p class="text-xs text-on-surface-variant">Open a land and schedule a field visit. The landowner sees the request on their dashboard.</p>
            <a href="#properties" class="inline-flex mt-4 py-2 px-4 rounded-xl btn-primary-kinetic text-xs font-bold">View properties</a>
          </div>
        `;
      } else {
        buyerVisitsContainer.innerHTML = visits.map((visit) => `
          <div class="p-4 rounded-2xl bg-white border border-border-light shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-3">
            <div>
              <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-surface-container text-primary">${this.escapeHtml(visit.status || 'Scheduled')}</span>
              <h4 class="font-heading font-bold text-sm text-primary mt-1">${this.escapeHtml(visit.propertyTitle || 'Land inspection')}</h4>
              <p class="text-xs text-on-surface-variant">Preferred date: <strong>${this.escapeHtml(visit.preferredDate || 'Pending')}</strong></p>
            </div>
          </div>
        `).join('');
      }
    }

    const allowed = isSeller ? ['listings', 'visits'] : ['saved', 'buyer-visits'];
    if (!allowed.includes(this.currentDashTab)) this.currentDashTab = allowed[0];
    this.switchDashTab(this.currentDashTab);
  }

  async deleteProperty(id) {
    if (!confirm("Delete this listing? Buyers will no longer see it.")) return;
    try {
      const res = await fetch(`/api/properties/${encodeURIComponent(id)}`, {
        method: 'DELETE',
        headers: this.authHeaders()
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || 'Could not delete this listing.');
      this.properties = this.properties.filter((property) => property.id !== id);
      this.showToast('Property listing deleted.');
      this.renderDashboard();
      if (this.currentView === 'properties') this.renderProperties();
      if (this.currentView === 'home') this.renderHome();
    } catch (err) {
      this.showToast(err.message || 'Could not delete this listing.', 'error');
    }
  }

  async togglePropertyStatus(id) {
    const prop = this.properties.find((property) => property.id === id);
    if (!prop) return;
    const statuses = ['Available', 'Under Negotiation', 'Sold'];
    const currentIdx = statuses.indexOf(prop.listingStatus || 'Available');
    const nextStatus = statuses[(currentIdx + 1) % statuses.length];
    try {
      const res = await fetch(`/api/properties/${encodeURIComponent(id)}`, {
        method: 'PUT',
        headers: this.authHeaders({ 'Content-Type': 'application/json' }),
        body: JSON.stringify({ listingStatus: nextStatus })
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || 'Could not update this listing.');
      this.upsertProperty(json.property);
      this.showToast(`Property marked as ${nextStatus}.`);
      this.renderDashboard();
      if (this.currentView === 'properties') this.renderProperties();
    } catch (err) {
      this.showToast(err.message || 'Could not update this listing.', 'error');
    }
  }

  async updateVisitStatus(id, newStatus) {
    try {
      const res = await fetch(`/api/site-visits/${encodeURIComponent(id)}`, {
        method: 'PUT',
        headers: this.authHeaders({ 'Content-Type': 'application/json' }),
        body: JSON.stringify({ status: newStatus })
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || 'Could not update this visit.');
      this.showToast(`Visit marked as ${newStatus}.`);
      this.renderDashboard();
    } catch (err) {
      this.showToast(err.message || 'Could not update this visit.', 'error');
    }
  }

  handleHeroSearch() {
    const input = document.getElementById('heroSearchInput');
    const cat = document.getElementById('heroCategorySelect');
    if (input) this.activeFilters.searchKeyword = input.value.trim();
    if (cat) this.activeFilters.category = cat.value;

    window.location.hash = 'properties';
    this.renderProperties();
  }
}

// Global App Instance Initialization
let app;
document.addEventListener('DOMContentLoaded', () => {
  app = new LandApp();
  window.app = app;
});
