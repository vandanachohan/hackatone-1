import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { bookAPI } from '../services/api';

const BookDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBookDetail();
  }, [id]);

  const fetchBookDetail = async () => {
    try {
      setLoading(true);
      const response = await bookAPI.getBookById(id);
      setBook(response.data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch book details. Please try again later.');
      console.error('Error fetching book details:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this book? This action cannot be undone.')) {
      try {
        await bookAPI.deleteBook(id);
        alert('Book deleted successfully!');
        navigate('/books');
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
        <div className="mt-3">
          <Link to="/books" className="btn btn-primary">Back to Books</Link>
        </div>
      </div>
    );
  }

  if (!book) {
    return (
      <div className="text-center mt-5">
        <h3>Book not found</h3>
        <Link to="/books" className="btn btn-primary">Back to Books</Link>
      </div>
    );
  }

  return (
    <div className="card">
      <div className="card-header d-flex justify-content-between align-items-center">
        <h2>Book Details</h2>
        <div>
          <Link to={`/books/${id}/edit`} className="btn btn-primary me-2">
            <i className="fas fa-edit me-1"></i>Edit
          </Link>
          <button
            className="btn btn-danger"
            onClick={handleDelete}
          >
            <i className="fas fa-trash me-1"></i>Delete
          </button>
        </div>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-md-6">
            <h4 className="card-title">{book.title}</h4>
            <h5 className="card-subtitle text-muted mb-3">by {book.author}</h5>

            <div className="mb-3">
              <strong>ISBN:</strong> {book.isbn}
            </div>

            <div className="mb-3">
              <strong>Published Year:</strong> {book.publishedYear || 'Not specified'}
            </div>

            <div className="mb-3">
              <strong>Genre:</strong> {book.genre || 'Not specified'}
            </div>

            <div className="mb-3">
              <strong>Created:</strong> {new Date(book.createdAt).toLocaleDateString()}
            </div>

            <div className="mb-3">
              <strong>Last Updated:</strong> {new Date(book.updatedAt).toLocaleDateString()}
            </div>
          </div>

          <div className="col-md-6">
            <div className="card bg-light">
              <div className="card-body">
                <h5 className="card-title">Description</h5>
                <p className="card-text">
                  {book.description || 'No description available for this book.'}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <Link to="/books" className="btn btn-secondary">
            <i className="fas fa-arrow-left me-1"></i>Back to Books
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;