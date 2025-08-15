import React from 'react';
import { Users, ShoppingCart, DollarSign, TrendingUp } from 'lucide-react';

const Dashboard = () => {
  // Dummy stats data
  const stats = [
    {
      title: 'Total Users',
      value: '3,541',
      change: '+12%',
      trend: 'up',
      icon: Users,
      color: 'blue'
    },
    {
      title: 'Orders',
      value: '1,234',
      change: '+8%',
      trend: 'up',
      icon: ShoppingCart,
      color: 'green'
    },
    {
      title: 'Revenue',
      value: '$45,678',
      change: '+23%',
      trend: 'up',
      icon: DollarSign,
      color: 'purple'
    },
    {
      title: 'Growth',
      value: '15.3%',
      change: '+2.1%',
      trend: 'up',
      icon: TrendingUp,
      color: 'orange'
    }
  ];

  const recentActivities = [
    { id: 1, action: 'New user registration', user: 'john@example.com', time: '2 minutes ago' },
    { id: 2, action: 'Order completed', user: 'jane@example.com', time: '5 minutes ago' },
    { id: 3, action: 'Payment received', user: 'bob@example.com', time: '12 minutes ago' },
    { id: 4, action: 'Profile updated', user: 'alice@example.com', time: '1 hour ago' },
    { id: 5, action: 'New order placed', user: 'charlie@example.com', time: '2 hours ago' }
  ];

  return (
    <div className="dashboard">
      {/* Stats Grid */}
      <div className="stats-grid">
        {stats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <div key={index} className={`stat-card ${stat.color}`}>
              <div className="stat-icon">
                <IconComponent />
              </div>
              <div className="stat-content">
                <h3>{stat.value}</h3>
                <p className="stat-title">{stat.title}</p>
                <span className={`stat-change ${stat.trend}`}>
                  {stat.change} from last month
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Content Sections */}
      <div className="dashboard-content">
        {/* Chart Placeholder */}
        <div className="dashboard-card">
          <h3>Sales Overview</h3>
          <div className="chart-placeholder">
            <div className="chart-bars">
              <div className="bar" style={{height: '60%'}}></div>
              <div className="bar" style={{height: '80%'}}></div>
              <div className="bar" style={{height: '45%'}}></div>
              <div className="bar" style={{height: '90%'}}></div>
              <div className="bar" style={{height: '70%'}}></div>
              <div className="bar" style={{height: '55%'}}></div>
              <div className="bar" style={{height: '85%'}}></div>
            </div>
            <p className="chart-label">Last 7 days performance</p>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="dashboard-card">
          <h3>Recent Activity</h3>
          <div className="activity-list">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="activity-item">
                <div className="activity-content">
                  <p className="activity-action">{activity.action}</p>
                  <p className="activity-user">{activity.user}</p>
                </div>
                <span className="activity-time">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="quick-actions">
        <h3>Quick Actions</h3>
        <div className="action-buttons">
          <button className="action-btn primary">Add New User</button>
          <button className="action-btn secondary">Generate Report</button>
          <button className="action-btn tertiary">Export Data</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;