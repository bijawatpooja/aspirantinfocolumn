
import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SignupPage from './pages/SignupPage';
import LandingPage from './pages/LandingPage';
import LicenseCheckPage from './pages/LicenseCheckPage';
import Dashboard from './pages/Dashboard';
import CompanySettings from './pages/Settings';
import MainLayout from './common/MainLayout';

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => setIsAuthenticated(true);

  return (
    <Router>
      <Routes>
        {/* Login Route */}
        <Route
          path="/login"
          element={
            isAuthenticated ? <Navigate to="/dashboard" /> : <LandingPage onLogin={handleLogin} />
          }
        />

        {/* Protected Routes */}
        {isAuthenticated ? (
          <Route element={<MainLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/licensecheck" element={<LicenseCheckPage />} />
            <Route path="/mycompanysettings" element={<CompanySettings />} />
            <Route path="*" element={<Navigate to="/dashboard" />} />
          </Route>
        ) : (
          <>
            <Route path="*" element={<Navigate to="/signin" />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/signin" element={<LandingPage onLogin={handleLogin}/>} />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
