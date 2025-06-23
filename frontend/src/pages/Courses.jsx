import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Calendar, User, Check } from 'lucide-react';

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Courses' },
    { id: 'beginner', name: 'Beginner' },
    { id: 'intermediate', name: 'Intermediate' },
    { id: 'advanced', name: 'Advanced' }
  ];

  const courses = [
    {
      id: 1,
      title: 'Mutual Funds 101: Getting Started',
      description: 'Learn the fundamentals of mutual funds, types, and how they work.',
      level: 'beginner',
      duration: '4 weeks',
      lessons: 12,
      price: 'Free',
      isPremium: false,
      topics: ['Basic Concepts', 'Types of Funds', 'How to Invest', 'Risk Factors']
    },
    {
      id: 2,
      title: 'Building Your First Portfolio',
      description: 'Create a diversified investment portfolio based on your risk profile.',
      level: 'beginner',
      duration: '3 weeks',
      lessons: 10,
      price: '₹799',
      isPremium: true,
      topics: ['Asset Allocation', 'Risk Assessment', 'Portfolio Construction', 'Goal Setting']
    },
    {
      id: 3,
      title: 'Advanced Investment Strategies',
      description: 'Master advanced techniques for maximizing returns and managing risk.',
      level: 'advanced',
      duration: '6 weeks',
      lessons: 18,
      price: '₹1,499',
      isPremium: true,
      topics: ['SIP Strategies', 'Tax Planning', 'Market Timing', 'Exit Strategies']
    },
    {
      id: 4,
      title: 'Tax-Efficient Investing',
      description: 'Understand tax implications and optimize your investments for better returns.',
      level: 'intermediate',
      duration: '3 weeks',
      lessons: 8,
      price: '₹599',
      isPremium: true,
      topics: ['ELSS Funds', 'Tax Savings', 'Long-term Capital Gains', 'Tax Harvesting']
    },
    {
      id: 5,
      title: 'Retirement Planning Essentials',
      description: 'Plan your retirement with systematic investment planning.',
      level: 'intermediate',
      duration: '5 weeks',
      lessons: 15,
      price: '₹999',
      isPremium: true,
      topics: ['Retirement Goals', 'SIP Calculations', 'Pension Funds', 'Withdrawal Strategies']
    },
    {
      id: 6,
      title: 'Market Analysis Fundamentals',
      description: 'Learn to analyze market trends and make informed investment decisions.',
      level: 'beginner',
      duration: '4 weeks',
      lessons: 11,
      price: 'Free',
      isPremium: false,
      topics: ['Market Basics', 'Economic Indicators', 'Fund Performance', 'Research Tools']
    }
  ];

  const filteredCourses = selectedCategory === 'all' 
    ? courses 
    : courses.filter(course => course.level === selectedCategory);

  const getLevelColor = (level) => {
    switch (level) {
      case 'beginner': return 'bg-green-100 text-green-800';
      case 'intermediate': return 'bg-blue-100 text-blue-800';
      case 'advanced': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="section-padding py-12">
      <div className="container-width">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Learn Mutual Fund Investing
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Master the art of mutual fund investing with our comprehensive courses 
            designed for every level of experience.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category.id)}
              className={selectedCategory === category.id ? 'btn-primary' : 'btn-outline'}
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <Card key={course.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge className={getLevelColor(course.level)}>
                    {course.level.charAt(0).toUpperCase() + course.level.slice(1)}
                  </Badge>
                  {course.isPremium && (
                    <Badge variant="secondary">Premium</Badge>
                  )}
                </div>
                <CardTitle className="text-xl mb-2">{course.title}</CardTitle>
                <p className="text-gray-600 text-sm">{course.description}</p>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-4">
                  {/* Course Stats */}
                  <div className="flex justify-between text-sm text-gray-500">
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-1" />
                      {course.duration}
                    </div>
                    <div className="flex items-center">
                      <BookOpen size={16} className="mr-1" />
                      {course.lessons} lessons
                    </div>
                  </div>

                  {/* Topics Covered */}
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Topics Covered:</h4>
                    <div className="space-y-1">
                      {course.topics.map((topic, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-600">
                          <Check size={14} className="text-green-600 mr-2 flex-shrink-0" />
                          {topic}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Price and CTA */}
                  <div className="pt-4 border-t">
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-primary">
                        {course.price}
                      </span>
                      <Link to={`/course/${course.id}`}>
                        <Button className="btn-primary">
                          {course.isPremium ? 'View Course' : 'Start Free'}
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-green-600 to-green-400 rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Transform Your Financial Future?
            </h2>
            <p className="text-xl text-green-100 mb-6 max-w-2xl mx-auto">
              Join thousands of successful investors who have built wealth through our courses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/premium">
                <Button size="lg" variant="secondary" className="bg-white text-green-600 hover:bg-gray-100">
                  View Premium Plans
                </Button>
              </Link>
              <Link to="/login">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
                  <User className="mr-2" size={20} />
                  Create Account
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;