import { LucideLayoutGrid, Brain, Trophy, Rocket, LandPlot } from 'lucide-react';
import { SectionTitle } from './ui/SectionTitle';
import { AboutCard } from './about/AboutCard';
import { Stats } from './about/Stats';
export function About() {
  const cards = [
    {
      icon: LucideLayoutGrid,
      title: 'Multi-Stack Development',
      description: 'Specialized in MERN stack with TypeScript, building scalable web applications.',
      color: 'bg-blue-600',
    },
    {
      icon: Brain,
      title: 'Problem Solving',
      description: 'Extensive experience with Strong DSA background in various fields - Financial, Healthcare, etc',
      color: 'bg-yellow-600',
    },
    {
      icon: Trophy,
      title: 'Achievements',
      description: 'Multiple certifications and academic excellence in computer science.',
      color: 'bg-green-600',
    },
    {
      icon: Rocket,
      title: 'Innovation',
      description: 'Passionate about creating innovative solutions to complex problems.',
      color: 'bg-red-600',
    },
    {
      icon: LandPlot,
      title: 'Optimized Solutions',
      description: 'Clean code and Optimized solutions. "A clever man solves a problem. A wise man avoids it."',
      color: 'bg-purple-600',
    },
    {
      icon: LandPlot,
      title: 'Fast Learner',
      description: 'My secret is adaptibility and self-motivation with experience of diverse technologies.',
      color: 'bg-orange-600',
    },
  ];

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
            <strong className='text-xl text-gray-600 dark:text-gray-300 leading-relaxed'>Hello, I'm Elite Highmore.</strong>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm an AI Engineer, dedicated to creating efficient and scalable AI-driven web solutions. With a strong foundation in 
              Data Structures and Algorithms, I approach each project with a problem-solving mindset.
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