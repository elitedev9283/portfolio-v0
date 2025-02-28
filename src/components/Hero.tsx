import { ArrowDown } from 'lucide-react';
import { Link } from './Link';
import { TypeWriter } from './ui/TypeWriter';
import { SocialLinks } from './hero/SocialLinks';
import { ContactInfo } from './hero/ContactInfo';
import { ActionButtons } from './hero/ActionButtons';
import { roles , Name , JobTitle } from '../myData';

export function Hero() {
  

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated background with ribbons */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.08]" />
             

        {/* Subtle noise texture */}
        <div className="absolute inset-0 bg-noise-pattern opacity-[0.02] animate-noise" />
      </div>

      <div className="container mx-auto px-10 py-16 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Column - Content */}
          <div className="flex flex-col items-center justify-center text-center space-y-4 order-2 md:order-1">
            <div className="space-y-2">
              <div className="inline-block bg-blue-100 dark:bg-blue-900/50 backdrop-blur-sm text-blue-600 dark:text-blue-300 text-sm font-medium px-4 py-2 rounded-full">
                {JobTitle}
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-gradient">
                {Name}
              </h1>
              <div className="text-xl md:text-2xl text-gray-600 dark:text-gray-300">
                I'm a <TypeWriter words={roles} delay={100} />
              </div>
            </div>

            <ContactInfo />
            <ActionButtons />
            <SocialLinks />
          </div>

          {/* Right Column - Profile Image */}
          <div className="relative order-1 md:order-2">

            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />
            <img
              src="/assets/profile.jpg"
              alt="Elite Highmore"
              className="relative w-full max-w-lg mx-auto rounded-full shadow-2xl transform hover:scale-105 transition-transform duration-500"
            />
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-[-1rem] left-1/2 -translate-x-1/2 animate-bounce">
          <Link
            href="#about"
            className="p-2 rounded-full bg-white/10 dark:bg-gray-800/10 hover:bg-white/20 dark:hover:bg-gray-800/20 transition-colors"
          >
            <ArrowDown className="w-6 h-6 text-gray-600 dark:text-gray-300" />
          </Link>
        </div>
      </div>
    </section>
  );
}
