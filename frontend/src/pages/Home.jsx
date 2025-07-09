import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, BookOpen, Users, Shield, Star, Calculator, PiggyBank, Trophy, Target, Instagram, MessageCircle, Award, CheckCircle, Download, Share2, Code, Laptop, Brain, Zap, BarChart3, DollarSign, LineChart, Briefcase, GraduationCap, Rocket, Clock, Globe, TrendingDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import StockMarketTicker from '@/components/StockMarketTicker';

const Home = () => {
  const [scrollY, setScrollY] = useState(0);
  const [currentCourseIndex, setCurrentCourseIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Rotating course showcase for background animation
  const courseShowcase = [
    {
      category: "Technical Courses",
      courses: ["Web Development", "Java Programming", "AI & Machine Learning", "Full Stack Development"],
      bgColor: "from-green-100 to-blue-100",
      icon: Code,
      accent: "text-green-600"
    },
    {
      category: "Financial Education",
      courses: ["Mutual Funds", "Stock Market", "Investment Planning", "Financial Literacy"],
      bgColor: "from-blue-100 to-purple-100",
      icon: TrendingUp,
      accent: "text-blue-600"
    },
    {
      category: "Career Development",
      courses: ["Interview Prep", "Portfolio Building", "Industry Insights", "Professional Skills"],
      bgColor: "from-purple-100 to-green-100",
      icon: Briefcase,
      accent: "text-purple-600"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCourseIndex((prev) => (prev + 1) % courseShowcase.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      title: "Expert Guidance",
      description: "Learn from seasoned developers and tech industry experts. Get insights into modern programming practices and career guidance.",
      icon: TrendingUp,
    },
    {
      title: "Comprehensive Courses",
      description: "Access a wide range of courses covering Web Development, Java, AI, and more. Perfect for beginners and advanced learners.",
      icon: BookOpen,
    },
    {
      title: "Community Support",
      description: "Join a vibrant community of developers and learners. Share projects, ask questions, and grow together.",
      icon: Users,
    },
    {
      title: "Secure Platform",
      description: "Learn with confidence on our secure and reliable platform. Your progress and projects are protected.",
      icon: Shield,
    },
    {
      title: "Personalized Learning",
      description: "Customize your learning path to match your career goals. Track your progress and get personalized recommendations.",
      icon: Star,
    },
    {
      title: "Hands-on Projects",
      description: "Build real-world projects and portfolios. Apply your skills with practical assignments and industry-relevant challenges.",
      icon: Calculator,
    },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      title: "Software Engineer",
      quote: "Grovvest Academy helped me transition into tech with their comprehensive Full Stack course. The projects were amazing!",
    },
    {
      name: "Amit Patel",
      title: "Java Developer",
      quote: "I was new to programming, but Grovvest Academy made Java simple and accessible. Now I'm working at a top tech company.",
    },
  ];

  const stats = [
    { label: "Technical Courses", value: "6+" },
    { label: "Happy Learners", value: "10K+" },
    { label: "Years of Experience", value: "5+" },
  ];

  const certificateFeatures = [
    { icon: CheckCircle, text: "Official Grovvest Academy Certificate" },
    { icon: Download, text: "Downloadable PDF format" },
    { icon: Share2, text: "LinkedIn profile ready" },
  ];

  const allSkills = [
    { 
      icon: Code, 
      title: "Web Development", 
      desc: "HTML, CSS, JavaScript, React", 
      category: "tech", 
      level: "Beginner to Advanced",
      duration: "12 weeks"
    },
    { 
      icon: Laptop, 
      title: "Java Programming", 
      desc: "Core Java to Spring Framework", 
      category: "tech", 
      level: "Beginner Friendly",
      duration: "10 weeks"
    },
    { 
      icon: Brain, 
      title: "AI & Machine Learning", 
      desc: "Python, Neural Networks, Deep Learning", 
      category: "tech", 
      level: "Advanced Level",
      duration: "14 weeks"
    },
    { 
      icon: Zap, 
      title: "Full Stack Development", 
      desc: "End-to-end application development", 
      category: "tech", 
      level: "Intermediate+",
      duration: "16 weeks"
    },
    { 
      icon: TrendingUp, 
      title: "Stock Market", 
      desc: "Technical analysis, Trading strategies", 
      category: "finance", 
      level: "Beginner Friendly",
      duration: "6 weeks"
    },
    { 
      icon: PiggyBank, 
      title: "Mutual Funds", 
      desc: "SIP, Portfolio management", 
      category: "finance", 
      level: "Beginner Level",
      duration: "4 weeks"
    },
    { 
      icon: BarChart3, 
      title: "Investment Planning", 
      desc: "Risk assessment, Wealth building", 
      category: "finance", 
      level: "Intermediate",
      duration: "8 weeks"
    },
    { 
      icon: DollarSign, 
      title: "Financial Literacy", 
      desc: "Budgeting, Tax planning", 
      category: "finance", 
      level: "Beginner Level",
      duration: "2 weeks"
    }
  ];

  const liveStats = [
    { label: "Active Students", value: "2,847", trend: "up", icon: Users },
    { label: "Courses Completed", value: "15,623", trend: "up", icon: BookOpen },
    { label: "Success Rate", value: "94%", trend: "stable", icon: Trophy },
    { label: "Average Rating", value: "4.8", trend: "up", icon: Star }
  ];

  const quickFeatures = [
    { icon: Clock, title: "24/7 Access", desc: "Learn anytime, anywhere" },
    { icon: Globe, title: "Live Sessions", desc: "Interactive classes weekly" },
    { icon: Target, title: "Job Ready", desc: "Industry-focused curriculum" },
    { icon: Award, title: "Certified", desc: "Recognized certifications" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 via-white to-green-50 overflow-hidden pt-8 pb-20">
        {/* Dynamic Background Animation */}
        <div 
          className={`absolute inset-0 opacity-20 transition-all duration-1000 bg-gradient-to-br ${courseShowcase[currentCourseIndex].bgColor}`}
          style={{
            transform: `translateY(${scrollY * 0.3}px) rotate(${currentCourseIndex * 45}deg)`,
          }}
        />
        
        {/* Floating Elements Animation */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-16 h-16 bg-green-200 rounded-full opacity-10 animate-float"
              style={{
                left: `${15 + i * 12}%`,
                top: `${8 + i * 11}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + i}s`
              }}
            />
          ))}
        </div>
        
        <div className="container-width section-padding py-16 lg:py-24 relative">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-8 space-y-8 scroll-reveal">
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-2 bg-green-100 px-4 py-2 rounded-full">
                  <Rocket className="w-4 h-4 text-green-600" />
                  <span className="text-green-700 font-medium text-sm">Launch Your Tech & Finance Career</span>
                </div>
                
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Master <span className="bg-gradient-to-r from-green-600 to-green-600 bg-clip-text text-transparent">Tech & Finance</span> Skills
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Transform your career with our comprehensive courses in Programming, Web Development, AI, 
                  Financial Planning, and Investment Strategies. Build skills for the digital economy.
                </p>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/courses">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 group w-full sm:w-auto font-medium"
                  >
                    Start Learning Journey
                    <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                {/* <Link to="/dashboard">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-2 border-green-600 text-green-600 hover:bg-green-50 w-full sm:w-auto font-medium"
                  >
                    View Dashboard
                  </Button>
                </Link> */}
              </div>

              {/* Popular Skills Section - Updated with meaningful content */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-gray-900">Popular Skills</h3>
                  <Badge variant="secondary" className="bg-green-100 text-green-700">
                    8+ Courses
                  </Badge>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {allSkills.map((skill, index) => {
                    const Icon = skill.icon;
                    return (
                      <div 
                        key={index} 
                        className="flex items-center space-x-4 p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200 hover:border-green-300 transition-all duration-300 hover:shadow-lg transform hover:scale-105 group"
                        style={{
                          animationDelay: `${index * 0.1}s`
                        }}
                      >
                        <div className={`w-14 h-14 ${skill.category === 'tech' ? 'bg-green-100' : 'bg-blue-100'} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0`}>
                          <Icon className={`w-7 h-7 ${skill.category === 'tech' ? 'text-green-600' : 'text-blue-600'}`} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-gray-900 group-hover:text-green-700 transition-colors">{skill.title}</h4>
                          <p className="text-sm text-gray-600 mb-2">{skill.desc}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-medium text-gray-500">{skill.level}</span>
                            <span className="text-xs font-semibold text-green-600">{skill.duration}</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Social Links */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 pt-4">
                <span className="text-gray-600 font-medium">Join Our Community:</span>
                <div className="flex space-x-6">
                  <a 
                    href="https://www.instagram.com/grow.with25?igsh=M25rcTRuMmZ2YTN5" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-green-700 hover:text-green-800 transition-colors duration-300 font-medium"
                  >
                    <Instagram size={20} />
                    <span>@grow.with25</span>
                  </a>
                  <a 
                    href="https://chat.whatsapp.com/your-group-link" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-green-700 hover:text-green-800 transition-colors duration-300 font-medium"
                  >
                    <MessageCircle size={20} />
                    <span>WhatsApp Group</span>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Right Column - Stats and Animated Course Card */}
            <div className="lg:col-span-4 space-y-6">
              {/* Live Statistics */}
              <div className="grid grid-cols-2 gap-4">
                {liveStats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div 
                      key={index}
                      className="bg-white/90 backdrop-blur-sm rounded-xl p-4 border border-gray-200 hover:border-green-300 transition-all duration-300 hover:shadow-md transform hover:scale-105"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <Icon className="w-5 h-5 text-green-600" />
                        <div className={`flex items-center space-x-1 ${
                          stat.trend === 'up' ? 'text-green-600' : 
                          stat.trend === 'down' ? 'text-red-500' : 'text-gray-500'
                        }`}>
                          {stat.trend === 'up' && <TrendingUp className="w-3 h-3" />}
                          {stat.trend === 'down' && <TrendingDown className="w-3 h-3" />}
                        </div>
                      </div>
                      <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  );
                })}
              </div>

              {/* Enhanced Animated Course Showcase Card */}
              <div className="bg-white rounded-2xl p-6 shadow-2xl border border-green-100 transform hover:scale-105 transition-all duration-500">
                <div className="space-y-6">
                  {/* Dynamic Header */}
                  <div className="flex items-center justify-between">
                    <div className="transition-all duration-500">
                      <h3 className="font-semibold text-gray-900 text-lg">
                        {courseShowcase[currentCourseIndex].category}
                      </h3>
                      <p className="text-sm text-gray-600">Available Now</p>
                    </div>
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ${courseShowcase[currentCourseIndex].bgColor.replace('from-', 'bg-').replace(' to-blue-100', '').replace(' to-purple-100', '').replace(' to-green-100', '')}`}>
                      {React.createElement(courseShowcase[currentCourseIndex].icon, {
                        className: `w-6 h-6 ${courseShowcase[currentCourseIndex].accent}`
                      })}
                    </div>
                  </div>
                  
                  {/* Course List with Enrollment Info */}
                  <div className="space-y-4">
                    {courseShowcase[currentCourseIndex].courses.map((course, index) => (
                      <div key={course} className="flex justify-between items-center opacity-0 animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s`, animationFillMode: 'forwards' }}>
                        <span className="text-gray-700 text-sm font-medium">{course}</span>
                        <div className="flex items-center space-x-2">
                          <Badge className={`text-xs ${courseShowcase[currentCourseIndex].category === 'Technical Courses' ? 'bg-green-100 text-green-700' : courseShowcase[currentCourseIndex].category === 'Financial Education' ? 'bg-blue-100 text-blue-700' : 'bg-purple-100 text-purple-700'}`}>
                            {index === 0 ? 'Most Popular' : index === 1 ? 'New' : 'Trending'}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Status Badge */}
                  <div className="flex items-center space-x-3 p-3 bg-gradient-to-r from-green-50 to-green-100 rounded-lg border border-green-200">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <Trophy className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Enroll Today</p>
                      <p className="text-xs text-gray-600">Limited time offers</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Quick Features */}
              <div className="grid grid-cols-2 gap-3">
                {quickFeatures.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div 
                      key={index}
                      className="flex items-center space-x-3 p-3 bg-white/80 backdrop-blur-sm rounded-lg border border-gray-100 hover:border-green-200 transition-all duration-300"
                    >
                      <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 text-green-600" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-semibold text-gray-900 text-sm">{feature.title}</h4>
                        <p className="text-xs text-gray-600">{feature.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Additional Info Cards */}
              <div className="grid grid-cols-2 gap-4">
                <Card className="p-4 bg-gradient-to-br from-green-50 to-green-100 border-green-200">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-700">500+</div>
                    <div className="text-xs text-green-600">Hours Content</div>
                  </div>
                </Card>
                <Card className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-700">98%</div>
                    <div className="text-xs text-blue-600">Job Placement</div>
                  </div>
                </Card>
              </div>
              
              {/* Floating Animation Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-400 rounded-full animate-pulse opacity-60"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-400 rounded-full animate-bounce opacity-60"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stock Market Ticker */}
      <StockMarketTicker />

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container-width section-padding">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="scroll-reveal"
              >
                <h3 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-green-600 bg-clip-text text-transparent">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certification Section - Updated with tech theme */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-green-700 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-64 h-64 bg-green-500 rounded-full opacity-20 -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-800 rounded-full opacity-20 translate-y-32 -translate-x-32"></div>
        </div>
        <div className="container-width section-padding relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="scroll-reveal space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-3 bg-green-500/20 px-4 py-2 rounded-full">
                  <Award className="w-6 h-6 text-yellow-300" />
                  <span className="font-medium text-green-100">Industry-Recognized Certification</span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
                  Earn Certificates That Boost Your Career
                </h2>
                <p className="text-xl text-green-100 leading-relaxed">
                  Complete our comprehensive technical and financial courses and receive certificates that showcase your expertise 
                  and enhance your professional profile across industries.
                </p>
              </div>
              
              <div className="space-y-4">
                {certificateFeatures.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-green-100">{feature.text}</span>
                    </div>
                  );
                })}
              </div>
              
              <div className="pt-4">
                <Link to="/courses">
                  <Button 
                    size="lg" 
                    className="bg-white text-green-700 hover:bg-green-50 font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Start Your Journey
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="scroll-reveal">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-lg opacity-20 blur"></div>
                <img 
                  src="/images/certify.jpg" 
                  alt="Grovvest Academy Certificate" 
                  className="relative w-full max-w-lg mx-auto rounded-lg shadow-2xl border-4 border-white/20 transform hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center animate-pulse shadow-lg">
                  <Award className="w-8 h-8 text-green-700" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-width section-padding">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose <span className="bg-gradient-to-r from-green-600 to-green-600 bg-clip-text text-transparent">Grovvest Academy</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive education in technology and finance designed for modern professionals
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
                    <div className="w-12 h-12 bg-gradient-to-r from-green-100 to-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:from-green-200 group-hover:to-green-200 transition-colors duration-300">
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

      {/* Learning Tools Section */}
      <section className="py-20 bg-white">
        <div className="container-width section-padding">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Smart Learning <span className="bg-gradient-to-r from-green-600 to-green-600 bg-clip-text text-transparent">Tools & Resources</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access our comprehensive suite of learning tools for both technical and financial education
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
            {[
              { icon: Code, title: "Code Editor", desc: "Built-in coding environment" },
              { icon: BarChart3, title: "Market Simulator", desc: "Practice trading safely" },
              { icon: Laptop, title: "Project Builder", desc: "Create real-world projects" },
              { icon: LineChart, title: "Portfolio Tracker", desc: "Monitor investments" },
              { icon: Brain, title: "Skill Tracker", desc: "Monitor your progress" },
              { icon: PiggyBank, title: "SIP Calculator", desc: "Plan your investments" },
              { icon: Target, title: "Career Path", desc: "Personalized roadmap" },
              { icon: Rocket, title: "Launch Pad", desc: "Deploy your projects" }
            ].map((tool, index) => {
              const Icon = tool.icon;
              return (
                <Card 
                  key={index} 
                  className="group cursor-pointer hover-lift scroll-reveal"
                >
                  <CardContent className="p-4 lg:p-6 text-center">
                    <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-green-100 to-green-100 rounded-full flex items-center justify-center mx-auto mb-3 lg:mb-4 group-hover:from-green-200 group-hover:to-green-200 transition-colors duration-300">
                      <Icon className="w-6 h-6 lg:w-8 lg:h-8 text-green-700" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-green-700 transition-colors duration-300 text-sm lg:text-base">
                      {tool.title}
                    </h3>
                    <p className="text-gray-600 text-xs lg:text-sm">{tool.desc}</p>
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
              What Our <span className="bg-gradient-to-r from-green-600 to-green-600 bg-clip-text text-transparent">Students</span> Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories from people who have transformed their careers with us
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
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-100 to-green-100 flex items-center justify-center group-hover:from-green-200 group-hover:to-green-200 transition-colors duration-300">
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
              Ready to Transform Your Future?
            </h2>
            <p className="text-xl mb-8 text-green-100">
              Join thousands of successful professionals who advanced their careers with Grovvest Academy
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
                  className="bg-white text-green-700 hover:bg-green-50 hover:text-green-700 font-medium w-full sm:w-auto"
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
