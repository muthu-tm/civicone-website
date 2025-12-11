import { Smartphone, Brain, Globe, Lightbulb } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Solution() {
  const solutions = [
    {
      icon: Smartphone,
      title: 'Mobile-First Platform',
      description: 'Designed for smartphones, accessible to 80 crore+ users across India',
    },
    {
      icon: Lightbulb,
      title: 'Scheme Discovery',
      description: 'Central and state schemes, personalized for your eligibility',
    },
    {
      icon: Brain,
      title: 'AI Assistant',
      description: 'Conversational AI in your local language to find and guide you through applications',
    },
    {
      icon: Globe,
      title: 'Vernacular Support',
      description: 'Available in 22 languages for true inclusivity',
    },
  ];

  return (
    <section id="solution" className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm mb-4">
            Our Solution
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-6">
            A mobile-first platform built for every citizen
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            CivicOne bridges the gap between government benefits and citizens with an intelligent, accessible, and inclusive platform.
          </p>
        </div>

        {/* Solution Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12 md:mb-16">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 hover:shadow-xl transition-all border border-blue-100 hover:border-blue-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6">
                <solution.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl text-gray-900 mb-3">{solution.title}</h3>
              <p className="text-gray-600 text-lg">{solution.description}</p>
            </div>
          ))}
        </div>

        {/* Visual Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl text-gray-900">
              Everything you need in one place
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-green-500 text-xl mt-1">✓</span>
                <div>
                  <div className="text-gray-900">Short News Cards</div>
                  <div className="text-gray-600 text-sm">100 words / 30 sec read focused on schemes, jobs & welfare</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 text-xl mt-1">✓</span>
                <div>
                  <div className="text-gray-900">Personalized Scheme Finder</div>
                  <div className="text-gray-600 text-sm">Discover schemes you're eligible for based on your profile</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 text-xl mt-1">✓</span>
                <div>
                  <div className="text-gray-900">Government Job Alerts</div>
                  <div className="text-gray-600 text-sm">Real-time notifications for relevant job opportunities</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 text-xl mt-1">✓</span>
                <div>
                  <div className="text-gray-900">Guided Application Help</div>
                  <div className="text-gray-600 text-sm">Step-by-step assistance through complex application processes</div>
                </div>
              </li>
            </ul>
          </div>
          <div className="relative flex justify-center">
            <div className="relative max-w-sm">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1669850850090-54237ab4a4a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBzY3JlZW4lMjB1aXxlbnwxfHx8fDE3NjU0NTE3ODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Mobile App Screen"
                className="w-full h-auto rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}