import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, User, BookOpen, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'investing', name: 'Investing' },
    { id: 'market-analysis', name: 'Market Analysis' },
    { id: 'tips', name: 'Tips & Strategies' },
    { id: 'news', name: 'Financial News' }
  ];

  const blogPosts = [
    {
      id: 1,
      title: '10 Best Mutual Funds for Beginners in 2024',
      excerpt: 'Discover the top mutual funds perfect for newcomers to investing, with detailed analysis of risk and returns.',
      author: 'Priya Sharma',
      date: '2024-01-15',
      category: 'investing',
      readTime: '8 min read',
      featured: true,
      image: '/api/placeholder/600/300'
    },
    {
      id: 2,
      title: 'SIP vs Lump Sum: Which Investment Strategy Works Better?',
      excerpt: 'A comprehensive comparison of systematic investment plans versus lump sum investments with real examples.',
      author: 'Rajesh Kumar',
      date: '2024-01-12',
      category: 'tips',
      readTime: '6 min read',
      featured: false,
      image: '/api/placeholder/600/300'
    },
    {
      id: 3,
      title: "Understanding Market Volatility: A Beginner's Guide",
      excerpt: 'Learn how market fluctuations affect your mutual fund investments and strategies to navigate volatility.',
      author: 'Anita Desai',
      date: '2024-01-10',
      category: 'market-analysis',
      readTime: '10 min read',
      featured: true,
      image: '/api/placeholder/600/300'
    },
    {
      id: 4,
      title: 'Tax Benefits of ELSS Mutual Funds Explained',
      excerpt: 'Maximize your tax savings with Equity Linked Savings Schemes while building long-term wealth.',
      author: 'Vikram Singh',
      date: '2024-01-08',
      category: 'investing',
      readTime: '7 min read',
      featured: false,
      image: '/api/placeholder/600/300'
    },
    {
      id: 5,
      title: 'How to Build a Balanced Portfolio for Retirement',
      excerpt: 'Strategic portfolio construction tips for securing your retirement with mutual fund investments.',
      author: 'Meera Patel',
      date: '2024-01-05',
      category: 'tips',
      readTime: '12 min read',
      featured: false,
      image: '/api/placeholder/600/300'
    },
    {
      id: 6,
      title: 'RBI Policy Impact on Mutual Fund Performance',
      excerpt: 'Analyzing how recent monetary policy changes affect different categories of mutual funds.',
      author: 'Arjun Mehta',
      date: '2024-01-03',
      category: 'news',
      readTime: '5 min read',
      featured: false,
      image: '/api/placeholder/600/300'
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = filteredPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  const getCategoryColor = (category) => {
    const colors = {
      investing: 'bg-green-100 text-green-800',
      'market-analysis': 'bg-blue-100 text-blue-800',
      tips: 'bg-purple-100 text-purple-800',
      news: 'bg-orange-100 text-orange-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="section-padding py-12">
      <div className="container-width">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Financial Insights & Tips
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest investment strategies, market analysis, 
            and expert insights to grow your wealth.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <Input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
                className={selectedCategory === category.id ? 'btn-primary' : 'btn-outline'}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Articles</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <Card key={post.id} className="hover:shadow-lg transition-shadow overflow-hidden">
                  <div className="aspect-video bg-gradient-to-r from-green-100 to-blue-100 flex items-center justify-center">
                    <BookOpen size={48} className="text-green-600" />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className={getCategoryColor(post.category)}>
                        {categories.find(cat => cat.id === post.category)?.name}
                      </Badge>
                      <span className="text-sm text-gray-500">{post.readTime}</span>
                    </div>
                    <CardTitle className="text-xl hover:text-primary">
                      <Link to={`/blog/${post.id}`}>
                        {post.title}
                      </Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center">
                        <User size={16} className="mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-1" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Regular Posts */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Latest Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Card key={post.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="aspect-video bg-gradient-to-r from-green-100 to-blue-100 flex items-center justify-center rounded-lg mb-4">
                    <BookOpen size={32} className="text-green-600" />
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className={getCategoryColor(post.category)}>
                      {categories.find(cat => cat.id === post.category)?.name}
                    </Badge>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>
                  <CardTitle className="text-lg hover:text-primary">
                    <Link to={`/blog/${post.id}`}>
                      {post.title}
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 text-sm">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center">
                      <User size={14} className="mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-green-600 to-green-400 rounded-2xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">
              Stay Ahead with Expert Insights
            </h2>
            <p className="text-xl text-green-100 mb-6 max-w-2xl mx-auto">
              Get weekly investment tips, market analysis, and exclusive content 
              delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white text-gray-900"
              />
              <Button variant="secondary" className="bg-white text-green-600 hover:bg-gray-100">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Blog;
