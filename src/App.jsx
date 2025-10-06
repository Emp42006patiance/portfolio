import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Login from './pages/Login';
import Register from './pages/Register';
import DeveloperDashboard from './pages/DeveloperDashboard';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import AdminBlog from './pages/AdminBlog';


// Simple auth check (for demo)
const isAuthenticated = () => {
  return localStorage.getItem('isLoggedIn') === 'true';
};

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route 
            path="/developer-dashboard" 
            element={
              isAuthenticated() ? <DeveloperDashboard /> : <Navigate to="/login" />
            } 
          />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route 
            path="/admin-dashboard" 
            element={
              isAuthenticated() ? <AdminDashboard /> : <Navigate to="/admin-login" />
            } 
          />
          <Route path="*" element={<Navigate to="/" />} />
          <Route 
  path="/admin-dashboard" 
  element={
    localStorage.getItem('isAdmin') === 'true' ? <AdminDashboard /> : <Navigate to="/admin-login" />
  } 
/>    
     <Route 
  path="/admin-blog" 
  element={
    localStorage.getItem('isAdmin') === 'true' ? <AdminBlog /> : <Navigate to="/admin-login" />
  } 
/>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;