import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { bookAPI } from '../services/api';

const BookForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: '',
    author: '',
    isbn: '',
    publishedYear: '',
    genre: '',
    description: ''
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (id) {
      setIsEditing(true);
      fetchBookDetails();
    }
  }, [id]);

  const fetchBookDetails = async () => {
    try {
      const response = await bookAPI.getBookById(id);
      setFormData(response.data);
    } catch (err) {
      console.error('Error fetching book details:', err);
      alert('Failed to load book details');
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = 'Title is required';
    }

    if (!formData.author.trim()) {
      newErrors.author = 'Author is required';
    }

    if (!formData.isbn.trim()) {
      newErrors.isbn = 'ISBN is required';
    } else if (!/^(?:\d{10}|\d{13})$/.test(formData.isbn.replace(/-/g, ''))) {
      newErrors.isbn = 'Invalid ISBN format (10 or 13 digits)';
    }

    if (formData.publishedYear && (isNaN(formData.publishedYear) || formData.publishedYear < 1000 || formData.publishedYear > new Date().getFullYear())) {
      newErrors.publishedYear = `Year must be between 1000 and ${new Date().getFullYear()}`;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      if (isEditing) {
        await bookAPI.updateBook(id, formData);
        alert('Book updated successfully!');
      } else {
        await bookAPI.createBook(formData);
        alert('Book created successfully!');
      }
      navigate('/books');
    } catch (err) {
      console.error('Error saving book:', err);
      alert('Failed to save book. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    navigate('/books');
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-header">
            <h3>{isEditing ? 'Edit Book' : 'Add New Book'}</h3>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="title" className="form-label">Title *</label>
                <input
                  type="text"
                  className={`form-control ${errors.title ? 'is-invalid' : ''}`}
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Enter book title"
                />
                {errors.title && <div className="invalid-feedback">{errors.title}</div>}
              </div>

              <div className="mb-3">
                <label htmlFor="author" className="form-label">Author *</label>
                <input
                  type="text"
                  className={`form-control ${errors.author ? 'is-invalid' : ''}`}
                  id="author"
                  name="author"
                  value={formData.author}
                  onChange={handleChange}
                  placeholder="Enter author name"
                />
                {errors.author && <div className="invalid-feedback">{errors.author}</div>}
              </div>

              <div className="mb-3">
                <label htmlFor="isbn" className="form-label">ISBN *</label>
                <input
                  type="text"
                  className={`form-control ${errors.isbn ? 'is-invalid' : ''}`}
                  id="isbn"
                  name="isbn"
                  value={formData.isbn}
                  onChange={handleChange}
                  placeholder="Enter ISBN (10 or 13 digits)"
                />
                {errors.isbn && <div className="invalid-feedback">{errors.isbn}</div>}
              </div>

              <div className="mb-3">
                <label htmlFor="publishedYear" className="form-label">Published Year</label>
                <input
                  type="number"
                  className={`form-control ${errors.publishedYear ? 'is-invalid' : ''}`}
                  id="publishedYear"
                  name="publishedYear"
                  value={formData.publishedYear}
                  onChange={handleChange}
                  min="1000"
                  max={new Date().getFullYear()}
                  placeholder="Enter published year"
                />
                {errors.publishedYear && <div className="invalid-feedback">{errors.publishedYear}</div>}
              </div>

              <div className="mb-3">
                <label htmlFor="genre" className="form-label">Genre</label>
                <input
                  type="text"
                  className="form-control"
                  id="genre"
                  name="genre"
                  value={formData.genre}
                  onChange={handleChange}
                  placeholder="Enter book genre"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <textarea
                  className="form-control"
                  id="description"
                  name="description"
                  rows="4"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Enter book description"
                ></textarea>
              </div>

              <div className="d-flex justify-content-between">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleCancel}
                  disabled={loading}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-1" role="status" aria-hidden="true"></span>
                      {isEditing ? 'Updating...' : 'Creating...'}
                    </>
                  ) : (
                    isEditing ? 'Update Book' : 'Create Book'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookForm;