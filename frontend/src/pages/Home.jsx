import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, BookOpen, Users, Shield, Star, Calculator, PiggyBank, Trophy, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Home = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      title: "Expert Guidance",
      description: "Learn from seasoned investors and financial experts. Get insights into market trends and investment strategies.",
      icon: TrendingUp,
    },
    {
      title: "Comprehensive Courses",
      description: "Access a wide range of courses covering mutual funds, SIPs, and more. Perfect for beginners and advanced learners.",
      icon: BookOpen,
    },
    {
      title: "Community Support",
      description: "Join a vibrant community of investors. Share ideas, ask questions, and grow together.",
      icon: Users,
    },
    {
      title: "Secure Platform",
      description: "Invest with confidence on our secure and reliable platform. Your data and investments are protected.",
      icon: Shield,
    },
    {
      title: "Personalized Learning",
      description: "Customize your learning path to match your investment goals. Track your progress and get personalized recommendations.",
      icon: Star,
    },
    {
      title: "Real-time Analytics",
      description: "Make data-driven decisions with real-time analytics and performance tracking. Stay informed and optimize your portfolio.",
      icon: Calculator,
    },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      title: "Software Engineer",
      quote: "Grow with 25 helped me understand mutual funds and start investing with confidence. The courses are well-structured and easy to follow.",
    },
    {
      name: "Amit Patel",
      title: "Business Owner",
      quote: "I was always intimidated by investing, but Grow with 25 made it simple and accessible. Now I'm building a solid financial future.",
    },
  ];

  const stats = [
    { label: "Courses", value: "25+" },
    { label: "Happy Investors", value: "10K+" },
    { label: "Years of Experience", value: "5+" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 via-white to-green-50 overflow-hidden pt-8 pb-16">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
            background: 'radial-gradient(circle at 20% 50%, #10b981 0%, transparent 50%), radial-gradient(circle at 80% 50%, #059669 0%, transparent 50%)'
          }}
        />
        
        <div className="container-width section-padding py-16 lg:py-24 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 scroll-reveal">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Grow Your <span className="gradient-text">Wealth</span> with Smart Investing
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Master mutual funds, SIPs, and investment strategies with expert guidance. 
                  Start your journey to financial freedom today.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/courses">
                  <Button 
                    size="lg" 
                    className="btn-primary group w-full sm:w-auto font-medium"
                  >
                    Start Learning
                    <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link to="/dashboard">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="btn-outline w-full sm:w-auto font-medium"
                  >
                    View Dashboard
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative animate-float">
              <div className="bg-white rounded-2xl p-8 shadow-2xl border border-green-100 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-gray-900">Portfolio Growth</h3>
                    <TrendingUp className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">SIP Returns</span>
                      <span className="font-semibold text-green-600">+18.2%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Large Cap</span>
                      <span className="font-semibold text-green-600">+15.8%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Mid Cap</span>
                      <span className="font-semibold text-green-600">+22.4%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container-width section-padding">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="scroll-reveal"
              >
                <h3 className="text-4xl font-bold text-green-700">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-width section-padding">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose <span className="gradient-text">Grow with 25</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive financial education designed for beginners and experienced investors alike
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card 
                  key={index} 
                  className="group hover-lift scroll-reveal border-0 shadow-md"
                >
                  <CardHeader>
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors duration-300">
                      <Icon className="w-6 h-6 text-green-700" />
                    </div>
                    <CardTitle className="group-hover:text-green-700 transition-colors duration-300">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Investment Tools Section */}
      <section className="py-20 bg-white">
        <div className="container-width section-padding">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Smart Investment <span className="gradient-text">Tools & Calculators</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Make informed decisions with our comprehensive suite of financial calculators
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Calculator, title: "SIP Calculator", desc: "Calculate your SIP returns" },
              { icon: PiggyBank, title: "Goal Planner", desc: "Plan for your financial goals" },
              { icon: Trophy, title: "Risk Analyzer", desc: "Assess your risk profile" },
              { icon: Target, title: "Tax Optimizer", desc: "Optimize your tax savings" }
            ].map((tool, index) => {
              const Icon = tool.icon;
              return (
                <Card 
                  key={index} 
                  className="group cursor-pointer hover-lift scroll-reveal"
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors duration-300">
                      <Icon className="w-8 h-8 text-green-700" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-green-700 transition-colors duration-300">
                      {tool.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{tool.desc}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-width section-padding">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What Our <span className="gradient-text">Investors</span> Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories from people who have transformed their financial futures with us
            </p>
          </div>
          
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="group hover-lift scroll-reveal"
              >
                <CardContent className="p-8">
                  <div className="mb-4">
                    <p className="text-gray-700 italic leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center group-hover:bg-green-200 transition-colors duration-300">
                      <Users className="w-6 h-6 text-green-700" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 group-hover:text-green-700 transition-colors duration-300">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-600 text-sm">{testimonial.title}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-700 to-green-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container-width section-padding relative">
          <div className="text-center max-w-3xl mx-auto scroll-reveal">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Start Your Investment Journey?
            </h2>
            <p className="text-xl mb-8 text-green-100">
              Join thousands of successful investors who started with Grow with 25
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/courses">
                <Button 
                  size="lg" 
                  className="bg-white text-green-700 hover:bg-green-50 font-medium w-full sm:w-auto"
                >
                  Start Free Course
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/premium">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-white text-white hover:bg-white hover:text-green-700 font-medium w-full sm:w-auto"
                >
                  Explore Premium
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;