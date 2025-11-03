import { DollarSign, TrendingUp, Briefcase, Award, Calendar, MapPin, Search } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { useState } from 'react';
import './Opportunities.css';

export default function Opportunities({ userRole }) {
  const [searchQuery, setSearchQuery] = useState('');

  const fundingOpportunities = [
    {
      id: 1,
      title: 'Sustainable Agriculture Grant 2025',
      organization: 'National Agriculture Foundation',
      amount: 'Up to $50,000',
      deadline: 'December 15, 2025',
      category: 'Grant',
      description: 'Financial support for farmers implementing sustainable and eco-friendly farming practices.',
      requirements: ['Operating farm for 2+ years', 'Sustainable farming plan', 'Environmental impact assessment'],
    },
    {
      id: 2,
      title: 'Equipment Modernization Program',
      organization: 'Agricultural Development Bank',
      amount: 'Up to $25,000',
      deadline: 'November 30, 2025',
      category: 'Loan',
      description: 'Low-interest loans for purchasing modern farming equipment and technology.',
      requirements: ['Credit score 600+', 'Business plan', 'Equipment quotes'],
    },
    {
      id: 3,
      title: 'Young Farmer Initiative',
      organization: 'Youth Agriculture Alliance',
      amount: 'Up to $15,000',
      deadline: 'January 20, 2026',
      category: 'Grant',
      description: 'Support program specifically for farmers under 35 years old.',
      requirements: ['Age under 35', 'Farm ownership or lease', 'Business plan'],
    },
  ];

  const marketOpportunities = [
    {
      id: 1,
      title: 'Farm-to-Table Partnership Network',
      type: 'Partnership',
      description: 'Connect with local restaurants and markets looking for fresh produce.',
      potential: 'High',
      location: 'Multiple Locations',
    },
    {
      id: 2,
      title: 'Organic Produce Export Program',
      type: 'Export',
      description: 'Access international markets for certified organic products.',
      potential: 'Very High',
      location: 'International',
    },
  ];

  const getCategoryClass = (category) => {
    const classes = {
      'Grant': 'opportunities-grant',
      'Loan': 'opportunities-loan',
      'Support': 'opportunities-support'
    };
    return classes[category] || '';
  };

  const getPotentialClass = (potential) => {
    const classes = {
      'Very High': 'opportunities-potential-very-high',
      'High': 'opportunities-potential-high',
      'Medium': 'opportunities-potential-medium'
    };
    return classes[potential] || '';
  };

  return (
    <div className="opportunities-container">
      <div className="opportunities-header">
        <h1 className="opportunities-title">Opportunities</h1>
        <p className="opportunities-subtitle">
          Discover funding, partnerships, training, and growth opportunities for your farm
        </p>
      </div>

      {/* Search */}
      <Card className="opportunities-search-card">
        <CardContent className="opportunities-search-content">
          <div className="opportunities-search-box">
            <Search className="opportunities-search-icon" />
            <Input
              placeholder="Search opportunities..."
              className="opportunities-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </CardContent>
      </Card>

      {/* Tabs for Different Opportunity Types */}
      <Tabs defaultValue="funding" className="opportunities-tabs">
        <TabsList className="opportunities-tabs-list">
          <TabsTrigger value="funding">Funding</TabsTrigger>
          <TabsTrigger value="market">Market Access</TabsTrigger>
          <TabsTrigger value="awards">Awards</TabsTrigger>
        </TabsList>

        {/* Funding Tab */}
        <TabsContent value="funding" className="opportunities-tab-content">
          <div className="opportunities-grid">
            {fundingOpportunities.map((opportunity) => (
              <Card key={opportunity.id} className="opportunities-card">
                <CardHeader>
                  <div className="opportunities-card-header">
                    <Badge className={getCategoryClass(opportunity.category)}>
                      {opportunity.category}
                    </Badge>
                    <Badge className="opportunities-amount-badge">{opportunity.amount}</Badge>
                  </div>
                  <CardTitle>{opportunity.title}</CardTitle>
                  <CardDescription>{opportunity.organization}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="opportunities-description">{opportunity.description}</p>
                  <div className="opportunities-requirements">
                    <p className="opportunities-requirements-title">Requirements:</p>
                    <ul className="opportunities-requirements-list">
                      {opportunity.requirements.map((req, index) => (
                        <li key={index} className="opportunities-requirement-item">
                          <span className="opportunities-checkmark">✓</span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="opportunities-deadline">
                    <Calendar className="opportunities-deadline-icon" />
                    <span>Deadline: {opportunity.deadline}</span>
                  </div>
                  <Button className="opportunities-apply-button">
                    <DollarSign className="opportunities-button-icon" />
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {userRole === 'public' && (
            <Card className="opportunities-login-card">
              <CardContent className="opportunities-login-content">
                <p className="opportunities-login-text">
                  Sign in as a Farmer to apply for funding opportunities and track your applications
                </p>
                <Button className="opportunities-login-button">Sign In</Button>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        {/* Market Access Tab */}
        <TabsContent value="market" className="opportunities-tab-content">
          <div className="opportunities-grid">
            {marketOpportunities.map((opportunity) => (
              <Card key={opportunity.id} className="opportunities-card">
                <CardHeader>
                  <div className="opportunities-card-header">
                    <Badge variant="outline">{opportunity.type}</Badge>
                    <Badge className={getPotentialClass(opportunity.potential)}>
                      {opportunity.potential} Potential
                    </Badge>
                  </div>
                  <CardTitle>{opportunity.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="opportunities-description">{opportunity.description}</p>
                  <div className="opportunities-location">
                    <MapPin className="opportunities-location-icon" />
                    <span>{opportunity.location}</span>
                  </div>
                  <Button className="opportunities-join-button">
                    <TrendingUp className="opportunities-button-icon" />
                    Join Network
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Awards Tab */}
        <TabsContent value="awards" className="opportunities-tab-content">
          <div className="opportunities-grid">
            <Card className="opportunities-award-card">
              <CardHeader>
                <div className="opportunities-award-header">
                  <Award className="opportunities-award-icon" />
                  <Badge className="opportunities-award-badge">$20,000 + Mentorship</Badge>
                </div>
                <CardTitle>Innovation in Farming Award 2025</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="opportunities-description">
                  Recognition for innovative farming practices and sustainable solutions.
                </p>
                <div className="opportunities-deadline">
                  <Calendar className="opportunities-deadline-icon" />
                  <span>Deadline: December 31, 2025</span>
                </div>
                <Button className="opportunities-award-button">
                  <Award className="opportunities-button-icon" />
                  Submit Application
                </Button>
              </CardContent>
            </Card>

            <Card className="opportunities-award-card">
              <CardHeader>
                <div className="opportunities-award-header">
                  <Award className="opportunities-award-icon" />
                  <Badge className="opportunities-award-badge">$10,000</Badge>
                </div>
                <CardTitle>Best Organic Farm Competition</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="opportunities-description">
                  Competition for the best organic farming operation in the region.
                </p>
                <div className="opportunities-deadline">
                  <Calendar className="opportunities-deadline-icon" />
                  <span>Deadline: January 15, 2026</span>
                </div>
                <Button className="opportunities-award-button">
                  <Award className="opportunities-button-icon" />
                  Submit Application
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      {/* Quick Stats */}
      <div className="opportunities-stats">
        <Card>
          <CardContent className="opportunities-stat-content">
            <DollarSign className="opportunities-stat-icon opportunities-stat-green" />
            <div className="opportunities-stat-value opportunities-stat-green">$2.5M+</div>
            <p className="opportunities-stat-label">Total Funding Available</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="opportunities-stat-content">
            <TrendingUp className="opportunities-stat-icon opportunities-stat-blue" />
            <div className="opportunities-stat-value opportunities-stat-blue">150+</div>
            <p className="opportunities-stat-label">Market Partnerships</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="opportunities-stat-content">
            <Briefcase className="opportunities-stat-icon opportunities-stat-purple" />
            <div className="opportunities-stat-value opportunities-stat-purple">45</div>
            <p className="opportunities-stat-label">Training Programs</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="opportunities-stat-content">
            <Award className="opportunities-stat-icon opportunities-stat-orange" />
            <div className="opportunities-stat-value opportunities-stat-orange">25</div>
            <p className="opportunities-stat-label">Active Competitions</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
