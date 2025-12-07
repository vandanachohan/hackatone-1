import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import BookList from './components/BookList';
import BookForm from './components/BookForm';
import BookDetail from './components/BookDetail';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="container mt-4">
          <Routes>
            <Route path="/" element={<BookList />} />
            <Route path="/books" element={<BookList />} />
            <Route path="/books/new" element={<BookForm />} />
            <Route path="/books/:id" element={<BookDetail />} />
            <Route path="/books/:id/edit" element={<BookForm />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;