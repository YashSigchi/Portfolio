export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  logo: string;
  certificateImage?: string;
}

export const certifications: Certification[] = [
  // {
  //   id: 'google-cloud',
  //   title: 'Google Professional',
  //   issuer: 'Google Cloud',
  //   date: '2024',
  //   logo: '/certificates/google.png',
  //   certificateImage: '/certificates/google-cloud.jpg',
  // },
  // {
  //   id: 'ibm-skillsbuild',
  //   title: 'AI & Data Science',
  //   issuer: 'IBM SkillsBuild',
  //   date: '2024',
  //   logo: '/certificates/ibm.png',
  //   certificateImage: '/certificates/ibm-skillsbuild.jpg',
  // },
  {
    id: 'ey-microsoft',
    title: 'Azure Cloud Solutions',
    issuer: 'EY + Microsoft',
    date: '2025',
    logo: '/certificates/m.png',
    certificateImage: '/certificates/ey.jpeg',
  },
  // {
  //   id: 'spoken-cpp',
  //   title: 'C++ Programming',
  //   issuer: 'IIT Bombay',
  //   date: '2024',
  //   logo: '/certificates/spoken.png',
  //   certificateImage: '/certificates/cpp.png',
  // },
  {
    id: 'hp-life',
    title: 'AI for Beginners',
    issuer: 'HP LIFE',
    date: '2025',
    logo: '/certificates/hp.png',
    certificateImage: '/certificates/hp.jpeg',
  },
  {
    id: 'ibm-journey-cloud',
    title: 'Journey to Cloud',
    issuer: 'IBM',
    date: '2025',
    logo: '/certificates/ibm.png',
    certificateImage: '/certificates/cloudibm.jpeg',
  },
  // {
  //   id: 'spoken-c',
  //   title: 'C Programming',
  //   issuer: 'IIT Bombay',
  //   date: '2024',
  //   logo: '/certificates/spoken.png',
  //   certificateImage: '/certificates/c.png',
  // },
  {
    id: 'deloitte-simulation',
    title: 'Tech Job Simulation',
    issuer: 'Deloitte',
    date: '2025',
    logo: '/certificates/d.jpeg',
    certificateImage: '/certificates/del.jpeg',
  },
  // {
  //   id: 'spoken-python',
  //   title: 'Python 3.4.3',
  //   issuer: 'IIT Bombay',
  //   date: '2024',
  //   logo: '/certificates/spoken.png',
  //   certificateImage: '/certificates/p.png',
  // },
  {
    id: 'ibm-getting-started-ai',
    title: 'Getting Started with AI',
    issuer: 'IBM',
    date: '2025',
    logo: '/certificates/ibm.png',
    certificateImage: '/certificates/startai.jpeg',
  },
  // {
  //   id: 'ibm-llm-build',
  //   title: 'LLM Build',
  //   issuer: 'IBM',
  //   date: '2024',
  //   logo: '/certificates/ibm.png',
  //   certificateImage: '/certificates/ibm-llm-build.jpg',
  // },
];

