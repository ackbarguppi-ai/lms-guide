#!/usr/bin/env node

/**
 * Quick test script for the report generator
 * Usage: node test-report.js [email]
 */

const email = process.argv[2] || 'test@example.com';
const baseUrl = process.env.REPORT_GENERATOR_URL || 'http://localhost:3001';

const testData = {
  email,
  name: 'Test User',
  company: 'Test Company',
  company_size: '10-50 employees',
  use_case: 'Customer training and onboarding',
  criteria: 'Ease of use and quick setup',
  lead_id: `test_${Date.now()}`,
};

async function testReportGeneration() {
  console.log(`Testing report generation for ${email}...`);
  console.log(`Endpoint: ${baseUrl}/generate-report`);
  console.log('');

  try {
    const response = await fetch(`${baseUrl}/generate-report`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(testData),
    });

    const result = await response.json();

    if (response.ok) {
      console.log('✅ Success!');
      console.log('Response:', JSON.stringify(result, null, 2));
      console.log('');
      console.log(`Check ${email} for the report.`);
    } else {
      console.log('❌ Failed!');
      console.log('Status:', response.status);
      console.log('Response:', JSON.stringify(result, null, 2));
      process.exit(1);
    }
  } catch (error) {
    console.log('❌ Error!');
    console.log(error.message);
    console.log('');
    console.log('Make sure the report generator is running:');
    console.log('  cd report-generator && npm start');
    process.exit(1);
  }
}

testReportGeneration();
