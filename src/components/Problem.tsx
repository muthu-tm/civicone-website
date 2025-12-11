import { AlertCircle, BookX, Globe, MapPin } from 'lucide-react';

export function Problem() {
  const problems = [
    {
      icon: AlertCircle,
      title: 'Awareness Gap',
      description: 'Only 10-15% of eligible citizens know about available schemes',
      stat: '140Cr+ people, minimal awareness',
    },
    {
      icon: BookX,
      title: 'Confusing Process',
      description: 'Application complexity and scattered information make it difficult to apply',
      stat: 'Multiple portals, no guidance',
    },
    {
      icon: MapPin,
      title: 'Rural Challenges',
      description: 'Rural India struggles with access to information and understanding eligibility',
      stat: '40Cr+ rural users underserved',
    },
    {
      icon: Globe,
      title: 'Language Barriers',
      description: 'Vernacular users face difficulties with web-first, English-centric platforms',
      stat: 'Limited vernacular support',
    },
  ];

  return (
    <section id="problem" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-block px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm mb-4">
            The Problem
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-6">
            India has 140+ crore people, but...
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Despite numerous government schemes, the vast majority of citizens remain unaware and unable to access the benefits they're entitled to.
          </p>
        </div>

        {/* Problem Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow border border-gray-100"
            >
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <problem.icon className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl text-gray-900 mb-2">{problem.title}</h3>
              <p className="text-gray-600 mb-4">{problem.description}</p>
              <div className="text-sm text-red-600">{problem.stat}</div>
            </div>
          ))}
        </div>

        {/* Existing Platforms Issue */}
        <div className="mt-12 md:mt-16 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl text-gray-900 mb-6">
            Existing Platforms Fall Short
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg text-gray-900 mb-3">MyScheme.gov.in & Others</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">✗</span>
                  <span>Web-first, not mobile-first</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">✗</span>
                  <span>Limited personalization</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">✗</span>
                  <span>Basic chatbot, not deeply conversational</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">✗</span>
                  <span>Weak vernacular support</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg text-gray-900 mb-3">The Result</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Application integration varies (many external redirects)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Difficult for rural users to navigate</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>No guidance through complex processes</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Conclusion */}
        <div className="mt-8 text-center">
          <p className="text-lg md:text-xl text-gray-700">
            <span className="text-blue-600">✔</span> The problem is{' '}
            <span className="text-blue-600">real, large, underserved</span>, and{' '}
            <span className="text-blue-600">socially impactful</span>.
          </p>
        </div>
      </div>
    </section>
  );
}
