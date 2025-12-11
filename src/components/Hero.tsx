import { ArrowRight } from 'lucide-react';
import bannerImage from 'figma:asset/ea3ac30f8d22a16fb1a80daeee0d2f88348a76e5.png';

export function Hero() {
  const scrollToWaitlist = () => {
    const element = document.getElementById('waitlist');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8">
            <div className="inline-block px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm">
              Launching Soon 🚀
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-tight">
              Empowering every citizen.
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700">
              Schemes. Jobs. News. One Platform.
            </p>
            
            <p className="text-lg text-gray-600 max-w-xl">
              Your digital assistant for government schemes, welfare benefits, jobs, and updates - available in your local language.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToWaitlist}
                className="px-8 py-4 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors flex items-center justify-center gap-2 group"
              >
                Join the Waitlist
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById('solution');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-4 bg-white text-orange-600 border-2 border-orange-600 rounded-lg hover:bg-orange-50 transition-colors"
              >
                Learn More
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div>
                <div className="text-2xl md:text-3xl text-orange-600">80Cr+</div>
                <div className="text-sm text-gray-600">Digital Users</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl text-green-600">22</div>
                <div className="text-sm text-gray-600">Languages</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl text-blue-600">50Cr+</div>
                <div className="text-sm text-gray-600">Potential Users</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800">
              <img
                src={bannerImage}
                alt="CivicOne - Digital India Platform"
                className="w-full h-auto"
              />
            </div>
            {/* Floating Cards */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg hidden md:block">
              <div className="text-sm text-gray-600">Available in</div>
              <div className="text-lg text-gray-900">Hindi, Telugu, Tamil & more</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}