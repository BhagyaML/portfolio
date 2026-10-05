export const personalInfo = {
  name: "Thirunam Bhagyasri",
  nickname: "Bhagyasri",
  title: "Computer Science & Engineering Graduate | Software Developer",
  tagline: "Motivated and detail-oriented developer specializing in Python, Java, MySQL, Web Technologies, and Machine Learning.",
  shortBio: "Computer Science and Engineering graduate from Gokula Krishna College of Engineering with an 8.23 CGPA. Passionate about architecting scalable software solutions, writing clean object-oriented code, building resilient databases, and applying machine learning to real-world cybersecurity challenges.",
  email: "bhagyasrithirunam@gmail.com",
  phone: "+91 8121305330",
  location: "Andhra Pradesh, India",
  college: "Gokula Krishna College of Engineering",
  cgpa: "8.23 / 10.0",
  graduationYear: "2026",
  github: "https://github.com/bhagyasri-thirunam",
  linkedin: "https://linkedin.com/in/bhagyasri-thirunam",
  availableForWork: true,
  statusText: "Open to Full-Time Software Engineering & Developer Roles",
};

export const stats = [
  { label: "B.Tech CGPA", value: "8.23", unit: "/10", detail: "Gokula Krishna College of Engg." },
  { label: "Intermediate", value: "96.1%", unit: "Score", detail: "961 / 1000 in MPC" },
  { label: "Internship", value: "1", unit: "Completed", detail: "Software Dev at Invezoro" },
  { label: "Key Technologies", value: "10+", unit: "Tools", detail: "Java, Python, MySQL & More" },
];

export const coreStrengths = [
  {
    id: "oop",
    title: "Object-Oriented Programming (OOP)",
    icon: "Boxes",
    description: "Deep expertise in core Java and Python OOP principles including Abstraction, Encapsulation, Inheritance, and Polymorphism to architect maintainable, modular software.",
    skills: ["Java", "Python", "Class Hierarchy", "Design Patterns", "Clean Code"],
  },
  {
    id: "problem-solving",
    title: "Problem Solving & Data Structures",
    icon: "Cpu",
    description: "Strong analytical acumen applied to algorithmic challenges, data structures (Arrays, Linked Lists, Trees, Stacks, Queues), and space-time complexity optimization.",
    skills: ["DSA", "Time Complexity", "Algorithms", "Debugging", "Code Optimization"],
  },
  {
    id: "databases",
    title: "Database Management & SQL",
    icon: "Database",
    description: "Proficient in relational database design, ER modeling, schema normalization (1NF to BCNF), indexing, ACID compliance, and JDBC integration in enterprise apps.",
    skills: ["MySQL", "Relational Modeling", "ACID", "JDBC", "Query Optimization"],
  },
  {
    id: "software-engineering",
    title: "Software Engineering Lifecycle",
    icon: "Layers",
    description: "Hands-on experience across the entire SDLC—from requirements gathering and modular design to testing, team documentation, and version-controlled deployment.",
    skills: ["SDLC", "Agile Basics", "Unit Testing", "Git / GitHub", "Documentation"],
  },
  {
    id: "ml-cybersecurity",
    title: "Machine Learning & Cybersecurity",
    icon: "ShieldCheck",
    description: "Applied machine learning for cyber defense, static/dynamic feature engineering from APK permissions and API calls, and classification model benchmarking.",
    skills: ["Scikit-Learn", "Feature Engineering", "Malware Classification", "Data Preprocessing", "Evaluation Metrics"],
  },
];

export const skillCategories = [
  { id: "all", label: "All Skills" },
  { id: "languages", label: "Programming Languages" },
  { id: "web-db", label: "Web & Databases" },
  { id: "core", label: "Core Concepts" },
  { id: "tools", label: "Tools & Platforms" },
  { id: "soft", label: "Soft Skills" },
];

export const skillsData = [
  // Programming Languages
  {
    name: "Python",
    category: "languages",
    level: "Advanced",
    percentage: 88,
    icon: "Code2",
    color: "from-blue-500 to-yellow-500",
    description: "Data processing, Machine Learning models (Scikit-Learn, Pandas, NumPy), automation scripts, and algorithmic problem solving.",
    tags: ["Data Preprocessing", "ML Classification", "Scripting", "OOP"],
  },
  {
    name: "Java",
    category: "languages",
    level: "Advanced",
    percentage: 85,
    icon: "Coffee",
    color: "from-red-500 to-orange-500",
    description: "Object-Oriented Programming, Collections framework, Exception handling, Multithreading, and JDBC database connectivity.",
    tags: ["Core Java", "JDBC", "OOP", "Banking System", "Eclipse IDE"],
  },

  // Web & Databases
  {
    name: "MySQL",
    category: "web-db",
    level: "Advanced",
    percentage: 86,
    icon: "Database",
    color: "from-sky-500 to-blue-600",
    description: "Complex SQL queries, joins, indexes, stored procedures, schema normalization, and transactional integrity (ACID).",
    tags: ["Relational DB", "JDBC Integration", "Normalization", "CRUD"],
  },
  {
    name: "HTML5",
    category: "web-db",
    level: "Proficient",
    percentage: 90,
    icon: "Globe",
    color: "from-orange-500 to-amber-500",
    description: "Semantic markup, modern web standards, accessibility (a11y), responsive structures, and SEO best practices.",
    tags: ["Semantic HTML", "Web Forms", "SEO", "Accessibility"],
  },
  {
    name: "CSS3",
    category: "web-db",
    level: "Proficient",
    percentage: 85,
    icon: "Palette",
    color: "from-blue-400 to-indigo-500",
    description: "Responsive layouts, Flexbox, CSS Grid, custom transitions, animations, and modern utility classes.",
    tags: ["Flexbox", "Grid", "Animations", "Tailwind CSS"],
  },
  {
    name: "JavaScript",
    category: "web-db",
    level: "Proficient",
    percentage: 80,
    icon: "FileCode",
    color: "from-yellow-400 to-amber-500",
    description: "DOM manipulation, ES6+ syntax, asynchronous programming, client-side validation, and interactive components.",
    tags: ["ES6+", "DOM", "Async/Await", "React.js"],
  },

  // Core Concepts
  {
    name: "Object-Oriented Programming (OOP)",
    category: "core",
    level: "Expert",
    percentage: 92,
    icon: "Boxes",
    color: "from-purple-500 to-pink-500",
    description: "Encapsulation, Inheritance, Polymorphism, and Abstraction applied across enterprise Java applications and Python systems.",
    tags: ["Encapsulation", "Polymorphism", "Abstraction", "Design Patterns"],
  },
  {
    name: "DBMS & Relational Architecture",
    category: "core",
    level: "Advanced",
    percentage: 88,
    icon: "Server",
    color: "from-cyan-500 to-blue-500",
    description: "Entity-Relationship modeling, relational algebra, concurrency control, transaction isolation levels, and indexing.",
    tags: ["ER Modeling", "Transactions", "ACID", "Normalization"],
  },
  {
    name: "Data Structures & Algorithms",
    category: "core",
    level: "Proficient",
    percentage: 82,
    icon: "Binary",
    color: "from-emerald-500 to-teal-500",
    description: "Arrays, Linked Lists, Stacks, Queues, Binary Trees, Searching, Sorting, and Big-O complexity analysis.",
    tags: ["Arrays", "Linked Lists", "Trees", "Sorting Algorithms"],
  },
  {
    name: "Basic Machine Learning",
    category: "core",
    level: "Proficient",
    percentage: 80,
    icon: "Brain",
    color: "from-violet-500 to-purple-600",
    description: "Supervised classification algorithms, data preprocessing, feature engineering, and model evaluation metrics (Confusion Matrix, ROC).",
    tags: ["Random Forest", "SVM", "Decision Trees", "Feature Selection"],
  },

  // Tools & Platforms
  {
    name: "Git & GitHub",
    category: "tools",
    level: "Proficient",
    percentage: 85,
    icon: "GitBranch",
    color: "from-gray-700 to-gray-900",
    description: "Version control, branching strategies, collaborative workflows, pull requests, and repository maintenance.",
    tags: ["Version Control", "Collaboration", "Branches", "Code Review"],
  },
  {
    name: "Linux",
    category: "tools",
    level: "Proficient",
    percentage: 78,
    icon: "Terminal",
    color: "from-yellow-600 to-amber-700",
    description: "Command-line navigation, shell utilities, file permissions, environment configuration, and process management.",
    tags: ["CLI", "Bash Basics", "File Permissions", "Shell Tools"],
  },
  {
    name: "Eclipse IDE",
    category: "tools",
    level: "Advanced",
    percentage: 88,
    icon: "Code",
    color: "from-indigo-600 to-purple-700",
    description: "Primary development environment for Java projects, debugging, build management, and JDBC integration.",
    tags: ["Java Development", "Debugging", "Classpath", "Build Tools"],
  },
  {
    name: "Microsoft Office Suite",
    category: "tools",
    level: "Advanced",
    percentage: 92,
    icon: "FileSpreadsheet",
    color: "from-emerald-600 to-teal-700",
    description: "Microsoft Word (technical documentation), Excel (data organization & formulas), PowerPoint (project presentations).",
    tags: ["Word", "Excel Formulas", "PowerPoint", "Documentation"],
  },

  // Soft Skills
  {
    name: "Communication",
    category: "soft",
    level: "Expert",
    percentage: 94,
    icon: "MessageSquare",
    color: "from-sky-400 to-blue-500",
    description: "Clear articulation of technical concepts, active listening, and concise technical documentation writing.",
    tags: ["Technical Writing", "Presentations", "Active Listening"],
  },
  {
    name: "Teamwork & Collaboration",
    category: "soft",
    level: "Expert",
    percentage: 95,
    icon: "Users",
    color: "from-emerald-400 to-green-500",
    description: "Proven ability to thrive in agile team environments, pair-programming, and cross-functional project collaboration.",
    tags: ["Peer Review", "Agile Mindset", "Coordination"],
  },
  {
    name: "Time Management",
    category: "soft",
    level: "Advanced",
    percentage: 90,
    icon: "Clock",
    color: "from-amber-400 to-orange-500",
    description: "Effective prioritization of project milestones, meeting tight deadlines, and structured schedule management.",
    tags: ["Prioritization", "Sprint Planning", "Goal Tracking"],
  },
  {
    name: "Problem Solving",
    category: "soft",
    level: "Expert",
    percentage: 92,
    icon: "Lightbulb",
    color: "from-purple-400 to-indigo-500",
    description: "Methodical root-cause analysis, breaking down complex engineering requirements into achievable modules.",
    tags: ["Root Cause Analysis", "Logical Reasoning", "Creativity"],
  },
];

