import { Users, FileText, MessageSquare, TrendingUp, AlertCircle, CheckCircle, Eye, Edit, Trash2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Alert, AlertDescription } from './ui/alert';
import { useState } from 'react';
import './AdminDashboard.css';

export default function AdminDashboard() {
  const [userFilter, setUserFilter] = useState('all');

  const stats = [
    { label: 'Total Users', value: '10,543', icon: <Users className="admin-stat-icon" />, color: 'admin-stat-blue', trend: '+12%' },
    { label: 'Active Resources', value: '1,247', icon: <FileText className="admin-stat-icon" />, color: 'admin-stat-green', trend: '+8%' },
    { label: 'Pending Reviews', value: '34', icon: <AlertCircle className="admin-stat-icon" />, color: 'admin-stat-orange', trend: '-5%' },
    { label: 'Community Posts', value: '2,891', icon: <MessageSquare className="admin-stat-icon" />, color: 'admin-stat-purple', trend: '+15%' },
  ];

  const pendingContent = [
    { id: 1, type: 'Resource', title: 'Advanced Irrigation Techniques', author: 'Dr. Mike Wilson', status: 'pending', date: '2025-11-02' },
    { id: 2, type: 'Article', title: 'Climate Change Impact on Agriculture', author: 'Sarah Johnson', status: 'pending', date: '2025-11-01' },
    { id: 3, type: 'Video', title: 'Organic Farming Workshop Recording', author: 'John Smith', status: 'pending', date: '2025-10-30' },
    { id: 4, type: 'Guide', title: 'Pest Management Best Practices', author: 'Lisa Chen', status: 'pending', date: '2025-10-29' },
  ];

  const recentUsers = [
    { id: 1, name: 'Emily Rodriguez', role: 'Farmer', joined: '2025-11-01', status: 'Active', posts: 12 },
    { id: 2, name: 'James Wilson', role: 'Expert', joined: '2025-10-30', status: 'Active', posts: 45 },
    { id: 3, name: 'Maria Garcia', role: 'Farmer', joined: '2025-10-28', status: 'Pending', posts: 3 },
    { id: 4, name: 'David Lee', role: 'Expert', joined: '2025-10-27', status: 'Active', posts: 28 },
    { id: 5, name: 'Sophie Turner', role: 'Farmer', joined: '2025-10-25', status: 'Active', posts: 8 },
  ];

  const reportedContent = [
    { id: 1, content: 'Comment on "Sustainable Farming"', reporter: 'User123', reason: 'Inappropriate language', date: '2025-11-02' },
    { id: 2, content: 'Post about fertilizer brands', reporter: 'FarmerJoe', reason: 'Spam/Advertisement', date: '2025-11-01' },
  ];

  const handleApprove = (id) => {
    console.log('Approved content:', id);
  };

  const handleReject = (id) => {
    console.log('Rejected content:', id);
  };

  const handleEdit = (id) => {
    console.log('Edit user:', id);
  };

  const handleDelete = (id) => {
    console.log('Delete user:', id);
  };

  return (
    <div className="admin-dashboard-container">
      <div className="admin-dashboard-header">
        <h1 className="admin-dashboard-title">Admin Dashboard</h1>
        <p className="admin-dashboard-subtitle">Manage platform content, users, and community interactions</p>
      </div>

      {/* Alerts */}
      <div className="admin-alerts">
        <Alert className="admin-alert">
          <AlertCircle className="admin-alert-icon" />
          <AlertDescription className="admin-alert-text">
            You have 34 items pending review. Please review and approve or reject them.
          </AlertDescription>
        </Alert>
      </div>

      {/* Stats Grid */}
      <div className="admin-stats-grid">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="admin-stat-content">
              <div className="admin-stat-row">
                <span className={stat.color}>{stat.icon}</span>
                <Badge className="admin-trend-badge">{stat.trend}</Badge>
              </div>
              <div className={`admin-stat-value ${stat.color}`}>{stat.value}</div>
              <p className="admin-stat-label">{stat.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content Tabs */}
      <Tabs defaultValue="content" className="admin-tabs">
        <TabsList className="admin-tabs-list">
          <TabsTrigger value="content">Content Review</TabsTrigger>
          <TabsTrigger value="users">User Management</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        {/* Content Review Tab */}
        <TabsContent value="content" className="admin-tab-content">
          <Card>
            <CardHeader>
              <CardTitle>Pending Content Review</CardTitle>
              <CardDescription>Review and approve content submitted by experts and users</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Type</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Author</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {pendingContent.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell>
                        <Badge variant="outline">{item.type}</Badge>
                      </TableCell>
                      <TableCell>{item.title}</TableCell>
                      <TableCell>{item.author}</TableCell>
                      <TableCell>{item.date}</TableCell>
                      <TableCell>
                        <Badge className="admin-pending-badge">Pending</Badge>
                      </TableCell>
                      <TableCell>
                        <div className="admin-action-buttons">
                          <Button size="sm" variant="outline" onClick={() => handleApprove(item.id)}>
                            <Eye className="admin-button-icon" />
                            View
                          </Button>
                          <Button size="sm" className="admin-approve-button" onClick={() => handleApprove(item.id)}>
                            <CheckCircle className="admin-button-icon" />
                            Approve
                          </Button>
                          <Button size="sm" variant="destructive" onClick={() => handleReject(item.id)}>
                            Reject
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* User Management Tab */}
        <TabsContent value="users" className="admin-tab-content">
          <Card>
            <CardHeader>
              <CardTitle>User Management</CardTitle>
              <CardDescription>Manage user accounts and permissions</CardDescription>
              <div className="admin-filter-buttons">
                <Button
                  variant={userFilter === 'all' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setUserFilter('all')}
                >
                  All Users
                </Button>
                <Button
                  variant={userFilter === 'farmers' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setUserFilter('farmers')}
                >
                  Farmers
                </Button>
                <Button
                  variant={userFilter === 'experts' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setUserFilter('experts')}
                >
                  Experts
                </Button>
                <Button
                  variant={userFilter === 'pending' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setUserFilter('pending')}
                >
                  Pending
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Joined</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Posts</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentUsers.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell>{user.name}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{user.role}</Badge>
                      </TableCell>
                      <TableCell>{user.joined}</TableCell>
                      <TableCell>
                        <Badge className={user.status === 'Active' ? 'admin-active-badge' : 'admin-pending-badge'}>
                          {user.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{user.posts}</TableCell>
                      <TableCell>
                        <div className="admin-action-buttons">
                          <Button size="sm" variant="outline" onClick={() => handleEdit(user.id)}>
                            <Edit className="admin-button-icon" />
                          </Button>
                          <Button size="sm" variant="outline" onClick={() => handleDelete(user.id)}>
                            <Trash2 className="admin-button-icon" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Reports Tab */}
        <TabsContent value="reports" className="admin-tab-content">
          <Card>
            <CardHeader>
              <CardTitle>Reported Content</CardTitle>
              <CardDescription>Review user-reported content and take appropriate action</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Content</TableHead>
                    <TableHead>Reporter</TableHead>
                    <TableHead>Reason</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {reportedContent.map((report) => (
                    <TableRow key={report.id}>
                      <TableCell>{report.content}</TableCell>
                      <TableCell>{report.reporter}</TableCell>
                      <TableCell>
                        <Badge variant="outline" className="admin-report-badge">
                          {report.reason}
                        </Badge>
                      </TableCell>
                      <TableCell>{report.date}</TableCell>
                      <TableCell>
                        <div className="admin-action-buttons">
                          <Button size="sm" variant="outline">
                            <Eye className="admin-button-icon" />
                            Review
                          </Button>
                          <Button size="sm" variant="destructive">
                            Remove
                          </Button>
                          <Button size="sm" variant="outline">
                            Dismiss
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Analytics Tab */}
        <TabsContent value="analytics" className="admin-tab-content">
          <div className="admin-analytics-grid">
            <Card>
              <CardHeader>
                <CardTitle className="admin-card-title-icon">
                  <TrendingUp className="admin-title-icon" />
                  Platform Growth
                </CardTitle>
                <CardDescription>User growth and engagement metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="admin-metrics">
                  <div className="admin-metric-row">
                    <span className="admin-metric-label">New Users (This Month)</span>
                    <span className="admin-metric-value-green">+342</span>
                  </div>
                  <div className="admin-metric-row">
                    <span className="admin-metric-label">Active Users (Daily Avg)</span>
                    <span className="admin-metric-value-blue">2,845</span>
                  </div>
                  <div className="admin-metric-row">
                    <span className="admin-metric-label">Engagement Rate</span>
                    <span className="admin-metric-value-purple">68%</span>
                  </div>
                  <div className="admin-metric-row">
                    <span className="admin-metric-label">Content Views</span>
                    <span className="admin-metric-value-orange">45,892</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Content Statistics</CardTitle>
                <CardDescription>Content creation and consumption</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="admin-metrics">
                  <div className="admin-metric-row">
                    <span className="admin-metric-label">Resources Published</span>
                    <span className="admin-metric-value-green">1,247</span>
                  </div>
                  <div className="admin-metric-row">
                    <span className="admin-metric-label">Community Posts</span>
                    <span className="admin-metric-value-blue">2,891</span>
                  </div>
                  <div className="admin-metric-row">
                    <span className="admin-metric-label">Expert Articles</span>
                    <span className="admin-metric-value-purple">342</span>
                  </div>
                  <div className="admin-metric-row">
                    <span className="admin-metric-label">Video Tutorials</span>
                    <span className="admin-metric-value-orange">156</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
