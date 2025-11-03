import { BookOpen, Users, MessageSquare, TrendingUp, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import './PublicDashboard.css';

export default function PublicDashboard({ onLogin }) {
  const featuredContent = [
    {
      title: 'Introduction to Sustainable Farming',
      author: 'Dr. Sarah Johnson',
      category: 'Sustainability',
      views: 5420,
      image: 'https://images.unsplash.com/photo-1685474442603-b27a68255660?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtaW5nJTIwZmllbGQlMjBzdW5zZXR8ZW58MXx8fHwxNzYyMTQzMTg1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Modern Irrigation Techniques',
      author: 'Mike Chen',
      category: 'Water Management',
      views: 3210,
      image: 'https://images.unsplash.com/photo-1659021245220-8cf62b36fe25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtZXIlMjB3b3JraW5nJTIwYWdyaWN1bHR1cmV8ZW58MXx8fHwxNzYyMTQzMTg1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Organic Farming Benefits',
      author: 'Lisa Martinez',
      category: 'Organic Practices',
      views: 4890,
      image: 'https://images.unsplash.com/photo-1751210769268-85d43ecfcdd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZWdldGFibGVzJTIwaGFydmVzdCUyMGZyZXNofGVufDF8fHx8MTc2MjE0MzE4Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  const trendingTopics = [
    { topic: 'Climate-Smart Agriculture', posts: 156 },
    { topic: 'Organic Certification', posts: 89 },
    { topic: 'Vertical Farming', posts: 124 },
    { topic: 'Soil Health Management', posts: 203 },
  ];

  return (
    <div className="public-dashboard">
      {/* Welcome Banner */}
      <Card className="public-banner">
        <CardContent className="public-banner-content">
          <h1 className="public-banner-title">Explore the World of Farming</h1>
          <p className="public-banner-text">
            Discover educational content, success stories, and insights from farmers and agricultural
            experts around the world.
          </p>
          <div className="public-banner-buttons">
            <Button 
              size="lg" 
              className="public-button-primary"
              onClick={() => onLogin('farmer')}
            >
              Join as Farmer
              <ArrowRight className="public-button-icon" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="public-button-secondary"
              onClick={() => onLogin('expert')}
            >
              Join as Expert
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Featured Content */}
      <div className="public-section">
        <div className="public-section-header">
          <div>
            <h2 className="public-section-title">Featured Content</h2>
            <p className="public-section-subtitle">Popular resources from our expert community</p>
          </div>
          <Button variant="outline">View All</Button>
        </div>

        <div className="public-content-grid">
          {featuredContent.map((content, index) => (
            <Card key={index} className="public-content-card">
              <ImageWithFallback
                src={content.image}
                alt={content.title}
                className="public-content-image"
              />
              <CardHeader>
                <Badge className="public-content-badge">{content.category}</Badge>
                <CardTitle className="public-content-title">{content.title}</CardTitle>
                <CardDescription>By {content.author}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="public-content-footer">
                  <span className="public-content-views">
                    <TrendingUp className="public-icon" />
                    {content.views.toLocaleString()} views
                  </span>
                  <Button size="sm" variant="outline">Read More</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Trending Topics */}
      <div className="public-section">
        <h2 className="public-section-title">Trending Topics</h2>
        <div className="public-topics-grid">
          {trendingTopics.map((topic, index) => (
            <Card key={index} className="public-topic-card">
              <CardContent className="public-topic-content">
                <p className="public-topic-name">{topic.topic}</p>
                <p className="public-topic-posts">{topic.posts} posts</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <Card className="public-cta">
        <CardContent className="public-cta-content">
          <h2 className="public-cta-title">Ready to Make a Difference?</h2>
          <p className="public-cta-text">
            Join FarmConnect to access exclusive resources, connect with experts, and be part of a
            community that's transforming agriculture.
          </p>
          <div className="public-cta-buttons">
            <Button 
              size="lg" 
              className="public-cta-button"
              onClick={() => onLogin('farmer')}
            >
              Sign Up as Farmer
            </Button>
            <Button 
              size="lg" 
              className="public-cta-button"
              onClick={() => onLogin('expert')}
            >
              Sign Up as Expert
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
