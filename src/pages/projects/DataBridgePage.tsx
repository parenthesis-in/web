import React from 'react';
import { ArrowLeft, Github, ExternalLink, Database, Shield, Users, Zap, Globe, Settings, CheckCircle, Star, GitFork } from 'lucide-react';
import { Link } from 'react-router-dom';

const DataBridgePage: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'Identity & Access Management',
      description: 'Comprehensive IAM solution with role-based access control and SSO'
    },
    {
      icon: Database,
      title: 'Data Integration',
      description: 'Seamlessly connect and synchronize data across multiple systems'
    },
    {
      icon: Users,
      title: 'User Management',
      description: 'Centralized user provisioning, deprovisioning, and lifecycle management'
    },
    {
      icon: Settings,
      title: 'API Management',
      description: 'Secure API gateway with rate limiting, monitoring, and analytics'
    },
    {
      icon: Globe,
      title: 'Multi-tenant Architecture',
      description: 'Support for multiple organizations with data isolation'
    },
    {
      icon: Zap,
      title: 'Real-time Sync',
      description: 'Live data synchronization with conflict resolution'
    }
  ];

  const techStack = [
    'Java', 'Spring Security', 'PostgreSQL', 'Apache Kafka', 'Docker', 
    'Kubernetes', 'OAuth 2.0', 'SAML', 'REST APIs', 'GraphQL'
  ];

  const stats = [
    { label: 'GitHub Stars', value: '280+', icon: Star },
    { label: 'Forks', value: '45', icon: GitFork },
    { label: 'Contributors', value: '6', icon: Users },
    { label: 'Integrations', value: '20+', icon: Database }
  ];

  const useCases = [
    {
      title: 'Enterprise SSO',
      description: 'Single sign-on across all enterprise applications',
      icon: Shield
    },
    {
      title: 'Data Warehousing',
      description: 'Centralized data collection from multiple sources',
      icon: Database
    },
    {
      title: 'Customer 360',
      description: 'Unified customer view across all touchpoints',
      icon: Users
    },
    {
      title: 'API Gateway',
      description: 'Secure and manage all API traffic',
      icon: Settings
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
      <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-gray-800 dark:to-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-lg">
                  <Database className="text-purple-600 dark:text-purple-400" size={32} />
                </div>
                <div>
                  <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
                    DataBridge
                  </h1>
                  <p className="text-xl text-purple-600 dark:text-purple-400 font-semibold">
                    IAM + Integration Platform
                  </p>
                </div>
              </div>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                A comprehensive Identity and Access Management platform with powerful data 
                integration capabilities. Simplifies user management and data flow across 
                multiple systems while maintaining enterprise-grade security.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://github.com/sagarvedbairwa/databridge"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
                >
                  <Github size={20} />
                  <span>View on GitHub</span>
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center space-x-2 border-2 border-gray-300 dark:border-gray-600 hover:border-purple-600 dark:hover:border-purple-400 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
                >
                  <ExternalLink size={20} />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Data Integration Dashboard"
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
                  <div className="bg-purple-100 dark:bg-purple-900 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <IconComponent className="text-purple-600 dark:text-purple-400" size={24} />
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
              Core Features
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Enterprise-grade identity management and data integration capabilities
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
                  <div className="bg-purple-100 dark:bg-purple-900 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="text-purple-600 dark:text-purple-400" size={24} />
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
              Real-world applications of DataBridge in enterprise environments
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => {
              const IconComponent = useCase.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 text-center hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="bg-purple-100 dark:bg-purple-900 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="text-purple-600 dark:text-purple-400" size={28} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {useCase.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Architecture Section */}
      <div className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Enterprise Architecture
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                DataBridge is built on a modern, cloud-native architecture that ensures 
                scalability, security, and reliability for enterprise workloads.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-green-600 dark:text-green-400" size={20} />
                  <span className="text-gray-700 dark:text-gray-300">Multi-tenant SaaS Architecture</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-green-600 dark:text-green-400" size={20} />
                  <span className="text-gray-700 dark:text-gray-300">Event-driven Data Processing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-green-600 dark:text-green-400" size={20} />
                  <span className="text-gray-700 dark:text-gray-300">Zero-downtime Deployments</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-green-600 dark:text-green-400" size={20} />
                  <span className="text-gray-700 dark:text-gray-300">Comprehensive Audit Logging</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-green-600 dark:text-green-400" size={20} />
                  <span className="text-gray-700 dark:text-gray-300">GDPR & SOC2 Compliance</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Enterprise Architecture"
                className="rounded-2xl shadow-2xl"
              />
            </div>
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
              Enterprise-grade technologies for mission-critical applications
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

      {/* Getting Started */}
      <div className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Ready to Integrate?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Join enterprises using DataBridge to streamline their identity and data management
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/sagarvedbairwa/databridge"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
            >
              <Github size={20} />
              <span>Explore on GitHub</span>
            </a>
            <Link
              to="/#contact"
              className="flex items-center justify-center space-x-2 border-2 border-gray-300 dark:border-gray-600 hover:border-purple-600 dark:hover:border-purple-400 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
            >
              <span>Enterprise Demo</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataBridgePage;