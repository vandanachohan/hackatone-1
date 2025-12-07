# Book Backend Application

I have successfully created a complete backend application for managing books with the following components:

## 📁 Files Created:
- `server.js` - Main Express.js server with all API endpoints
- `package.json` - Project configuration and dependencies
- `.env` - Environment variables configuration
- `README.md` - Complete documentation with setup instructions
- `start.bat` - Windows startup script
- `start.sh` - Unix/Linux startup script
- `dev.bat` - Windows development startup script
- `test/server.test.js` - Test file for API endpoints
- `test-api.js` - API testing script

## 🚀 Features Implemented:

### API Endpoints:
- `GET /api/books` - Retrieve all books
- `GET /api/books/:id` - Retrieve a specific book
- `POST /api/books` - Create a new book
- `PUT /api/books/:id` - Update an existing book
- `DELETE /api/books/:id` - Delete a book
- `GET /` - Health check endpoint

### Database:
- MongoDB integration with Mongoose
- Book schema with fields: title, author, isbn, publishedYear, genre, description
- Proper validation and error handling

### Environment:
- Configurable port and database connection
- CORS support for frontend integration
- Dotenv for environment variable management

## 📋 Commands to Run:

1. **Install dependencies:**
   ```
   npm install
   ```

2. **Run in development mode (with auto-restart):**
   ```
   npm run dev
   ```
   OR
   ```
   npm start
   ```

3. **Windows users:**
   - Double-click `start.bat` to run the application
   - Double-click `dev.bat` for development mode

4. **Unix/Linux users:**
   ```
   ./start.sh
   ```

## 🛠️ Requirements:
- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas)

The application is now ready to use! It provides a complete REST API for managing books with all CRUD operations. The server runs on port 3000 by default and connects to a MongoDB database called 'bookstore'.