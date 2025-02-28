import { useState } from 'react';
import { SectionTitle } from './ui/SectionTitle';
import { TechnicalCard } from './ui/TechnicalCard';
import Slider from "react-slick";
import { majorSkills, stacks, minorSkills, technicalCardsData, skillMapping } from '../myData';


// Double the skills array for seamless infinite scroll
// const extendedSkills = [...minorSkills, ...minorSkills];

export function Skills() {
  const [hoveredMajorSkill, setHoveredMajorSkill] = useState<string | null>(null);

  // Define a mapping of major skills to relevant minor skills
  
 
  // Example data for technical cards
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true,
    
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      
      <div className="container mx-auto px-8">
        <SectionTitle>Skills</SectionTitle>
        {/* Technical Cards */}
        <Slider {...settings} className="max-w-6xl mx-auto">
          {technicalCardsData.map((card) => (
            <div key={card.title} className="px-4">

              <TechnicalCard
              {...card}
              />
              </div>
          ))}
        </Slider>          
        <div className="max-w-6xl mx-auto space-y-12 py-10">
          
            <div className="flex flex-wrap gap-1 justify-center">
              {minorSkills.map((tech) => (
                <div
                  key={tech.name}
                  className={`flex flex-col items-center p-2 sm:p-4 sm:border border-gray-300 dark:border-gray-600 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transform transition-transform duration-300 ${
                    hoveredMajorSkill && skillMapping[hoveredMajorSkill]?.includes(tech.name) ? 'highlighted' : 'dimmed'
                  }`}
                >
                  <tech.icon size={40} color={tech.color} />
                  <span className="text-sm font-medium text-gray-800 dark:text-gray-200 mt-2">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Major Skills Grid */}
          <div className="flex flex-wrap gap-6 justify-center py-4">
            {majorSkills.map((skill) => (
              <div
                key={skill.name}
                className="flex flex-col items-center p-6 border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg hover:shadow-xl"
                onMouseEnter={() => setHoveredMajorSkill(skill.name)}
                onMouseLeave={() => setHoveredMajorSkill(null)}
              >
                <skill.icon size={42} color={skill.color} />
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200 mt-4">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
          <div>
        </div>
      </div>
    </section>
  );
}
