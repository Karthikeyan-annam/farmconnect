import { MessageSquare, ThumbsUp, MessageCircle, Users, Plus, Search } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Textarea } from './ui/textarea';
import { Input } from './ui/input';
import { Avatar, AvatarFallback } from './ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { useState } from 'react';
import './Community.css';

export default function Community({ userRole }) {
  const [showCreatePost, setShowCreatePost] = useState(false);
  const [newPost, setNewPost] = useState('');

  const discussionPosts = [
    {
      id: 1,
      author: 'John Martinez',
      role: 'Farmer',
      title: 'Success Story: Transitioning to Organic Farming',
      content: 'After 3 years of transitioning, I wanted to share my experience and results...',
      category: 'Success Stories',
      likes: 234,
      comments: 45,
      time: '2 hours ago',
    },
    {
      id: 2,
      author: 'Dr. Sarah Johnson',
      role: 'Expert',
      title: 'Best Practices for Water Conservation',
      content: 'With increasing water scarcity, implementing effective strategies has become crucial...',
      category: 'Water Management',
      likes: 189,
      comments: 32,
      time: '5 hours ago',
    },
  ];

  const getRoleClass = (role) => {
    const classes = {
      'Expert': 'community-role-expert',
      'Farmer': 'community-role-farmer',
      'Admin': 'community-role-admin'
    };
    return classes[role] || 'community-role-public';
  };

  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  const handleCreatePost = () => {
    if (newPost.trim()) {
      console.log('Creating post:', newPost);
      setNewPost('');
      setShowCreatePost(false);
    }
  };

  return (
    <div className="community-container">
      <div className="community-header">
        <h1 className="community-title">Community Forum</h1>
        <p className="community-subtitle">
          Connect with farmers and experts, share experiences, and learn from the community
        </p>
      </div>

      {/* Search and Create Post */}
      <Card className="community-actions-card">
        <CardContent className="community-actions-content">
          <div className="community-search-box">
            <Search className="community-search-icon" />
            <Input placeholder="Search discussions..." className="community-search-input" />
          </div>
          {userRole !== 'public' && (
            <Button 
              className="community-create-button"
              onClick={() => setShowCreatePost(!showCreatePost)}
            >
              <Plus className="community-icon" />
              Create Post
            </Button>
          )}
        </CardContent>

        {showCreatePost && userRole !== 'public' && (
          <div className="community-create-post">
            <h3 className="community-create-title">Create New Discussion</h3>
            <Input placeholder="Post Title" className="community-title-input" />
            <Textarea
              placeholder="Share your thoughts, questions, or experiences..."
              rows={4}
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
              className="community-textarea"
            />
            <div className="community-create-actions">
              <Button onClick={handleCreatePost} className="community-post-button">Post</Button>
              <Button variant="outline" onClick={() => setShowCreatePost(false)}>Cancel</Button>
            </div>
          </div>
        )}
      </Card>

      <div className="community-layout">
        {/* Main Discussion Feed */}
        <div className="community-main">
          <Tabs defaultValue="all">
            <TabsList>
              <TabsTrigger value="all">All Posts</TabsTrigger>
              <TabsTrigger value="questions">Questions</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="community-tab-content">
              {discussionPosts.map((post) => (
                <Card key={post.id} className="community-post-card">
                  <CardContent className="community-post-content">
                    <div className="community-post-layout">
                      <Avatar className="community-avatar">
                        <AvatarFallback className={getRoleClass(post.role)}>
                          {getInitials(post.author)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="community-post-main">
                        <div className="community-post-header">
                          <div>
                            <p className="community-author-name">{post.author}</p>
                            <div className="community-post-meta">
                              <Badge className={getRoleClass(post.role)} variant="outline">
                                {post.role}
                              </Badge>
                              <span className="community-time">• {post.time}</span>
                            </div>
                          </div>
                        </div>
                        <h3 className="community-post-title">{post.title}</h3>
                        <p className="community-post-text">{post.content}</p>
                        <div className="community-post-category">
                          <Badge variant="outline">{post.category}</Badge>
                        </div>
                        <div className="community-post-actions">
                          <button className="community-action-button">
                            <ThumbsUp className="community-action-icon" />
                            <span>{post.likes}</span>
                          </button>
                          <button className="community-action-button">
                            <MessageCircle className="community-action-icon" />
                            <span>{post.comments} Comments</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="questions" className="community-tab-content">
              {discussionPosts.filter(post => post.category.includes('Question')).map((post) => (
                <Card key={post.id} className="community-post-card">
                  <CardContent className="community-post-content">
                    <div className="community-post-layout">
                      <Avatar className="community-avatar">
                        <AvatarFallback className={getRoleClass(post.role)}>
                          {getInitials(post.author)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="community-post-main">
                        <h3 className="community-post-title">{post.title}</h3>
                        <p className="community-post-text">{post.content}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>

        {/* Sidebar */}
        <div className="community-sidebar">
          <Card>
            <CardHeader>
              <CardTitle className="community-sidebar-title">
                <MessageSquare className="community-sidebar-icon" />
                Active Discussions
              </CardTitle>
              <CardDescription>Popular topics this week</CardDescription>
            </CardHeader>
            <CardContent className="community-sidebar-list">
              <div className="community-sidebar-item">
                <p className="community-sidebar-topic">Climate-Smart Agriculture</p>
                <div className="community-sidebar-stats">
                  <span>💬 156</span>
                  <span>👥 89</span>
                </div>
              </div>
              <div className="community-sidebar-item">
                <p className="community-sidebar-topic">Organic Certification</p>
                <div className="community-sidebar-stats">
                  <span>💬 124</span>
                  <span>👥 67</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="community-guidelines">
            <CardHeader>
              <CardTitle>Community Guidelines</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="community-guidelines-list">
                <li>• Be respectful and supportive</li>
                <li>• Share authentic experiences</li>
                <li>• Provide helpful feedback</li>
                <li>• Report inappropriate content</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
