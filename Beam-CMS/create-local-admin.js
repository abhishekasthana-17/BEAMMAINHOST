#!/usr/bin/env node

/**
 * Create Local Admin Account
 * This script will create a new admin account for the local Strapi instance
 */

const axios = require('axios');

const LOCAL_STRAPI_URL = 'http://localhost:1337';

async function checkAdminStatus() {
  try {
    console.log('🔍 Checking local admin status...');
    const response = await axios.get(`${LOCAL_STRAPI_URL}/admin/init`);
    
    console.log('📊 Admin status:', response.data);
    
    if (response.data.hasAdmin) {
      console.log('✅ Admin account already exists');
      return 'exists';
    } else {
      console.log('📝 No admin account found - can create new one');
      return 'can_create';
    }
  } catch (error) {
    console.log('❌ Error checking admin status:', error.message);
    return 'unknown';
  }
}

async function createAdminAccount() {
  try {
    console.log('🔧 Creating new admin account...');
    
    const adminData = {
      firstname: 'Admin',
      lastname: 'User',
      email: 'admin@beamcms.local',
      password: 'BeamAdmin2024!'
    };

    const response = await axios.post(`${LOCAL_STRAPI_URL}/admin/register-admin`, adminData);
    
    if (response.data.user) {
      console.log('✅ Admin account created successfully!');
      console.log(`📧 Email: ${adminData.email}`);
      console.log(`🔑 Password: ${adminData.password}`);
      return adminData;
    }
  } catch (error) {
    console.log('❌ Error creating admin account:', error.response?.data || error.message);
    return null;
  }
}

async function tryLogin(credentials) {
  try {
    console.log(`🔐 Testing login with ${credentials.email}...`);
    
    const response = await axios.post(`${LOCAL_STRAPI_URL}/admin/login`, credentials);
    
    if (response.data.data?.token) {
      console.log('✅ Login successful!');
      return response.data.data.token;
    }
  } catch (error) {
    console.log('❌ Login failed:', error.response?.data?.message || error.message);
    return null;
  }
}

async function resetAdminPassword() {
  try {
    console.log('🔄 Attempting to reset admin password...');
    
    // This is a more advanced approach - we'll try to access the database directly
    console.log('💡 For password reset, you may need to:');
    console.log('1. Stop the Strapi server');
    console.log('2. Delete the admin user from the database');
    console.log('3. Restart Strapi and create a new admin');
    
    return false;
  } catch (error) {
    console.log('❌ Reset error:', error.message);
    return false;
  }
}

async function main() {
  console.log('🚀 Starting Local Admin Account Setup\n');
  
  try {
    // Step 1: Check admin status
    const adminStatus = await checkAdminStatus();
    
    if (adminStatus === 'can_create') {
      // Step 2: Create new admin
      const newAdmin = await createAdminAccount();
      
      if (newAdmin) {
        // Step 3: Test login
        const token = await tryLogin(newAdmin);
        
        if (token) {
          console.log('\n🎉 SUCCESS! Admin account created and login working!');
          console.log('🔗 You can now access: http://localhost:1337/admin');
          console.log(`📧 Email: ${newAdmin.email}`);
          console.log(`🔑 Password: ${newAdmin.password}`);
        }
      }
    } else if (adminStatus === 'exists') {
      console.log('\n⚠️  Admin account already exists but credentials are invalid');
      console.log('💡 Possible solutions:');
      console.log('1. Try different credentials if you remember them');
      console.log('2. Check if there\'s a .env file with admin credentials');
      console.log('3. Reset the database to create a fresh admin account');
      
      // Try some common credentials
      const commonCredentials = [
        { email: 'admin@example.com', password: 'admin123' },
        { email: 'admin@admin.com', password: 'admin' },
        { email: 'test@test.com', password: 'test123' },
        { email: 'admin@strapi.io', password: 'strapi' }
      ];
      
      console.log('\n🔍 Trying common credentials...');
      for (const cred of commonCredentials) {
        const token = await tryLogin(cred);
        if (token) {
          console.log(`\n🎉 SUCCESS! Found working credentials:`);
          console.log(`📧 Email: ${cred.email}`);
          console.log(`🔑 Password: ${cred.password}`);
          return;
        }
      }
      
      console.log('\n❌ No common credentials worked');
      await resetAdminPassword();
    }
    
  } catch (error) {
    console.log('❌ Unexpected error:', error.message);
  }
}

main();