import React from 'react';
import { ArrowLeft, Github, ExternalLink, Bot, MessageSquare, Globe, Brain, Zap, Users, CheckCircle, Star, GitFork } from 'lucide-react';
import { Link } from 'react-router-dom';

const TriptiPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Recommendations',
      description: 'Advanced machine learning algorithms provide personalized travel suggestions'
    },
    {
      icon: MessageSquare,
      title: 'Natural Language Processing',
      description: 'Understand and respond to complex travel queries in natural language'
    },
    {
      icon: Globe,
      title: 'Multi-Language Support',
      description: 'Communicate in multiple Indian languages and English'
    },
    {
      icon: Zap,
      title: 'Real-time Information',
      description: 'Access live data for flights, hotels, weather, and local attractions'
    },
    {
      icon: Users,
      title: 'Personalized Experience',
      description: 'Learn from user preferences to provide tailored recommendations'
    }
  ];

  const techStack = [
    'Python', 'OpenAI GPT', 'Rasa Framework', 'FastAPI', 'MongoDB', 
    'TensorFlow', 'NLTK', 'Docker', 'Redis', 'WebSocket'
  ];

  const stats = [
    { label: 'GitHub Stars', value: '320+', icon: Star },
    { label: 'Forks', value: '67', icon: GitFork },
    { label: 'Contributors', value: '8', icon: Users },
    { label: 'Languages', value: '5+', icon: Globe }
  ];

  const capabilities = [
    'Trip Planning & Itinerary Creation',
    'Hotel & Accommodation Booking',
    'Flight Search & Recommendations',
    'Local Attraction Suggestions',
    'Weather & Travel Alerts',
    'Budget Planning & Tracking',
    'Cultural & Language Assistance',
    'Emergency Support & Contacts'
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
      <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-gray-800 dark:to-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-green-100 dark:bg-green-900 p-3 rounded-lg">
                  <Bot className="text-green-600 dark:text-green-400" size={32} />
                </div>
                <div>
                  <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
                    TRIPTI AI
                  </h1>
                  <p className="text-xl text-green-600 dark:text-green-400 font-semibold">
                    AI Chatbot for Travel
                  </p>
                </div>
              </div>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                An intelligent travel assistant powered by advanced AI that helps users plan trips, 
                find accommodations, and get personalized travel recommendations. Built specifically 
                for the Indian travel ecosystem with multi-language support.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://github.com/sagarvedbairwa/tripti-ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
                >
                  <Github size={20} />
                  <span>View on GitHub</span>
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center space-x-2 border-2 border-gray-300 dark:border-gray-600 hover:border-green-600 dark:hover:border-green-400 text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
                >
                  <ExternalLink size={20} />
                  <span>Try Demo</span>
                </a>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="AI Travel Assistant"
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
                  <div className="bg-green-100 dark:bg-green-900 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <IconComponent className="text-green-600 dark:text-green-400" size={24} />
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
              AI-Powered Features
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Advanced artificial intelligence capabilities designed for modern travelers
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
                  <div className="bg-green-100 dark:bg-green-900 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="text-green-600 dark:text-green-400" size={24} />
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

      {/* Capabilities Section */}
      <div className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                What TRIPTI Can Do
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                TRIPTI AI is your comprehensive travel companion, capable of handling 
                everything from initial trip planning to on-ground assistance during your journey.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                {capabilities.map((capability, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="text-green-600 dark:text-green-400 flex-shrink-0" size={20} />
                    <span className="text-gray-700 dark:text-gray-300">{capability}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Travel Planning"
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
              AI Technology Stack
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Powered by cutting-edge AI and machine learning technologies
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

      {/* Demo Section */}
      <div className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-gray-800 dark:to-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Experience TRIPTI AI
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Try our intelligent travel assistant and see how AI can transform your travel planning experience
              </p>
              
              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 mb-8">
                <div className="text-left space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-full">
                      <Users className="text-blue-600 dark:text-blue-400" size={16} />
                    </div>
                    <div>
                      <p className="text-gray-800 dark:text-gray-200 font-medium">You:</p>
                      <p className="text-gray-600 dark:text-gray-300">"Plan a 3-day trip to Goa for a family of 4"</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="bg-green-100 dark:bg-green-900 p-2 rounded-full">
                      <Bot className="text-green-600 dark:text-green-400" size={16} />
                    </div>
                    <div>
                      <p className="text-gray-800 dark:text-gray-200 font-medium">TRIPTI:</p>
                      <p className="text-gray-600 dark:text-gray-300">
                        "I'd be happy to help! For a family of 4 in Goa, I recommend staying in North Goa near Calangute. 
                        Here's a detailed itinerary with family-friendly beaches, restaurants, and activities..."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#"
                  className="flex items-center justify-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
                >
                  <MessageSquare size={20} />
                  <span>Start Chatting</span>
                </a>
                <a
                  href="https://github.com/sagarvedbairwa/tripti-ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 border-2 border-gray-300 dark:border-gray-600 hover:border-green-600 dark:hover:border-green-400 text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
                >
                  <Github size={20} />
                  <span>View Source Code</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TriptiPage;