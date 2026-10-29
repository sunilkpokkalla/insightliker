/**
 * InSightLiker - Real Land Marketplace Backend Server
 * Node.js Native HTTP Server with REST APIs & Static Asset Serving
 * 
 * Zero external dependencies required - works immediately with standard Node.js!
 */

const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const PORT = process.env.PORT || 3000;
const DATA_DIR = path.join(__dirname, 'data');
const PROPERTIES_FILE = path.join(DATA_DIR, 'properties.json');
const VISITS_FILE = path.join(DATA_DIR, 'site_visits.json');
const REPORTS_FILE = path.join(DATA_DIR, 'broker_reports.json');

// Ensure data directory exists
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

// Helpers to read & write JSON data files safely
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

// Initialize data files if not present
if (!fs.existsSync(PROPERTIES_FILE)) {
  writeJsonFile(PROPERTIES_FILE, []);
}
if (!fs.existsSync(VISITS_FILE)) {
  writeJsonFile(VISITS_FILE, []);
}
if (!fs.existsSync(REPORTS_FILE)) {
  writeJsonFile(REPORTS_FILE, []);
}

// MIME types for static assets
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

// Helper to send JSON responses
function sendJson(res, statusCode, data) {
  res.writeHead(statusCode, {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization'
  });
  res.end(JSON.stringify(data));
}

