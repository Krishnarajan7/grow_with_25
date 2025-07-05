import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, BookOpen, Users, Shield, Star, Calculator, PiggyBank, Trophy, Target, Instagram, MessageCircle, Award, CheckCircle, Download, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import StockMarketTicker from '@/components/StockMarketTicker';

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
      quote: "Grovvest Academy helped me understand mutual funds and start investing with confidence. The courses are well-structured and easy to follow.",
    },
    {
      name: "Amit Patel",
      title: "Business Owner",
      quote: "I was always intimidated by investing, but Grovvest Academy made it simple and accessible. Now I'm building a solid financial future.",
    },
  ];

  const stats = [
    { label: "Courses", value: "25+" },
    { label: "Happy Investors", value: "10K+" },
    { label: "Years of Experience", value: "5+" },
  ];

  const certificateFeatures = [
    { icon: CheckCircle, text: "Official Grovvest Academy Certificate" },
    { icon: Download, text: "Downloadable PDF format" },
    { icon: Share2, text: "LinkedIn profile ready" },
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
                  Master mutual funds, SIPs, and investment strategies with expert guidance at Grovvest Academy. 
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
                {/* <Link to="/dashboard">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="btn-outline w-full sm:w-auto font-medium"
                  >
                    View Dashboard
                  </Button>
                </Link> */}
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-4 pt-4">
                <span className="text-gray-600 font-medium">Follow us:</span>
                <a 
                  href="https://www.instagram.com/grow.with25?igsh=M25rcTRuMmZ2YTN5" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-green-700 hover:text-green-800 transition-colors duration-300"
                >
                  <Instagram size={20} />
                  <span className="font-medium">@grow.with25</span>
                </a>
                <a 
                  href="https://chat.whatsapp.com/your-group-link" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-green-700 hover:text-green-800 transition-colors duration-300"
                >
                  <MessageCircle size={20} />
                  <span className="font-medium">WhatsApp Group</span>
                </a>
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
                <h3 className="text-4xl font-bold text-green-700">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certification Section - Redesigned with green theme */}
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
                  <span className="font-medium text-green-100">Professional Certification</span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
                  Earn Industry-Recognized Certificates
                </h2>
                <p className="text-xl text-green-100 leading-relaxed">
                  Complete our comprehensive courses and receive certificates that showcase your financial expertise 
                  and boost your investment knowledge credentials in the professional world.
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
                    Start Your Certification Journey
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
              Why Choose <span className="gradient-text">Grovvest Academy</span>?
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
              Join thousands of successful investors who started with Grovvest Academy
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/courses">
                <Button 
                  variant="outline"
                  size="lg" 
                  className="bg-white text-green-700 hover:border-white hover:text-white font-medium w-full sm:w-auto"
                >
                  Start Free Course
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/premium">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-white text-green-700 hover:bg-green-700 hover:text-white font-medium w-full sm:w-auto"
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
