import { Computer } from 'lucide-react';

interface TechnicalCardProps {
  image: string;
  title: string;
  description: string;
  stacks: string[];
  yearsOfExperience: number;
}

export function TechnicalCard({ image, title, description, stacks, yearsOfExperience }: TechnicalCardProps) {
  return (
    <div className="flex flex-col items-center shadow-lg transform transition-transform duration-300 hover:scale-110 py-5 ">
      <div className="aspect-video w-full relative overflow-hidden bg-secondary">
        <img 
          src={`${image}?auto=format&fit=crop&w=800&q=80`}
          alt={title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-gray-200">
          <span className="inline-flex items-center rounded-full bg-primary/10 backdrop-blur-md px-3 py-1 text-xs font-medium text-primary-foreground border border-primary/20">
            <Computer/> 
            <span className="ml-2">{title}</span>
          </span>
        </div>
      </div>
      <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">{title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{description}</p>
      <div className="flex gap-2 mt-4">
        {stacks.map((stack) => (
          <span key={stack} className="text-xs font-medium text-gray-800 dark:text-gray-200 bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">
            {stack}
          </span>
        ))}
      </div>
      <div className="mt-4 text-sm font-medium text-gray-800 dark:text-gray-200">
        {yearsOfExperience} years of experience
      </div>
    </div>
  );
} 