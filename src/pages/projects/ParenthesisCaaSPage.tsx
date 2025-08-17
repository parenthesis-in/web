import React from 'react';
import { ArrowLeft, Github, ExternalLink, MessageSquare, Bot, Zap, BarChart3, Settings, Globe, CheckCircle, Star, GitFork, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const ParenthesisCaaSPage: React.FC = () => {
  const features = [
    {
      icon: Bot,
      title: 'Visual Chatbot Builder',
      description: 'Drag-and-drop interface to create sophisticated chatbots without coding'
    },
    {
      icon: BarChart3,
      title: 'Analytics Dashboard',
      description: 'Comprehensive insights into user interactions and bot performance'
    },
    {
      icon: Settings,
      title: 'Custom Workflows',
      description: 'Design complex conversation flows with conditional logic and integrations'
    },
    {
      icon: Globe,
      title: 'Multi-channel Deployment',
      description: 'Deploy bots across websites, mobile apps, and messaging platforms'
    },
    {
      icon: Zap,
      title: 'AI-Powered Responses',
      description: 'Leverage Gemini AI for intelligent, context-aware conversations'
    },
    {
      icon: MessageSquare,
      title: 'Real-time Chat',
      description: 'WebSocket-based real-time messaging with typing indicators'
    }
  ];

  const techStack = [
    'Node.js', 'React', 'Gemini AI', 'WebSocket', 'Docker', 
    'MongoDB', 'Express.js', 'TypeScript', 'Tailwind CSS', 'Chart.js'
  ];

  const stats = [
    { label: 'Coming Soon', value: '2024', icon: Star },
    { label: 'Pre-orders', value: '150+', icon: Users },
    { label: 'Beta Testers', value: '25', icon: GitFork },
    { label: 'Integrations', value: '10+', icon: Settings }
  ];

  const useCases = [
    {
      title: 'Customer Support',
      description: 'Automate customer service with intelligent responses',
      icon: MessageSquare,
      examples: ['FAQ automation', 'Ticket routing', '24/7 support']
    },
    {
      title: 'Lead Generation',
      description: 'Qualify and capture leads through conversational forms',
      icon: Users,
      examples: ['Lead qualification', 'Contact capture', 'Product demos']
    },
    {
      title: 'E-commerce',
      description: 'Guide customers through purchase decisions',
      icon: Settings,
      examples: ['Product recommendations', 'Order tracking', 'Return assistance']
    },
    {
      title: 'Internal Tools',
      description: 'Streamline internal processes with chatbot automation',
      icon: Bot,
      examples: ['HR queries', 'IT support', 'Knowledge base']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '₹999',
      period: '/month',
      features: ['Up to 1,000 conversations', 'Basic analytics', 'Email support', '1 chatbot'],
      popular: false
    },
    {
      name: 'Professional',
      price: '₹2,999',
      period: '/month',
      features: ['Up to 10,000 conversations', 'Advanced analytics', 'Priority support', '5 chatbots', 'Custom integrations'],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      features: ['Unlimited conversations', 'White-label solution', 'Dedicated support', 'Unlimited chatbots', 'On-premise deployment'],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen pt-16 bg-white dark:bg-gray-900">
      {/* Back Navigation */}
      <div className="bg-gray-50 dark:bg-gray-800 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/#projects"
            className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
          >
            <ArrowLeft size={20} />
            <span>Back to Projects</span>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-gray-800 dark:to-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-orange-100 dark:bg-orange-900 p-3 rounded-lg">
                  <MessageSquare className="text-orange-600 dark:text-orange-400" size={32} />
                </div>
                <div>
                  <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
                    Parenthesis CaaS
                  </h1>
                  <p className="text-xl text-orange-600 dark:text-orange-400 font-semibold">
                    Chatbot as a Service
                  </p>
                </div>
              </div>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                A comprehensive platform for building, deploying, and managing intelligent chatbots. 
                Offers easy integration, powerful analytics, and customization options for businesses 
                of all sizes with AI-powered conversation capabilities.
              </p>

              <div className="flex items-center space-x-4 mb-8">
                <span className="bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-400 px-4 py-2 rounded-full text-sm font-medium">
                  Coming Soon - 2024
                </span>
                <span className="bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 px-4 py-2 rounded-full text-sm font-medium">
                  Beta Available
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://github.com/sagarvedbairwa/parenthesis-caas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
                >
                  <Github size={20} />
                  <span>View on GitHub</span>
                </a>
                <Link
                  to="/#contact"
                  className="flex items-center justify-center space-x-2 border-2 border-gray-300 dark:border-gray-600 hover:border-orange-600 dark:hover:border-orange-400 text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
                >
                  <span>Join Beta</span>
                </Link>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Chatbot Platform Dashboard"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-12 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6">
            {stats.map((stat) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl text-center border border-gray-200 dark:border-gray-700"
                >
                  <div className="bg-orange-100 dark:bg-orange-900 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <IconComponent className="text-orange-600 dark:text-orange-400" size={24} />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 dark:text-gray-300 text-sm">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Platform Features
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Everything you need to build, deploy, and manage intelligent chatbots
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="bg-orange-100 dark:bg-orange-900 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="text-orange-600 dark:text-orange-400" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Use Cases Section */}
      <div className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Use Cases
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Versatile chatbot solutions for various business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => {
              const IconComponent = useCase.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="bg-orange-100 dark:bg-orange-900 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="text-orange-600 dark:text-orange-400" size={28} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 text-center">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm text-center mb-4">
                    {useCase.description}
                  </p>
                  <div className="space-y-1">
                    {useCase.examples.map((example, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="text-green-600 dark:text-green-400 flex-shrink-0" size={14} />
                        <span className="text-gray-600 dark:text-gray-300 text-xs">{example}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Simple Pricing
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg border-2 ${
                  plan.popular 
                    ? 'border-orange-500 relative' 
                    : 'border-gray-200 dark:border-gray-700'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-gray-900 dark:text-white">
                      {plan.price}
                    </span>
                    <span className="text-gray-600 dark:text-gray-300 ml-1">
                      {plan.period}
                    </span>
                  </div>
                </div>
                
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="text-green-600 dark:text-green-400 flex-shrink-0" size={20} />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors duration-200 ${
                    plan.popular
                      ? 'bg-orange-600 hover:bg-orange-700 text-white'
                      : 'border-2 border-gray-300 dark:border-gray-600 hover:border-orange-600 dark:hover:border-orange-400 text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400'
                  }`}
                >
                  {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Technology Stack */}
      <div className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Technology Stack
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Modern technologies for scalable chatbot solutions
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="bg-gray-50 dark:bg-gray-800 px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Build Your Chatbot?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Join our beta program and be among the first to experience the future of conversational AI
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/#contact"
              className="flex items-center justify-center space-x-2 bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              <MessageSquare size={20} />
              <span>Join Beta Program</span>
            </Link>
            <a
              href="https://github.com/sagarvedbairwa/parenthesis-caas"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors duration-200"
            >
              <Github size={20} />
              <span>View Source Code</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParenthesisCaaSPage;