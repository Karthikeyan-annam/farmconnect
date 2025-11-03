import { Menu, X, Sprout, User, LogOut } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import './Navbar.css';

export default function Navbar({ currentPage, setCurrentPage, isLoggedIn, userRole, onLogout }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', page: 'home' },
    { name: 'Resources', page: 'resources' },
    { name: 'Community', page: 'community' },
    { name: 'Opportunities', page: 'opportunities' },
  ];

  if (isLoggedIn) {
    navLinks.push({ name: 'Dashboard', page: 'dashboard' });
  }

  const getRoleBadge = () => {
    const roleLabels = {
      admin: 'Admin',
      farmer: 'Farmer',
      expert: 'Expert',
      public: 'Guest'
    };
    
    const roleColors = {
      admin: 'role-badge-admin',
      farmer: 'role-badge-farmer',
      expert: 'role-badge-expert',
      public: 'role-badge-public'
    };

    return (
      <Badge className={roleColors[userRole]}>
        {roleLabels[userRole]}
      </Badge>
    );
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-content">
          {/* Logo */}
          <div 
            className="navbar-logo"
            onClick={() => setCurrentPage('home')}
          >
            <Sprout className="logo-icon" />
            <span className="logo-text">FarmConnect</span>
          </div>

          {/* Desktop Navigation */}
          <div className="nav-links-desktop">
            {navLinks.map((link) => (
              <button
                key={link.page}
                onClick={() => {
                  setCurrentPage(link.page);
                  setMobileMenuOpen(false);
                }}
                className={`nav-link ${currentPage === link.page ? 'nav-link-active' : ''}`}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* User Info & Logout */}
          <div className="user-info-desktop">
            {isLoggedIn && (
              <>
                <User className="user-icon" />
                {getRoleBadge()}
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={onLogout}
                  className="logout-button"
                >
                  <LogOut className="logout-icon" />
                  Logout
                </Button>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-menu-button"
          >
            {mobileMenuOpen ? <X className="menu-icon" /> : <Menu className="menu-icon" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="nav-links-mobile">
            {navLinks.map((link) => (
              <button
                key={link.page}
                onClick={() => {
                  setCurrentPage(link.page);
                  setMobileMenuOpen(false);
                }}
                className={`nav-link-mobile ${currentPage === link.page ? 'nav-link-mobile-active' : ''}`}
              >
                {link.name}
              </button>
            ))}
            {isLoggedIn && (
              <div className="user-info-mobile">
                <User className="user-icon" />
                {getRoleBadge()}
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => {
                    onLogout();
                    setMobileMenuOpen(false);
                  }}
                  className="logout-button-mobile"
                >
                  <LogOut className="logout-icon" />
                  Logout
                </Button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
