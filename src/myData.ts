import { SiHtml5, SiCss3, SiTailwindcss, SiExpress, SiMongodb, SiNextdotjs, SiCplusplus, SiGit, SiGithub, SiVite, SiSharp, SiPython, SiGitforwindows, SiPinetwork} from 'react-icons/si';
import { FaReact, FaNodeJs, FaJava } from 'react-icons/fa';
import { AiOutlineJavaScript} from 'react-icons/ai'
import { IoLogoFirebase } from "react-icons/io5";
import { TbMathFunction } from "react-icons/tb";
import { VscVscode } from 'react-icons/vsc';
import { LucideLayoutGrid, Brain, Trophy, Rocket, LandPlot } from 'lucide-react';

export const roles = [
  "Full-Stack Developer",
  "DSA Enthusiast",
  "Problem Solver",
  "Content Creator",
  "Tech Innovator",
  "Lifelong Learner",
];

export const Name = "Elite Highmore";
export const JobTitle = "AI/ML Engineer | Data Engineer | Software Engineer";

export const profileSummary = "I'm an AI Engineer, dedicated to creating efficient and scalable AI-driven web solutions. With a strong foundation in Data Structures and Algorithms, I approach each project with a problem-solving mindset.";

export const majorSkills = [ 
    {name: 'HTML/CSS', icon: SiHtml5, color: '#e34f26'},
    {name: 'JS/TS', icon: AiOutlineJavaScript, color: '#f7df1e'},
    {name: 'Math', icon: TbMathFunction, color: '#f34f29'}, 
    {name: 'C/C++', icon: SiCplusplus, color: '#00599c'},
    {name: 'Python', icon: SiPython, color: '#306998'},
    {name: 'Java', icon: FaJava, color: '#f7b731'},
    {name: 'C#', icon: SiSharp, color: '#f34f29'},
    {name: 'OS', icon: SiPinetwork, color: '#f34f29'},
    {name: 'Network', icon: SiPinetwork, color: '#f34f29'},
  ];
  
export const stacks = [
    {name: 'Front End', icon: SiHtml5, color: '#f34f29'},
    {name: 'Back End', icon: SiCss3, color: '#f34f29'},
  ]
export const minorSkills = [
    { name: 'React', icon: FaReact, color: '#61dafb' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38bdf8' },
    { name: 'Node.js', icon: FaNodeJs, color: '#68a063' },
    { name: 'Express.js', icon: SiExpress , color: '' },
    { name: 'MongoDB', icon: SiMongodb, color: '#47a248' },
    { name: 'Next.js', icon: SiNextdotjs, color: '' },
    { name: 'VS Code', icon: VscVscode, color: '#007acc' },
    {name: 'Firebase', icon: IoLogoFirebase , color: '#ffca28'},
    { name: 'Vite', icon: SiVite, color: '#646cff' },
    { name: 'Git', icon: SiGit, color: '#f34f29' },
    { name: 'GitHub', icon: SiGithub, color: '' },
  ];
 /*
  https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d
  https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7
  https://images.unsplash.com/photo-1461749280684-dccba630e2f6
  https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5
  https://images.unsplash.com/photo-1485827404703-89b55fcc595e
  https://images.unsplash.com/photo-1487887235947-a955ef187fcc
  https://images.unsplash.com/photo-1518770660439-4636190af475
  https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7
  */
export const technicalCardsData = [
  {
    image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7',
    title: 'Frontend Development',
    description: 'Building responsive and interactive user interfaces.',
    stacks: ['HTML', 'CSS', 'JavaScript', 'React'],
    yearsOfExperience: 5,
  },
  {
    image: 'public/assets/imgs/photo-1486312338219-ce68d2c6f44d.jfif',
    title: 'Backend Development',
    description: 'Creating robust server-side applications.',
    stacks: ['Node.js', 'Express', 'MongoDB'],
    yearsOfExperience: 3,
  },
  {
    image: 'public/assets/imgs/photo-1486312338219-ce68d2c6f44d.jfif',
    title: 'Backend Development',
    description: 'Creating robust server-side applications.',
    stacks: ['Node.js', 'Express', 'MongoDB'],
    yearsOfExperience: 3,
  },
  {
    image: 'public/assets/imgs/photo-1486312338219-ce68d2c6f44d.jfif',
    title: 'Backend Development',
    description: 'Creating robust server-side applications.',
    stacks: ['Node.js', 'Express', 'MongoDB'],
    yearsOfExperience: 3,
  },
  // Add more technical cards as needed
];

export const skillMapping: Record<string, string[]> = {
  'HTML/CSS': ['HTML', 'CSS'],
  'JS/TS': ['JavaScript', 'TypeScript', 'React', 'Node.js', 'Express.js', 'Next.js'],
  'Math': [], // Add relevant minor skills if any
  'C/C++': ['C++'],
  'Python': ['Python'],
  'Java': ['Java'],
  'C#': [], // Add relevant minor skills if any
};

export const cards = [
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
