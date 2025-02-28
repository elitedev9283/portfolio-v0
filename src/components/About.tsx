import { SectionTitle } from './ui/SectionTitle';
import { AboutCard } from './about/AboutCard';
import { Stats } from './about/Stats';
import {cards, Name, profileSummary} from '../myData';
export function About() {
  
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.06]" />
      </div>

      <div className="container mx-auto px-8 relative">
        <SectionTitle>About Me</SectionTitle>
        
        <div className="max-w-4xl mx-auto mb-16">
          <div className="text-center mb-8">
            <strong className='text-xl text-gray-600 dark:text-gray-300 leading-relaxed'>Hello, I'm {Name}.</strong>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              {profileSummary}
            </p>  
          </div>

          <Stats />
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {cards.map((card) => (
            <AboutCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}