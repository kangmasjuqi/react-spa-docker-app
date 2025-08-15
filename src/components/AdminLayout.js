import React from 'react';
import { useAuth } from '../App';
import { useNavigate, useLocation } from 'react-router-dom';
import { LayoutDashboard, Settings, LogOut, User } from 'lucide-react';

const AdminLayout = ({ children }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const menuItems = [
    {
      path: '/admin/dashboard',
      label: 'Dashboard',
      icon: LayoutDashboard
    },
    {
      path: '/admin/settings',
      label: 'Settings',
      icon: Settings
    }
  ];

  return (
    <div className="admin-layout">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <h3>Admin Panel</h3>
        </div>
        
        <div className="user-info">
          <User className="user-icon" />
          <div className="user-details">
            <p className="user-name">{user?.name}</p>
            <p className="user-email">{user?.email}</p>
          </div>
        </div>

        <nav className="sidebar-nav">
          {menuItems.map((item) => {
            const IconComponent = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className={`nav-item ${isActive ? 'active' : ''}`}
              >
                <IconComponent className="nav-icon" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="sidebar-footer">
          <button onClick={handleLogout} className="logout-button">
            <LogOut className="nav-icon" />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <header className="main-header">
          <h1>
            {location.pathname === '/admin/dashboard' && 'Dashboard'}
            {location.pathname === '/admin/settings' && 'Settings'}
          </h1>
          <div className="header-actions">
            <span>Welcome back, {user?.name}!</span>
          </div>
        </header>
        
        <div className="content-area">
          {children}
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;