// Helper to parse JSON body
function parseBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
      // Guard against massive payloads (> 10MB)
      if (body.length > 10 * 1024 * 1024) {
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

// Create HTTP Server
const server = http.createServer(async (req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;
  const method = req.method;

  // Handle CORS Preflight
  if (method === 'OPTIONS') {
    res.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization'
    });
    return res.end();
  }

  // ==========================================
  // REST API ROUTES
  // ==========================================

  // 1. GET /api/properties -> List all registered custom properties
  if (pathname === '/api/properties' && method === 'GET') {
    const customListings = readJsonFile(PROPERTIES_FILE, []);
    return sendJson(res, 200, {
      success: true,
      count: customListings.length,
      data: customListings
    });
  }

  // 2. POST /api/properties -> Seller registers new property
  if (pathname === '/api/properties' && method === 'POST') {
    try {
      const payload = await parseBody(req);
      if (!payload.title || !payload.state || !payload.owner || !payload.owner.name) {
        return sendJson(res, 400, {
          success: false,
          error: 'Required property fields missing (title, state, owner name).'
        });
      }

      const listings = readJsonFile(PROPERTIES_FILE, []);
      const newProperty = {
        id: payload.id || `prop-node-${Date.now()}`,
        createdAt: new Date().toISOString(),
        ...payload
      };

      listings.unshift(newProperty);
      writeJsonFile(PROPERTIES_FILE, listings);

      console.log(`[API] New Land Registered: "${newProperty.title}" in ${newProperty.state} by ${newProperty.owner.name}`);
      return sendJson(res, 201, {
        success: true,
        message: 'Property successfully registered in database (0% Brokerage).',
        property: newProperty
      });
    } catch (err) {
      return sendJson(res, 400, { success: false, error: err.message });
    }
  }

  // 3. GET /api/properties/:id -> Get single property
  if (pathname.startsWith('/api/properties/') && method === 'GET') {
    const propId = pathname.replace('/api/properties/', '');
    const listings = readJsonFile(PROPERTIES_FILE, []);
    const found = listings.find(p => p.id === propId);
    if (found) {
      return sendJson(res, 200, { success: true, property: found });
    } else {
      return sendJson(res, 404, { success: false, error: 'Property not found' });
    }
  }

  // 3b. PUT /api/properties/:id -> Landowner updates listing details or status
  if (pathname.startsWith('/api/properties/') && method === 'PUT') {
    try {
      const propId = pathname.replace('/api/properties/', '');
      const updates = await parseBody(req);
      const listings = readJsonFile(PROPERTIES_FILE, []);
      const idx = listings.findIndex(p => p.id === propId);
      if (idx === -1) {
        return sendJson(res, 404, { success: false, error: 'Property not found' });
      }
      listings[idx] = { ...listings[idx], ...updates, updatedAt: new Date().toISOString() };
      writeJsonFile(PROPERTIES_FILE, listings);
      console.log(`[API] Property Updated: ${propId}`);
      return sendJson(res, 200, { success: true, message: 'Property updated successfully', property: listings[idx] });
    } catch (err) {
      return sendJson(res, 400, { success: false, error: err.message });
    }
  }

  // 3c. DELETE /api/properties/:id -> Landowner removes listing
  if (pathname.startsWith('/api/properties/') && method === 'DELETE') {
    const propId = pathname.replace('/api/properties/', '');
    let listings = readJsonFile(PROPERTIES_FILE, []);
    const initialLen = listings.length;
    listings = listings.filter(p => p.id !== propId);
    if (listings.length === initialLen) {
      return sendJson(res, 404, { success: false, error: 'Property not found' });
    }
    writeJsonFile(PROPERTIES_FILE, listings);
    console.log(`[API] Property Deleted: ${propId}`);
    return sendJson(res, 200, { success: true, message: 'Property listing removed' });
  }

  // 4. POST /api/site-visits -> Buyer registers a field inspection visit
  if (pathname === '/api/site-visits' && method === 'POST') {
    try {
      const payload = await parseBody(req);
      if (!payload.propertyId || !payload.buyerName || !payload.phone) {
        return sendJson(res, 400, {
          success: false,
          error: 'Missing site visit info (propertyId, buyerName, phone required).'
        });
      }

      const visits = readJsonFile(VISITS_FILE, []);
      const newVisit = {
        id: `visit-${Date.now()}`,
        timestamp: new Date().toISOString(),
        status: 'Scheduled',
        ...payload
      };

      visits.unshift(newVisit);
      writeJsonFile(VISITS_FILE, visits);

      console.log(`[API] New Field Visit Scheduled by ${newVisit.buyerName} for Property: ${newVisit.propertyId}`);
      return sendJson(res, 201, {
        success: true,
        message: 'Field visit request forwarded to direct landowner.',
        visit: newVisit
      });
    } catch (err) {
      return sendJson(res, 400, { success: false, error: err.message });
    }
  }

  // 4b. PUT /api/site-visits/:id -> Update visit status (Confirmed, Completed, Cancelled)
  if (pathname.startsWith('/api/site-visits/') && method === 'PUT') {
    try {
      const visitId = pathname.replace('/api/site-visits/', '');
      const updates = await parseBody(req);
      const visits = readJsonFile(VISITS_FILE, []);
      const idx = visits.findIndex(v => v.id === visitId);
      if (idx === -1) {
        return sendJson(res, 404, { success: false, error: 'Visit record not found' });
      }
      visits[idx] = { ...visits[idx], ...updates, updatedAt: new Date().toISOString() };
      writeJsonFile(VISITS_FILE, visits);
      console.log(`[API] Visit Status Updated: ${visitId} -> ${updates.status}`);
      return sendJson(res, 200, { success: true, message: 'Visit status updated', visit: visits[idx] });
    } catch (err) {
      return sendJson(res, 400, { success: false, error: err.message });
    }
  }

  // 5. GET /api/site-visits -> Get all scheduled visits
  if (pathname === '/api/site-visits' && method === 'GET') {
    const visits = readJsonFile(VISITS_FILE, []);
    return sendJson(res, 200, { success: true, count: visits.length, data: visits });
  }

  // 6. POST /api/report-broker -> Submit anti-broker report
  if (pathname === '/api/report-broker' && method === 'POST') {
    try {
      const payload = await parseBody(req);
      const reports = readJsonFile(REPORTS_FILE, []);
      const newReport = {
        id: `report-${Date.now()}`,
        timestamp: new Date().toISOString(),
        status: 'Under Investigation (2h SLA)',
        ...payload
      };

      reports.unshift(newReport);
      writeJsonFile(REPORTS_FILE, reports);

      console.log(`[API] Anti-Broker Report Received for Broker Phone: ${newReport.brokerPhone}`);
      return sendJson(res, 201, {
        success: true,
        message: 'Anti-broker report logged. Investigation underway within 2 hours.',
        report: newReport
      });
    } catch (err) {
      return sendJson(res, 400, { success: false, error: err.message });
    }
  }

  // 7. GET /api/stats -> Server & Marketplace statistics
  if (pathname === '/api/stats' && method === 'GET') {
    const properties = readJsonFile(PROPERTIES_FILE, []);
    const visits = readJsonFile(VISITS_FILE, []);
    const reports = readJsonFile(REPORTS_FILE, []);
    return sendJson(res, 200, {
      success: true,
      stats: {
        serverTime: new Date().toISOString(),
        registeredPropertiesCount: properties.length,
        scheduledVisitsCount: visits.length,
        brokerReportsCount: reports.length,
        statesSupported: ["Telangana", "Karnataka", "Andhra Pradesh", "Tamil Nadu", "Kerala"],
        brokerageCommissionRate: "0%"
      }
    });
  }

  // ==========================================
  // STATIC ASSET SERVING
  // ==========================================
  let safePath = path.normalize(pathname).replace(/^(\.\.[\/\\])+/, '');
  if (safePath === '/' || safePath === '') {
    safePath = '/index.html';
  }

  const filePath = path.join(__dirname, safePath);

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      // Fallback to index.html for Single-Page Application client routing
      const indexPath = path.join(__dirname, 'index.html');
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

    const fileStream = fs.createReadStream(filePath);
    fileStream.pipe(res);
  });
});

// Start Server with Graceful Port Fallback
server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    const nextPort = Number(PORT) + 1;
    console.warn(`⚠️ Port ${PORT} is in use. Trying port ${nextPort}...`);
    server.listen(nextPort, () => {
      console.log(`🌱 InSightLiker Real Land Server started on fallback port: http://localhost:${nextPort}`);
    });
  } else {
    console.error('Server error:', err);
  }
});

server.listen(PORT, () => {
  console.log(`
  ==============================================================
  🌱 InSightLiker Real Land - Node.js Server Active!
  --------------------------------------------------------------
  🌐 URL: http://localhost:${PORT}
  📁 Static Root: ${__dirname}
  🗄️  Data Directory: ${DATA_DIR}
  📡 REST API Endpoints:
     • GET  /api/properties
     • POST /api/properties
     • POST /api/site-visits
     • POST /api/report-broker
     • GET  /api/stats
  ==============================================================
  `);
});

