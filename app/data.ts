export const personal = {
  initials: 'HL',
  name: 'Hiya Lodha',
  tagline: 'Building intelligent systems.',
  title: 'AI / ML Engineer',
  bio: "CS undergrad at SRM IST specializing in AI & ML. I build systems that work and research the ones that don't yet. ",
  about: "A Computer Science undergraduate at SRM IST specializing in AI and Machine Learning. I enjoy taking end-to-end ownership of what I build, from designing ML pipelines and LLM-based systems to deploying full-stack web applications and blockchain protocols. I've built a credit risk scoring engine for small businesses and a fraud-resistant land registry on Ethereum. I've also interned across data analytics and industrial R&D, exploring how ML can be applied to real-world systems at scale. Currently open to internships and collaborations in AI/ML and full-stack development.",
  email: 'hiyaalodha@gmail.com',
  github: 'https://github.com/hiyalodha',
  linkedin: 'https://linkedin.com/in/hiya-lodha',
}

export const socials = [
  { label: 'GitHub', href: 'https://github.com/hiyalodha', icon: 'GitHub' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/hiya-lodha', icon: 'LinkedIn' },
  { label: 'Email', href: 'mailto:hiyaalodha@gmail.com', icon: 'Email' },
]

export const education = [
  {
    degree: 'B.Tech CSE — AI & ML',
    institution: 'SRM Institute of Science and Technology',
    location: 'Chennai, India',
    year: '2024 – 2028',
    score: '9.6 / 10.0 GPA',
  },
  {
    degree: 'Class 12 — CBSE',
    institution: 'St. Marys Senior Secondary Convent School',
    location: 'Udaipur',
    year: '2023 - 2024',
    score: '87.6%',
  },
  {
    degree: 'Class 10 — CBSE',
    institution: 'St. Marys Senior Secondary Convent School',
    location: 'Udaipur',
    year: '2021 - 2022',
    score: '91.2%',
  },
]

export const skills = [
  {
    category: 'Languages',
    items: ['Python', 'JavaScript', 'TypeScript', 'C++', 'Java', 'HTML5', 'CSS3'],
  },
  {
    category: 'Frameworks',
    items: ['React', 'Node.js', 'FastAPI', 'Flask', 'Express', 'Tailwind', 'shadcn/ui'],
  },
  {
    category: 'Blockchain',
    items: ['Solidity', 'Smart Contracts', 'Ethereum', 'Web3.js', 'Hardhat', 'IPFS', 'DeFi'],
  },
  {
    category: 'AI/ML',
    items: ['TensorFlow', 'PyTorch', 'OpenCV', 'Hugging Face', 'LangChain', 'YOLO', 'Pandas', 'Scikit-Learn'],
  },
  {
    category: 'Cloud, DB & Infra',
    items: ['AWS Services', 'MongoDB', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes', 'Supabase', 'Apache Hadoop', 'Apache Spark', 'Google Cloud', 'Cassandra', 'MySQL'],
  },
  {
    category: 'Tools',
    items: ['VS Code', 'Jupyter', 'Figma', 'Postman', 'Vercel', 'Databricks', 'Git'],
  },
]

export const research = [
  {
    program: 'UROP — Undergraduate Research',
    institution: 'SRM IST',
    topic: 'E-commerce Recommendation System',
    description: 'Researching ML-based recommendation systems using collaborative filtering and content-based approaches. Focus on data mining techniques to improve product discovery and personalization.',
    tags: ['Machine Learning', 'Recommender Systems', 'Python'],
  },
]

export const experience = [
  {
    role: 'Summer Intern',
    company: 'Hualong Machinery Co. Ltd',
    location: 'China',
    period: 'June – July 2025',
    description: 'Hands-on experience in industrial machinery systems, mechanical design, and hardware-software coordination in manufacturing environments.',
    skills: ['Industrial Systems', 'Mechanical Design'],
    certificateUrl: '/certificates/hualong.pdf', // Add your PDF path here
  },
  {
    role: 'Data Analytics Intern',
    company: 'YrcAiri Tech (OPC) Pvt. Ltd',
    location: 'India',
    period: 'June – July 2025',
    description: 'Data cleaning, visualization, and interpretation of structured datasets. Extracted actionable insights for strategic decision-making.',
    skills: ['Data Analytics', 'Python', 'Visualization'],
    certificateUrl: '/certificates/yrcairi.pdf', // Add your PDF path here
  },
  {
    role: 'Mechanical Engineering Intern',
    company: 'Foshan Shuoyu Machinery R&D Co. Ltd',
    location: 'China',
    period: 'Dec 2025 – Jan 2026',
    description: 'Exposure to quartz manufacturing machinery systems. Developed understanding of machine design and integration of mechanical, electrical, and software systems.',
    skills: ['Machine Design', 'R&D', 'Industrial Systems'],
    certificateUrl: '/certificates/foshan.pdf', // Add your PDF path here
  },
]

export const projects = [
  {
    id: 1,
    number: '01',
    title: 'CapIntel',
    description: 'Financial readiness scoring framework for MSMEs. Uses credit underwriting metrics — cash flow, EBITDA, DSCR, leverage ratios — to generate explainable risk scores for early-stage businesses.',
    tags: ['Python', 'AI', 'Finance', 'Risk Scoring'],
    github: 'https://github.com/hiyalodha/capintel',
    demo: 'https://intelligent-financial-capital-system.onrender.com/docs#/default/evaluate_startup_api_startup_evaluate_post',
    image: '',
    hackathon: 'Dr. Dev Hackathon (E-Cell) — Top 5',
  },
  {
    id: 2,
    number: '02',
    title: 'BhoomiLedger',
    description: 'Blockchain-based land record system for government use cases. Tamper-proof record keeping with full-stack architecture ensuring data integrity and transparency.',
    tags: ['Blockchain', 'Next.js', 'MongoDB', 'Smart Contracts'],
    github: 'https://github.com/hiyalodha/bhoomiledger',
    demo: 'https://bhoomiledger-g9w4.vercel.app/login',
    image: '',
    hackathon: 'Cad 4.0 (Coding Ninjas) — Top 10',
  },
  {
    id: 3,
    number: '03',
    title: 'SentimentIQ',
    description: 'NLP-driven sentiment classification system. End-to-end pipeline: data cleaning, tokenization, TF-IDF extraction, and model training. Built for customer feedback and social media monitoring.',
    tags: ['NLP', 'Python', 'TF-IDF', 'Scikit-learn'],
    github: 'https://github.com/hiyalodha/sentiment_engine',
    demo: 'https://sentiment-engine-ten.vercel.app/',
    image: '',
  },
]

export const hackathons = {
  total: 10,
  ideathons: 5,
  highlights: [
    {
      rank: 'Top 5',
      type: 'Hackathon',
      event: 'Dr. Dev Hackathon',
      organizer: 'E-Cell',
      project: 'CapIntel',
      description: 'Financial readiness scoring framework for credit underwriting',
    },
    {
      rank: 'Top 10',
      type: 'Hackathon',
      event: 'Cad 4.0',
      organizer: 'Coding Ninjas',
      project: 'BhoomiLedger',
      description: 'Blockchain-based land record system',
    },
    {
      rank: 'Best Innovation',
      type: 'Hackathon',
      event: 'Techformers 1.0',
      organizer: 'HackerRank Campus Crew',
      project: 'BhoomiLedger',
      description: 'Blockchain-based land record system'
    },
  ],
}

export const certifications = [
  {
    id: 1,
    title: 'AWS Academy Graduate - Generative AI Foundations - Training Badge',
    issuer: 'Amazon Web Services',
    date: 'April 2026',
    credentialUrl: '/certificates/Aws_academy-gen_ai_course_badge_certificate.pdf',
  },
]

export const organizations = [
  {
    role: 'AI/ML Associate',
    organization: 'CodeNex Club',
    description: 'Contributing to AI/ML initiatives, workshops, and technical projects within the club.',
  },
  {
    role: 'Technical Member',
    organization: 'HackerRank Campus Crew',
    description: 'Organising and participating in competitive programming and technical challenges on campus.',
  },
]