export const experienceData = [
  {
    id: "invezoro-internship",
    role: "Software Developer Intern",
    project: "Bank Account Management System",
    company: "Invezoro",
    duration: "May 2025 – July 2025",
    type: "Internship (3 Months)",
    location: "Remote / Hybrid",
    technologies: ["Java", "MySQL", "JDBC", "OOP Architecture", "Eclipse IDE", "Git"],
    overview: "Spearheaded the development of a secure, multi-tier banking application designed for robust transaction processing, high reliability, and real-time data persistence.",
    responsibilities: [
      "Architected and implemented a robust Java-based banking application strictly applying Object-Oriented Programming (OOP) principles—encapsulation of accounts, polymorphism for transaction types, and class abstraction.",
      "Integrated MySQL relational database via JDBC (Java Database Connectivity) to ensure secure, real-time persistence of user records, account balances, and audit logs.",
      "Engineered core banking business logic including dynamic account creation, debit/credit transaction processing with balance validation, and live statement tracking.",
      "Implemented ACID transaction guarantees (commit & rollback) to prevent data corruption during concurrent fund transfers.",
      "Conducted rigorous systematic unit testing, boundary-value validation, debugging in Eclipse IDE, and comprehensive technical documentation.",
      "Collaborated actively with peer developers and mentors in code reviews and sprint discussions, adhering to industry clean-code standards.",
    ],
    achievements: [
      "Maintained 100% data integrity across all simulated concurrent banking transaction tests.",
      "Reduced query execution latency by indexing primary account and transaction lookup columns.",
      "Earned official Certificate of Completion with commendation for technical discipline and code quality.",
    ],
    certificateTitle: "Bank Account Management System Internship Certificate",
    issuer: "Invezoro",
  },
];

