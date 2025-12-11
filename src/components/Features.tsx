import { FileText, MessageSquare, Newspaper, Briefcase } from 'lucide-react';

export function Features() {
  const features = [
    {
      id: 'schemes',
      icon: FileText,
      title: 'Schemes',
      subtitle: 'Discover & Apply',
      description: 'Browse through central and state government schemes. Get personalized recommendations based on your profile, age, income, and location. Understand eligibility criteria in simple language.',
      benefits: [
        'Personalized scheme recommendations',
        'Simple eligibility checker',
        'Application status tracking',
        'Document checklist & reminders',
      ],
      color: 'blue',
    },
    {
      id: 'civic-assist',
      icon: MessageSquare,
      title: 'Civic Assist',
      subtitle: 'AI-Powered Bot',
      description: 'Your intelligent assistant available 24/7 in your local language. Ask questions about schemes, get help with applications, or understand complex government processes through simple conversations.',
      benefits: [
        'Voice & chat support in 22 languages',
        'Natural, conversational interface',
        'Instant answers to scheme queries',
        'Guided application walkthrough',
      ],
      color: 'purple',
    },
    {
      id: 'feed',
      icon: Newspaper,
      title: 'Feed',
      subtitle: 'Quick News Updates',
      description: 'Stay informed with bite-sized news cards. Each update is limited to 100 words or 30 seconds of reading, focused exclusively on government schemes, jobs, and welfare trends.',
      benefits: [
        'Short, focused news cards (100 words)',
        'Government schemes & welfare updates',
        'New job posting alerts',
        'Policy changes & reform news',
      ],
      color: 'green',
    },
    {
      id: 'jobs',
      icon: Briefcase,
      title: 'Jobs',
      subtitle: 'Government Opportunities',
      description: 'Never miss a government job opportunity again. Get real-time alerts for central and state government jobs, exam notifications, and application deadlines relevant to your profile.',
      benefits: [
        'Real-time job alerts',
        'Exam date notifications',
        'Application deadline reminders',
        'Eligibility-based filtering',
      ],
      color: 'orange',
    },
  ];

  const colorClasses = {
    blue: {
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      icon: 'bg-blue-100 text-blue-600',
      text: 'text-blue-600',
    },
    purple: {
      bg: 'bg-purple-50',
      border: 'border-purple-200',
      icon: 'bg-purple-100 text-purple-600',
      text: 'text-purple-600',
    },
    green: {
      bg: 'bg-green-50',
      border: 'border-green-200',
      icon: 'bg-green-100 text-green-600',
      text: 'text-green-600',
    },
    orange: {
      bg: 'bg-orange-50',
      border: 'border-orange-200',
      icon: 'bg-orange-100 text-orange-600',
      text: 'text-orange-600',
    },
  };

  return (
    <section id="features" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm mb-4">
            Features
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-6">
            Everything you need to access government support
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Four powerful features working together to empower every citizen.
          </p>
        </div>

        {/* Features Grid */}
        <div className="space-y-8">
          {features.map((feature, index) => {
            const colors = colorClasses[feature.color as keyof typeof colorClasses];
            return (
              <div
                key={feature.id}
                className={`${colors.bg} ${colors.border} border rounded-2xl p-6 md:p-10 hover:shadow-xl transition-shadow`}
              >
                <div className="grid md:grid-cols-2 gap-8 items-start">
                  {/* Left: Icon & Title */}
                  <div>
                    <div className={`w-16 h-16 ${colors.icon} rounded-xl flex items-center justify-center mb-6`}>
                      <feature.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-3xl text-gray-900 mb-2">{feature.title}</h3>
                    <p className={`text-lg ${colors.text} mb-4`}>{feature.subtitle}</p>
                    <p className="text-gray-700 text-lg">{feature.description}</p>
                  </div>

                  {/* Right: Benefits */}
                  <div>
                    <h4 className="text-xl text-gray-900 mb-4">Key Benefits</h4>
                    <ul className="space-y-3">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className={`${colors.text} mt-1`}>✓</span>
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
