const currentPath = window.location.pathname;

document.querySelectorAll('.nav-links a').forEach(link => {
  const href = link.getAttribute('href');

  if (href === currentPath || (href !== '/' && currentPath.startsWith(href))) {
    link.classList.add('active');
  } else {
    link.classList.remove('active');
  }
});

const projects = [
  {
    id: 1,
    title: "Hand Rehabilitation Game (Graduation Project)",
    description: " Developed an interactive rehabilitation game controlled via hand gestures using a camera-based input system using OpenCV Published the research findings in the International Journal of Digital Waste Engineering (IJDWE) with the title: Web Camera-Based Gamified Rehabilitation System for Improving Fine Motor Skills: Pilot Study",
    technologies: ["Python", "Unity", "OpenCV"],
    link: "https://github.com/zuleyhasen/Hand-Rehabilitation-Game",
    demo: "/images-videos/hand-rehab-demo.mp4",
    image: "/images-videos/game.png"
  },
  {
    id: 2,
    title: "Library Automation System (Internship Project)",
    description: "Developed a library management system during an internship using the MVC architecture and .NET technologies, gaining hands-on experience in back-end development and system management.",
    technologies: [".NET", "MVC", "SQL Server Management"],
    link: null,
    demo: null,
    image: "/images-videos/gnc-library.png"
  },
  {
    id: 3,
    title: "ERP System Design (Summer Project)",
    description: "Collaborated with a team to design and develop an ERP application for Senna Design, under the guidance of a faculty mentor.",
    technologies: ["ReactNative", "PHP", "Android Studio"],
    link: "https://github.com/zuleyhasen/ReactNative-ERP-Mobile-App",
    demo: "/images-videos/sennaERP.mp4",
    image: "/images-videos/senna.png"
  },
  {
    id: 4,
    title: "Pizza Order System",
    description: "Designed a Pizza Order System using Python as part of Akbank Python Bootcamp, implementing object-oriented principles and decorators to handle different pizza bases and toppings, allowing dynamic calculation of order cost and description.",
    technologies: ["Python"],
    link: "https://github.com/zuleyhasen/PizzaOrderSystem",
    demo: null,
    image: "/images-videos/pizza.png"
  },
  {
    id: 5,
    title: "Strategic Move AI Game",
    description: "This project is an AI-powered strategy board game developed in C language.  The player and the computer compete on a 7x7 grid, each trying to outmaneuver the other by strategically moving their pieces.  The computer’s decisions are guided by the Minimax algorithm with Alpha-Beta Pruning and a custom heuristic evaluation function.",
    technologies: ["Searching algorithm", "C"],
    link: "https://github.com/zuleyhasen/Strategic-Move-AI-Game",
    demo: null,
    image: "/images-videos/searching.png"
  },
  {
    id: 6,
    title: "Python-to-C Translator (Lex & Yacc Project)",
    description: "This project implements a simple compiler that translates a Python-like indentation-based language into C code using Lex and Yacc.",
    technologies: ["Lex", "Yacc"],
    link: "https://github.com/zuleyhasen/python_to_c_compiler",
    demo: null,
    image: "/images-videos/Generated.png"
  }
];


const grid = document.getElementById('projects-grid');

projects.forEach(project => {
  const article = document.createElement('article');
  article.classList.add('project-card');

  article.innerHTML = `
    <div class="project-image-wrapper">
      <img src="${project.image}" alt="${project.title}" class="project-image" />
      <div class="project-overlay">
        <div class="overlay-content">
          <p class="overlay-description">${project.description}</p>
        </div>
      </div>
    </div>
    <div class="project-content">
      <h2>${project.title}</h2>
      <div class="technologies">
        ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
      </div>
      <div class="project-links">
        ${project.link ? `<a href="${project.link}" target="_blank" class="project-link">View Code</a>` : ''}
        ${project.demo ? `<a href="${project.demo}" target="_blank" class="project-link demo">Demo Video</a>` : ''}
      </div>
    </div>
  `;

  grid.appendChild(article);
});


