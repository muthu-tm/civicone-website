import { Target, Sparkles } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import placesCollageImage from 'figma:asset/341594a9c300cc81d935a0e13b42b05dba4ee8a4.png';

export function Vision() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Images */}
          <div className="relative order-2 md:order-1 space-y-6">
            {/* First Image */}
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1667849521034-0086c275e6da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYSUyMGdhdGUlMjBtb251bWVudHxlbnwxfHx8fDE3NjU0NTE3ODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="India Gate Monument"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-900/30 to-transparent rounded-2xl"></div>
            </div>
            
            {/* Second Image - Collage */}
            <div className="relative">
              <img
                src={placesCollageImage}
                alt="Popular Places of India - Temples, Taj Mahal, and Cultural Sites"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-2xl"></div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-6 md:space-y-8 order-1 md:order-2">
            <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm">
              <Sparkles className="w-4 h-4 inline mr-1" />
              Our Vision
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl text-gray-900">
              Become India's digital assistant for all government support
            </h2>

            <p className="text-lg md:text-xl text-gray-600">
              We envision a future where every citizen, regardless of their location, language, or digital literacy, has seamless access to government schemes, benefits, jobs, and reforms.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg">
                <Target className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-lg text-gray-900 mb-1">Universal Access</h4>
                  <p className="text-gray-600">
                    Breaking down barriers of language, literacy, and technology to reach every corner of India.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg">
                <Target className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-lg text-gray-900 mb-1">Empowered Citizens</h4>
                  <p className="text-gray-600">
                    Helping millions claim their rightful benefits and access opportunities that transform lives.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-orange-50 rounded-lg">
                <Target className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-lg text-gray-900 mb-1">Digital India</h4>
                  <p className="text-gray-600">
                    Contributing to a more inclusive and digitally empowered India through technology.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}