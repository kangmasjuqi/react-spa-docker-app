# Simple React SPA Demo

A basic single-page application built with React featuring authentication simulation and admin dashboard.

## Run in Docker

```docker-compose up --build```

## Demo + Screenshot 

https://www.loom.com/share/02c5694ed66841acb323ff18d73489ba

<img width="830" height="615" alt="Screen Shot 2025-08-15 at 10 47 53" src="https://github.com/user-attachments/assets/7448224d-79fe-43a3-8465-05afcf0eaa91" />

<img width="1260" height="681" alt="Screen Shot 2025-08-15 at 10 48 13" src="https://github.com/user-attachments/assets/ef3d607d-4b5f-4f14-90ec-7171e58102e7" />

## Features

- **Authentication System**
  - Login form with dummy account validation
  - Register form (demo only)
  - Session management with logout functionality

- **Admin Dashboard**
  - Dashboard page with dummy statistics
  - Settings page with preference form
  - Protected routes (login required)

## Demo Credentials

Use these credentials to test the login functionality:

```
Username: admin
Password: password123
```

## Tech Stack

- React 18+ (latest version)
- React Router DOM for navigation
- CSS Modules/Styled Components for styling
- Local state management (no external database)

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. Clone or create the project directory
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
├── components/
│   ├── Login.js
│   ├── Register.js
│   ├── Dashboard.js
│   └── Settings.js
├── pages/
│   └── AdminPage.js
├── utils/
│   └── auth.js
├── App.js
└── index.js
```

## Usage

1. **Login**: Use the demo credentials to access the admin area
2. **Register**: Fill out the registration form (demo only, no data saved)
3. **Dashboard**: View dummy statistics and charts
4. **Settings**: Update user preferences (changes are temporary)
5. **Logout**: Clear session and return to login

## Demo Data

The application includes:
- Dummy user statistics (users, revenue, orders)
- Sample preference settings
- Mock authentication system

## Notes

- No real database or backend integration
- All data is temporary and resets on page refresh
- Authentication is simulated for demonstration purposes
- This is a frontend-only demo application

## Future Enhancements

- Real backend integration
- Database connectivity
- Enhanced security features
- More dashboard widgets
- User profile management
