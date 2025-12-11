import { GraduationCap, Award, BookOpen } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Education = () => {
  return (
    <section id="education" className="section-padding bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-pink-light/20 blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 rounded-full bg-accent/30 blur-3xl" />

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-pink text-sm tracking-widest uppercase font-medium">Background</span>
            <h2 className="text-4xl md:text-5xl font-display font-light mt-2">
              Education & <span className="italic">Training</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* University */}
          <ScrollReveal delay={100}>
            <div className="glass-panel rounded-2xl p-8 h-full hover:-translate-y-2 transition-all duration-500 group">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-full bg-pink/20 flex items-center justify-center flex-shrink-0 group-hover:glow-soft transition-all">
                  <GraduationCap className="w-7 h-7 text-pink" />
                </div>
                <div>
                  <span className="text-sm text-muted-foreground">University Studies</span>
                  <h3 className="text-xl font-display font-medium mt-1">
                    Associate's Degree in Computer Programming
                  </h3>
                  <p className="text-pink font-medium mt-2">
                    Universidad Nacional de Santiago del Estero
                  </p>
                  <p className="text-muted-foreground text-sm mt-2">
                    Building a strong foundation in computer science fundamentals, algorithms, and software development.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Training Program */}
          <ScrollReveal delay={200}>
            <div className="glass-panel rounded-2xl p-8 h-full hover:-translate-y-2 transition-all duration-500 group">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-full bg-pink/20 flex items-center justify-center flex-shrink-0 group-hover:glow-soft transition-all">
                  <Award className="w-7 h-7 text-pink" />
                </div>
                <div>
                  <span className="text-sm text-muted-foreground">Training Program</span>
                  <h3 className="text-xl font-display font-medium mt-1">
                    Fullstack Web Development
                  </h3>
                  <p className="text-pink font-medium mt-2">Educación IT</p>
                  <p className="text-muted-foreground text-sm mt-2">
                    Scholarship from Fundación Pescar with support from L'Oréal Fund for Women, Fundación Karuna & JP Morgan.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs">
                      +220h Technical Skills
                    </span>
                    <span className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs">
                      +80h Soft Skills
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Certifications */}
          <ScrollReveal delay={300} className="lg:col-span-2">
            <div className="glass-panel rounded-2xl p-8 hover:-translate-y-2 transition-all duration-500 group">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-full bg-pink/20 flex items-center justify-center flex-shrink-0 group-hover:glow-soft transition-all">
                  <BookOpen className="w-7 h-7 text-pink" />
                </div>
                <div className="flex-1">
                  <span className="text-sm text-muted-foreground">Relevant Courses</span>
                  <h3 className="text-xl font-display font-medium mt-1">
                    Continuous Learning
                  </h3>
                  <div className="flex flex-wrap gap-3 mt-4">
                    <span className="skill-badge">Cybersecurity</span>
                    <span className="skill-badge">Web Development</span>
                    <span className="skill-badge">Agile Methodologies</span>
                    <span className="skill-badge">SCRUM Master</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Education;
