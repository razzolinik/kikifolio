import { Code, Server, Database, Wrench, Users, Shield } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const skillCategories = [
  {
    title: 'Frontend',
    icon: Code,
    skills: ['React', 'Vite', 'Tailwind CSS', 'TypeScript', 'JavaScript', 'HTML/CSS'],
  },
  {
    title: 'Backend',
    icon: Server,
    skills: ['Node.js', 'Express', 'REST APIs', 'Java', 'C'],
  },
  {
    title: 'Databases',
    icon: Database,
    skills: ['MongoDB', 'MySQL', 'PostgreSQL'],
  },
  {
    title: 'Tools & DevOps',
    icon: Wrench,
    skills: ['Git', 'Docker', 'Postman', 'VS Code', 'Linux'],
  },
  {
    title: 'Soft Skills',
    icon: Users,
    skills: ['Teamwork', 'Communication', 'Problem-solving', 'Leadership', 'Scrum', 'Agile'],
  },
  {
    title: 'Others',
    icon: Shield,
    skills: ['UI/UX Design', 'Cybersecurity', 'Design Patterns', 'Algorithms', 'QA Testing'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-secondary text-secondary-foreground relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-0 w-64 h-64 rounded-full bg-pink/10 blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 rounded-full bg-pink-light/10 blur-3xl" />

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-pink text-sm tracking-widest uppercase font-medium">What I Do</span>
            <h2 className="text-4xl md:text-5xl font-display font-light mt-2">
              Skills & <span className="italic">Technologies</span>
            </h2>
          </div>
        </ScrollReveal>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <ScrollReveal key={category.title} delay={index * 100}>
              <div className="glass-panel-dark rounded-2xl p-6 h-full hover:-translate-y-2 transition-all duration-500 group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-pink/20 flex items-center justify-center group-hover:glow-soft transition-all">
                    <category.icon className="w-5 h-5 text-pink" />
                  </div>
                  <h3 className="text-xl font-display">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-full bg-secondary-foreground/10 text-secondary-foreground/80 text-sm hover:bg-pink/20 hover:text-pink transition-colors duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
