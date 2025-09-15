// generate-ssl.js
const fs = require('fs');
const crypto = require('crypto');
const { execSync } = require('child_process');
const path = require('path');

const sslDir = path.join(__dirname, '../ihris-backend/ihris-backend-site/ssl');

if (!fs.existsSync(sslDir)) {
  fs.mkdirSync(sslDir, { recursive: true });
}

// Generate self-signed certificate for development
try {
  execSync(`
    openssl req -x509 -newkey rsa:4096 -keyout ${path.join(sslDir, 'key.pem')} \
    -out ${path.join(sslDir, 'cert.pem')} -days 365 -nodes \
    -subj "/C=US/ST=State/L=City/O=Organization/OU=Organization Unit/CN=localhost"
  `, { stdio: 'inherit' });

  console.log(`SSL certificates generated successfully in ${sslDir} directory`);
} catch (error) {
  console.error('Error generating SSL certificates. Make sure OpenSSL is installed.');
  console.error('You can provide your own certificates in the ssl/ directory');
}