export const projectsData = [
  {
    id: "malware-detection",
    title: "Malware Detection in Android Applications Using Machine Learning",
    badge: "Featured Flagship Project",
    category: "Machine Learning & Cybersecurity",
    period: "Academic Capstone",
    techStack: ["Python", "Machine Learning", "Scikit-Learn", "Pandas", "NumPy", "Data Preprocessing", "Classification Algorithms", "Cybersecurity"],
    shortDesc: "Engineered an intelligent ML system that detects and classifies Android malware by analyzing application permissions, intent filters, and API call behavior patterns.",
    fullDesc: "Android mobile applications frequently face sophisticated malware threats including trojans, adware, and spyware. This research and development project engineered an automated machine learning classification pipeline capable of distinguishing benign applications from malicious APKs with high precision, without requiring dynamic sandbox execution.",
    highlights: [
      "Curated and preprocessed large-scale Android APK datasets containing thousands of permission vectors and API invocation features.",
      "Conducted extensive feature engineering, removing redundant attributes via Chi-Square and Mutual Information selection to prevent overfitting.",
      "Trained and cross-validated multiple supervised classification algorithms: Random Forest, Support Vector Machine (SVM), Decision Tree, and Logistic Regression.",
      "Random Forest classifier achieved top detection performance with >96% accuracy and high recall against stealthy malicious samples.",
      "Evaluated models using industry-standard metrics: Precision, Recall, F1-Score, Confusion Matrix, and ROC-AUC curve analysis.",
    ],
    architecture: [
      { step: "Data Collection", desc: "Parsed manifest files & DEX bytecode to extract permissions, intents, and API calls." },
      { step: "Data Preprocessing", desc: "Handled missing data, label encoding, and vectorized 200+ discrete binary features." },
      { step: "Feature Selection", desc: "Applied statistical feature ranking to retain the top discriminative malware indicators." },
      { step: "Model Training", desc: "Trained Random Forest, Decision Tree, SVM, and Logistic Regression with K-Fold cross-validation." },
      { step: "Performance Evaluation", desc: "Validated model on unseen test sets, achieving optimal balance between False Positives and False Negatives." },
    ],
    metrics: [
      { label: "Model Accuracy", value: "96.4%" },
      { label: "F1-Score", value: "0.96" },
      { label: "ROC-AUC Score", value: "0.98" },
      { label: "False Positive Rate", value: "< 2.1%" },
    ],
    codeSnippet: `# Random Forest Training Pipeline
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import classification_report, roc_auc_score

# Split features & labels
X_train, X_test, y_train, y_test = train_test_split(
    features_selected, labels, test_size=0.25, random_state=42
)

# Initialize & Train Classifier
rf_model = RandomForestClassifier(
    n_estimators=150, max_depth=16, random_state=42
)
rf_model.fit(X_train, y_train)

# Evaluation
y_pred = rf_model.predict(X_test)
print(classification_report(y_test, y_pred))
print("ROC-AUC:", roc_auc_score(y_test, rf_model.predict_proba(X_test)[:, 1]))`,
    githubLink: "https://github.com/bhagyasri-thirunam/android-malware-detection-ml",
    demoLink: "#",
    featured: true,
  },
  {
    id: "bank-account-system",
    title: "Bank Account Management System",
    badge: "Industry Project",
    category: "Core Java & Database Engineering",
    period: "Invezoro Internship (May 2025 – July 2025)",
    techStack: ["Java", "MySQL", "JDBC", "OOP Architecture", "Eclipse IDE", "SQL Transactions"],
    shortDesc: "Enterprise Java banking application supporting secure account creation, transaction processing, real-time balance tracking, and JDBC database persistence.",
    fullDesc: "A complete, production-structured banking system built during the Software Developer internship at Invezoro. It implements a layered architecture separating business logic, data access objects (DAO), and relational database schemas to provide a safe, scalable banking transaction engine.",
    highlights: [
      "Engineered secure customer authentication, account generation, and pin validation modules.",
      "Implemented atomic fund transfer transactions using SQL commit and rollback mechanics to prevent partial deductions.",
      "Integrated JDBC connection pooling to optimize database throughput and reduce latency under concurrent queries.",
      "Designed full transaction history audit logging with timestamped receipts and balance verification.",
    ],
    architecture: [
      { step: "UI / CLI Layer", desc: "User input validation, interactive menu routing, and error feedback." },
      { step: "Service Layer", desc: "Business rules: minimum balance check, overdraft limits, and fund transfer verification." },
      { step: "DAO Layer", desc: "JDBC PreparedStatement abstractions protecting against SQL injection." },
      { step: "MySQL Engine", desc: "Normalized relational schema (Customers, Accounts, Transactions, AuditLogs)." },
    ],
    metrics: [
      { label: "Data Consistency", value: "100%" },
      { label: "ACID Compliance", value: "Strict" },
      { label: "Zero SQL Injection", value: "Protected" },
      { label: "Modules Tested", value: "8/8 Pass" },
    ],
    codeSnippet: `// Secure Transaction with Commit/Rollback
public boolean transferFunds(int senderAcc, int receiverAcc, double amount) {
    String debitSql = "UPDATE accounts SET balance = balance - ? WHERE account_no = ?";
    String creditSql = "UPDATE accounts SET balance = balance + ? WHERE account_no = ?";
    try {
        connection.setAutoCommit(false);
        // Execute debit
        try (PreparedStatement psDebit = connection.prepareStatement(debitSql)) {
            psDebit.setDouble(1, amount);
            psDebit.setInt(2, senderAcc);
            psDebit.executeUpdate();
        }
        // Execute credit
        try (PreparedStatement psCredit = connection.prepareStatement(creditSql)) {
            psCredit.setDouble(1, amount);
            psCredit.setInt(2, receiverAcc);
            psCredit.executeUpdate();
        }
        connection.commit();
        return true;
    } catch (SQLException e) {
        connection.rollback();
        return false;
    }
}`,
    githubLink: "https://github.com/bhagyasri-thirunam/bank-account-management-system",
    demoLink: "#",
    featured: true,
  },
  {
    id: "developer-portfolio",
    title: "Modern Interactive Developer Portfolio",
    badge: "Web Platform",
    category: "Full Stack & Web Development",
    period: "2026",
    techStack: ["React 19", "Tailwind CSS", "Framer Motion", "Vite", "JavaScript ES6+"],
    shortDesc: "High-performance, fully responsive modern portfolio web application featuring dark/light theming, micro-interactions, modal explorations, and resume generation.",
    fullDesc: "Built with modern front-end technologies focusing on visual excellence, accessibility, mobile responsiveness, and delightful user experience. Features rich interactive modals, skill filtering, copy-to-clipboard actions, and client-validated contact mechanisms.",
    highlights: [
      "Custom responsive design system with sleek dark mode and vibrant violet/teal gradients.",
      "Modular React architecture with reusable components and smooth Framer Motion entrance transitions.",
      "Accessible contact form with instant validation, toast feedback, and confetti celebration triggers.",
      "Integrated printable resume engine and certificate verification showcase.",
    ],
    architecture: [
      { step: "Design System", desc: "Glassmorphism, curated dark palette, and fluid typography." },
      { step: "Interactive State", desc: "Theme persistence, dynamic filter tabs, and modal controllers." },
      { step: "Performance", desc: "Sub-2 second bundle load with zero external layout shifts." },
    ],
    metrics: [
      { label: "Lighthouse Performance", value: "98+" },
      { label: "Responsive Layouts", value: "Mobile/Desktop" },
      { label: "Theme Modes", value: "Dark & Light" },
    ],
    codeSnippet: `// Dynamic Theme Toggle with LocalStorage Sync
const [theme, setTheme] = useState(() => {
  return localStorage.getItem('theme') || 'dark';
});

useEffect(() => {
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
  localStorage.setItem('theme', theme);
}, [theme]);`,
    githubLink: "https://github.com/bhagyasri-thirunam/bhagyasri-portfolio",
    demoLink: "#",
    featured: false,
  },
];

