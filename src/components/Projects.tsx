import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import vwPreview from '@/assets/vw-preview.png';
import pescandoPreview from '@/assets/pescando-preview.png';
import wisteriaPreview from '@/assets/wisteria-preview.png';
import fastnotesPreview from '@/assets/fn-preview.png';
import mallaPreview from '@/assets/malla-preview.png';

const projects = [
  {
    id: 1,
    title: 'Tu Volkswagen hoy : Volkswagen Sales Advisor Platform',
    description: 'Web page solution with React, Node.js, Tailwind and Typescript. Features include vehicle catalog, contact forms and product information. Domain setup and deployment included with Vercel.',
    tech: ['React', 'Node.js', 'TailwindCSS', 'TypeScript', 'Vercel'],
    demoUrl: 'https://razzoliniventas.com/',
    githubUrl: 'https://github.com/razzolinik/razzolini-vw',
    gradient: 'from-pink-light/60 to-accent/60',
    image: vwPreview,
  },
  {
    id: 2,
    title: 'Pescando : Habit and Productivity Tracker',
    description: 'Final project for web development course. A habit tracker app built with MERN stack. Features include user authentication, habit creation, progress tracking, and data visualization.',
    tech: ['React', 'TailwindCSS', 'Express', 'MongoDB', 'Node.js', 'Postman', 'Vite'],
    demoUrl: 'https://github.com/LautaroZ01/pescando-client',
    githubUrl: 'https://github.com/LautaroZ01/pescando-server',
    gradient: 'from-accent/60 to-pink/40',
    image: pescandoPreview,
  },
  {
    id: 3,
    title: 'Wisteria : Small Bussiness Welcome Site',
    description: 'Landing page for a small business using React, TailwindCSS and TypeScript. Showcases services, portfolio, and contact information with responsive design. Deployed on Netlify.',
    tech: ['TypeScript', 'React', 'TailwindCSS', 'Netlify'],
    demoUrl: 'https://wisteriatienda.netlify.app/',
    githubUrl: 'https://github.com/razzolinik/wisteria-tiendadeco',
    gradient: 'from-pink/40 to-pink-light/60',
    image: wisteriaPreview,
  },
  {
    id: 4,
    title: 'FastNotes : Java EE Note Taking App',
    description: 'A full-featured note-taking web application built with Java EE, JSP, and Servlets. Features user login, CRUD operations for notes, rich text.',
    tech: ['Java EE', 'JSP', 'Servlets', 'MySQL', 'GlassFish'],
    demoUrl: 'https://github.com/razzolinik/FastNotes',
    githubUrl: 'https://github.com/razzolinik/FastNotes',
    gradient: 'from-pink-light/50 to-accent/50',
    image: fastnotesPreview,
  },
  {
    id: 5,
    title: 'Interactive Curriculum Viewer for my degree program',
    description: 'A web application that allows students to explore and visualize their curriculum interactively. Built with Javascript, HTML and CSS, featuring dynamic course maps and progress tracking.',
    tech: ['JavaScript', 'HTML', 'CSS'],
    demoUrl: 'https://razzolinik.github.io/MallaInteractivaPUI/',
    githubUrl: 'https://github.com/razzolinik/MallaInteractivaPUI',
    gradient: 'from-accent/50 to-pink-light/50',
    image: mallaPreview,
  },
  {
    id: 6,
    title: 'Project Coming Soon',
    description: 'Work in progress! Stay tuned for this Gym and Spa Web landing page',
    tech: ['React', 'TypeScript', 'Tailwind'],
    demoUrl: '#',
    githubUrl: '#',
    gradient: 'from-pink/50 to-accent/60',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-80 h-80 rounded-full bg-pink-light/20 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-accent/30 blur-3xl" />

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-pink text-sm tracking-widest uppercase font-medium">My Work</span>
            <h2 className="text-4xl md:text-5xl font-display font-light mt-2">
              Featured <span className="italic">Projects</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              A collection of projects showcasing my skills in web development, design, and problem-solving.
            </p>
          </div>
        </ScrollReveal>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 100}>
              <article className="project-card group h-full">
                {/* Image/Preview Area */}
                <div className={`aspect-video relative overflow-hidden rounded-t-3xl bg-gradient-to-br ${project.gradient}`}>
                  {/* Imagen de preview */}
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    // Fallback si no hay imagen: el número como ahora
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl font-display italic text-foreground/10">
                        {project.id.toString().padStart(2, '0')}
                      </div>
                    </div>
                  )}

                  {/* Degradado suave encima para que combine con tu estética */}
                  <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-transparent to-background/20" />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-secondary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <a
                      href={project.demoUrl}
                      className="w-12 h-12 rounded-full bg-secondary-foreground text-secondary flex items-center justify-center hover:scale-110 transition-transform"
                      aria-label="View Demo"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="w-12 h-12 rounded-full bg-secondary-foreground text-secondary flex items-center justify-center hover:scale-110 transition-transform"
                      aria-label="View Code"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>


                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-display font-medium mb-2 group-hover:text-pink transition-colors flex items-center gap-2">
                    {project.title}
                    <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
