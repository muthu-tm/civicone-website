import { useState } from 'react';
import { Mail, CheckCircle, Sparkles } from 'lucide-react';

export function Waitlist() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Mock subscription
      console.log('Waitlist subscription:', email);
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 4000);
    }
  };

  return (
    <section id="waitlist" className="py-16 md:py-24 bg-gradient-to-br from-orange-600 via-white to-green-600 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-orange-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-600 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm mb-6 text-orange-700">
            <Sparkles className="w-4 h-4" />
            <span>Be Among the First</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 text-gray-900">
            Join the waitlist today
          </h2>

          <p className="text-lg md:text-xl text-gray-700 mb-8 md:mb-12 max-w-2xl mx-auto">
            Be the first to know when CivicOne launches. Get early access to features that will transform how you interact with government schemes and opportunities.
          </p>

          {/* Subscription Form */}
          {subscribed ? (
            <div className="bg-white/90 backdrop-blur-sm border-2 border-green-200 rounded-2xl p-8 max-w-md mx-auto">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl text-gray-900 mb-2">You're on the list!</h3>
              <p className="text-gray-600">
                We'll notify you as soon as CivicOne launches. Thank you for believing in our mission!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1 relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full pl-12 pr-4 py-4 bg-white text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder:text-gray-500 border-2 border-gray-200"
                  />
                </div>
                <button
                  type="submit"
                  className="px-8 py-4 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors whitespace-nowrap"
                >
                  Join Waitlist
                </button>
              </div>
              <p className="text-sm text-gray-600 mt-4">
                No spam. We'll only send you important updates about CivicOne.
              </p>
            </form>
          )}

          {/* Benefits */}
          <div className="grid sm:grid-cols-3 gap-6 mt-12 md:mt-16">
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 border-2 border-gray-100">
              <div className="text-3xl mb-2">🎯</div>
              <h4 className="text-lg text-gray-900 mb-2">Early Access</h4>
              <p className="text-sm text-gray-600">Get priority access when we launch</p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 border-2 border-gray-100">
              <div className="text-3xl mb-2">🎁</div>
              <h4 className="text-lg text-gray-900 mb-2">Exclusive Benefits</h4>
              <p className="text-sm text-gray-600">Special perks for early adopters</p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 border-2 border-gray-100">
              <div className="text-3xl mb-2">💬</div>
              <h4 className="text-lg text-gray-900 mb-2">Shape the Product</h4>
              <p className="text-sm text-gray-600">Your feedback will help us build</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}