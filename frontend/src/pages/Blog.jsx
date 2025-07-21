import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, User, BookOpen, Search, ExternalLink, RefreshCw } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { NewsService } from '@/services/newsService';
import { useToast } from '@/components/ui/use-toast';

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'investing', name: 'Investing' },
    { id: 'market-analysis', name: 'Market Analysis' },
    { id: 'tips', name: 'Tips & Strategies' },
    { id: 'news', name: 'Financial News' },
  ];

  const fetchLatestNews = async () => {
    setLoading(true);
    try {
      const news = await NewsService.fetchFinancialNews();
      setBlogPosts(news);
      toast({
        title: 'Success',
        description: 'Latest financial news loaded successfully!',
      });
    } catch (error) {
      console.error('Error fetching news:', error);
      toast({
        title: 'Info',
        description: 'Showing curated financial content',
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLatestNews();
  }, []);

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = filteredPosts.filter((post) => post.featured);
  const regularPosts = filteredPosts.filter((post) => !post.featured);

  const getCategoryColor = (category) => {
    const colors = {
      investing: 'bg-green-100 text-green-800',
      'market-analysis': 'bg-blue-100 text-blue-800',
      tips: 'bg-purple-100 text-purple-800',
      news: 'bg-orange-100 text-orange-800',
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  const getFallbackImage = (category) => {
    const images = {
      investing: '/assets/investing.jpg',
      'market-analysis': '/assets/market.jpg',
      tips: '/assets/tips.jpg',
      news: '/assets/news.jpg',
    };
    return images[category] || '/assets/default.jpg';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white">
      <div className="section-padding py-16">
        <div className="container-width">

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Financial Insights & Latest News
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest investment strategies, market analysis,
              and expert insights from trusted financial sources.
            </p>
          </div>

          {/* Search and Filters */}
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
                >
                  {category.name}
                </Button>
              ))}
              <Button
                variant="outline"
                size="sm"
                onClick={fetchLatestNews}
                disabled={loading}
                className="flex items-center gap-2"
              >
                <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
                Refresh
              </Button>
            </div>
          </div>

          {/* Featured Posts */}
          {featuredPosts.length > 0 && (
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Articles</h2>
              <div className="grid lg:grid-cols-2 gap-8">
                {featuredPosts.map((post) => (
                  <Card key={post.id} className="hover:shadow-lg transition-shadow">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={post.image || getFallbackImage(post.category)}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <Badge className={getCategoryColor(post.category)}>
                            {categories.find(cat => cat.id === post.category)?.name}
                          </Badge>
                          <span className="text-sm text-gray-500">{post.readTime}</span>
                        </div>
                      </div>
                      <CardTitle className="text-xl">
                        {post.title}
                      </CardTitle>
                      <p className="text-sm text-gray-500">Source: {post.source}</p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
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
                      {post.url && (
                        <Button
                          size="sm"
                          variant="link"
                          className="mt-2 text-blue-600 hover:underline"
                          onClick={() => window.open(post.url, '_blank')}
                        >
                          Read Full Article <ExternalLink size={14} className="ml-1" />
                        </Button>
                      )}
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
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.image || getFallbackImage(post.category)}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Badge className={getCategoryColor(post.category)}>
                          {categories.find(cat => cat.id === post.category)?.name}
                        </Badge>
                        <span className="text-sm text-gray-500">{post.readTime}</span>
                      </div>
                    </div>
                    <CardTitle className="text-lg">{post.title}</CardTitle>
                    <p className="text-xs text-gray-500">Source: {post.source}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4 text-sm line-clamp-3">{post.excerpt}</p>
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
                    {post.url && (
                      <Button
                        size="sm"
                        variant="link"
                        className="mt-2 text-blue-600 hover:underline"
                        onClick={() => window.open(post.url, '_blank')}
                      >
                        Read Full Article <ExternalLink size={14} className="ml-1" />
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Blog;
