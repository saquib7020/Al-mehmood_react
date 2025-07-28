import React from 'react';
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
  Mail
} from 'lucide-react';
import './SocialMediaSection.css'; // Contains fadeInUp animation

const SOCIAL_LINKS = [
  {
    name: 'Facebook',
    href: '#',
    icon: Facebook,
    color: 'hover:bg-blue-600',
    followers: '2.5K'
  },
  // {
  //   name: 'Twitter',
  //   href: '#',
  //   icon: Twitter,
  //   color: 'hover:bg-sky-500',
  //   followers: '1.8K'
  // },
  {
    name: 'Instagram',
    href: '#',
    icon: Instagram,
    color: 'hover:bg-pink-600',
    followers: '3.2K'
  },
  {
    name: 'YouTube',
    href: '#',
    icon: Youtube,
    color: 'hover:bg-red-600',
    followers: '950'
  },
  // {
  //   name: 'LinkedIn',
  //   href: '#',
  //   icon: Linkedin,
  //   color: 'hover:bg-blue-700',
  //   followers: '680'
  // },
  // {
  //   name: 'Newsletter',
  //   href: '#',
  //   icon: Mail,
  //   color: 'hover:bg-green-600',
  //   followers: '1.2K'
  // }
];

const SocialMediaSection = () => {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-purple-700 to-indigo-800">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23ffffff&quot; fill-opacity=&quot;0.05&quot;%3E%3Ccircle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;2&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-16 w-32 h-32 bg-purple-300/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-indigo-300/20 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Header */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            Stay Connected
          </h2>
          <p className="text-lg sm:text-xl text-purple-100 max-w-2xl mx-auto leading-relaxed">
            Join our community and stay updated with the latest news, events, and educational content
          </p>
        </div>

        {/* Social Media Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 mb-12">
          {SOCIAL_LINKS.map((social, index) => {
            const IconComponent = social.icon;
            return (
              <a
                key={social.name}
                href={social.href}
                className={`group relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 sm:p-8 transition-all duration-500 hover:bg-white/20 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 ${social.color} hover:border-white/40 fade-in-up`}
                style={{ animationDelay: `${index * 100}ms` }}
                aria-label={`Follow us on ${social.name}`}
              >
                <div className="flex flex-col items-center space-y-3">
                  <div className="p-3 bg-white/20 rounded-xl group-hover:bg-white/30 transition-colors duration-300">
                    <IconComponent
                      size={24}
                      className="text-white group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-white font-semibold text-sm sm:text-base group-hover:text-purple-100 transition-colors duration-300">
                      {social.name}
                    </h3>
                    <p className="text-purple-200 text-xs sm:text-sm mt-1 group-hover:text-purple-100 transition-colors duration-300">
                      {social.followers}
                    </p>
                  </div>
                </div>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            );
          })}
        </div>

        {/* Newsletter CTA */}
        {/* <div className="max-w-2xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
              Never Miss an Update
            </h3>
            <p className="text-purple-100 mb-6 text-sm sm:text-base">
              Be the first to know about admissions, events, and school achievements
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-all duration-300"
              />
              <button className="px-6 py-3 bg-white text-purple-700 font-semibold rounded-xl hover:bg-purple-50 transition-all duration-300 hover:scale-105 hover:shadow-lg whitespace-nowrap">
                Subscribe Now
              </button>
            </div>
          </div>
        </div> */}

        {/* Footer Text */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <p className="text-purple-200 text-sm">
            Follow us for daily updates, educational tips, and community highlights
          </p>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaSection;
