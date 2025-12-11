import { Mail, MessageCircle, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submission
    console.log('Contact form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      content: 'hello@civicone.in',
      description: 'Get in touch for partnerships or queries',
    },
    {
      icon: MessageCircle,
      title: 'Support',
      content: 'Coming Soon',
      description: 'Our support team will be available 24/7',
    },
    {
      icon: MapPin,
      title: 'Location',
      content: 'India',
      description: 'Building for Bharat, from Bharat',
    },
  ];

  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm mb-4">
            Contact Us
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-6">
            Get in touch
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Have questions? Want to partner with us? We'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left: Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl text-gray-900 mb-6">Let's connect</h3>
              <p className="text-gray-600 text-lg mb-8">
                Whether you're a potential partner, investor, or just someone who believes in our mission, we'd love to connect and discuss how we can work together to empower India's citizens.
              </p>
            </div>

            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <info.icon className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h4 className="text-lg text-gray-900 mb-1">{info.title}</h4>
                  <p className="text-orange-600 mb-1">{info.content}</p>
                  <p className="text-sm text-gray-600">{info.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Contact Form */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl text-gray-900 mb-6">Send us a message</h3>
            
            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="text-lg text-gray-900 mb-2">Message Sent!</h4>
                <p className="text-gray-600">We'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  >
                    <option value="">Select a subject</option>
                    <option value="partnership">Partnership Inquiry</option>
                    <option value="investment">Investment Opportunity</option>
                    <option value="feedback">Feedback</option>
                    <option value="general">General Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors flex items-center justify-center gap-2"
                >
                  Send Message
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}