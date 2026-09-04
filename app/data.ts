export const personal = {
  initials: 'HL',
  name: 'Hiya Lodha',
  tagline: 'Building intelligent systems.',
  title: 'AI / ML Engineer',
  bio: "CS undergrad at SRM IST specializing in AI & ML. I build systems that work and research the ones that don't yet. ",
  about: "A Computer Science undergraduate at SRM IST specializing in AI and Machine Learning. I take end-to-end ownership of what I build — from fine-tuning and deploying models, to designing the pipelines and APIs around them, to shipping the full-stack product on top. I currently lead the AI/ML workstream on a blockchain forensics platform, build an on-device location intelligence module as its sole developer, and research how language models resolve conflicts between what they memorised and what they're given. Open to internships and collaborations in AI/ML.",
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
    score: '9.62 / 10.0 GPA',
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
    items: ['Python', 'Java', 'C++', 'TypeScript', 'JavaScript', 'SQL', 'Solidity', 'Bash'],
  },
  {
    category: 'AI/ML',
    items: ['PyTorch', 'TensorFlow', 'Hugging Face', 'Transformers', 'LoRA / PEFT', 'ONNX', 'LangChain', 'Scikit-Learn', 'OpenCV', 'YOLO', 'Pandas', 'NumPy'],
  },
  {
    category: 'LLM & Retrieval',
    items: ['RAG', 'FAISS', 'pgvector', 'Sentence-Transformers', 'Model Quantization', 'Fine-Tuning', 'Evaluation & Benchmarking'],
  },
  {
    category: 'Backend & APIs',
    items: ['FastAPI', 'Flask', 'Node.js', 'Express.js', 'REST API Design', 'GraphQL', 'JWT Auth', 'Microservices'],
  },
  {
    category: 'Frontend',
    items: ['Next.js', 'React', 'Tailwind', 'shadcn/ui', 'TypeScript'],
  },
  {
    category: 'Blockchain',
    items: ['Smart Contracts', 'Ethereum', 'Web3.js', 'Hardhat', 'IPFS', 'Graph Analytics'],
  },
  {
    category: 'Databases',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Supabase', 'Schema Design', 'Query Optimization', 'Indexing', 'Normalization (3NF)'],
  },
  {
    category: 'Cloud & DevOps',
    items: ['AWS', 'Google Cloud', 'Docker', 'Kubernetes', 'GitHub Actions', 'CI/CD', 'Linux', 'Vercel', 'Render'],
  },
  {
    category: 'Practices',
    items: ['Data Structures & Algorithms', 'System Design', 'OOP', 'Unit Testing', 'Agile'],
  },
  {
    category: 'Tools',
    items: ['Git', 'VS Code', 'Jupyter', 'Colab', 'Postman', 'Databricks', 'Figma'],
  },
]

export const research = [
  {
    program: 'Research Intern — Deep Learning Lab',
    institution: 'IIT Bombay',
    topic: 'Parametric vs. Contextual Knowledge Conflict',
    description: 'Studying how large language models decide between knowledge stored in their weights and knowledge supplied in context when the two disagree — and what that means for retrieval-augmented systems where the retrieved passage may be wrong.',
    tags: ['LLMs', 'Interpretability', 'RAG', 'PyTorch'],
  },
  {
    program: 'UROP — Undergraduate Research',
    institution: 'SRM IST',
    topic: 'E-commerce Recommendation Systems',
    description: 'ML-based recommendation research combining collaborative filtering and content-based approaches, focused on data mining techniques that improve product discovery and personalization.',
    tags: ['Machine Learning', 'Recommender Systems', 'Python'],
  },
]

export const experience = [
  {
    role: 'AI/ML Head',
    company: 'Namo Labs',
    location: 'India',
    period: 'June 2026 – Present',
    description: 'Leading the AI/ML workstream on DAFS, a digital asset forensics platform for blockchain intelligence. Designed a contract-driven architecture letting wallet clustering, entity resolution, graph embeddings, risk scoring and pattern detection be built in parallel. Own technical direction and delivery across a seven-person team.',
    skills: ['Graph ML', 'Blockchain Analytics', 'System Design', 'Team Leadership'],
  },
  {
    role: 'AI/ML Engineer',
    company: 'Icebrkr',
    location: 'India',
    period: 'June 2026 – Present',
    description: 'Sole developer of a location intelligence module within an internal platform. Fine-tuned and deployed on-device language models for intent classification, generated large-scale synthetic training data, and built the geospatial routing and search infrastructure behind it.',
    skills: ['LoRA / PEFT', 'Model Optimization', 'Geospatial', 'FastAPI', 'Docker'],
  },
  {
    role: 'AI/ML Intern',
    company: 'Pyrotech Workspace Solutions Pvt. Ltd.',
    location: 'India',
    period: 'June – July 2026',
    description: 'Built and deployed a two-module industrial platform: a QA inspection system with role-based access, 7QC analytics and automated NCR reporting, and a machine health monitor tracking efficiency thresholds across 32 machines. Shipped end to end on Next.js, FastAPI and PostgreSQL.',
    skills: ['Next.js', 'FastAPI', 'PostgreSQL', 'Manufacturing Analytics'],
  },
  {
    role: 'Mechanical Engineering Intern',
    company: 'Foshan Shuoyu Machinery R&D Co. Ltd',
    location: 'China',
    period: 'Dec 2025 – Jan 2026',
    description: 'Exposure to quartz manufacturing machinery systems. Developed understanding of machine design and integration of mechanical, electrical, and software systems.',
    skills: ['Machine Design', 'R&D', 'Industrial Systems'],
    certificateUrl: '/certificates/foshan.pdf',
  },
  {
    role: 'Summer Intern',
    company: 'Hualong Machinery Co. Ltd',
    location: 'China',
    period: 'June – July 2025',
    description: 'Hands-on experience in industrial machinery systems, mechanical design, and hardware-software coordination in manufacturing environments.',
    skills: ['Industrial Systems', 'Mechanical Design'],
    certificateUrl: '/certificates/hualong.pdf',
  },
  {
    role: 'Data Analytics Intern',
    company: 'YrcAiri Tech (OPC) Pvt. Ltd',
    location: 'India',
    period: 'June – July 2025',
    description: 'Data cleaning, visualization, and interpretation of structured datasets. Extracted actionable insights for strategic decision-making.',
    skills: ['Data Analytics', 'Python', 'Visualization'],
    certificateUrl: '/certificates/yrcairi.pdf',
  },
]

export const projects = [
  {
    id: 1,
    number: '01',
    title: 'SIP Management System',
    description: 'Full-stack investment tracking platform. JWT authentication with bcrypt hashing over a normalized 9-table 3NF schema with cascading foreign keys and a MySQL trigger for status updates. 25+ REST endpoints built on parameterized SQL with multi-table joins and aggregation, plus a node-cron pipeline pulling Yahoo Finance prices every 15 minutes.',
    tags: ['Next.js', 'Express.js', 'MySQL', 'Node.js', 'REST API'],
    github: '',
    demo: '',
    image: '',
  },
  {
    id: 2,
    number: '02',
    title: 'CapIntel',
    description: 'Explainable credit risk scoring for MSMEs. Generates readiness scores from underwriting metrics — DSCR, EBITDA, cash flow and leverage ratios — so early-stage businesses can see what drives the number.',
    tags: ['Python', 'FastAPI', 'Scikit-Learn', 'Risk Scoring'],
    github: 'https://github.com/hiyalodha/capintel',
    demo: 'https://intelligent-financial-capital-system.onrender.com/docs#/default/evaluate_startup_api_startup_evaluate_post',
    image: '',
    hackathon: 'Dr. Dev Hackathon (E-Cell) — Top 5',
  },
  {
    id: 3,
    number: '03',
    title: 'BhoomiLedger',
    description: 'Decentralized land record system using Ethereum smart contracts for immutable ownership storage, paired with a Python FastAPI Random Forest service for fraud detection.',
    tags: ['Solidity', 'Next.js', 'MongoDB', 'FastAPI', 'Random Forest'],
    github: 'https://github.com/hiyalodha/bhoomiledger',
    demo: 'https://bhoomiledger-g9w4.vercel.app/login',
    image: '/projects/bhoomiledger.png',
    hackathon: 'Cad 4.0 (Coding Ninjas) — Top 10',
  },
  {
    id: 4,
    number: '04',
    title: 'SentimentIQ',
    description: 'NLP-driven sentiment classification system. End-to-end pipeline: data cleaning, tokenization, TF-IDF extraction, and model training. Built for customer feedback and social media monitoring.',
    tags: ['NLP', 'Python', 'TF-IDF', 'Scikit-learn'],
    github: 'https://github.com/hiyalodha/sentiment_engine',
    demo: 'https://sentiment-engine-ten.vercel.app/',
    image: '/projects/sentimentiq.png',
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
  {
    id: 2,
    title: 'AWS Academy Graduate — Machine Learning Foundations',
    issuer: 'Amazon Web Services',
    date: '2026',
    credentialUrl: 'https://www.credly.com/badges/bb61044f-b229-45e6-8db3-2e24eb11d28c/public_url',
  },
  {
    id: 3,
    title: 'Deep Learning Onramp',
    issuer: 'MATLAB',
    date: '2026',
    credentialUrl: 'https://matlabacademy.mathworks.com/progress/share/certificate.html?id=267bfea1-197a-4b40-9aca-adeeac9f46db&',
  },
  {
    id: 4,
    title: 'Machine Learning Onramp',
    issuer: 'MATLAB',
    date: '2026',
    credentialUrl: 'https://matlabacademy.mathworks.com/progress/share/certificate.html?id=bc8e0860-12d7-4c98-be55-eda488072234&',
  },
  {
    id: 5,
    title: 'SAP Business Technology Platform',
    issuer: 'SAP',
    date: '2026',
    credentialUrl: 'https://drive.google.com/file/d/1n9dNnWIo8cUxjnK5lmqJlmQr3_M-qrm0/view?usp=drive_link',
  },
]

export const organizations = [
  {
    role: 'AI/ML Head',
    organization: 'CodeNex Club',
    description: 'Leading the AI/ML domain — setting technical direction for workshops, internal projects and member onboarding.',
  },
  {
    role: 'Technical Member',
    organization: 'HackerRank Campus Crew',
    description: 'Organising and participating in competitive programming and technical challenges on campus.',
  },
]