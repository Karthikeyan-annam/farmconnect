import { Search, Filter, BookOpen, Video, Eye, Heart, Download } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';
import './Resources.css';

export default function Resources({ userRole }) {
  const [searchQuery, setSearchQuery] = useState('');

  const resources = [
    {
      id: 1,
      title: 'Complete Guide to Crop Rotation',
      type: 'Guide',
      category: 'Crop Management',
      author: 'Dr. Sarah Johnson',
      difficulty: 'Intermediate',
      views: 3420,
      likes: 234,
      image: 'https://images.unsplash.com/photo-1685474442603-b27a68255660?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtaW5nJTIwZmllbGQlMjBzdW5zZXR8ZW58MXx8fHwxNzYyMTQzMTg1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Learn the principles and benefits of crop rotation to improve soil health.',
    },
    {
      id: 2,
      title: 'Modern Irrigation Systems Tutorial',
      type: 'Video',
      category: 'Water Management',
      author: 'Mike Chen',
      difficulty: 'Advanced',
      views: 5210,
      likes: 412,
      image: 'https://images.unsplash.com/photo-1659021245220-8cf62b36fe25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtZXIlMjB3b3JraW5nJTIwYWdyaWN1bHR1cmV8ZW58MXx8fHwxNzYyMTQzMTg1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Comprehensive video tutorial on installing modern irrigation systems.',
    },
    {
      id: 3,
      title: 'Organic Pest Control Methods',
      type: 'Article',
      category: 'Pest Control',
      author: 'Lisa Martinez',
      difficulty: 'Beginner',
      views: 4890,
      likes: 367,
      image: 'https://images.unsplash.com/photo-1751210769268-85d43ecfcdd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZWdldGFibGVzJTIwaGFydmVzdCUyMGZyZXNofGVufDF8fHx8MTc2MjE0MzE4Nnww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Natural and effective methods to control pests without chemicals.',
    },
  ];

  const getDifficultyClass = (difficulty) => {
    const classes = {
      'Beginner': 'resources-beginner',
      'Intermediate': 'resources-intermediate',
      'Advanced': 'resources-advanced'
    };
    return classes[difficulty] || '';
  };

  return (
    <div className="resources-container">
      <div className="resources-header">
        <h1 className="resources-title">Resource Library</h1>
        <p className="resources-subtitle">
          Access comprehensive guides, articles, and videos to enhance your farming knowledge
        </p>
      </div>

      {/* Search */}
      <Card className="resources-search-card">
        <CardContent className="resources-search-content">
          <div className="resources-search-box">
            <Search className="resources-search-icon" />
            <Input
              placeholder="Search resources..."
              className="resources-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </CardContent>
      </Card>

      {/* Tabs for Resource Types */}
      <Tabs defaultValue="all" className="resources-tabs">
        <TabsList>
          <TabsTrigger value="all">All Resources</TabsTrigger>
          <TabsTrigger value="guides">Guides</TabsTrigger>
          <TabsTrigger value="videos">Videos</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="resources-tab-content">
          <div className="resources-grid">
            {resources.map((resource) => (
              <Card key={resource.id} className="resources-card">
                <div className="resources-card-image-wrapper">
                  <ImageWithFallback
                    src={resource.image}
                    alt={resource.title}
                    className="resources-card-image"
                  />
                  <div className="resources-card-type-badge">
                    <Badge className="resources-type-badge">
                      {resource.type === 'Video' ? <Video className="resources-badge-icon" /> : <BookOpen className="resources-badge-icon" />}
                      {resource.type}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <div className="resources-card-badges">
                    <Badge variant="outline">{resource.category}</Badge>
                    <Badge className={getDifficultyClass(resource.difficulty)}>
                      {resource.difficulty}
                    </Badge>
                  </div>
                  <CardTitle className="resources-card-title">{resource.title}</CardTitle>
                  <CardDescription>By {resource.author}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="resources-card-description">{resource.description}</p>
                  <div className="resources-card-stats">
                    <span className="resources-stat">
                      <Eye className="resources-stat-icon" />
                      {resource.views}
                    </span>
                    <span className="resources-stat">
                      <Heart className="resources-stat-icon" />
                      {resource.likes}
                    </span>
                  </div>
                  <div className="resources-card-actions">
                    <Button className="resources-view-button">
                      {resource.type === 'Video' ? 'Watch Now' : 'Read Now'}
                    </Button>
                    {userRole !== 'public' && (
                      <Button variant="outline" size="icon">
                        <Download className="resources-download-icon" />
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="guides" className="resources-tab-content">
          <div className="resources-grid">
            {resources.filter(r => r.type === 'Guide').map((resource) => (
              <Card key={resource.id} className="resources-card">
                <ImageWithFallback
                  src={resource.image}
                  alt={resource.title}
                  className="resources-card-image"
                />
                <CardHeader>
                  <CardTitle className="resources-card-title">{resource.title}</CardTitle>
                  <CardDescription>By {resource.author}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="resources-view-button resources-full-width">Read Guide</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="videos" className="resources-tab-content">
          <div className="resources-grid">
            {resources.filter(r => r.type === 'Video').map((resource) => (
              <Card key={resource.id} className="resources-card">
                <div className="resources-video-wrapper">
                  <ImageWithFallback
                    src={resource.image}
                    alt={resource.title}
                    className="resources-card-image"
                  />
                  <div className="resources-video-overlay">
                    <div className="resources-play-button">
                      <Video className="resources-play-icon" />
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="resources-card-title">{resource.title}</CardTitle>
                  <CardDescription>By {resource.author}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="resources-view-button resources-full-width">
                    <Video className="resources-button-icon" />
                    Watch Video
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {(userRole === 'expert' || userRole === 'admin') && (
        <Card className="resources-cta">
          <CardContent className="resources-cta-content">
            <h2 className="resources-cta-title">Share Your Knowledge</h2>
            <p className="resources-cta-text">
              Help farmers by creating and sharing your expertise through guides and tutorials
            </p>
            <Button size="lg" className="resources-cta-button">
              <BookOpen className="resources-cta-icon" />
              Create New Resource
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
