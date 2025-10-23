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
    image: "https://private-user-images.githubusercontent.com/111359587/351712308-f7acd059-b06b-47ff-b384-e68b4c92aa70.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjEyNDk5MzQsIm5iZiI6MTc2MTI0OTYzNCwicGF0aCI6Ii8xMTEzNTk1ODcvMzUxNzEyMzA4LWY3YWNkMDU5LWIwNmItNDdmZi1iMzg0LWU2OGI0YzkyYWE3MC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUxMDIzJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MTAyM1QyMDAwMzRaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1lNjM4MDc5NjNkNzYwZDAzMTdiN2YwOTkyZDg3YWQyOTM2OTAwMjg0NDU0ZDZjZGY1MDVhYzkwNWUyYmRhZDRlJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.ahS2FKXjbvVPdsYgKOlFOMQEcRIlMOCrr3-TPekLluM"
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
    link: null,
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


