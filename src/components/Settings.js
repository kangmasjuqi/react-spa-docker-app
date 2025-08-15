import React, { useState } from 'react';
import { useAuth } from '../App';
import { Save, Bell, Shield, Palette } from 'lucide-react';

const Settings = () => {
  const { user } = useAuth();
  
  const [preferences, setPreferences] = useState({
    notifications: {
      email: true,
      push: false,
      marketing: true
    },
    appearance: {
      theme: 'light',
      language: 'en',
      timezone: 'UTC'
    },
    privacy: {
      profileVisibility: 'public',
      dataSharing: false,
      analytics: true
    },
    profile: {
      name: user?.name || '',
      email: user?.email || '',
      phone: '',
      company: ''
    }
  });

  const [activeTab, setActiveTab] = useState('profile');
  const [saveMessage, setSaveMessage] = useState('');

  const handleInputChange = (section, field, value) => {
    setPreferences(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const handleSave = () => {
    // Simulate save operation
    setSaveMessage('Settings saved successfully!');
    setTimeout(() => setSaveMessage(''), 3000);
  };

  const tabs = [
    { id: 'profile', label: 'Profile', icon: Shield },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'appearance', label: 'Appearance', icon: Palette }
  ];

  return (
    <div className="settings">
      <div className="settings-header">
        <h2>Settings & Preferences</h2>
        <p>Manage your account settings and preferences</p>
      </div>

      <div className="settings-content">
        {/* Tabs */}
        <div className="settings-tabs">
          {tabs.map(tab => {
            const IconComponent = tab.icon;
            return (
              <button
                key={tab.id}
                className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <IconComponent className="tab-icon" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        <div className="settings-panel">
          {activeTab === 'profile' && (
            <div className="settings-section">
              <h3>Profile Information</h3>
              <div className="form-grid">
                <div className="form-group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    value={preferences.profile.name}
                    onChange={(e) => handleInputChange('profile', 'name', e.target.value)}
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    value={preferences.profile.email}
                    onChange={(e) => handleInputChange('profile', 'email', e.target.value)}
                    placeholder="Enter your email"
                  />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    value={preferences.profile.phone}
                    onChange={(e) => handleInputChange('profile', 'phone', e.target.value)}
                    placeholder="Enter your phone number"
                  />
                </div>
                <div className="form-group">
                  <label>Company</label>
                  <input
                    type="text"
                    value={preferences.profile.company}
                    onChange={(e) => handleInputChange('profile', 'company', e.target.value)}
                    placeholder="Enter your company name"
                  />
                </div>
              </div>
            </div>
          )}

          {activeTab === 'notifications' && (
            <div className="settings-section">
              <h3>Notification Preferences</h3>
              <div className="preference-list">
                <div className="preference-item">
                  <div className="preference-info">
                    <h4>Email Notifications</h4>
                    <p>Receive notifications via email</p>
                  </div>
                  <label className="toggle-switch">
                    <input
                      type="checkbox"
                      checked={preferences.notifications.email}
                      onChange={(e) => handleInputChange('notifications', 'email', e.target.checked)}
                    />
                    <span className="slider"></span>
                  </label>
                </div>
                <div className="preference-item">
                  <div className="preference-info">
                    <h4>Push Notifications</h4>
                    <p>Receive push notifications in browser</p>
                  </div>
                  <label className="toggle-switch">
                    <input
                      type="checkbox"
                      checked={preferences.notifications.push}
                      onChange={(e) => handleInputChange('notifications', 'push', e.target.checked)}
                    />
                    <span className="slider"></span>
                  </label>
                </div>
                <div className="preference-item">
                  <div className="preference-info">
                    <h4>Marketing Emails</h4>
                    <p>Receive marketing and promotional emails</p>
                  </div>
                  <label className="toggle-switch">
                    <input
                      type="checkbox"
                      checked={preferences.notifications.marketing}
                      onChange={(e) => handleInputChange('notifications', 'marketing', e.target.checked)}
                    />
                    <span className="slider"></span>
                  </label>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'appearance' && (
            <div className="settings-section">
              <h3>Appearance & Display</h3>
              <div className="form-grid">
                <div className="form-group">
                  <label>Theme</label>
                  <select
                    value={preferences.appearance.theme}
                    onChange={(e) => handleInputChange('appearance', 'theme', e.target.value)}
                  >
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
                    <option value="auto">Auto</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Language</label>
                  <select
                    value={preferences.appearance.language}
                    onChange={(e) => handleInputChange('appearance', 'language', e.target.value)}
                  >
                    <option value="en">English</option>
                    <option value="es">Spanish</option>
                    <option value="fr">French</option>
                    <option value="de">German</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Timezone</label>
                  <select
                    value={preferences.appearance.timezone}
                    onChange={(e) => handleInputChange('appearance', 'timezone', e.target.value)}
                  >
                    <option value="UTC">UTC</option>
                    <option value="EST">Eastern Time</option>
                    <option value="PST">Pacific Time</option>
                    <option value="GMT">Greenwich Mean Time</option>
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Save Button */}
        <div className="settings-actions">
          {saveMessage && <div className="save-message success">{saveMessage}</div>}
          <button className="save-button" onClick={handleSave}>
            <Save className="button-icon" />
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;