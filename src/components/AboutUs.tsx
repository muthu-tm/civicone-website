import { Heart, Users, Zap } from 'lucide-react';
import diverseWomenImage from 'figma:asset/cc89b53dd8548aa7e6b68caa808164c464ffe9c9.png';

export function AboutUs() {
  const values = [
    {
      icon: Heart,
      title: 'Social Impact First',
      description: 'We are driven by the mission to empower every citizen with access to their rights and opportunities.',
    },
    {
      icon: Users,
      title: 'Inclusive by Design',
      description: 'Built for everyone - from tech-savvy urban users to first-time smartphone users in rural areas.',
    },
    {
      icon: Zap,
      title: 'Innovation & Simplicity',
      description: 'Leveraging AI and mobile-first design to make complex processes simple and accessible.',
    },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-block px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm mb-4">
            About Us
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-6">
            Building bridges between citizens and opportunities
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            CivicOne was born from a simple observation: millions of Indians miss out on life-changing opportunities simply because they don't know these opportunities exist.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="max-w-4xl mx-auto mb-12 md:mb-16 bg-gradient-to-br from-orange-600 to-green-600 rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl md:text-3xl mb-4">Our Mission</h3>
          <p className="text-lg md:text-xl text-white/90">
            To democratize access to government schemes, jobs, and benefits by creating a mobile-first platform that speaks your language, understands your needs, and guides you every step of the way.
          </p>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                <value.icon className="w-7 h-7 text-orange-600" />
              </div>
              <h3 className="text-xl text-gray-900 mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Story */}
        <div className="mt-12 md:mt-16 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm">
            <h3 className="text-2xl md:text-3xl text-gray-900 mb-6">Why CivicOne?</h3>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4 text-gray-700 text-lg">
                <p>
                  Despite India's rapid digital transformation, a vast awareness gap remains. Thousands of government schemes exist, but only a fraction of eligible citizens know about them or can successfully apply.
                </p>
                <p>
                  We're changing that. CivicOne combines the power of AI, mobile technology, and vernacular language support to create a platform that truly serves every Indian - from metropolitan cities to remote villages.
                </p>
                <p>
                  Our team is committed to social impact through technology, and we believe that access to information is the first step toward equality and empowerment.
                </p>
              </div>
              <div className="relative">
                <img
                  src={diverseWomenImage}
                  alt="Indian Community"
                  className="w-full h-auto rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}