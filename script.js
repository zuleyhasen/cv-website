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
        title: "Project Title 1",
        description: "A comprehensive description of your project. Explain the problem it solves, technologies used, and your role in the project.",
        technologies: ["React", "Node.js", "PostgreSQL"],
        link: "https://github.com/yourusername/project1",
        demo: "https://project1-demo.com",
        image: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
        id: 2,
        title: "Project Title 2",
        description: "Another exciting project showcasing your skills in different areas. Highlight key features and achievements.",
        technologies: ["Python", "Django", "Machine Learning"],
        link: "https://github.com/yourusername/project2",
        demo: null,
        image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
        id: 3,
        title: "Project Title 3",
        description: "A challenging project that demonstrates your problem-solving abilities and technical expertise.",
        technologies: ["TypeScript", "Astro", "Tailwind"],
        link: "https://github.com/yourusername/project3",
        demo: "https://project3-demo.com",
        image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
        id: 4,
        title: "Project Title 4",
        description: "An innovative solution to a real-world problem, showcasing full-stack development skills.",
        technologies: ["Vue.js", "Express", "MongoDB"],
        link: "https://github.com/yourusername/project4",
        demo: "https://project4-demo.com",
        image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800"
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
          <h3>${project.title}</h3>
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
        <a href="${project.link}" target="_blank" class="project-link">View Code</a>
        ${project.demo ? `<a href="${project.demo}" target="_blank" class="project-link demo">Live Demo</a>` : ''}
      </div>
    </div>
  `;

    grid.appendChild(article);
});


