import React from 'react';
import { Shield, Eye, Lock, Users, Mail, Calendar } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  const lastUpdated = '2024-12-15';

  const sections = [
    {
      id: 'information-collection',
      title: 'Information We Collect',
      icon: Eye,
      content: [
        {
          subtitle: 'Personal Information',
          text: 'When you contact us through our website forms, subscribe to our newsletter, or engage with our services, we may collect personal information such as your name, email address, phone number, and any message content you provide.'
        },
        {
          subtitle: 'Usage Data',
          text: 'We automatically collect certain information about your device and how you interact with our website, including IP address, browser type, operating system, referring URLs, and pages visited.'
        },
        {
          subtitle: 'Cookies and Tracking',
          text: 'We use cookies and similar tracking technologies to enhance your browsing experience, remember your preferences (such as theme settings), and analyze website traffic.'
        }
      ]
    },
    {
      id: 'information-use',
      title: 'How We Use Your Information',
      icon: Users,
      content: [
        {
          subtitle: 'Communication',
          text: 'We use your contact information to respond to your inquiries, send newsletters (if subscribed), and provide updates about our open-source projects and initiatives.'
        },
        {
          subtitle: 'Website Improvement',
          text: 'Usage data helps us understand how visitors interact with our website, allowing us to improve functionality, content, and user experience.'
        },
        {
          subtitle: 'Legal Compliance',
          text: 'We may use your information to comply with applicable laws, regulations, legal processes, or governmental requests.'
        }
      ]
    },
    {
      id: 'information-sharing',
      title: 'Information Sharing and Disclosure',
      icon: Shield,
      content: [
        {
          subtitle: 'Third-Party Services',
          text: 'We may use third-party services for website analytics, email delivery, and hosting. These services may have access to your information only to perform specific tasks on our behalf and are obligated to protect your information.'
        },
        {
          subtitle: 'Open Source Contributions',
          text: 'If you contribute to our open-source projects, your contributions (including name and email) may be publicly visible in project repositories and commit histories.'
        },
        {
          subtitle: 'Legal Requirements',
          text: 'We may disclose your information if required by law, court order, or governmental authority, or to protect our rights, property, or safety.'
        }
      ]
    },
    {
      id: 'data-security',
      title: 'Data Security',
      icon: Lock,
      content: [
        {
          subtitle: 'Security Measures',
          text: 'We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.'
        },
        {
          subtitle: 'Data Retention',
          text: 'We retain your personal information only for as long as necessary to fulfill the purposes outlined in this privacy policy, unless a longer retention period is required by law.'
        },
        {
          subtitle: 'Breach Notification',
          text: 'In the event of a data breach that may compromise your personal information, we will notify affected users and relevant authorities as required by applicable law.'
        }
      ]
    }
  ];

  const rights = [
    'Access and review your personal information',
    'Request correction of inaccurate information',
    'Request deletion of your personal information',
    'Object to processing of your personal information',
    'Request data portability',
    'Withdraw consent for data processing'
  ];

  return (
    <div className="min-h-screen pt-16 bg-white dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-blue-100 dark:bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
            <Shield className="text-blue-600 dark:text-blue-400" size={32} />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Your privacy is important to us. This policy explains how we collect, use, 
            and protect your information.
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
              Introduction
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Parenthesis India ("we," "our," or "us") is committed to protecting your privacy and 
              ensuring transparency in how we handle your personal information. This Privacy Policy 
              explains our practices regarding the collection, use, and disclosure of information 
              when you use our website and services.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              As an open-source initiative, we believe in transparency not just in our code, 
              but also in our data practices. This policy applies to all information collected 
              through our website, email communications, and interactions with our projects.
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

        {/* Your Rights */}
        <div className="mt-12">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Your Rights and Choices
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Depending on your location and applicable laws, you may have the following rights 
              regarding your personal information:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {rights.map((right, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 dark:text-gray-300">{right}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Cookies Policy */}
        <div className="mt-8">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Cookies and Tracking Technologies
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Essential Cookies
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  These cookies are necessary for the website to function properly, including 
                  theme preferences and basic functionality.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Analytics Cookies
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We use analytics cookies to understand how visitors interact with our website, 
                  helping us improve user experience and content.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Managing Cookies
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  You can control cookies through your browser settings. However, disabling 
                  certain cookies may affect website functionality.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* International Transfers */}
        <div className="mt-8">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              International Data Transfers
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              As an Indian organization, we primarily process data within India. However, 
              some of our service providers may be located in other countries. When we 
              transfer your personal information internationally, we ensure appropriate 
              safeguards are in place.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              We comply with applicable data protection laws, including the Information 
              Technology Act, 2000, and the Personal Data Protection Bill (when enacted).
            </p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-8">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-2xl text-white">
            <div className="flex items-center space-x-4 mb-4">
              <Mail className="text-white" size={24} />
              <h2 className="text-2xl font-bold">Questions About This Policy?</h2>
            </div>
            <p className="text-blue-100 mb-6">
              If you have any questions about this Privacy Policy, want to exercise your rights, 
              or have concerns about how we handle your personal information, please contact us.
            </p>
            <div className="space-y-2">
              <p className="text-blue-100">
                <strong>Privacy Email:</strong> privacy@parenthesisindia.com
              </p>
              <p className="text-blue-100">
                <strong>General Contact:</strong> sagar@parenthesisindia.com
              </p>
            </div>
          </div>
        </div>

        {/* Updates to Policy */}
        <div className="mt-8">
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 p-6 rounded-2xl">
            <h3 className="text-lg font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
              Updates to This Policy
            </h3>
            <p className="text-yellow-700 dark:text-yellow-300">
              We may update this Privacy Policy from time to time to reflect changes in our 
              practices or applicable laws. We will notify users of significant changes by 
              posting the updated policy on our website and updating the "Last Updated" date. 
              Your continued use of our services after such changes constitutes acceptance 
              of the updated policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;