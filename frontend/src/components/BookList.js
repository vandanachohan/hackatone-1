import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { bookAPI } from '../services/api';

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      setLoading(true);
      const response = await bookAPI.getAllBooks();
      setBooks(response.data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch books. Please try again later.');
      console.error('Error fetching books:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this book?')) {
      try {
        await bookAPI.deleteBook(id);
        fetchBooks(); // Refresh the list
      } catch (err) {
        setError('Failed to delete book. Please try again.');
        console.error('Error deleting book:', err);
      }
    }
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center mt-5">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="alert alert-danger" role="alert">
        {error}
      </div>
    );
  }

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Book Collection</h2>
        <Link to="/books/new" className="btn btn-primary">
          <i className="fas fa-plus me-1"></i>Add New Book
        </Link>
      </div>

      {books.length === 0 ? (
        <div className="text-center">
          <h4 className="text-muted">No books found</h4>
          <p className="text-muted">Start by adding your first book to the collection.</p>
          <Link to="/books/new" className="btn btn-primary">
            Add Your First Book
          </Link>
        </div>
      ) : (
        <div className="row">
          {books.map((book) => (
            <div key={book._id} className="col-md-6 col-lg-4 mb-4">
              <div className="card h-100">
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{book.title}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">{book.author}</h6>
                  <p className="card-text flex-grow-1">
                    {book.description ?
                      book.description.substring(0, 100) + '...' :
                      'No description available.'}
                  </p>
                  <div className="mt-auto">
                    <small className="text-muted">
                      {book.publishedYear ? `Published: ${book.publishedYear}` : ''} {book.genre ? `| Genre: ${book.genre}` : ''}
                    </small>
                  </div>
                </div>
                <div className="card-footer bg-transparent">
                  <div className="d-flex justify-content-between">
                    <Link
                      to={`/books/${book._id}`}
                      className="btn btn-outline-primary btn-sm"
                    >
                      View Details
                    </Link>
                    <Link
                      to={`/books/${book._id}/edit`}
                      className="btn btn-outline-secondary btn-sm me-2"
                    >
                      Edit
                    </Link>
                    <button
                      className="btn btn-outline-danger btn-sm"
                      onClick={() => handleDelete(book._id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BookList;