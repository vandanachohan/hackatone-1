import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-primary text-white py-3 mb-4">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <h1 className="mb-0">
            <Link to="/" className="text-white text-decoration-none">
              <i className="fas fa-book me-2"></i>Bookstore
            </Link>
          </h1>
          <nav>
            <Link to="/" className="btn btn-light me-2">
              <i className="fas fa-home me-1"></i>Home
            </Link>
            <Link to="/books/new" className="btn btn-success">
              <i className="fas fa-plus me-1"></i>Add Book
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;