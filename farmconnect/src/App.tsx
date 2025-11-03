import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FarmerDashboard from './components/FarmerDashboard';
import AdminDashboard from './components/AdminDashboard';
import ExpertDashboard from './components/ExpertDashboard';
import PublicDashboard from './components/PublicDashboard';
import Resources from './components/Resources';
import Community from './components/Community';
import Opportunities from './components/Opportunities';
import './styles/App.css';

type UserRole = 'public' | 'farmer' | 'expert' | 'admin';
type Page = 'home' | 'resources' | 'community' | 'opportunities' | 'dashboard';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [userRole, setUserRole] = useState<UserRole>('public');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (role: UserRole) => {
    setUserRole(role);
    setIsLoggedIn(true);
    setCurrentPage('dashboard');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserRole('public');
    setCurrentPage('home');
  };

  const renderDashboard = () => {
    switch (userRole) {
      case 'admin':
        return <AdminDashboard />;
      case 'farmer':
        return <FarmerDashboard />;
      case 'expert':
        return <ExpertDashboard />;
      default:
        return <PublicDashboard onLogin={handleLogin} />;
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Hero onLogin={handleLogin} />;
      case 'resources':
        return <Resources userRole={userRole} />;
      case 'community':
        return <Community userRole={userRole} />;
      case 'opportunities':
        return <Opportunities userRole={userRole} />;
      case 'dashboard':
        return renderDashboard();
      default:
        return <Hero onLogin={handleLogin} />;
    }
  };

  return (
    <div className="app-container">
      <Navbar 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage}
        isLoggedIn={isLoggedIn}
        userRole={userRole}
        onLogout={handleLogout}
      />
      {renderPage()}
    </div>
  );
}

export default App;
