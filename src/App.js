import React, { useState, createContext, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import AdminLayout from './components/AdminLayout';
import Dashboard from './components/Dashboard';
import Settings from './components/Settings';
import './App.css';

// Auth Context
const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// Dummy user data
const DUMMY_USERS = [
  { id: 1, email: 'admin@demo.com', password: 'admin123', name: 'Admin User' },
  { id: 2, email: 'user@demo.com', password: 'user123', name: 'Demo User' }
];

function App() {
  const [user, setUser] = useState(null);
  const [currentView, setCurrentView] = useState('login'); // 'login', 'register', 'admin'

  const login = (email, password) => {
    const foundUser = DUMMY_USERS.find(u => u.email === email && u.password === password);
    if (foundUser) {
      setUser(foundUser);
      setCurrentView('admin');
      return true;
    }
    return false;
  };

  const register = (email, password, name) => {
    // Simulate successful registration
    const newUser = { 
      id: Date.now(), 
      email, 
      password, 
      name 
    };
    setUser(newUser);
    setCurrentView('admin');
    return true;
  };

  const logout = () => {
    setUser(null);
    setCurrentView('login');
  };

  const authValue = {
    user,
    login,
    register,
    logout,
    isAuthenticated: !!user
  };

  return (
    <AuthContext.Provider value={authValue}>
      <Router>
        <div className="App">
          <Routes>
            <Route 
              path="/login" 
              element={
                !user ? (
                  <LoginForm onSwitchToRegister={() => setCurrentView('register')} />
                ) : (
                  <Navigate to="/admin/dashboard" replace />
                )
              } 
            />
            <Route 
              path="/register" 
              element={
                !user ? (
                  <RegisterForm onSwitchToLogin={() => setCurrentView('login')} />
                ) : (
                  <Navigate to="/admin/dashboard" replace />
                )
              } 
            />
            <Route 
              path="/admin/*" 
              element={
                user ? (
                  <AdminLayout>
                    <Routes>
                      <Route path="/dashboard" element={<Dashboard />} />
                      <Route path="/settings" element={<Settings />} />
                      <Route path="/" element={<Navigate to="/admin/dashboard" replace />} />
                    </Routes>
                  </AdminLayout>
                ) : (
                  <Navigate to="/login" replace />
                )
              } 
            />
            <Route path="/" element={<Navigate to={user ? "/admin/dashboard" : "/login"} replace />} />
          </Routes>
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;