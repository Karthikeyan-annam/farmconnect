import { Sprout, Users, BookOpen, TrendingUp, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';
import './Hero.css';

export default function Hero({ onLogin }) {
  const [loginDialogOpen, setLoginDialogOpen] = useState(false);

  const features = [
    {
      icon: <Sprout className="feature-icon feature-icon-green" />,
      title: 'Sustainable Farming',
      description: 'Learn modern techniques to improve crop yields while protecting the environment',
    },
    {
      icon: <Users className="feature-icon feature-icon-blue" />,
      title: 'Community Connection',
      description: 'Connect with farmers, experts, and organizations across different sectors',
    },
    {
      icon: <BookOpen className="feature-icon feature-icon-purple" />,
      title: 'Educational Resources',
      description: 'Access expert guidance, training materials, and best practices',
    },
    {
      icon: <TrendingUp className="feature-icon feature-icon-orange" />,
      title: 'Growth Opportunities',
      description: 'Discover funding, partnerships, and market opportunities for your farm',
    },
  ];

  const userRoles = [
    {
      role: 'farmer',
      title: 'Farmer',
      description: 'Access resources, connect with sectors, and grow your farming business',
      color: 'role-button-green',
    },
    {
      role: 'expert',
      title: 'Agricultural Expert',
      description: 'Share knowledge, provide guidance, and support the farming community',
      color: 'role-button-blue',
    },
    {
      role: 'admin',
      title: 'Administrator',
      description: 'Manage platform content and oversee community interactions',
      color: 'role-button-purple',
    },
  ];

  const handleRoleSelect = (role) => {
    onLogin(role);
    setLoginDialogOpen(false);
  };

  return (
    <div className="hero-container">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-background">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1685474442603-b27a68255660?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtaW5nJTIwZmllbGQlMjBzdW5zZXR8ZW58MXx8fHwxNzYyMTQzMTg1fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Farming field"
            className="hero-background-image"
          />
        </div>
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">Empowering Farmers, Inspiring Communities</h1>
            <p className="hero-description">
              Join FarmConnect - the comprehensive platform connecting farmers with resources,
              experts, and opportunities across all sectors. Together, we're building a sustainable
              future for agriculture.
            </p>
            <div className="hero-buttons">
              <Dialog open={loginDialogOpen} onOpenChange={setLoginDialogOpen}>
                <DialogTrigger asChild>
                  <Button size="lg" className="hero-button-primary">
                    Get Started <ArrowRight className="button-icon" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="dialog-content">
                  <DialogHeader>
                    <DialogTitle>Select Your Role</DialogTitle>
                    <DialogDescription>
                      Choose how you'd like to participate in the FarmConnect community
                    </DialogDescription>
                  </DialogHeader>
                  <div className="role-grid">
                    {userRoles.map((roleInfo) => (
                      <Card
                        key={roleInfo.role}
                        className="role-card"
                        onClick={() => handleRoleSelect(roleInfo.role)}
                      >
                        <CardHeader>
                          <CardTitle className="role-card-title">{roleInfo.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="role-card-description">{roleInfo.description}</p>
                          <Button className={`role-card-button ${roleInfo.color}`}>
                            Login as {roleInfo.title}
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                  <div className="dialog-footer">
                    <Button variant="outline" onClick={() => setLoginDialogOpen(false)}>
                      Continue as Guest
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
              <Button size="lg" variant="outline" className="hero-button-secondary">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="features-section">
        <div className="features-header">
          <h2 className="section-title">Why Choose FarmConnect?</h2>
          <p className="section-description">
            Our platform provides comprehensive support to help farmers thrive and raises awareness
            about the crucial role of agriculture in our society
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <Card key={index} className="feature-card">
              <CardHeader>
                <div className="feature-icon-wrapper">{feature.icon}</div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Statistics Section */}
      <div className="stats-section">
        <div className="stats-container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-value">10,000+</div>
              <p className="stat-label">Active Farmers</p>
            </div>
            <div className="stat-item">
              <div className="stat-value">500+</div>
              <p className="stat-label">Expert Advisors</p>
            </div>
            <div className="stat-item">
              <div className="stat-value">1,000+</div>
              <p className="stat-label">Resources Available</p>
            </div>
            <div className="stat-item">
              <div className="stat-value">50+</div>
              <p className="stat-label">Partner Organizations</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="cta-section">
        <Card className="cta-card">
          <CardContent className="cta-content">
            <h2 className="cta-title">Ready to Transform Agriculture Together?</h2>
            <p className="cta-description">
              Join thousands of farmers, experts, and supporters who are making a difference in
              sustainable agriculture
            </p>
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" className="cta-button">
                  Join FarmConnect Today
                </Button>
              </DialogTrigger>
              <DialogContent className="dialog-content">
                <DialogHeader>
                  <DialogTitle>Select Your Role</DialogTitle>
                  <DialogDescription>
                    Choose how you'd like to participate in the FarmConnect community
                  </DialogDescription>
                </DialogHeader>
                <div className="role-grid">
                  {userRoles.map((roleInfo) => (
                    <Card
                      key={roleInfo.role}
                      className="role-card"
                      onClick={() => handleRoleSelect(roleInfo.role)}
                    >
                      <CardHeader>
                        <CardTitle className="role-card-title">{roleInfo.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="role-card-description">{roleInfo.description}</p>
                        <Button className={`role-card-button ${roleInfo.color}`}>
                          Login as {roleInfo.title}
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
