import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'bhashabridge',
    title: 'BhashaBridge',
    description: 'Cross-platform AI chat translator using Flutter + Firebase + OpenAI APIs for seamless multilingual communication.',
    image: 'https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=800', // Mobile phone with chat interface
    tags: ['Flutter', 'Firebase', 'OpenAI', 'Dart', 'Real-time'],
    badges: ['📱 Cross-platform', '🌐 Multilingual', '⚡ Real-time'],
    demoUrl: 'https://github.com/YashSigchi/BhashaBridge/releases/download/v1.0/app-release.apk',
    githubUrl: 'https://github.com/YashSigchi/BhashaBridge',
    featured: true
  },
  {
    id: 'dilketaar',
    title: 'DilKeTaar',
    description: 'Secure messaging app with WebRTC video calls, JWT authentication, and Docker deployment for scalable communication.',
    image: 'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=800', // People on video call
    tags: ['WebRTC', 'Socket.io', 'Docker', 'MongoDB', 'JWT'],
    badges: ['🔐 Secure', '📹 Video Calls', '⚡ Real-time'],
    demoUrl: 'https://dilketaar.onrender.com',
    githubUrl: 'https://github.com/YashSigchi/DilKTaar',
    featured: true
  },
  {
    id: 'docx-to-pdf',
    title: 'DocxToPdf',
    description: 'Instantly convert .docx files to PDF with formatting preserved.',
    image: 'https://images.pexels.com/photos/4439901/pexels-photo-4439901.jpeg?auto=compress&cs=tinysrgb&w=800', // Documents and files on desk
    tags: ['Python', 'Streamlit', 'NLP'],
    badges: ['📝 Docs', '⚙️ Utilities'],
    // demoUrl: '#',
    githubUrl: 'https://github.com/YashSigchi/DocxToPdf',
    featured: true
}

];