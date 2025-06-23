import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar, User, BookOpen, Home } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    category: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSelectChange = (value, field) => {
    setFormData({
      ...formData,
      [field]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      category: '',
      message: ''
    });
  };

  const contactMethods = [
    {
      icon: User,
      title: 'General Support',
      description: 'Get help with your account, courses, or general questions',
      contact: 'support@growwith25.com',
      responseTime: 'Usually responds in 2-4 hours'
    },
    {
      icon: BookOpen,
      title: 'Course Support',
      description: 'Need help with course content or technical issues',
      contact: 'courses@growwith25.com',
      responseTime: 'Usually responds in 1-2 hours'
    },
    {
      icon: Calendar,
      title: 'Partnership & Media',
      description: 'Business partnerships, media inquiries, and collaboration',
      contact: 'business@growwith25.com',
      responseTime: 'Usually responds in 24-48 hours'
    }
  ];

  const faqs = [
    {
      question: 'How do I reset my password?',
      answer: 'You can reset your password by clicking on "Forgot Password" on the login page and following the instructions sent to your email.'
    },
    {
      question: 'Can I download course materials?',
      answer: 'Yes, premium members can download course materials including PDFs, worksheets, and presentations for offline study.'
    },
    {
      question: 'How do I upgrade to premium?',
      answer: 'You can upgrade to premium by visiting the Premium Plans page and selecting your preferred plan. The upgrade is instant after payment.'
    },
    {
      question: 'Do you offer refunds?',
      answer: 'Yes, we offer a 7-day money-back guarantee for premium subscriptions. Contact our support team for refund requests.'
    }
  ];

  return (
    <div className="section-padding py-12">
      <div className="container-width">
        {/* Header */}
        <div className="text-center mb-16 scroll-reveal">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions about our courses, need technical support, or want to explore partnerships? 
            We're here to help you succeed in your investment journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <div className="scroll-reveal-left">
            <Card className="shadow-lg hover-lift">
              <CardHeader>
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
                <p className="text-gray-600">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
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
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <Select value={formData.category} onValueChange={(value) => handleSelectChange(value, 'category')}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Support</SelectItem>
                        <SelectItem value="course">Course Support</SelectItem>
                        <SelectItem value="technical">Technical Issue</SelectItem>
                        <SelectItem value="billing">Billing & Payment</SelectItem>
                        <SelectItem value="partnership">Partnership</SelectItem>
                        <SelectItem value="feedback">Feedback</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Brief description of your inquiry"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Provide detailed information about your inquiry..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full btn-primary">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8 scroll-reveal-right">
            {/* Contact Methods */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Other Ways to Reach Us</h2>
              <div className="space-y-6">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon;
                  return (
                    <Card key={index} className="hover-lift">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-green-400 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Icon className="text-white" size={24} />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-gray-900 text-lg mb-1">{method.title}</h3>
                            <p className="text-gray-600 mb-2">{method.description}</p>
                            <p className="text-primary font-medium mb-1">{method.contact}</p>
                            <p className="text-sm text-gray-500">{method.responseTime}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* FAQ Section */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Answers</h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <Card key={index} className="hover-lift">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                      <p className="text-gray-600">{faq.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Office Info */}
            <Card className="bg-gradient-to-r from-green-600 to-green-400 text-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Visit Our Office</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Home className="mr-2 flex-shrink-0" size={18} />
                    <p>Grow with 25 Education Pvt. Ltd.</p>
                  </div>
                  <p className="ml-6">123 Financial District</p>
                  <p className="ml-6">Mumbai, Maharashtra 400001</p>
                  <p className="ml-6">India</p>
                </div>
                <div className="mt-4 pt-4 border-t border-green-300">
                  <p className="text-green-100">
                    <strong>Office Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM IST
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 scroll-reveal">
          <div className="bg-gray-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Can't find what you're looking for? Our support team is always ready to help. 
              We typically respond within a few hours during business hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:support@growwith25.com">
                <Button size="lg" className="btn-primary">
                  Email Support
                </Button>
              </a>
              <a href="/premium">
                <Button size="lg" variant="outline">
                  View Premium Support
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;