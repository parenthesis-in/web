import React, { useState } from 'react';
import { Calendar, ArrowRight, BookOpen, TrendingUp, Users, Search, Tag, Clock } from 'lucide-react';

const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const blogPosts = [
    {
      id: 1,
      title: 'Building Distributed Payment Systems in India',
      excerpt: 'Exploring the challenges and solutions for creating robust payment gateways that serve millions of users across diverse network conditions and regulatory requirements.',
      content: `
        <p>India's digital payment landscape has evolved rapidly over the past decade, with UPI transactions alone crossing 10 billion monthly transactions. However, building a distributed payment system that can handle this scale while maintaining security and compliance presents unique challenges.</p>
        
        <h3>Key Challenges</h3>
        <p>When designing payment systems for the Indian market, we encounter several critical challenges:</p>
        <ul>
          <li><strong>Network Reliability:</strong> Varying internet connectivity across urban and rural areas</li>
          <li><strong>Regulatory Compliance:</strong> RBI guidelines and PCI DSS requirements</li>
          <li><strong>Scale:</strong> Handling millions of concurrent transactions</li>
          <li><strong>Security:</strong> Protecting against fraud while maintaining user experience</li>
        </ul>
        
        <h3>Our Approach with Asterisk</h3>
        <p>At Parenthesis India, we're building Asterisk as an open-source distributed payment gateway that addresses these challenges through:</p>
        <ul>
          <li>Microservices architecture for better scalability</li>
          <li>Multi-provider support for redundancy</li>
          <li>Real-time fraud detection using ML algorithms</li>
          <li>Comprehensive audit trails for compliance</li>
        </ul>
        
        <p>The system is designed to be cloud-native, supporting both traditional banking integrations and modern fintech APIs.</p>
      `,
      category: 'Finance Tech',
      readTime: '8 min read',
      date: '2024-12-15',
      author: 'Sagar Ved Bairwa',
      tags: ['Payments', 'Distributed Systems', 'Fintech', 'Open Source'],
      image: 'https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: true
    },
    {
      id: 2,
      title: 'Open Source AI: Making Intelligence Accessible',
      excerpt: 'How open-source AI frameworks are democratizing artificial intelligence and enabling startups to compete with tech giants in the Indian market.',
      content: `
        <p>The AI revolution is here, but access to advanced AI capabilities has traditionally been limited to large corporations with massive resources. Open-source AI is changing this landscape, making sophisticated AI tools available to everyone.</p>
        
        <h3>The Open Source Advantage</h3>
        <p>Open-source AI frameworks offer several key benefits:</p>
        <ul>
          <li><strong>Cost Efficiency:</strong> No licensing fees or vendor lock-in</li>
          <li><strong>Transparency:</strong> Full visibility into algorithms and decision-making</li>
          <li><strong>Customization:</strong> Ability to modify and extend functionality</li>
          <li><strong>Community Support:</strong> Large developer communities providing support</li>
        </ul>
        
        <h3>TRIPTI AI: A Case Study</h3>
        <p>Our TRIPTI AI project demonstrates how open-source AI can be leveraged to create intelligent travel assistants. By combining multiple open-source frameworks, we've built a system that:</p>
        <ul>
          <li>Understands natural language queries in multiple Indian languages</li>
          <li>Provides personalized travel recommendations</li>
          <li>Integrates with local service providers</li>
          <li>Learns from user interactions to improve over time</li>
        </ul>
      `,
      category: 'AI & ML',
      readTime: '6 min read',
      date: '2024-12-10',
      author: 'Sagar Ved Bairwa',
      tags: ['AI', 'Machine Learning', 'Open Source', 'Travel Tech'],
      image: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false
    },
    {
      id: 3,
      title: 'Microservices Architecture for Indian Startups',
      excerpt: 'A practical guide to implementing microservices architecture while managing costs and complexity for growing Indian businesses.',
      content: `
        <p>Microservices architecture has become the gold standard for scalable applications, but implementing it correctly requires careful planning, especially for resource-conscious Indian startups.</p>
        
        <h3>When to Choose Microservices</h3>
        <p>Microservices aren't always the right choice. Consider them when:</p>
        <ul>
          <li>Your team has grown beyond 8-10 developers</li>
          <li>Different parts of your application have different scaling requirements</li>
          <li>You need to use different technologies for different services</li>
          <li>You want to enable independent deployments</li>
        </ul>
        
        <h3>Cost-Effective Implementation</h3>
        <p>For Indian startups, cost is always a concern. Here's how to implement microservices cost-effectively:</p>
        <ul>
          <li><strong>Start Small:</strong> Begin with a modular monolith and extract services gradually</li>
          <li><strong>Use Open Source:</strong> Leverage tools like Docker, Kubernetes, and service meshes</li>
          <li><strong>Cloud-Native:</strong> Use managed services to reduce operational overhead</li>
          <li><strong>Monitoring:</strong> Implement comprehensive monitoring from day one</li>
        </ul>
        
        <h3>DataBridge: Our Implementation</h3>
        <p>DataBridge showcases how we've implemented microservices for identity and access management while keeping costs manageable through smart architectural decisions.</p>
      `,
      category: 'Architecture',
      readTime: '10 min read',
      date: '2024-12-05',
      author: 'Sagar Ved Bairwa',
      tags: ['Microservices', 'Architecture', 'Startups', 'Cost Optimization'],
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false
    },
    {
      id: 4,
      title: 'The Future of Chatbots in Indian Businesses',
      excerpt: 'Exploring how conversational AI is transforming customer service and business operations across various industries in India.',
      content: `
        <p>Chatbots have evolved from simple rule-based systems to sophisticated AI-powered assistants that can handle complex customer interactions. In the Indian market, this evolution is particularly significant.</p>
        
        <h3>Market Opportunity</h3>
        <p>The Indian chatbot market is experiencing rapid growth due to:</p>
        <ul>
          <li>Increasing smartphone penetration</li>
          <li>Growing comfort with digital interactions</li>
          <li>Need for 24/7 customer support</li>
          <li>Cost pressures on businesses</li>
        </ul>
        
        <h3>Parenthesis CaaS: Our Vision</h3>
        <p>Our upcoming Chatbot as a Service platform aims to democratize access to advanced conversational AI by providing:</p>
        <ul>
          <li>Easy integration with existing systems</li>
          <li>Multi-language support including regional Indian languages</li>
          <li>Industry-specific templates and workflows</li>
          <li>Comprehensive analytics and insights</li>
        </ul>
      `,
      category: 'AI & Business',
      readTime: '7 min read',
      date: '2024-11-28',
      author: 'Sagar Ved Bairwa',
      tags: ['Chatbots', 'AI', 'Customer Service', 'Business'],
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false
    }
  ];

  const categories = [
    { id: 'all', name: 'All Posts', count: blogPosts.length },
    { id: 'finance-tech', name: 'Finance Tech', count: blogPosts.filter(p => p.category === 'Finance Tech').length },
    { id: 'ai-ml', name: 'AI & ML', count: blogPosts.filter(p => p.category.includes('AI')).length },
    { id: 'architecture', name: 'Architecture', count: blogPosts.filter(p => p.category === 'Architecture').length }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || 
                           post.category.toLowerCase().replace(/\s+/g, '-') === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen pt-16 bg-white dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Insights & Blog
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Thoughts on open-source development, system architecture, fintech, and the future 
            of technology in India
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filters */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              />
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>

        {/* Featured Post */}
        {featuredPost && selectedCategory === 'all' && !searchTerm && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Featured Article</h2>
            <article className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium">
                      {featuredPost.category}
                    </span>
                    <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                      <Calendar size={14} className="mr-1" />
                      {new Date(featuredPost.date).toLocaleDateString()}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {featuredPost.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        By {featuredPost.author}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {featuredPost.readTime}
                      </span>
                    </div>
                    <button className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200">
                      <span>Read More</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </article>
          </div>
        )}

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-200 dark:border-gray-700 group"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-3">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                  <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                    <Clock size={14} className="mr-1" />
                    {post.readTime}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="flex items-center space-x-1 px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded text-xs"
                    >
                      <Tag size={10} />
                      <span>{tag}</span>
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                    <Calendar size={14} className="mr-1" />
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                  <button className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200">
                    <span>Read</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* No Results */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="mx-auto text-gray-400 mb-4" size={48} />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No articles found
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Try adjusting your search terms or category filter.
            </p>
          </div>
        )}

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-2xl text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Get notified when we publish new insights about open-source development, 
            system architecture, and tech innovations in India.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/20"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;