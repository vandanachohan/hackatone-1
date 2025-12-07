# Bookstore Frontend

A React-based frontend application for the Bookstore API with full CRUD functionality.

## Features

- View all books in a responsive grid layout
- Create new books with form validation
- Edit existing books
- Delete books
- View detailed information for each book
- Responsive design using Bootstrap
- Form validation for book inputs
- React Router for navigation

## Prerequisites

- Node.js (v14 or higher)
- The backend API server running on `http://localhost:3000` (or configured endpoint)

## Installation

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the frontend directory (optional):
   ```env
   REACT_APP_API_URL=http://localhost:3000/api
   ```

## Running the Application

### Development Mode
```bash
npm start
```
The application will be available at `http://localhost:3001` (or another available port).

### Production Build
```bash
npm run build
```

## API Integration

The frontend connects to the backend API at `http://localhost:3000/api` by default. You can change this by setting the `REACT_APP_API_URL` environment variable.

## Available Pages

- `/` or `/books` - Book list view
- `/books/new` - Create new book form
- `/books/:id` - View book details
- `/books/:id/edit` - Edit book form

## Components

- `Header.js` - Navigation header
- `BookList.js` - Displays all books in a grid
- `BookForm.js` - Form for creating and editing books with validation
- `BookDetail.js` - Detailed view of a single book
- `api.js` - API service layer using Axios