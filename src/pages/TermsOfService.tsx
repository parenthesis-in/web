import React from 'react';
import { Scale, FileText, Shield, Users, AlertTriangle, Calendar } from 'lucide-react';

const TermsOfService: React.FC = () => {
  const lastUpdated = '2024-12-15';

  const sections = [
    {
      id: 'acceptance',
      title: 'Acceptance of Terms',
      icon: FileText,
      content: [
        {
          subtitle: 'Agreement to Terms',
          text: 'By accessing and using the Parenthesis India website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.'
        },
        {
          subtitle: 'Modifications',
          text: 'We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on our website. Your continued use of our services after any such changes constitutes your acceptance of the new terms.'
        }
      ]
    },
    {
      id: 'services',
      title: 'Our Services',
      icon: Shield,
      content: [
        {
          subtitle: 'Open Source Projects',
          text: 'Parenthesis India provides open-source software projects including payment gateways, data integration platforms, AI services, and chatbot solutions. All our projects are made available under their respective open-source licenses.'
        },
        {
          subtitle: 'Community Platform',
          text: 'We provide a platform for developers to collaborate, contribute to open-source projects, and share knowledge. This includes access to documentation, forums, and development resources.'
        },
        {
          subtitle: 'Service Availability',
          text: 'While we strive to maintain high availability, we do not guarantee uninterrupted access to our services. We may temporarily suspend services for maintenance, updates, or other operational reasons.'
        }
      ]
    },
    {
      id: 'user-responsibilities',
      title: 'User Responsibilities',
      icon: Users,
      content: [
        {
          subtitle: 'Acceptable Use',
          text: 'You agree to use our services only for lawful purposes and in accordance with these terms. You must not use our services to transmit harmful, offensive, or illegal content, or to violate any applicable laws or regulations.'
        },
        {
          subtitle: 'Account Security',
          text: 'If you create an account or contribute to our projects, you are responsible for maintaining the security of your account credentials and for all activities that occur under your account.'
        },
        {
          subtitle: 'Contribution Guidelines',
          text: 'When contributing to our open-source projects, you must follow our community guidelines, coding standards, and licensing requirements. All contributions must be your original work or properly attributed.'
        }
      ]
    },
    {
      id: 'intellectual-property',
      title: 'Intellectual Property',
      icon: Scale,
      content: [
        {
          subtitle: 'Open Source Licenses',
          text: 'Our open-source projects are licensed under various open-source licenses (MIT, Apache 2.0, GPL, etc.). Each project clearly specifies its license terms, which govern your use, modification, and distribution of the software.'
        },
        {
          subtitle: 'Website Content',
          text: 'The content on our website, including text, graphics, logos, and documentation, is owned by Parenthesis India and is protected by copyright and other intellectual property laws.'
        },
        {
          subtitle: 'User Contributions',
          text: 'By contributing code, documentation, or other content to our projects, you grant us a perpetual, worldwide, non-exclusive license to use, modify, and distribute your contributions under the applicable open-source license.'
        }
      ]
    }
  ];

  const limitations = [
    'Services are provided "as is" without warranties of any kind',
    'We are not liable for any indirect, incidental, or consequential damages',
    'Our liability is limited to the maximum extent permitted by law',
    'Users are responsible for their own use of our services and projects',
    'We do not guarantee the accuracy or completeness of information',
    'Third-party services and links are not under our control'
  ];

  return (
    <div className="min-h-screen pt-16 bg-white dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-blue-100 dark:bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
            <Scale className="text-blue-600 dark:text-blue-400" size={32} />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Terms of Service
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Please read these terms carefully before using our services and contributing to our projects.
          </p>
          <div className="flex items-center justify-center space-x-2 mt-6 text-gray-500 dark:text-gray-400">
            <Calendar size={16} />
            <span>Last updated: {new Date(lastUpdated).toLocaleDateString()}</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <div className="mb-12">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Welcome to Parenthesis India
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              These Terms of Service ("Terms") govern your use of the Parenthesis India website, 
              services, and open-source projects. By using our services, you agree to these terms 
              and our commitment to open-source development and community collaboration.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              As an open-source initiative, we believe in transparency, community participation, 
              and shared knowledge. These terms reflect our values while protecting both our 
              community and our projects.
            </p>
          </div>
        </div>

        {/* Main Sections */}
        <div className="space-y-8">
          {sections.map((section) => {
            const IconComponent = section.icon;
            return (
              <div
                key={section.id}
                id={section.id}
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-lg">
                    <IconComponent className="text-blue-600 dark:text-blue-400" size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {section.title}
                  </h2>
                </div>
                
                <div className="space-y-6">
                  {section.content.map((item, index) => (
                    <div key={index}>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {item.subtitle}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Limitations and Disclaimers */}
        <div className="mt-12">
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 p-8 rounded-2xl">
            <div className="flex items-center space-x-3 mb-6">
              <AlertTriangle className="text-yellow-600 dark:text-yellow-400" size={24} />
              <h2 className="text-2xl font-bold text-yellow-800 dark:text-yellow-200">
                Limitations and Disclaimers
              </h2>
            </div>
            <p className="text-yellow-700 dark:text-yellow-300 mb-6">
              Please be aware of the following limitations and disclaimers regarding our services:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {limitations.map((limitation, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-yellow-600 dark:bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-yellow-700 dark:text-yellow-300 text-sm">{limitation}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Governing Law */}
        <div className="mt-8">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Governing Law and Jurisdiction
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              These Terms of Service are governed by and construed in accordance with the laws of India. 
              Any disputes arising from these terms or your use of our services will be subject to the 
              exclusive jurisdiction of the courts in India.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              We comply with applicable Indian laws, including the Information Technology Act, 2000, 
              and other relevant regulations governing digital services and open-source software.
            </p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-8">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-2xl text-white">
            <h2 className="text-2xl font-bold mb-4">Questions About These Terms?</h2>
            <p className="text-blue-100 mb-6">
              If you have any questions about these Terms of Service or need clarification 
              about any provisions, please don't hesitate to contact us.
            </p>
            <div className="space-y-2">
              <p className="text-blue-100">
                <strong>Email:</strong> {import.meta.env.VITE_LEGAL_EMAIL || 'parenthesis-in@gmail.com'}
              </p>
              <p className="text-blue-100">
                <strong>General Contact:</strong> {import.meta.env.VITE_CONTACT_EMAIL || 'parenthesis-in@gmail.com'}
              </p>
              <p className="text-blue-100">
                <strong>Address:</strong> India
              </p>
            </div>
          </div>
        </div>

        {/* Effective Date */}
        <div className="mt-8">
          <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 rounded-2xl text-center">
            <p className="text-gray-600 dark:text-gray-300">
              These Terms of Service are effective as of {new Date(lastUpdated).toLocaleDateString()} 
              and will remain in effect except with respect to any changes in their provisions in the future, 
              which will be in effect immediately after being posted on this page.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;