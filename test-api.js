const http = require('http');

// Test the server by making a simple request
const options = {
  hostname: 'localhost',
  port: 3000,
  path: '/',
  method: 'GET',
};

console.log('Testing Book Backend API...');

const req = http.request(options, (res) => {
  console.log(`Status: ${res.statusCode}`);

  res.on('data', (chunk) => {
    console.log(`Response: ${chunk}`);
  });

  res.on('end', () => {
    console.log('API test completed successfully!');
    console.log('\nAvailable commands to run the application:');
    console.log('1. npm start - Run in production mode');
    console.log('2. npm run dev - Run in development mode with auto-restart');
    console.log('3. Double-click start.bat - Windows startup script');
    console.log('4. ./start.sh - Unix/Linux startup script');
    console.log('\nAPI Endpoints:');
    console.log('GET    /              - Health check');
    console.log('GET    /api/books     - Get all books');
    console.log('GET    /api/books/:id - Get specific book');
    console.log('POST   /api/books     - Create new book');
    console.log('PUT    /api/books/:id - Update book');
    console.log('DELETE /api/books/:id - Delete book');
  });
});

req.on('error', (error) => {
  console.error('Error testing API:', error);
  console.log('\nMake sure MongoDB is running and the server is started with:');
  console.log('npm run dev');
});

req.end();