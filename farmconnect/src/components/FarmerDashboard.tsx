import { TrendingUp, BookOpen, Users, DollarSign, Calendar, MessageSquare } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { ImageWithFallback } from './figma/ImageWithFallback';
import './FarmerDashboard.css';

export default function FarmerDashboard() {
  const quickStats = [
    { label: 'Resources Accessed', value: '24', icon: <BookOpen className="stat-icon" />, color: 'stat-blue' },
    { label: 'Connections Made', value: '18', icon: <Users className="stat-icon" />, color: 'stat-green' },
    { label: 'Opportunities Applied', value: '5', icon: <TrendingUp className="stat-icon" />, color: 'stat-purple' },
    { label: 'Potential Earnings', value: '$12,500', icon: <DollarSign className="stat-icon" />, color: 'stat-orange' },
  ];

  const upcomingEvents = [
    { title: 'Sustainable Farming Workshop', date: 'Nov 15, 2025', time: '10:00 AM', type: 'Workshop' },
    { title: 'Organic Certification Webinar', date: 'Nov 20, 2025', time: '2:00 PM', type: 'Webinar' },
    { title: 'Farm Equipment Demo', date: 'Nov 25, 2025', time: '9:00 AM', type: 'Demo' },
  ];

  const recommendedResources = [
    {
      title: 'Crop Rotation Best Practices',
      category: 'Farming Techniques',
      difficulty: 'Intermediate',
      duration: '30 min',
      image: 'https://images.unsplash.com/photo-1685474442603-b27a68255660?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtaW5nJTIwZmllbGQlMjBzdW5zZXR8ZW58MXx8fHwxNzYyMTQzMTg1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Water Management Systems',
      category: 'Infrastructure',
      difficulty: 'Advanced',
      duration: '45 min',
      image: 'https://images.unsplash.com/photo-1659021245220-8cf62b36fe25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtZXIlMjB3b3JraW5nJTIwYWdyaWN1bHR1cmV8ZW58MXx8fHwxNzYyMTQzMTg1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Organic Pest Control Methods',
      category: 'Crop Protection',
      difficulty: 'Beginner',
      duration: '20 min',
      image: 'https://images.unsplash.com/photo-1751210769268-85d43ecfcdd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZWdldGFibGVzJTIwaGFydmVzdCUyMGZyZXNofGVufDF8fHx8MTc2MjE0MzE4Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  const activeConnections = [
    { name: 'Dr. Sarah Johnson', role: 'Soil Scientist', status: 'Available', specialty: 'Soil Health' },
    { name: 'Mike Chen', role: 'Equipment Supplier', status: 'Online', specialty: 'Modern Equipment' },
    { name: 'Lisa Martinez', role: 'Market Specialist', status: 'Away', specialty: 'Direct Sales' },
  ];

  const learningProgress = [
    { course: 'Sustainable Agriculture Basics', progress: 75 },
    { course: 'Financial Management for Farmers', progress: 45 },
    { course: 'Marketing Your Products', progress: 30 },
  ];

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Farmer Dashboard</h1>
        <p className="dashboard-subtitle">Welcome back! Here's your farming journey overview.</p>
      </div>

      {/* Quick Stats */}
      <div className="stats-grid">
        {quickStats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="stat-card-content">
              <div className="stat-row">
                <span className={stat.color}>{stat.icon}</span>
                <span className={`stat-value ${stat.color}`}>{stat.value}</span>
              </div>
              <p className="stat-label">{stat.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content Tabs */}
      <Tabs defaultValue="overview" className="tabs-container">
        <TabsList className="tabs-list">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="learning">Learning</TabsTrigger>
          <TabsTrigger value="connections">Connections</TabsTrigger>
          <TabsTrigger value="opportunities">Opportunities</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="tab-content">
          <div className="content-grid">
            {/* Upcoming Events */}
            <Card>
              <CardHeader>
                <CardTitle className="card-title-with-icon">
                  <Calendar className="title-icon" />
                  Upcoming Events
                </CardTitle>
                <CardDescription>Events and workshops scheduled for you</CardDescription>
              </CardHeader>
              <CardContent className="events-list">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="event-item">
                    <div>
                      <p className="event-title">{event.title}</p>
                      <p className="event-date">{event.date} at {event.time}</p>
                    </div>
                    <Badge>{event.type}</Badge>
                  </div>
                ))}
                <Button className="full-width-button">View All Events</Button>
              </CardContent>
            </Card>

            {/* Recommended Resources */}
            <Card>
              <CardHeader>
                <CardTitle className="card-title-with-icon">
                  <BookOpen className="title-icon" />
                  Recommended for You
                </CardTitle>
                <CardDescription>Personalized learning resources</CardDescription>
              </CardHeader>
              <CardContent className="resources-list">
                {recommendedResources.map((resource, index) => (
                  <div key={index} className="resource-item">
                    <ImageWithFallback
                      src={resource.image}
                      alt={resource.title}
                      className="resource-thumbnail"
                    />
                    <div className="resource-info">
                      <p className="resource-title">{resource.title}</p>
                      <div className="resource-badges">
                        <Badge variant="outline">{resource.category}</Badge>
                        <Badge variant="outline">{resource.duration}</Badge>
                      </div>
                    </div>
                  </div>
                ))}
                <Button className="full-width-button" variant="outline">Browse All Resources</Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Learning Tab */}
        <TabsContent value="learning" className="tab-content">
          <Card>
            <CardHeader>
              <CardTitle>Your Learning Progress</CardTitle>
              <CardDescription>Track your educational journey</CardDescription>
            </CardHeader>
            <CardContent className="learning-content">
              {learningProgress.map((course, index) => (
                <div key={index} className="progress-item">
                  <div className="progress-header">
                    <p className="course-name">{course.course}</p>
                    <span className="progress-value">{course.progress}%</span>
                  </div>
                  <Progress value={course.progress} className="progress-bar" />
                </div>
              ))}
              <Button className="continue-learning-button">Continue Learning</Button>
            </CardContent>
          </Card>

          <div className="resources-grid">
            {recommendedResources.map((resource, index) => (
              <Card key={index} className="resource-card">
                <ImageWithFallback
                  src={resource.image}
                  alt={resource.title}
                  className="resource-card-image"
                />
                <CardHeader>
                  <CardTitle className="resource-card-title">{resource.title}</CardTitle>
                  <CardDescription>{resource.category}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="resource-meta">
                    <Badge>{resource.difficulty}</Badge>
                    <span className="resource-duration">{resource.duration}</span>
                  </div>
                  <Button className="start-learning-button">Start Learning</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Connections Tab */}
        <TabsContent value="connections" className="tab-content">
          <Card>
            <CardHeader>
              <CardTitle className="card-title-with-icon">
                <Users className="title-icon" />
                Your Network
              </CardTitle>
              <CardDescription>Connect with experts and partners</CardDescription>
            </CardHeader>
            <CardContent className="connections-list">
              {activeConnections.map((connection, index) => (
                <div key={index} className="connection-item">
                  <div className="connection-details">
                    <div className="connection-avatar">
                      <Users className="avatar-icon" />
                    </div>
                    <div>
                      <p className="connection-name">{connection.name}</p>
                      <p className="connection-role">{connection.role} • {connection.specialty}</p>
                    </div>
                  </div>
                  <div className="connection-actions">
                    <Badge variant={connection.status === 'Online' ? 'default' : 'outline'}>
                      {connection.status}
                    </Badge>
                    <Button size="sm">
                      <MessageSquare className="button-icon-small" />
                      Message
                    </Button>
                  </div>
                </div>
              ))}
              <Button className="full-width-button" variant="outline">Find More Connections</Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Opportunities Tab */}
        <TabsContent value="opportunities" className="tab-content">
          <div className="opportunities-grid">
            <Card>
              <CardHeader>
                <CardTitle>Funding Opportunities</CardTitle>
                <CardDescription>Available grants and financial support</CardDescription>
              </CardHeader>
              <CardContent className="opportunities-list">
                <div className="opportunity-item">
                  <div className="opportunity-header">
                    <p className="opportunity-title">Sustainable Agriculture Grant</p>
                    <Badge className="grant-badge">Up to $50,000</Badge>
                  </div>
                  <p className="opportunity-description">Support for implementing sustainable farming practices</p>
                  <Button size="sm" className="apply-button">Apply Now</Button>
                </div>
                <div className="opportunity-item">
                  <div className="opportunity-header">
                    <p className="opportunity-title">Equipment Upgrade Program</p>
                    <Badge className="loan-badge">Up to $25,000</Badge>
                  </div>
                  <p className="opportunity-description">Financial assistance for modern farming equipment</p>
                  <Button size="sm" className="apply-button">Apply Now</Button>
                </div>
                <div className="opportunity-item">
                  <div className="opportunity-header">
                    <p className="opportunity-title">Young Farmer Initiative</p>
                    <Badge className="support-badge">Up to $15,000</Badge>
                  </div>
                  <p className="opportunity-description">Support program for farmers under 35 years old</p>
                  <Button size="sm" className="apply-button">Apply Now</Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Market Opportunities</CardTitle>
                <CardDescription>Connect with buyers and expand your market</CardDescription>
              </CardHeader>
              <CardContent className="opportunities-list">
                <div className="opportunity-item">
                  <p className="opportunity-title">Organic Produce Buyers Network</p>
                  <p className="opportunity-description">Connect with certified organic buyers</p>
                  <Button size="sm" variant="outline" className="join-button">Join Network</Button>
                </div>
                <div className="opportunity-item">
                  <p className="opportunity-title">Farm-to-Table Partnership</p>
                  <p className="opportunity-description">Partner with local restaurants and markets</p>
                  <Button size="sm" variant="outline" className="join-button">Learn More</Button>
                </div>
                <div className="opportunity-item">
                  <p className="opportunity-title">Export Opportunity Program</p>
                  <p className="opportunity-description">Expand to international markets</p>
                  <Button size="sm" variant="outline" className="join-button">Get Started</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
