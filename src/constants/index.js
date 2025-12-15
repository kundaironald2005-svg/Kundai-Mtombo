const navLinks = [
    {
        name: "Work",
        link: "#work",
    },
    {
        name: "Certifications",
        link: "#certifications",
    },
    {
        name: "Experience",
        link: "#experience",
    },
    {
        name: "Skills",
        link: "#skills",
    },
    {
        name: "Testimonials",
        link: "#testimonials",
    },
];

const words = [
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
    { value: 2, suffix: "+", label: "Years of Experience" },
    { value: 20, suffix: "+", label: "Satisfied Clients" },
    { value: 12, suffix: "+", label: "Completed Projects" },
    { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
    {
        imgPath: "/images/logos/company-logo-1.png",
    },
    {
        imgPath: "/images/logos/company-logo-2.png",
    },
    {
        imgPath: "/images/logos/company-logo-3.png",
    },
    {
        imgPath: "/images/logos/company-logo-4.png",
    },
    {
        imgPath: "/images/logos/company-logo-5.png",
    },
    {
        imgPath: "/images/logos/company-logo-6.png",
    },
    {
        imgPath: "/images/logos/company-logo-7.png",
    },
    {
        imgPath: "/images/logos/company-logo-8.png",
    },
    {
        imgPath: "/images/logos/company-logo-9.png",
    },
    {
        imgPath: "/images/logos/company-logo-10.png",
    },
    {
        imgPath: "/images/logos/company-logo-11.png",
    },
];

const abilities = [
    {
        imgPath: "/images/seo.png",
        title: "Crafted Excellence",
        desc: "Work that's built with precision, intention, and an obsession for detail — because 'good enough' isn't in my vocabulary.",
    },
    {
        imgPath: "/images/chat.png",
        title: "Clear, Human Communication",
        desc: "You'll always know what's happening and why. No jargon. No confusion. Just clarity and real collaboration.",
    },
    {
        imgPath: "/images/time.png",
        title: "Deadlines You Can Trust",
        desc: "Your project moves on schedule - no surprises, no delays. Quality delivered exactly when promised. ",
    },
];

const techStackImgs = [
    {
        name: "React Developer",
        imgPath: "/images/logos/react.png",
    },
    {
        name: "Python Developer",
        imgPath: "/images/logos/python.svg",
    },
    {
        name: "Backend Developer",
        imgPath: "/images/logos/node.png",
    },
    {
        name: "Interactive Developer",
        imgPath: "/images/logos/three.png",
    },
    {
        name: "Project Manager",
        imgPath: "/images/logos/git.svg",
    },
];

const techStackIcons = [
    {
        name: "React Developer",
        modelPath: "/models/react_logo-transformed.glb",
        scale: 1,
        rotation: [0, 0, 0],
    },
    {
        name: "Python Developer",
        modelPath: "/models/python-transformed.glb",
        scale: 0.8,
        rotation: [0, 0, 0],
    },
    {
        name: "Backend Developer",
        modelPath: "/models/node-transformed.glb",
        scale: 5,
        rotation: [0, -Math.PI / 2, 0],
    },
    {
        name: "Interactive Developer",
        modelPath: "/models/three.js-transformed.glb",
        scale: 0.05,
        rotation: [0, 0, 0],
    },
    {
        name: "Project Manager",
        modelPath: "/models/git-svg-transformed.glb",
        scale: 0.05,
        rotation: [0, -Math.PI / 4, 0],
    },
];

const expCards = [
    {
        review: "Kundai brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
        imgPath: "/images/ojs_brand.png",
        logoPath: "/images/website-design-icon.png",
        title: "Student Frontend Developer — Computer Science & Frontend Engineering",
        date: "January 2024 - Present",
        responsibilities: [
            "Developed and maintained user-facing features for websites.",
            "Collaborated closely with UI/UX designers to ensure seamless user experiences.",
            "Optimized web applications for maximum speed and scalability.",
            "Translated Figma designs into responsive, accessible components (WCAG-friendly, ARIA, keyboard nav).",
            "Reduced bundle size via code-splitting and image optimization; improved LCP and CLS scores.",
            "Integrated REST/GraphQL APIs with robust loading, error, and retry states.",
            "Added component tests with Jest/RTL and set up Storybook for a reusable UI library.",
            "Standardized code quality with ESLint/Prettier and Git hooks; improved PR review efficiency.",
            "Implemented analytics event tracking to inform UX decisions and iterate on key flows.",
            "Hardened the frontend against XSS by sanitizing inputs and using safe rendering patterns.",
            "Documented component usage and onboarding steps; presented to peers and stakeholders.",
        ],
    },
    {
        review: "Kundai’s full-stack learning journey has been remarkable. He has built several end-to-end applications as part of personal and academic projects, consistently demonstrating strong problem-solving skills and an ability to break down complex features into clean, functional solutions.",
        imgPath: "/images/ojs_brand.png",
        logoPath: "/images/logo2.png",
        title: "Student Full Stack Developer - Computer Science & Mobile App Development",
        date: "January 2025 - Present",
        responsibilities: [
            "Built scalable end-to-end applications combining frontend and backend technologies.",
            "Worked with backend logic, APIs, and database structures through academic projects.",
            "Applied modern development patterns to create clean, maintainable systems.",
            "Designed REST/GraphQL APIs with versioned contracts and clear error models.",
            "Implemented auth (JWT/cookies) and role-based access control.",
            "Modeled relational/NoSQL schemas; optimized queries with proper indexing.",
            "Set up CI (GitHub Actions) for automated test/build/lint on pull requests.",
            "Containerized services with Docker and managed environment configs securely.",
            "Added request validation, centralized error handling, and logging/metrics.",
            "Wrote integration tests for critical endpoints and maintained Postman suite.",
        ],
    },
    {
        review: "Kundai’s work with React Native in his project portfolio shows an impressive level of attention to detail and user experience. He developed mobile interfaces that balanced performance with clean design—highlighting his growing expertise and commitment to building production-ready applications.",
        imgPath: "/images/ojs_brand.png",
        logoPath: "/images/logos/react.png",
        title: "Student React Native Developer - Computer Science & Modern Technologies",
        date: "January 2025 - Present",
        responsibilities: [
            "Built cross-platform mobile apps using React Native, integrating with Appwrite's backend services.",
            "Improved app performance and user experience through code optimization and testing.",
            "Coordinated with the product team to implement features based on feedback.",
            "Implemented navigation stacks/tabs and deep linking for seamless flows.",
            "Managed app state with Redux/Zustand and persisted offline data when necessary.",
            "Integrated device APIs (camera, push notifications, file system) via native modules.",
            "Delivered pixel-accurate, responsive screens from Figma designs.",
            "Set up OTA/beta distribution (Expo/EAS, TestFlight, Play Store Internal).",
            "Added crash reporting and analytics events to inform UX decisions.",
            "Wrote component/unit tests and performed device smoke testing.",
        ],
    },

    // ⭐ NEW SECTION 1 — CYBERSECURITY
    {
        review: "Kundai has built a strong foundation in cybersecurity through hands-on labs, CTFs, and academic research. His curiosity for system vulnerabilities and defensive strategies demonstrates the mindset of a future security specialist.",
        imgPath: "/images/ojs_brand.png",
        logoPath: "/images/nethunter.png",
        title: "Cybersecurity Student — Ethical Hacking & System Defense",
        date: "2023 - Present",
        responsibilities: [
            "Performed penetration testing and analyzed basic vulnerabilities using cybersecurity tools.",
            "Practiced ethical hacking through CTF competitions and simulated attack environments.",
            "Studied network security principles, encryption, and incident-response techniques.",
            "Ran vulnerability scans (e.g., Nmap/Nessus) and prioritized remediation steps.",
            "Hardened OS/network services by applying secure configuration baselines.",
            "Performed basic forensics: log review, IOC identification, and timeline analysis.",
            "Explored network segmentation and IDS/IPS behavior in a lab setup.",
            "Mapped OWASP Top 10 risks to secure coding practices and developer guidance.",
            "Drafted incident response runbooks for phishing, malware, and access abuse.",
        ],
    },

    // ⭐ NEW SECTION 2 — GRAPHICS DESIGNING
    {
        review: "Kundai’s design work reflects creativity, precision, and a strong understanding of visual communication. His ability to translate ideas into clean and modern visuals shows his talent for professional design.",
        imgPath: "/images/ojs_brand.png",
        logoPath: "/images/Ae Logo Round.png",
        title: "Graphics Designer — UI Design & Digital Creativity",
        date: "2019 - Present",
        responsibilities: [
            "Designed logos, banners, and social media content using Photoshop, After Effects and Illustrator.",
            "Created UI layouts and prototypes for web and mobile applications in Figma.",
            "Developed brand-consistent visual assets for academic and personal projects.",
            "Established brand systems (tokens, typography, components, spacing, grids).",
            "Exported optimized assets for multiple densities (SVG/WebP/PNG) and platforms.",
            "Delivered developer-ready specs and collaborated on handoff using Figma/Zeplin.",
            "Validated designs with quick user tests and iterated using feedback and analytics.",
            "Maintained organized design libraries with variants and usage docs.",
            "Prototyped motion and micro-interactions to enhance usability and delight.",
        ],
    },

    // ⭐ NEW SECTION 3 — DATABASE ENGINEERING
    {
        review: "Kundai has a solid foundation in database engineering, consistently demonstrating strong analytical thinking and structured problem-solving. His work shows a clear understanding of how data powers modern applications.",
        imgPath: "/images/ojs_brand.png",
        logoPath: "/images/database.png",
        title: "Database Engineering Student — SQL, NoSQL & Data Modeling",
        date: "2022 - Present",
        responsibilities: [
            "Designed relational and NoSQL database structures for academic systems.",
            "Optimized SQL queries and improved data retrieval efficiency through indexing.",
            "Built schemas that support scalable, real-world applications.",
            "Normalized schemas; produced clear ERDs and UML data models.",
            "Implemented transactions with appropriate isolation levels and ACID guarantees.",
            "Created views/stored procedures and enforced constraints for data integrity.",
            "Benchmarked and tuned queries using execution plans and profiling tools.",
            "Automated backups/restores and wrote migration scripts for versioned changes.",
            "Evaluated indexing strategies and read/write performance trade-offs.",
        ],
    },

    // ⭐ ACADEMIC COURSEWORK SECTIONS
    {
        review: "Built strong communication foundations through presentations, documentation, and collaborative projects.",
        imgPath: "/images/ojs_brand.png",
        logoPath: "/images/communication-skills.png",
        title: "Basic Communication Skills — Writing, Speaking & Collaboration",
        date: "2022 - Present",
        responsibilities: [
            "Practiced professional writing: emails, reports, and documentation.",
            "Delivered presentations and improved public speaking confidence.",
            "Collaborated effectively using constructive feedback and active listening.",
        ],
    },
    {
        review: "Studied core OS concepts and implemented mini-labs to understand process and memory management.",
        imgPath: "/images/ojs_brand.png",
        logoPath: "/images/ubuntu-color-icon.png",
        title: "Operating Systems — Processes, Memory & File Systems",
        date: "2023 - Present",
        responsibilities: [
            "Explored CPU scheduling, synchronization, and deadlocks.",
            "Implemented paging, segmentation, and virtual memory exercises.",
            "Worked with file systems, permissions, and basic shell scripting.",
        ],
    },
    {
        review: "Covered the fundamentals of logic design and digital circuits with practical lab work.",
        imgPath: "/images/ojs_brand.png",
        logoPath: "/images/energy-icon.png",
        title: "Digital Electronics — Logic Gates, Circuits & Flip-Flops",
        date: "2024 - Present",
        responsibilities: [
            "Designed combinational and sequential logic circuits.",
            "Analyzed truth tables, K-maps, and timing diagrams.",
            "Built simple counters and registers using flip-flops.",
        ],
    },
    {
        review: "Developed a strong sense of professional responsibility and ethical decision-making in tech.",
        imgPath: "/images/ojs_brand.png",
        logoPath: "/images/ethical-icon.png",
        title: "Ethics and Professionalism — Responsibilities in Technology",
        date: "2024 - Present",
        responsibilities: [
            "Explored data privacy, security, and intellectual property.",
            "Discussed professional codes of conduct and workplace dynamics.",
            "Applied ethical frameworks to real-world case studies.",
        ],
    },
    {
        review: "Studied programming paradigms, type systems, and language design principles.",
        imgPath: "/images/ojs_brand.png",
        logoPath: "/images/python.png",
        title: "Principles of Programming Languages — Paradigms & Semantics",
        date: "2024 - Present",
        responsibilities: [
            "Compared procedural, functional, logic, and OO paradigms.",
            "Explored static vs dynamic typing, scoping, and evaluation strategies.",
            "Implemented small interpreters/parsers to understand semantics.",
        ],
    },
    {
        review: "Learned how computers are structured from ISA to pipelines and memory hierarchy.",
        imgPath: "/images/ojs_brand.png",
        logoPath: "/images/computer-monitor.png",
        title: "Computer Architecture and Organization — CPU, Memory & I/O",
        date: "2024 - Present",
        responsibilities: [
            "Studied instruction sets, pipelining, and caching.",
            "Analyzed performance with Amdahl's Law and benchmark methods.",
            "Explored buses, I/O, and parallel architectures at a high level.",
        ],
    },
    {
        review: "Practiced software engineering methodologies and teamwork to deliver quality systems.",
        imgPath: "/images/ojs_brand.png",
        logoPath: "/images/software-development.png",
        title: "Software Engineering — SDLC, Testing & Version Control",
        date: "2024 - Present",
        responsibilities: [
            "Applied Agile practices: user stories, sprints, and retrospectives.",
            "Designed architectures and wrote maintainable documentation.",
            "Wrote unit/integration tests and used CI with Git workflows.",
        ],
    },
    {
        review: "Applied physics fundamentals to engineering contexts and problem-solving.",
        imgPath: "/images/ojs_brand.png",
        logoPath: "/images/science-atom-icon.png",
        title: "Physics for Engineers — Mechanics, EM & Waves",
        date: "2024 - Present",
        responsibilities: [
            "Solved problems in kinematics, dynamics, and energy systems.",
            "Explored electricity, magnetism, and basic circuits.",
            "Modeled real-world phenomena using calculus-based physics.",
        ],
    },
    {
        review: "Strengthened CS foundations with logic, proofs, and discrete structures.",
        imgPath: "/images/ojs_brand.png",
        logoPath: "/images/mathematics.png",
        title: "Discrete Mathematics — Logic, Sets, Relations & Graphs",
        date: "2024 - Present",
        responsibilities: [
            "Practiced proofs, induction, and combinatorics.",
            "Worked with graphs, trees, and discrete probability.",
            "Applied discrete math to algorithms and computation.",
        ],
    },
    {
        review: "Implemented classic data structures and algorithms with complexity analysis.",
        imgPath: "/images/ojs_brand.png",
        logoPath: "/images/algorithm-design.png",
        title: "Data Structures and Algorithms — Complexity & Optimization",
        date: "2024 - Present",
        responsibilities: [
            "Built arrays, linked lists, stacks, queues, heaps, and hash tables.",
            "Implemented sorting, searching, and graph algorithms.",
            "Analyzed time/space complexity and trade-offs.",
        ],
    },
    {
        review: "Used statistics to make data-driven decisions in engineering projects.",
        imgPath: "/images/ojs_brand.png",
        logoPath: "/images/growth-icon.png",
        title: "Applied Statistics — Probability, Estimation & Inference",
        date: "2024 - Present",
        responsibilities: [
            "Explored distributions, sampling, and hypothesis testing.",
            "Built confidence intervals and simple regression models.",
            "Interpreted results and communicated findings clearly.",
        ],
    },
    {
        review: "Gained awareness of gender perspectives and equity in society and tech spaces.",
        imgPath: "/images/ojs_brand.png",
        logoPath: "/images/unisex-symbol-color-icon.png",
        title: "Introduction to Gender Studies — Perspectives & Equity",
        date: "2024 - Present",
        responsibilities: [
            "Discussed gender constructs and intersectionality.",
            "Reflected on inclusivity and bias in technology.",
            "Engaged with research, debates, and reflective writing.",
        ],
    },
    {
        review: "Learned to design rigorous studies and evaluate scientific literature.",
        imgPath: "/images/ojs_brand.png",
        logoPath: "/images/find-icon.png",
        title: "Research Methods — Experimental Design & Analysis",
        date: "2023 - Present",
        responsibilities: [
            "Defined research questions and appropriate methodologies.",
            "Collected and analyzed data ethically and systematically.",
            "Reported findings with proper citations and structure.",
        ],
    },
    {
        review: "Modeled systems, captured requirements, and designed solutions with stakeholders.",
        imgPath: "/images/ojs_brand.png",
        logoPath: "/images/android-icon.png",
        title: "Systems Analysis and Design — Requirements & Modeling",
        date: "2024 - Present",
        responsibilities: [
            "Conducted stakeholder interviews and drafted SRS documents.",
            "Created use cases, DFDs, ERDs, and UML diagrams.",
            "Validated designs against constraints and business goals.",
        ],
    },
    {
        review: "Explored the intersection of technology, innovation, and entrepreneurship.",
        imgPath: "/images/ojs_brand.png",
        logoPath: "/images/tech.png",
        title: "Technopreneurship — Innovation, Product & Startup Basics",
        date: "2024 - Present",
        responsibilities: [
            "Identified problems, validated ideas, and defined MVPs.",
            "Developed simple business models and go-to-market plans.",
            "Pitched concepts with prototypes and user feedback.",
        ],
    },
    {
        review: "Built and deployed web applications using modern tools and best practices.",
        imgPath: "/images/ojs_brand.png",
        logoPath: "/images/html-icon.png",
        title: "Web Development — Frontend, Backend & Deployment",
        date: "2025 - Present",
        responsibilities: [
            "Created responsive UIs and accessible components.",
            "Built RESTful APIs and integrated databases.",
            "Deployed apps and automated builds with CI/CD.",
        ],
    },
    {
        review: "Analyzed algorithmic strategies with proofs of correctness and complexity bounds.",
        imgPath: "/images/ojs_brand.png",
        logoPath: "/images/the-algorithms-icon.png",
        title: "Design and Analysis of Algorithms — Strategies & Proofs",
        date: "2023 - Present",
        responsibilities: [
            "Applied divide-and-conquer, greedy, DP, and backtracking.",
            "Proved correctness and derived time/space bounds.",
            "Explored NP-completeness and approximation methods.",
        ],
    },
    {
        review: "Practiced object-oriented thinking and design with reusable, maintainable code.",
        imgPath: "/images/ojs_brand.png",
        logoPath: "/images/java-programming-language-icon.png",
        title: "Object-Oriented Programming (OOP) — Abstraction & Patterns",
        date: "2025 - Present",
        responsibilities: [
            "Used classes, inheritance, polymorphism, and encapsulation.",
            "Applied SOLID principles and basic design patterns.",
            "Refactored code for readability and testability.",
        ],
    },
    {
        review: "Studied how data moves across networks and the protocols that enable the internet.",
        imgPath: "/images/ojs_brand.png",
        logoPath: "/images/globe-network-color-icon.png",
        title: "Data Communications and Computer Networks — Protocols & Routing",
        date: "2023 - Present",
        responsibilities: [
            "Explored OSI/TCP-IP layers, addressing, and switching.",
            "Configured basic networking and analyzed traffic with tools.",
            "Understood routing, congestion, and reliability concepts.",
        ],
    },
    {
        review: "Learned to plan, monitor, and deliver software projects successfully.",
        imgPath: "/images/ojs_brand.png",
        logoPath: "/images/business-women-icon.png",
        title: "Software Project Management — Planning, Risk & Delivery",
        date: "2024 - Present",
        responsibilities: [
            "Created project charters, schedules, and budgets.",
            "Managed risks, scope, and quality with standard frameworks.",
            "Communicated progress and coordinated cross-functional work.",
        ],
    },
    {
        review: "Processed and analyzed images using classical computer vision techniques.",
        imgPath: "/images/ojs_brand.png",
        logoPath: "/images/image-processing.png",
        title: "Digital Image Processing — Filtering, Features & Segmentation",
        date: "2024 - Present",
        responsibilities: [
            "Applied convolutional filters, histogram equalization, and denoising.",
            "Extracted features and performed basic recognition tasks.",
            "Implemented segmentation and morphological operations.",
        ],
    },
    {
        review: "Explored IoT architectures connecting sensors, embedded devices, and cloud services.",
        imgPath: "/images/ojs_brand.png",
        logoPath: "/images/technology.png",
        title: "Internet of Things (IoT) — Sensors, Edge & Cloud",
        date: "2024 - Present",
        responsibilities: [
            "Interfaced with sensors and microcontrollers.",
            "Sent telemetry and managed devices over networks.",
            "Built simple dashboards and alerts for IoT data.",
        ],
    },
    {
        review: "Built fundamentals in AI, covering search, logic, and introductory ML methods.",
        imgPath: "/images/ojs_brand.png",
        logoPath: "/images/AI.png",
        title: "Artificial Intelligence — Search, Knowledge & ML Basics",
        date: "2024 - Present",
        responsibilities: [
            "Implemented search algorithms and heuristics.",
            "Represented knowledge with logic and simple probabilistic models.",
            "Explored supervised learning and evaluation techniques.",
        ],
    },
];

const expLogos = [
    {
        name: "logo1",
        imgPath: "/images/logo1.png",
    },
    {
        name: "logo2",
        imgPath: "/images/logo2.png",
    },
    {
        name: "logo3",
        imgPath: "/images/logos/react.png",
    },
    {
        name: "logo4",
        imgPath: "/images/nethunter.png",
    },
];

const testimonials = [
    {
        name: "Chiedza Miriro",
        mentions: "@Chieshley",
        review:
            "I can’t say enough good things about Kundai. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
        imgPath: "/images/Chiedza.jpg",
    },
    {
        name: "Bryn Saizi",
        mentions: "@brynsaizi",
        review:
            "Working with Kundai was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
        imgPath: "/images/Bryn.jpg",
    },
    {
        name: "Yvonne Mirirayi",
        mentions: "@Yvee2018",
        review:
            "Collaborating with Kundai was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Kundai's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Kundai is the ideal partner.",
        imgPath: "/images/YV.jpg",
    },
    {
        name: "Fancho",
        mentions: "@Fancho",
        review:
            "Kundai was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
        imgPath: "/images/Fancho.jpg",
    },
    {
        name: "Sythia",
        mentions: "@Cee'sBakery",
        review:
            "Kundai’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
        imgPath: "/images/Sythia.jpg",
    },
    {
        name: "Linda",
        mentions: "@linda",
        review:
            "Kundai was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
        imgPath: "/images/linda.jpg",
    },

];

const socialImgs = [
    {
        name: "insta",
        imgPath: "/images/instagram.png",
        url: "https://www.instagram.com/kundaimtombo?igsh=MWFrbzl0ZDFvcmFhOQ==",
    },
    {
        name: "fb",
        imgPath: "/images/facebook.png",
        url: "https://www.facebook.com/profile.php?id=61581983764944",
    },
    {
        name: "x",
        imgPath: "/images/twitter.png",
        url: "https://x.com/Kundy2005",
    },
    {
        name: "linkedin",
        imgPath: "/images/linkedin.png",
        url: "https://www.linkedin.com/in/kundai-ronald-9b8bba365",
    },
    {
        name: "github",
        imgPath: "/images/github-icon.png",
        url: "https://github.com/kundaironald2005-svg",
    },
    {
        name: "WhatsApp",
        imgPath: "/images/whatsapp-business-icon.png",
        url: "https://wa.me/+263787716739",
    },
];

export {
    words,
    abilities,
    logoIconsList,
    counterItems,
    expCards,
    expLogos,
    testimonials,
    socialImgs,
    techStackIcons,
    techStackImgs,
    navLinks,
};
