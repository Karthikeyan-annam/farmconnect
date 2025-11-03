import { BookOpen, Users, Award, MessageSquare, Plus, Eye } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Textarea } from './ui/textarea';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { useState } from 'react';
import './ExpertDashboard.css';

export default function ExpertDashboard() {
  const [showCreateForm, setShowCreateForm] = useState(false);

  const stats = [
    { label: 'Content Published', value: '45', icon: <BookOpen className="expert-stat-icon" />, color: 'expert-blue' },
    { label: 'Farmers Helped', value: '234', icon: <Users className="expert-stat-icon" />, color: 'expert-green' },
    { label: 'Impact Score', value: '9.2/10', icon: <Award className="expert-stat-icon" />, color: 'expert-purple' },
    { label: 'Total Views', value: '12,450', icon: <Eye className="expert-stat-icon" />, color: 'expert-orange' },
  ];

  const myContent = [
    { id: 1, title: 'Sustainable Irrigation Systems', type: 'Guide', status: 'Published', views: 1245, likes: 89 },
    { id: 2, title: 'Organic Pest Control Methods', type: 'Article', status: 'Published', views: 2134, likes: 156 },
    { id: 3, title: 'Soil Health Assessment', type: 'Video', status: 'Under Review', views: 0, likes: 0 },
  ];

  const pendingQuestions = [
    { id: 1, farmer: 'John Martinez', question: 'What is the best time to plant wheat in a temperate climate?', category: 'Crop Management' },
    { id: 2, farmer: 'Sarah Wilson', question: 'How can I improve soil fertility naturally?', category: 'Soil Health' },
  ];

  return (
    <div className="expert-dashboard">
      <div className="expert-header">
        <h1 className="expert-title">Expert Dashboard</h1>
        <p className="expert-subtitle">Share your knowledge and support the farming community</p>
      </div>

      <div className="expert-stats">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="expert-stat-card">
              <div className="expert-stat-row">
                <span className={stat.color}>{stat.icon}</span>
                <span className={`expert-stat-value ${stat.color}`}>{stat.value}</span>
              </div>
              <p className="expert-stat-label">{stat.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="content" className="expert-tabs">
        <TabsList className="expert-tabs-list">
          <TabsTrigger value="content">My Content</TabsTrigger>
          <TabsTrigger value="questions">Questions</TabsTrigger>
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
        </TabsList>

        <TabsContent value="content" className="expert-tab-content">
          <Card>
            <CardHeader>
              <div className="expert-content-header">
                <div>
                  <CardTitle>Published Content</CardTitle>
                  <CardDescription>Manage your educational resources</CardDescription>
                </div>
                <Button 
                  className="expert-create-button"
                  onClick={() => setShowCreateForm(!showCreateForm)}
                >
                  <Plus className="expert-icon" />
                  Create New Content
                </Button>
              </div>
            </CardHeader>
            <CardContent className="expert-content-list">
              {showCreateForm && (
                <Card className="expert-create-form">
                  <CardHeader>
                    <CardTitle className="expert-form-title">Create New Resource</CardTitle>
                  </CardHeader>
                  <CardContent className="expert-form-content">
                    <div>
                      <Label htmlFor="title">Title</Label>
                      <Input id="title" placeholder="Enter resource title" />
                    </div>
                    <div>
                      <Label htmlFor="content">Content</Label>
                      <Textarea id="content" rows={6} placeholder="Write your content here..." />
                    </div>
                    <div className="expert-form-buttons">
                      <Button className="expert-submit-button">Submit for Review</Button>
                      <Button variant="outline" onClick={() => setShowCreateForm(false)}>Cancel</Button>
                    </div>
                  </CardContent>
                </Card>
              )}

              <div className="expert-content-items">
                {myContent.map((content) => (
                  <Card key={content.id} className="expert-content-item">
                    <CardContent className="expert-content-item-body">
                      <div className="expert-content-info">
                        <div className="expert-content-badges">
                          <p className="expert-content-title">{content.title}</p>
                          <div className="expert-badges">
                            <Badge variant="outline">{content.type}</Badge>
                            <Badge className={content.status === 'Published' ? 'expert-published' : 'expert-review'}>
                              {content.status}
                            </Badge>
                          </div>
                        </div>
                        <div className="expert-content-stats">
                          <span>👁️ {content.views} views</span>
                          <span>❤️ {content.likes} likes</span>
                        </div>
                      </div>
                      <div className="expert-content-actions">
                        <Button size="sm" variant="outline">Edit</Button>
                        <Button size="sm" variant="outline">View</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="questions" className="expert-tab-content">
          <Card>
            <CardHeader>
              <CardTitle className="expert-questions-title">
                <MessageSquare className="expert-icon" />
                Farmer Questions
              </CardTitle>
              <CardDescription>Answer questions from farmers seeking your expertise</CardDescription>
            </CardHeader>
            <CardContent className="expert-questions-list">
              {pendingQuestions.map((q) => (
                <Card key={q.id} className="expert-question-card">
                  <CardContent className="expert-question-body">
                    <div className="expert-question-header">
                      <p className="expert-question-farmer">From: {q.farmer}</p>
                      <Badge variant="outline">{q.category}</Badge>
                    </div>
                    <p className="expert-question-text">{q.question}</p>
                    <div className="expert-question-form">
                      <Textarea placeholder="Type your answer here..." rows={3} />
                      <Button size="sm" className="expert-answer-button">Submit Answer</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="achievements" className="expert-tab-content">
          <Card>
            <CardHeader>
              <CardTitle className="expert-achievements-title">
                <Award className="expert-icon expert-purple" />
                Your Achievements
              </CardTitle>
              <CardDescription>Milestones and recognition for your contributions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="expert-achievements-grid">
                <Card className="expert-achievement-card expert-achievement-earned">
                  <CardContent className="expert-achievement-body">
                    <div className="expert-achievement-icon">🏆</div>
                    <div>
                      <p className="expert-achievement-title">Top Contributor</p>
                      <p className="expert-achievement-desc">Published 40+ resources</p>
                      <Badge className="expert-earned-badge">Earned</Badge>
                    </div>
                  </CardContent>
                </Card>
                <Card className="expert-achievement-card expert-achievement-earned">
                  <CardContent className="expert-achievement-body">
                    <div className="expert-achievement-icon">🏆</div>
                    <div>
                      <p className="expert-achievement-title">Community Hero</p>
                      <p className="expert-achievement-desc">Helped 200+ farmers</p>
                      <Badge className="expert-earned-badge">Earned</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
