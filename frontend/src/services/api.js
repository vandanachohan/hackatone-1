import axios from 'axios';

// Create an axios instance with base configuration
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add auth token if available
api.interceptors.request.use(
  (config) => {
    // You can add authentication token here if needed
    // const token = localStorage.getItem('token');
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle errors globally
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error);
    return Promise.reject(error);
  }
);

export default api;

// Book-related API functions
export const bookAPI = {
  // Get all books
  getAllBooks: () => api.get('/books'),

  // Get a specific book by ID
  getBookById: (id) => api.get(`/books/${id}`),

  // Create a new book
  createBook: (bookData) => api.post('/books', bookData),

  // Update an existing book
  updateBook: (id, bookData) => api.put(`/books/${id}`, bookData),

  // Delete a book
  deleteBook: (id) => api.delete(`/books/${id}`)
};