import React from 'react';
import { ArrowLeft, Github, ExternalLink, CreditCard, Shield, Zap, Globe, Users, CheckCircle, Star, GitFork } from 'lucide-react';
import { Link } from 'react-router-dom';

const AsteriskPage: React.FC = () => {
  const features = [
    {
      icon: CreditCard,
      title: 'Multi-Provider Support',
      description: 'Integrate with multiple payment providers seamlessly with unified API'
    },
    {
      icon: Shield,
      title: 'Advanced Security',
      description: 'Bank-grade security with encryption, fraud detection, and compliance'
    },
    {
      icon: Zap,
      title: 'Real-time Processing',
      description: 'Lightning-fast transaction processing with instant confirmations'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Support for international payments and multiple currencies'
    },
    {
      icon: Users,
      title: 'Developer Friendly',
      description: 'Comprehensive APIs, SDKs, and documentation for easy integration'
    }
  ];

  const techStack = [
    'Java', 'Spring Boot', 'MongoDB', 'Redis', 'Apache Kafka', 
    'Docker', 'Kubernetes', 'JWT', 'OAuth 2.0', 'REST APIs'
  ];

  const stats = [
    { label: 'GitHub Stars', value: '450+', icon: Star },
    { label: 'Forks', value: '89', icon: GitFork },
    { label: 'Contributors', value: '12', icon: Users },
    { label: 'Transactions/sec', value: '1000+', icon: Zap }
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
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-lg">
                  <CreditCard className="text-blue-600 dark:text-blue-400" size={32} />
                </div>
                <div>
                  <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
                    Asterisk
                  </h1>
                  <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold">
                    Distributed Payment Gateway
                  </p>
                </div>
              </div>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                A robust, scalable payment gateway system designed for Indian businesses. 
                Features multi-provider support, real-time transaction processing, and 
                comprehensive fraud detection to handle millions of transactions securely.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://github.com/sagarvedbairwa/asterisk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
                >
                  <Github size={20} />
                  <span>View on GitHub</span>
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center space-x-2 border-2 border-gray-300 dark:border-gray-600 hover:border-blue-600 dark:hover:border-blue-400 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
                >
                  <ExternalLink size={20} />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/259200/pexels-photo-259200.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Payment Gateway Dashboard"
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
                  <div className="bg-blue-100 dark:bg-blue-900 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <IconComponent className="text-blue-600 dark:text-blue-400" size={24} />
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
              Key Features
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Built with enterprise-grade features to handle payment processing at scale
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
                  <div className="bg-blue-100 dark:bg-blue-900 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="text-blue-600 dark:text-blue-400" size={24} />
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

      {/* Architecture Section */}
      <div className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Scalable Architecture
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Asterisk is built using modern microservices architecture with event-driven 
                design patterns. This ensures high availability, fault tolerance, and the 
                ability to scale individual components based on demand.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-green-600 dark:text-green-400" size={20} />
                  <span className="text-gray-700 dark:text-gray-300">Microservices Architecture</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-green-600 dark:text-green-400" size={20} />
                  <span className="text-gray-700 dark:text-gray-300">Event-Driven Processing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-green-600 dark:text-green-400" size={20} />
                  <span className="text-gray-700 dark:text-gray-300">Auto-scaling Capabilities</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-green-600 dark:text-green-400" size={20} />
                  <span className="text-gray-700 dark:text-gray-300">Real-time Monitoring</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="System Architecture"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Technology Stack */}
      <div className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Technology Stack
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Built with modern, battle-tested technologies
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="bg-white dark:bg-gray-900 px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Getting Started */}
      <div className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Join our community of developers building the future of payments in India
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/sagarvedbairwa/asterisk"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
            >
              <Github size={20} />
              <span>Contribute on GitHub</span>
            </a>
            <Link
              to="/#contact"
              className="flex items-center justify-center space-x-2 border-2 border-gray-300 dark:border-gray-600 hover:border-blue-600 dark:hover:border-blue-400 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
            >
              <span>Get Support</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AsteriskPage;