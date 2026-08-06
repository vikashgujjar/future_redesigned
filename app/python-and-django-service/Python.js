import React from "react";
import {
  FaPython, FaServer, FaDatabase, FaCogs, FaShieldAlt, FaTools,
  FaLock, FaRocket, FaCheckCircle, FaLayerGroup, FaBolt,
  FaSyncAlt, FaStar, FaHeadset, FaCode,
} from "react-icons/fa";
import pdImg from "../Assets/pd.webp";
import CommonTechPage from "../components/techcommomcomponents/CommonTechPage";
import { YEARS_EXPERIENCE_DISPLAY } from "../lib/companyStats";

const Python = () => (
  <CommonTechPage
    banner={{
      bgImage: "/Assets/stock/photo-1526374965328-7f61d4dc18c5.webp",
      image: pdImg,
      category: "Web Technology",
      breadcrumb: "Python · Django · Flask",
      title: "Python · Django · Flask",
      tagline:
        "Build scalable, secure, and high-performance web applications with Python's most powerful frameworks — trusted by data-driven businesses and modern startups worldwide.",
    }}

    intro={{
      badge: "Future IT Touch · Python Experts",
      heading: "Build Scalable Web Apps with",
      highlight: "Python, Django & Flask",
      paras: [
        "At Future IT Touch, we specialize in crafting reliable, scalable, and efficient web solutions using Python, Django, and Flask — frameworks trusted by Instagram, Pinterest, and thousands of growing businesses globally.",
        "Whether it's a data-driven application, enterprise SaaS platform, or a RESTful API backend, our skilled Django developers use clean architecture, ORM-based database management, and best security practices to deliver smooth performance and scalability.",
        "As a trusted Python development company, we ensure your applications are optimized, maintainable, and ready for future growth — with robust backend systems that power intuitive and seamless user experiences.",
      ],
      highlights: [
        "Django & Flask MVC architecture for clean, maintainable code",
        "RESTful & GraphQL API development with Django REST Framework",
        "PostgreSQL, MySQL & MongoDB with Django ORM optimization",
        "Docker, Nginx & Gunicorn cloud deployment with CI/CD",
      ],
      stats: [
        { num: "150+", label: "Django Apps Delivered",  desc: "High-performance Django and Flask applications shipped globally.",   icon: <FaPython /> },
        { num: YEARS_EXPERIENCE_DISPLAY,  label: "Years Python Expertise", desc: `${YEARS_EXPERIENCE_DISPLAY} years of Python development powering scalable backend systems.`,  icon: <FaLayerGroup /> },
        { num: "400+", label: "Global Clients Served",  desc: "Trusted by 400+ clients worldwide for Python & Django solutions.",   icon: <FaStar /> },
      ],
    }}

    services={[
      {
        icon: <FaPython />,
        title: "Custom Python Web Development",
        desc: "Robust and scalable web applications using Python with clean, maintainable architecture and best-practice code standards.",
        points: [
          "Scalable web applications",
          "High-performance backend systems",
          "Custom enterprise solutions",
          "Reusable, clean architecture",
        ],
      },
      {
        icon: <FaServer />,
        title: "Django Framework Development",
        desc: "Fast, secure, and scalable Django-based web apps with REST APIs, authentication, caching, and ORM-driven database management.",
        points: [
          "Django MVC web apps",
          "Django REST Framework APIs",
          "Celery task queues",
          "Django ORM optimization",
        ],
      },
      {
        icon: <FaCogs />,
        title: "Flask Application Development",
        desc: "Lightweight and flexible Flask applications with modular design, REST APIs, and seamless third-party library integrations.",
        points: [
          "Lightweight Flask web apps",
          "Modular REST API design",
          "Third-party integrations",
          "WSGI performance tuning",
        ],
      },
      {
        icon: <FaDatabase />,
        title: "API Integration & Backend Services",
        desc: "Secure RESTful APIs with Django and Flask — connecting platforms with OAuth2, token-based auth, and efficient data exchange.",
        points: [
          "RESTful API development",
          "External API integrations",
          "OAuth2 & JWT auth",
          "Multi-platform connectivity",
        ],
      },
      {
        icon: <FaLock />,
        title: "Security & Maintenance",
        desc: "Django's built-in security with added encryption, CSRF/XSS protection, and real-time vulnerability scanning for production-grade safety.",
        points: [
          "Django security middleware",
          "SQL injection & XSS defense",
          "Performance optimization",
          "Continuous vulnerability scanning",
        ],
      },
      {
        icon: <FaTools />,
        title: "Ongoing Support & Optimization",
        desc: "Round-the-clock application maintenance, Python/Django version upgrades, caching improvements, and expert long-term support.",
        points: [
          "24/7 application maintenance",
          "Python & Django upgrades",
          "Caching & load balancing",
          "Expert consultation & support",
        ],
      },
    ]}

    process={[
      { icon: <FaCheckCircle />, title: "Requirements Analysis",      desc: "Analyzing your business goals and technical needs to define a Python and Django solution built for performance, security, and scalability." },
      { icon: <FaLayerGroup />,  title: "Planning & Architecture",    desc: "Designing a modular Django MVC architecture for efficient data handling, better scalability, and long-term maintainability." },
      { icon: <FaCode />,        title: "Frontend Integration",       desc: "Frontend and backend teams collaborating to create responsive, interactive UIs that integrate seamlessly with Django's backend logic." },
      { icon: <FaServer />,      title: "Backend Development",        desc: "Building secure and scalable backends with Python and Django — REST APIs, database models, and background task processing." },
      { icon: <FaDatabase />,    title: "Database Design",            desc: "Designing optimized databases using PostgreSQL, MySQL, or MongoDB with Django ORM for efficient query handling and fast transactions." },
      { icon: <FaCogs />,        title: "API Development",            desc: "Building RESTful APIs with Django REST Framework or Flask to integrate with mobile platforms and third-party services." },
      { icon: <FaShieldAlt />,   title: "Security Hardening",         desc: "Applying Django's built-in security, input validation, and caching to protect against vulnerabilities and ensure optimal app speed." },
      { icon: <FaBolt />,        title: "Testing & QA",               desc: "Thorough unit, integration, and performance testing using PyTest and Selenium to ensure flawless, high-quality deliverables." },
      { icon: <FaRocket />,      title: "Deployment & Server Setup",  desc: "Deploying Django apps using Docker, Nginx, and Gunicorn on AWS or Azure for stable, scalable, zero-downtime server environments." },
      { icon: <FaSyncAlt />,     title: "Maintenance & Support",      desc: "Continuous monitoring, maintenance, and upgrades to keep your Django applications secure, optimized, and compatible with evolving tech." },
    ]}

    features={[
      { icon: <FaPython />,     title: "Custom Python Development",         desc: "Efficient and scalable Python applications tailored to your business goals, leveraging modern frameworks and robust code practices for every scale." },
      { icon: <FaCogs />,       title: "Django Framework Solutions",        desc: "High-performance Django apps with clean architecture, ORM optimization, and seamless API integration for superior scalability and maintainability." },
      { icon: <FaServer />,     title: "Flask App Development",             desc: "Flexible, lightweight Flask web apps that support quick deployment, modular design, and enhanced performance for startups and microservices." },
      { icon: <FaLock />,       title: "Advanced Security Integration",     desc: "Django's built-in security with added encryption, token validation, and secure user authentication for total data protection across all layers." },
      { icon: <FaRocket />,     title: "Performance Optimization",          desc: "Fine-tuned apps using caching, async programming, and database indexing to ensure lightning-fast performance across all devices and traffic loads." },
      { icon: <FaTools />,      title: "Ongoing Maintenance Support",       desc: "Continuous monitoring, timely updates, and Django version upgrades to keep your application running securely, efficiently, and without interruption." },
    ]}

    stack={[
      { name: "Python 3.12" },
      { name: "Django 5.x" },
      { name: "Django REST Framework" },
      { name: "Flask" },
      { name: "FastAPI" },
      { name: "Celery" },
      { name: "PostgreSQL" },
      { name: "Redis" },
      { name: "Docker" },
      { name: "Nginx / Gunicorn" },
      { name: "PyTest" },
      { name: "SQLAlchemy" },
      { name: "NumPy / Pandas" },
      { name: "AWS / Azure" },
      { name: "GraphQL" },
      { name: "JWT / OAuth2" },
    ]}

    slider={[
      { count: "150+", title: "Django Apps Delivered",       desc: "150+ high-performance Django and Flask applications for clients worldwide — fast, secure, and built for long-term scalability.",              image: "/Assets/seerviceSlider/slide1.webp" },
      { count: YEARS_EXPERIENCE_DISPLAY,  title: "Years of Python Expertise",   desc: `${YEARS_EXPERIENCE_DISPLAY} years of Python development delivering innovative backend systems that empower businesses through automation and scalability.`,          image: "/Assets/seerviceSlider/slide2.webp" },
      { count: "400+", title: "Global Clients Served",       desc: "Trusted by 400+ clients globally with reliable, secure, and efficient Python & Django backend architectures built for growth.",             image: "/Assets/seerviceSlider/slide3.webp" },
      { count: "98%",  title: "Client Satisfaction Rate",    desc: "98% satisfaction through proactive maintenance, robust architecture, and smooth app performance that consistently exceeds expectations.",   image: "/Assets/seerviceSlider/slide4.webp" },
      { count: "24/7", title: "Dedicated Technical Support", desc: "Around-the-clock Django support, performance monitoring, and issue resolution to keep applications at peak performance every day.",         image: "/Assets/seerviceSlider/slide5.webp" },
    ]}

    faq={{
      title: "Python · Django · Flask",
      items: [
        { title: "What is Python web development?",              description: "Python is a versatile programming language used for web, data, and AI applications. Its clean syntax and rich ecosystem make it ideal for building secure and scalable web applications." },
        { title: "Why should I choose Django for web development?", description: "Django is a high-level Python framework known for its speed, security, and scalability. It includes powerful tools like ORM, admin panel, and built-in security for rapid, enterprise-grade development." },
        { title: "What makes Flask a good choice for smaller projects?", description: "Flask is lightweight and flexible, ideal for small to mid-sized projects. It offers simplicity, modular design, and easy scalability, making it perfect for startups and prototypes." },
        { title: "Can Django handle enterprise-level applications?", description: "Absolutely. Django's modular structure, ORM, and robust security make it perfect for large-scale enterprise systems with complex data and user management requirements." },
        { title: "How secure are Django applications?",          description: "Django includes built-in security features that protect against SQL injection, XSS, and CSRF. We enhance this further with encryption and secure deployment practices on every project." },
        { title: "Can Python integrate with AI and Machine Learning?", description: "Yes. Python's ecosystem includes TensorFlow, Scikit-learn, and PyTorch, enabling easy integration of AI and ML models into web applications for smart automation and analytics." },
        { title: "Do you offer API development with Django?",    description: "Yes, we specialize in RESTful and GraphQL APIs using Django REST Framework — ensuring seamless integration between web, mobile, and external platforms." },
        { title: "Do you provide maintenance for Django and Python apps?", description: "Yes, we offer full maintenance including upgrades, bug fixes, and performance tuning to keep your Python and Django applications reliable and secure long-term." },
        { title: "Can you migrate my existing system to Django?", description: "Definitely. We handle complete migration from legacy platforms to Django with minimal downtime, improved architecture, and significantly enhanced performance." },
        { title: "What industries use Python–Django solutions?", description: "Python–Django powers healthcare, eCommerce, fintech, education, and AI-driven startups. Its flexibility and reliability make it ideal for any modern digital business." },
      ],
    }}
  />
);

export default Python;
