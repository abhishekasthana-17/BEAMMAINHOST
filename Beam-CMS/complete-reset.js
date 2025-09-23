#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔄 Complete Strapi Reset');
console.log('This will completely reset your local Strapi instance\n');

// Function to remove directory recursively
function removeDir(dirPath) {
  if (fs.existsSync(dirPath)) {
    fs.rmSync(dirPath, { recursive: true, force: true });
    console.log(`✅ Removed: ${dirPath}`);
    return true;
  }
  return false;
}

// Function to remove file
function removeFile(filePath) {
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
    console.log(`✅ Removed: ${filePath}`);
    return true;
  }
  return false;
}

try {
  console.log('🗑️  Removing all Strapi data...\n');
  
  // Remove .tmp directory (SQLite database and cache)
  removeDir('.tmp');
  
  // Remove build directory
  removeDir('build');
  
  // Remove dist directory
  removeDir('dist');
  
  // Remove node_modules/.cache
  removeDir('node_modules/.cache');
  
  // Remove any SQLite database files
  const dbFiles = [
    'data.db',
    'database.db',
    'strapi.db',
    '.tmp/data.db'
  ];
  
  dbFiles.forEach(file => removeFile(file));
  
  // Remove any log files
  const logFiles = [
    'strapi.log',
    'error.log',
    'combined.log'
  ];
  
  logFiles.forEach(file => removeFile(file));
  
  console.log('\n✅ Complete reset finished!');
  console.log('\n📋 Next steps:');
  console.log('1. Restart Strapi: npm run develop');
  console.log('2. Go to http://localhost:1337/admin');
  console.log('3. Create a new admin account');
  console.log('4. Use these credentials:');
  console.log('   Email: admin@beam.local');
  console.log('   Password: BeamAdmin2024!');
  
} catch (error) {
  console.error('❌ Error during reset:', error.message);
  process.exit(1);
}