export const educationData = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "Gokula Krishna College of Engineering",
    duration: "2022 – 2026",
    score: "CGPA: 8.23 / 10.0",
    status: "Final Year Student",
    highlights: [
      "Maintained a consistently high academic standing with 8.23 CGPA across all engineering semesters.",
      "Specialized in core computer science disciplines: Object-Oriented Programming with Java, Database Management Systems, Data Structures & Algorithms, Operating Systems, Computer Networks, and Machine Learning.",
      "Participated actively in technical symposia, departmental coding contests, and software development workshops.",
      "Completed hands-on capstone project on ML-based Android Malware Detection.",
    ],
  },
  {
    degree: "Higher Secondary Certificate (Intermediate - MPC)",
    institution: "Sri Chaitanya Junior College, Tirupati",
    duration: "2019 – 2021",
    score: "961 / 1000 (96.1%)",
    status: "Completed with Distinction",
    highlights: [
      "Achieved outstanding academic score of 961 out of 1000 (96.1%) in Mathematics, Physics, and Chemistry stream.",
      "Developed deep mathematical foundations, problem-solving skills, and analytical reasoning.",
    ],
  },
  {
    degree: "Secondary School Certificate (SSC - 10th Class)",
    institution: "Z.P.H. Girls High School, Chandragiri",
    duration: "2018 – 2019",
    score: "GPA: 9.7 / 10.0",
    status: "Completed with Highest Honors",
    highlights: [
      "Graduated at the top of the cohort with a near-perfect 9.7 out of 10.0 GPA.",
      "Honored with academic excellence recognition for leadership and scholastic distinction.",
    ],
  },
];

