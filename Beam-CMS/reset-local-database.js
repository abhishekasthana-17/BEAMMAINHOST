#!/usr/bin/env node

/**
 * Reset Local Database
 * This script will reset the local Strapi database to allow creating a new admin account
 */

const fs = require('fs');
const path = require('path');

async function resetDatabase() {
  console.log('🔄 Resetting local Strapi database...\n');
  
  try {
    // Check for SQLite database files (common in development)
    const dbPaths = [
      path.join(__dirname, '.tmp', 'data.db'),
      path.join(__dirname, 'database', 'data.db'),
      path.join(__dirname, 'data.db'),
      path.join(__dirname, '.strapi', 'data.db')
    ];
    
    let foundDb = false;
    
    for (const dbPath of dbPaths) {
      if (fs.existsSync(dbPath)) {
        console.log(`📁 Found database file: ${dbPath}`);
        try {
          fs.unlinkSync(dbPath);
          console.log(`✅ Deleted database file: ${dbPath}`);
          foundDb = true;
        } catch (error) {
          console.log(`❌ Error deleting ${dbPath}:`, error.message);
        }
      }
    }
    
    // Check for .tmp directory and clean it
    const tmpDir = path.join(__dirname, '.tmp');
    if (fs.existsSync(tmpDir)) {
      console.log(`📁 Found .tmp directory: ${tmpDir}`);
      try {
        fs.rmSync(tmpDir, { recursive: true, force: true });
        console.log(`✅ Deleted .tmp directory`);
        foundDb = true;
      } catch (error) {
        console.log(`❌ Error deleting .tmp directory:`, error.message);
      }
    }
    
    // Check for database directory
    const dbDir = path.join(__dirname, 'database');
    if (fs.existsSync(dbDir)) {
      console.log(`📁 Found database directory: ${dbDir}`);
      const files = fs.readdirSync(dbDir);
      for (const file of files) {
        if (file.endsWith('.db') || file.endsWith('.sqlite')) {
          const filePath = path.join(dbDir, file);
          try {
            fs.unlinkSync(filePath);
            console.log(`✅ Deleted database file: ${filePath}`);
            foundDb = true;
          } catch (error) {
            console.log(`❌ Error deleting ${filePath}:`, error.message);
          }
        }
      }
    }
    
    if (!foundDb) {
      console.log('🔍 No local database files found to delete');
      console.log('💡 The database might be using PostgreSQL or another external database');
      console.log('📝 Check your .env file for database configuration');
    } else {
      console.log('\n🎉 Database reset complete!');
      console.log('🔄 Please restart your Strapi server to create a fresh database');
      console.log('🔗 Then visit http://localhost:1337/admin to create a new admin account');
    }
    
  } catch (error) {
    console.log('❌ Error during database reset:', error.message);
  }
}

async function checkEnvFile() {
  console.log('🔍 Checking environment configuration...\n');
  
  const envPath = path.join(__dirname, '.env');
  
  if (fs.existsSync(envPath)) {
    console.log('📄 Found .env file');
    try {
      const envContent = fs.readFileSync(envPath, 'utf8');
      
      if (envContent.includes('DATABASE_CLIENT=postgres') || envContent.includes('DATABASE_URL=')) {
        console.log('🐘 Using PostgreSQL database');
        console.log('⚠️  Cannot reset PostgreSQL database automatically');
        console.log('💡 You may need to manually drop and recreate the database');
      } else if (envContent.includes('DATABASE_CLIENT=sqlite')) {
        console.log('📦 Using SQLite database');
        console.log('✅ SQLite database can be reset by deleting files');
      } else {
        console.log('📦 Likely using default SQLite database');
      }
    } catch (error) {
      console.log('❌ Error reading .env file:', error.message);
    }
  } else {
    console.log('📦 No .env file found - using default SQLite database');
  }
  
  console.log('');
}

async function main() {
  console.log('🚀 Starting Local Database Reset\n');
  
  await checkEnvFile();
  await resetDatabase();
  
  console.log('\n📋 Next Steps:');
  console.log('1. Stop your Strapi server (Ctrl+C in the terminal)');
  console.log('2. Restart Strapi with: npm run develop');
  console.log('3. Visit http://localhost:1337/admin');
  console.log('4. Create a new admin account');
  console.log('5. Run the export script again');
}

main();