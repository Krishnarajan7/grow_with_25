import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { User, Calendar, BookOpen } from 'lucide-react';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const benefits = [
    {
      icon: BookOpen,
      title: 'Access Courses',
      description: 'Unlock premium courses and learning materials'
    },
    {
      icon: User,
      title: 'Track Progress',
      description: 'Monitor your learning journey and achievements'
    },
    {
      icon: Calendar,
      title: 'Personalized Learning',
      description: 'Get customized recommendations based on your goals'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 section-padding py-12">
      <div className="container-width">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Side - Benefits */}
          <div className="order-2 lg:order-1">
            <div className="text-center lg:text-left mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {isLogin ? 'Welcome Back!' : 'Join Grow with 25'}
              </h1>
              <p className="text-xl text-gray-600">
                {isLogin 
                  ? 'Continue your investment learning journey' 
                  : 'Start your path to financial independence'
                }
              </p>
            </div>

            <div className="space-y-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-green-400 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-lg">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 p-6 bg-white rounded-xl shadow-sm">
              <p className="text-sm text-gray-600 italic">
                "Grow with 25 transformed my understanding of investing. The courses are 
                practical and easy to follow. I'm now confidently building my portfolio!"
              </p>
              <div className="mt-4 flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-green-400 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">AR</span>
                </div>
                <div className="ml-3">
                  <p className="font-medium text-gray-900">Amit Raj</p>
                  <p className="text-sm text-gray-500">Premium Member</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="order-1 lg:order-2">
            <Card className="shadow-xl">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-green-400 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">25</span>
                </div>
                <CardTitle className="text-2xl">
                  {isLogin ? 'Sign In' : 'Create Account'}
                </CardTitle>
                <p className="text-gray-600">
                  {isLogin 
                    ? 'Enter your credentials to access your account' 
                    : 'Join thousands of successful investors'
                  }
                </p>
              </CardHeader>

              <CardContent className="space-y-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  {!isLogin && (
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        required={!isLogin}
                      />
                    </div>
                  )}

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      placeholder="Enter your password"
                      required
                    />
                  </div>

                  {!isLogin && (
                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword">Confirm Password</Label>
                      <Input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        placeholder="Confirm your password"
                        required={!isLogin}
                      />
                    </div>
                  )}

                  <Button type="submit" className="w-full btn-primary">
                    {isLogin ? 'Sign In' : 'Create Account'}
                  </Button>
                </form>

                {isLogin && (
                  <div className="text-center">
                    <Link to="#" className="text-primary hover:text-primary/80 text-sm">
                      Forgot your password?
                    </Link>
                  </div>
                )}

                <Separator />

                <div className="text-center">
                  <p className="text-gray-600">
                    {isLogin ? "Don't have an account?" : "Already have an account?"}
                  </p>
                  <Button
                    variant="ghost"
                    onClick={() => setIsLogin(!isLogin)}
                    className="text-primary hover:text-primary/80 font-medium"
                  >
                    {isLogin ? 'Create Account' : 'Sign In'}
                  </Button>
                </div>

                <div className="text-center text-xs text-gray-500">
                  By {isLogin ? 'signing in' : 'creating an account'}, you agree to our{' '}
                  <Link to="#" className="text-primary hover:text-primary/80">Terms of Service</Link>
                  {' '}and{' '}
                  <Link to="#" className="text-primary hover:text-primary/80">Privacy Policy</Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;