export const certificationsData = [
  {
    id: "nptel-cloud",
    title: "NPTEL – Cloud Computing",
    issuer: "NPTEL / IIT Kharagpur (Ministry of Education, Govt. of India)",
    year: "2024",
    skills: ["Cloud Architecture", "Virtualization", "SaaS / PaaS / IaaS", "Distributed Computing", "Resource Scheduling"],
    description: "Rigorous 12-week national certification covering cloud computing architectures, cloud service models, virtualization primitives, cloud security mechanisms, and large-scale distributed systems.",
    badgeColor: "from-sky-500 to-blue-600",
    status: "Verified Certificate",
  },
  {
    id: "nptel-arch",
    title: "NPTEL – Advanced Computer Architecture",
    issuer: "NPTEL / IIT Madras (Ministry of Education, Govt. of India)",
    year: "2024",
    skills: ["Pipelining", "Instruction-Level Parallelism", "Memory Hierarchy", "Cache Optimization", "Multiprocessors"],
    description: "Comprehensive national certification exploring advanced microarchitecture concepts: superscalar processor pipelines, branch prediction, cache memory coherency protocols, and parallel computing architectures.",
    badgeColor: "from-purple-500 to-indigo-600",
    status: "Verified Certificate",
  },
  {
    id: "invezoro-cert",
    title: "Bank Account Management System Internship Certification",
    issuer: "Invezoro",
    year: "2025",
    skills: ["Java OOP", "MySQL Relational DB", "JDBC", "Software Testing", "Agile Collaboration"],
    description: "Awarded upon successful completion of software development internship at Invezoro, recognizing significant engineering contributions to the Java-based banking and transaction management system.",
    badgeColor: "from-emerald-500 to-teal-600",
    status: "Industry Credential",
  },
];
