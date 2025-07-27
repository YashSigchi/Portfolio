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
    date: '2023',
    logo: '/certificates/m.png',
    certificateImage: '/certificates/ey.jpeg',
  },
  {
    id: 'hp-life',
    title: 'AI for Beginners',
    issuer: 'HP LIFE',
    date: '2023',
    logo: '/certificates/hp.png',
    certificateImage: '/certificates/hp.jpeg',
  },
  {
    id: 'ibm-journey-cloud',
    title: 'Journey to Cloud',
    issuer: 'IBM',
    date: '2024',
    logo: '/certificates/ibm.png',
    certificateImage: '/certificates/cloudibm.jpeg',
  },
  {
    id: 'deloitte-simulation',
    title: 'Tech Job Simulation',
    issuer: 'Deloitte',
    date: '2024',
    logo: '/certificates/d.jpeg',
    certificateImage: '/certificates/del.jpeg',
  },
  // {
  //   id: 'ibm-llm-build',
  //   title: 'LLM Build',
  //   issuer: 'IBM',
  //   date: '2024',
  //   logo: '/certificates/ibm.png',
  //   certificateImage: '/certificates/ibm-llm-build.jpg',
  // },
  {
    id: 'ibm-getting-started-ai',
    title: 'Getting Started with AI',
    issuer: 'IBM',
    date: '2024',
    logo: '/certificates/ibm.png',
    certificateImage: '/certificates/startai.jpeg',
  },
  
];
