import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, BookOpen, User, Calendar, Plus } from 'lucide-react';

const Premium = () => {
  const plans = [
    {
      name: 'Free',
      price: '₹0',
      period: 'Forever',
      description: 'Perfect for getting started with mutual fund investing',
      features: [
        'Access to 2 basic courses',
        'Limited blog access',
        'Community forum access',
        'Basic investment calculators',
        'Email support'
      ],
      notIncluded: [
        'Premium courses',
        'Live webinars',
        'Personal portfolio review',
        'Advanced tools',
        'Priority support'
      ],
      recommended: false,
      buttonText: 'Current Plan'
    },
    {
      name: 'Premium Monthly',
      price: '₹999',
      period: 'per month',
      description: 'Comprehensive learning with all premium features',
      features: [
        'Access to all courses (15+ courses)',
        'Live webinars and Q&A sessions',
        'Personal portfolio review',
        'Advanced investment calculators',
        'Market analysis reports',
        'Priority email & chat support',
        'Downloadable resources',
        'Certificate of completion',
        'Mobile app access'
      ],
      notIncluded: [],
      recommended: true,
      buttonText: 'Start Premium'
    },
    {
      name: 'Premium Annual',
      price: '₹9,999',
      period: 'per year',
      originalPrice: '₹11,988',
      savings: 'Save ₹1,989',
      description: 'Best value with 2 months free + exclusive bonuses',
      features: [
        'Everything in Premium Monthly',
        '2 months completely free',
        'Exclusive annual member bonuses',
        'One-on-one mentorship session',
        'Early access to new courses',
        'Quarterly portfolio review calls',
        'Tax planning consultation',
        'VIP community access',
        'Lifetime course updates'
      ],
      notIncluded: [],
      recommended: false,
      buttonText: 'Get Annual Plan'
    }
  ];

  const premiumFeatures = [
    {
      icon: BookOpen,
      title: 'Complete Course Library',
      description: 'Access to 15+ comprehensive courses covering all aspects of mutual fund investing'
    },
    {
      icon: User,
      title: 'Personal Mentorship',
      description: 'One-on-one guidance from certified financial advisors and investment experts'
    },
    {
      icon: Calendar,
      title: 'Live Sessions',
      description: 'Weekly live webinars, market analysis sessions, and interactive Q&A'
    }
  ];

  const handlePlanSelect = (planName) => {
    if (typeof planName !== 'string') return;
    if (planName === 'Free') return;
    console.log(`Selected plan: ${planName}`);
    alert(`Payment integration would be implemented here for ${planName}`);
  };

  return (
    <div className="section-padding py-12">
      <div className="container-width">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Choose Your <span className="gradient-text">Learning Plan</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Unlock your investment potential with our comprehensive courses and expert guidance. 
            Start free or go premium for the complete experience.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
            What Makes Premium Special?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {premiumFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-green-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative ${plan.recommended ? 'ring-2 ring-green-500 shadow-xl scale-105' : 'hover:shadow-lg'} transition-all`}>
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-green-600 to-green-400 text-white px-4 py-1">
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold text-gray-900">{plan.name}</CardTitle>
                <div className="mt-4">
                  <div className="flex items-center justify-center">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-2">/{plan.period}</span>
                  </div>
                  {plan.originalPrice && (
                    <div className="mt-2">
                      <span className="text-lg text-gray-500 line-through">{plan.originalPrice}</span>
                      <span className="text-green-600 font-medium ml-2">{plan.savings}</span>
                    </div>
                  )}
                </div>
                <p className="text-gray-600 mt-4">{plan.description}</p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <Check className="text-green-600 mr-3 flex-shrink-0" size={18} />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                  {plan.notIncluded.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center opacity-50">
                      <Plus className="text-gray-400 mr-3 flex-shrink-0 transform rotate-45" size={18} />
                      <span className="text-gray-500 line-through">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  className={`w-full ${plan.recommended ? 'btn-primary' : plan.name === 'Free' ? 'bg-gray-200 text-gray-600 cursor-not-allowed' : 'btn-outline'}`}
                  onClick={() => handlePlanSelect(plan.name)}
                  disabled={plan.name === 'Free'}
                >
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gray-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Can I cancel anytime?</h3>
                <p className="text-gray-600">Yes, you can cancel your premium subscription at any time. You'll continue to have access until the end of your billing period.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Is there a free trial?</h3>
                <p className="text-gray-600">Yes! You can access our free courses immediately. Premium members get a 7-day money-back guarantee.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">What payment methods do you accept?</h3>
                <p className="text-gray-600">We accept all major credit cards, debit cards, UPI, and net banking through secure payment gateways.</p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Do I get certificates?</h3>
                <p className="text-gray-600">Yes, premium members receive certificates of completion for each course, which you can add to your LinkedIn profile.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">How often is content updated?</h3>
                <p className="text-gray-600">We regularly update our courses with new content, market insights, and regulatory changes to keep you informed.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Is there mobile access?</h3>
                <p className="text-gray-600">Yes, premium members get access to our mobile app for learning on the go, with offline content download.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-green-600 to-green-400 rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Financial Future?</h2>
            <p className="text-xl text-green-100 mb-6 max-w-2xl mx-auto">
              Join thousands of successful investors who have built wealth through our comprehensive courses.
            </p>
            <Button 
              size="lg" 
              variant="secondary" 
              className="bg-white text-green-600 hover:bg-gray-100"
              onClick={() => handlePlanSelect('Premium Monthly')}
            >
              Start Your Premium Journey
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Premium;