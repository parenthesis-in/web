import React from 'react';
import { Calendar, ArrowRight, BookOpen, TrendingUp, Users } from 'lucide-react';

const Blog: React.FC = () => {
  const blogPosts = [
    {
      title: 'Building Distributed Payment Systems in India',
      excerpt: 'Exploring the challenges and solutions for creating robust payment gateways that serve millions of users across diverse network conditions.',
      category: 'Finance Tech',
      readTime: '8 min read',
      date: 'Coming Soon',
      image: 'https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Open Source AI: Making Intelligence Accessible',
      excerpt: 'How open-source AI frameworks are democratizing artificial intelligence and enabling startups to compete with tech giants.',
      category: 'AI & ML',
      readTime: '6 min read',
      date: 'Coming Soon',
      image: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Microservices Architecture for Indian Startups',
      excerpt: 'A practical guide to implementing microservices architecture while managing costs and complexity for growing Indian businesses.',
      category: 'Architecture',
      readTime: '10 min read',
      date: 'Coming Soon',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const topics = [
    { name: 'Open Source', icon: BookOpen, count: 12 },
    { name: 'Fintech', icon: TrendingUp, count: 8 },
    { name: 'AI & Machine Learning', icon: Users, count: 15 },
    { name: 'System Architecture', icon: BookOpen, count: 10 }
  ];

  return (
    <section id="blog" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Insights & Blog
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Thoughts on open-source development, system architecture, fintech, and the future 
            of technology in India
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Featured Posts */}
            <div className="space-y-8">
              {blogPosts.map((post, index) => (
                <article
                  key={post.title}
                  className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-200 dark:border-gray-700 group"
                >
                  <div className="md:flex">
                    {/* Image */}
                    <div className="md:w-1/3">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Content */}
                    <div className="md:w-2/3 p-6">
                      <div className="flex items-center space-x-4 mb-3">
                        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium">
                          {post.category}
                        </span>
                        <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                          <Calendar size={14} className="mr-1" />
                          {post.date}
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                        {post.title}
                      </h3>

                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {post.readTime}
                        </span>
                        <button className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200">
                          <span>Read More</span>
                          <ArrowRight size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Topics */}
            <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Popular Topics
              </h3>
              <div className="space-y-3">
                {topics.map((topic) => {
                  const IconComponent = topic.icon;
                  return (
                    <div
                      key={topic.name}
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200 cursor-pointer"
                    >
                      <div className="flex items-center space-x-3">
                        <IconComponent className="text-blue-600 dark:text-blue-400" size={16} />
                        <span className="text-gray-700 dark:text-gray-300">{topic.name}</span>
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full">
                        {topic.count}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-6 rounded-2xl text-white">
              <h3 className="text-xl font-bold mb-3">Stay Updated</h3>
              <p className="text-blue-100 mb-4">
                Get notified when we publish new insights about open-source development and tech innovations.
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-2 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/20"
                />
                <button className="w-full bg-white text-blue-600 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;