import React from 'react';
import { Code, Heart, Users, Globe, Github, BookOpen } from 'lucide-react';

const OpenSourceLicense: React.FC = () => {
  const projects = [
    {
      name: 'Asterisk',
      description: 'Distributed Payment Gateway',
      license: 'MIT License',
      repository: 'https://github.com/sagarvedbairwa/asterisk',
      features: ['Payment processing', 'Multi-provider support', 'Fraud detection', 'API gateway']
    },
    {
      name: 'DataBridge',
      description: 'IAM + Integration Platform',
      license: 'Apache License 2.0',
      repository: 'https://github.com/sagarvedbairwa/databridge',
      features: ['Identity management', 'Data integration', 'Access control', 'API management']
    },
    {
      name: 'TRIPTI AI',
      description: 'AI Chatbot for Travel',
      license: 'MIT License',
      repository: 'https://github.com/sagarvedbairwa/tripti-ai',
      features: ['Natural language processing', 'Travel recommendations', 'Multi-language support', 'Learning algorithms']
    },
    {
      name: 'Parenthesis CaaS',
      description: 'Chatbot as a Service',
      license: 'GPL v3',
      repository: 'https://github.com/sagarvedbairwa/parenthesis-caas',
      features: ['Chatbot builder', 'Analytics dashboard', 'Integration APIs', 'Custom workflows']
    }
  ];

  const licenses = [
    {
      name: 'MIT License',
      description: 'A permissive license that allows commercial use, modification, distribution, and private use.',
      permissions: ['Commercial use', 'Modification', 'Distribution', 'Private use'],
      conditions: ['License and copyright notice'],
      limitations: ['Liability', 'Warranty']
    },
    {
      name: 'Apache License 2.0',
      description: 'A permissive license that also provides an express grant of patent rights from contributors.',
      permissions: ['Commercial use', 'Modification', 'Distribution', 'Patent use', 'Private use'],
      conditions: ['License and copyright notice', 'State changes'],
      limitations: ['Liability', 'Trademark use', 'Warranty']
    },
    {
      name: 'GPL v3',
      description: 'A copyleft license that requires derivative works to be distributed under the same license.',
      permissions: ['Commercial use', 'Modification', 'Distribution', 'Patent use', 'Private use'],
      conditions: ['Disclose source', 'License and copyright notice', 'Same license', 'State changes'],
      limitations: ['Liability', 'Warranty']
    }
  ];

  const principles = [
    {
      icon: Heart,
      title: 'Community First',
      description: 'We believe in building technology that serves the community and empowers developers worldwide.'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'Our open-source projects are designed to solve real-world problems and create positive impact globally.'
    },
    {
      icon: Users,
      title: 'Collaborative Development',
      description: 'We encourage contributions from developers of all skill levels and backgrounds.'
    },
    {
      icon: BookOpen,
      title: 'Knowledge Sharing',
      description: 'We provide comprehensive documentation and learning resources for all our projects.'
    }
  ];

  return (
    <div className="min-h-screen pt-16 bg-white dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-gray-800 dark:to-gray-800 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-green-100 dark:bg-green-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
            <Code className="text-green-600 dark:text-green-400" size={32} />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Open Source Licenses
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Understanding the licenses that govern our open-source projects and your rights as a user and contributor.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <div className="mb-16">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Our Commitment to Open Source
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              At Parenthesis India, we believe in the power of open-source software to drive innovation, 
              foster collaboration, and create solutions that benefit everyone. All our projects are 
              released under carefully chosen open-source licenses that balance freedom with responsibility.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              This page provides detailed information about the licenses we use, what they mean for you 
              as a user or contributor, and how you can get involved in our open-source community.
            </p>
          </div>
        </div>

        {/* Our Principles */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Our Open Source Principles
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((principle) => {
              const IconComponent = principle.icon;
              return (
                <div
                  key={principle.title}
                  className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 text-center"
                >
                  <div className="bg-green-100 dark:bg-green-900 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="text-green-600 dark:text-green-400" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {principle.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {principle.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Project Licenses */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Our Projects and Their Licenses
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.name}
                className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      {project.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">
                      {project.description}
                    </p>
                  </div>
                  <span className="bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                    {project.license}
                  </span>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature) => (
                      <span
                        key={feature}
                        className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                
                <a
                  href={project.repository}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
                >
                  <Github size={16} />
                  <span>View Repository</span>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* License Details */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">
            License Details
          </h2>
          <div className="space-y-8">
            {licenses.map((license) => (
              <div
                key={license.name}
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {license.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {license.description}
                </p>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold text-green-600 dark:text-green-400 mb-3">
                      ✓ Permissions
                    </h4>
                    <ul className="space-y-1">
                      {license.permissions.map((permission) => (
                        <li key={permission} className="text-gray-600 dark:text-gray-300 text-sm">
                          • {permission}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-3">
                      ⚠ Conditions
                    </h4>
                    <ul className="space-y-1">
                      {license.conditions.map((condition) => (
                        <li key={condition} className="text-gray-600 dark:text-gray-300 text-sm">
                          • {condition}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-red-600 dark:text-red-400 mb-3">
                      ✗ Limitations
                    </h4>
                    <ul className="space-y-1">
                      {license.limitations.map((limitation) => (
                        <li key={limitation} className="text-gray-600 dark:text-gray-300 text-sm">
                          • {limitation}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* How to Contribute */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-6">
              How to Contribute
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  For Developers
                </h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• Fork the repository on GitHub</li>
                  <li>• Read the contributing guidelines</li>
                  <li>• Make your changes and test thoroughly</li>
                  <li>• Submit a pull request with clear description</li>
                  <li>• Participate in code reviews</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  For Non-Developers
                </h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• Report bugs and issues</li>
                  <li>• Suggest new features</li>
                  <li>• Improve documentation</li>
                  <li>• Help with translations</li>
                  <li>• Share projects with others</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Contact and Support */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 p-8 rounded-2xl text-white">
            <h2 className="text-2xl font-bold mb-4">Questions About Licensing?</h2>
            <p className="text-green-100 mb-6 max-w-2xl mx-auto">
              If you have questions about our licenses, need clarification about usage rights, 
              or want to discuss commercial licensing options, we're here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:parenthesis.in+opensource@gmail.com"
                className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                Contact Us
              </a>
              <a
                href="https://github.com/parenthesis-in"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors duration-200"
              >
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenSourceLicense;