import React from "react";
import {
  FaLock, FaRocket, FaCode, FaServer, FaDatabase,
  FaCogs, FaShieldAlt, FaTools, FaCheckCircle,
  FaLayerGroup, FaStar, FaHeadset, FaSyncAlt, FaBug, FaCloud,
} from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiNumpy } from "react-icons/si";
import numpyImg from "../Assets/pd.webp";
import CommonTechPage from "../components/techcommomcomponents/CommonTechPage";
import { YEARS_EXPERIENCE_DISPLAY } from "../lib/companyStats";

const Numpy = () => (
  <CommonTechPage
    banner={{
      bgImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=85",
      image: numpyImg,
      category: "Data Science & Scientific Computing",
      breadcrumb: "Python · NumPy · Data Science",
      title: "Python · NumPy · Data Science",
      tagline:
        "Build high-performance, data-driven applications using Python and NumPy — the gold standard for scientific computing, AI workflows, and numerical analysis trusted by researchers and engineers worldwide.",
    }}

    intro={{
      badge: "Future IT Touch · Python & NumPy Experts",
      heading: "Power Your Data with",
      highlight: "Python & NumPy",
      paras: [
        "At Future IT Touch, we specialize in crafting intelligent, efficient, and reliable software solutions that harness the full power of Python's ecosystem combined with NumPy's unmatched computational speed — delivering optimized data pipelines, analytics platforms, and scientific applications.",
        "From data analytics and automation tools to AI-powered systems and large-scale numerical computation, our developers build Python–NumPy solutions tailored for performance, precision, and scalability — with clean code and efficient algorithms at every layer.",
        "Whether you need real-time data processing, machine learning integration, or custom backend development, we ensure seamless system integration and actionable insights that empower your business with superior speed and reliability.",
      ],
      highlights: [
        "NumPy-powered multidimensional arrays and vectorized operations for maximum computation speed",
        "Integration with Pandas, SciPy, TensorFlow & PyTorch for AI and data science workflows",
        "Python REST APIs built with FastAPI & Flask for high-speed data delivery",
        "Real-time analytics dashboards with Matplotlib, Plotly & Seaborn visualization libraries",
      ],
      stats: [
        { num: "200+", label: "Data Solutions Delivered",  desc: "Python & NumPy analytical systems built for global businesses across industries.",  icon: <FaPython /> },
        { num: YEARS_EXPERIENCE_DISPLAY,   label: "Years Python Expertise",    desc: `${YEARS_EXPERIENCE_DISPLAY} years mastering Python's ecosystem from NumPy to Pandas and AI.`,          icon: <FaLayerGroup /> },
        { num: "300+", label: "Clients Empowered",         desc: "300+ organizations powered by Python–NumPy analytics and automation systems.",         icon: <FaStar /> },
      ],
    }}

    services={[
      {
        icon: <FaCode />,
        title: "Custom Python Development",
        desc: "Efficient and scalable web and data-driven applications using Python — with secure, modular backend architectures and enterprise-grade automation and analytics solutions.",
        points: [
          "Scalable Python web applications",
          "Backend automation & workflow tools",
          "Clean, reusable Python codebase",
          "Enterprise analytics solutions",
        ],
      },
      {
        icon: <SiNumpy />,
        title: "NumPy-Powered Data Solutions",
        desc: "Advanced data computation and analysis systems using NumPy — high-performance mathematical models, scientific computations, and seamless integration with Pandas, SciPy, and TensorFlow.",
        points: [
          "Multidimensional array processing",
          "Statistical & mathematical models",
          "NumPy + Pandas + SciPy integration",
          "Algorithm performance optimization",
        ],
      },
      {
        icon: <FaCogs />,
        title: "Machine Learning Integration",
        desc: "NumPy as the numerical backbone for AI workflows — fast array computations, efficient preprocessing pipelines, and optimized vectorization for training machine learning models.",
        points: [
          "NumPy arrays for ML data pipelines",
          "TensorFlow & PyTorch integration",
          "Preprocessing & feature engineering",
          "Vectorized computation optimization",
        ],
      },
      {
        icon: <FaDatabase />,
        title: "API & Data Visualization",
        desc: "Python-based RESTful APIs for data processing and visualization — with NumPy-backed analytics dashboards built using Matplotlib and Plotly, delivered via FastAPI and Flask.",
        points: [
          "FastAPI & Flask REST endpoints",
          "Matplotlib & Plotly dashboards",
          "NumPy data structure integration",
          "Scalable analytics API design",
        ],
      },
      {
        icon: <FaShieldAlt />,
        title: "Security & Maintenance",
        desc: "Robust data security standards, input validation, and memory management for data-heavy NumPy applications — with regular performance tuning and dependency updates.",
        points: [
          "Secure data validation & auth",
          "Memory management optimization",
          "Injection & authentication safety",
          "Library & dependency updates",
        ],
      },
      {
        icon: <FaTools />,
        title: "Continuous Support & Optimization",
        desc: "Long-term maintenance for Python and NumPy projects — dependency upgrades, algorithm optimization, performance monitoring, and consultation for scalability improvements.",
        points: [
          "Long-term project maintenance",
          "Algorithm & code optimization",
          "Performance & resource monitoring",
          "Scalability consulting & support",
        ],
      },
    ]}

    process={[
      { icon: <FaCheckCircle />, title: "Requirement Analysis",              desc: "Understanding your business and technical needs — identifying data challenges and designing a roadmap for Python–NumPy solutions tailored for performance and efficiency." },
      { icon: <FaServer />,      title: "System Architecture Planning",      desc: "Designing an optimized architecture for large-scale data processing using NumPy arrays — ensuring scalability and seamless integration with Python frameworks." },
      { icon: <FaCogs />,        title: "Algorithm Design & Optimization",   desc: "Crafting efficient data-processing algorithms using NumPy's vectorized operations — minimizing computation time and maximizing performance in complex workflows." },
      { icon: <FaCloud />,       title: "Backend & API Development",         desc: "Building robust Python backends and APIs using Flask or FastAPI — integrated with NumPy for high-speed data manipulation, transformation, and delivery." },
      { icon: <FaDatabase />,    title: "Data Modeling & Analysis",          desc: "Leveraging NumPy with Pandas and Matplotlib to model, analyze, and visualize large datasets — ensuring meaningful insights and accurate statistical results." },
      { icon: <FaRocket />,      title: "Integration & Deployment",          desc: "Integrating NumPy-powered modules into existing systems or cloud environments — ensuring seamless data flow, API communication, and reliable pipelines." },
      { icon: <FaShieldAlt />,   title: "Performance & Security Optimization",desc: "Enhancing code efficiency, reducing computation overhead, and implementing data protection — ensuring the highest level of security and speed in data operations." },
      { icon: <FaBug />,         title: "Testing & Quality Assurance",       desc: "Unit and integration testing ensuring correctness, speed, and reliability — delivering clean, bug-free Python and NumPy applications across all environments." },
      { icon: <FaCode />,        title: "Deployment & Monitoring",           desc: "Handling production deployment, server configuration, and real-time monitoring — ensuring NumPy-based solutions perform flawlessly at scale post-launch." },
      { icon: <FaSyncAlt />,     title: "Maintenance & Long-Term Support",   desc: "Continuous maintenance, version upgrades, and performance audits post-deployment — ensuring your Python–NumPy systems stay future-ready and efficient." },
    ]}

    features={[
      { icon: <FaCode />,      title: "Custom Python Development",       desc: "Python-based software handling automation, data analysis, and backend logic — with flexibility, reliability, and performance engineered from the ground up." },
      { icon: <FaCogs />,      title: "NumPy-Powered Data Computing",    desc: "Fast multidimensional array processing and numerical computations enabling advanced data modeling, analytics, and scientific research at scale." },
      { icon: <FaServer />,    title: "Scientific & AI Integration",     desc: "NumPy integrated with TensorFlow, PyTorch, and SciPy — creating optimized data pipelines and analytical models for AI and scientific applications." },
      { icon: <FaLock />,      title: "Data Security & Reliability",     desc: "Data processing pipelines secured with encryption and compliance with modern standards — ensuring optimal trust, safety, and integrity for sensitive operations." },
      { icon: <FaRocket />,    title: "High-Performance Optimization",   desc: "Python and NumPy operations fine-tuned for maximum speed and efficiency — ensuring low latency and high throughput in computation-heavy environments." },
      { icon: <FaTools />,     title: "Ongoing Support & Optimization",  desc: "Long-term maintenance, optimization consulting, and continuous improvement support for Python–NumPy-based systems across their full lifecycle." },
    ]}

    stack={[
      { name: "Python 3.12" },
      { name: "NumPy 1.x / 2.x" },
      { name: "Pandas" },
      { name: "SciPy" },
      { name: "Matplotlib" },
      { name: "Plotly / Seaborn" },
      { name: "FastAPI" },
      { name: "Flask" },
      { name: "TensorFlow" },
      { name: "PyTorch" },
      { name: "Scikit-learn" },
      { name: "Jupyter Notebooks" },
      { name: "Docker" },
      { name: "PostgreSQL" },
      { name: "Redis" },
      { name: "GitHub Actions / CI" },
    ]}

    slider={[
      { count: "200+", title: "Data-Driven Solutions Delivered",      desc: "200+ Python and NumPy-powered analytical systems built — delivering performance, scalability, and computational precision for global businesses.",           image: "/Assets/seerviceSlider/slide1.webp" },
      { count: YEARS_EXPERIENCE_DISPLAY,   title: "Years of Python Expertise",            desc: `${YEARS_EXPERIENCE_DISPLAY} years mastering Python's ecosystem — NumPy, Pandas, AI frameworks, and more — ensuring superior code quality and system reliability.`,           image: "/Assets/seerviceSlider/slide2.webp" },
      { count: "300+", title: "Clients Empowered Worldwide",          desc: "300+ organizations powered by Python–NumPy systems delivering real-time analytics, automation, and high-performance computation at scale.",                  image: "/Assets/seerviceSlider/slide3.webp" },
      { count: "99%",  title: "Performance Optimization Success Rate", desc: "Up to 99% improvement in processing efficiency achieved — reducing compute times while enhancing accuracy, scalability, and data throughput.",             image: "/Assets/seerviceSlider/slide4.webp" },
      { count: "24/7", title: "Technical Support & Monitoring",       desc: "Continuous monitoring, updates, and optimization keeping your Python–NumPy systems stable, secure, and performing at peak capacity around the clock.",       image: "/Assets/seerviceSlider/slide5.webp" },
    ]}

    faq={{
      title: "Python & NumPy Development Services",
      items: [
        { title: "What is NumPy in Python?",                              description: "NumPy is a core Python library for numerical and scientific computing — providing multidimensional array support and high-level mathematical functions for data analysis and machine learning." },
        { title: "Why use Python with NumPy for data processing?",        description: "Python combined with NumPy enables high-speed numerical computation, array manipulation, and data transformation — ideal for scientific, AI, and statistical projects." },
        { title: "Can NumPy handle big data applications?",               description: "Yes, NumPy is highly optimized for large datasets and integrates seamlessly with Pandas, Dask, and cloud-based data systems for scalable computation pipelines." },
        { title: "Is NumPy suitable for machine learning and AI?",        description: "Absolutely. NumPy serves as the foundation for major ML frameworks like TensorFlow and PyTorch — making it essential for data science and AI model development." },
        { title: "Do you provide NumPy integration for existing systems?",description: "Yes. We integrate NumPy-based computation into existing Python or enterprise systems to enhance performance, accuracy, and analytics capabilities." },
        { title: "How secure are Python–NumPy applications?",             description: "We implement encrypted data handling, safe APIs, and environment isolation to protect sensitive computations, analytics pipelines, and user data." },
        { title: "Can you optimize existing Python code with NumPy?",     description: "Definitely. We refactor Python codebases by replacing loops and inefficient operations with NumPy vectorization for significantly faster execution." },
        { title: "Do you offer ongoing maintenance for Python–NumPy projects?", description: "Yes, we provide long-term support including performance tuning, library updates, dependency management, and full compatibility improvements." },
        { title: "Which industries benefit from NumPy solutions?",        description: "Finance, healthcare, manufacturing, and research rely on NumPy for analytics, forecasting, and simulation due to its speed, accuracy, and ecosystem depth." },
        { title: "Can NumPy be integrated with visualization tools?",     description: "Yes, NumPy integrates with Matplotlib, Plotly, and Seaborn to create detailed and interactive data visualizations for business insights and reports." },
      ],
    }}
  />
);

export default Numpy;
