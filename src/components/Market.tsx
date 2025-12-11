import { Users, Smartphone, Briefcase, Target } from 'lucide-react';

export function Market() {
  const stats = [
    {
      icon: Smartphone,
      number: '80 Cr+',
      label: 'Smartphone Users',
      description: 'Total addressable mobile users in India',
    },
    {
      icon: Users,
      number: '40 Cr+',
      label: 'Rural Users',
      description: 'Underserved rural population with mobile access',
    },
    {
      icon: Briefcase,
      number: '20 Cr+',
      label: 'Job Aspirants',
      description: 'Active government job seekers',
    },
    {
      icon: Target,
      number: '80%',
      label: 'Scheme Eligible',
      description: 'Population eligible for various government schemes',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-orange-600 via-white to-green-600 text-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-block px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm mb-4">
            Our Reach
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6">
            Connecting with millions of Indians
          </h2>
          <p className="text-lg md:text-xl text-gray-700">
            We're building CivicOne to serve and empower every segment of India's diverse population.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 hover:shadow-xl transition-all border-2 border-gray-100"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-green-100 rounded-lg flex items-center justify-center mb-4">
                <stat.icon className="w-6 h-6 text-orange-600" />
              </div>
              <div className="text-3xl md:text-4xl text-orange-600 mb-2">{stat.number}</div>
              <div className="text-lg mb-2 text-gray-900">{stat.label}</div>
              <div className="text-sm text-gray-600">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* TAM */}
        <div className="mt-12 md:mt-16 text-center bg-gradient-to-br from-orange-600 to-green-600 rounded-2xl p-8 md:p-12 border-2 border-orange-200 text-white">
          <div className="text-5xl md:text-6xl lg:text-7xl mb-4">50 Cr+</div>
          <div className="text-2xl md:text-3xl mb-4">Indians We Aim to Serve</div>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            The intersection of smartphone penetration, scheme eligibility, and language accessibility creates an unprecedented opportunity to serve India's digital-first generation.
          </p>
        </div>
      </div>
    </section>
  );
}