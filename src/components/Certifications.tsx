import { useState } from 'react';
import { ChevronLeft, ChevronRight, Award } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import cUI from '@/assets/certificado-UI.png';
import cMET from '@/assets/MET.png';
import cAI from '@/assets/cAI.png';

const certifications = [
  {
    id: 1,
    title: 'English C1 Certification',
    issuer: 'MET exam by Cambridge',
    description: 'Achieved C1 level proficiency in English, demonstrating advanced skills in reading, writing, listening, and speaking.',
    image: cMET,
  },
  {
    id: 2,
    title: 'Fullstack Web Development Certification',
    issuer: 'Fundación Pescar & Educación IT',
    description: 'Completed a comprehensive fullstack web development program covering both frontend and backend technologies.',
  },
  {
    id: 3,
    title: 'User Interface Design (UI) Certification',
    issuer: 'Secretaría de Innovación, Ciencia y Tecnología',
    description: 'Learned principles and best practices of user interface design to create engaging and user-friendly web applications.',
    image: cUI,
  },
  {
    id: 4,
    title: 'Artificial Intelligence Fundamentals Certification',
    issuer: 'IBM SkillsBuild',
    description: 'Gained foundational knowledge in artificial intelligence concepts, including machine learning and data analysis.',
    image: cAI,
  },
];

const Certifications = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % certifications.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + certifications.length) % certifications.length);
  };

  return (
    <section className="section-padding bg-secondary text-secondary-foreground relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-pink/10 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-pink-light/10 blur-3xl" />

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-pink text-sm tracking-widest uppercase font-medium">Achievements</span>
            <h2 className="text-4xl md:text-5xl font-display font-light mt-2">
              <span className="italic">Certifications</span>
            </h2>
          </div>
        </ScrollReveal>

        {/* Carousel */}
        <ScrollReveal delay={100}>
          <div className="relative max-w-4xl mx-auto">
            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 w-12 h-12 rounded-full glass-panel-dark flex items-center justify-center hover:glow-soft transition-all"
              aria-label="Previous"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 w-12 h-12 rounded-full glass-panel-dark flex items-center justify-center hover:glow-soft transition-all"
              aria-label="Next"
            >
              <ChevronRight size={24} />
            </button>

            {/* Slides Container */}
            <div className="overflow-hidden rounded-2xl">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {certifications.map((cert) => (
                  <div
                    key={cert.id}
                    className="w-full flex-shrink-0"
                  >
                    <div className="glass-panel-dark rounded-2xl overflow-hidden">
                      <div className="grid md:grid-cols-2">
                        {/* Image Placeholder */}
                        <div className="bg-gradient-to-br from-pink/30 to-accent/30 flex items-center justify-center px-6 py-8 min-h-[260px] md:min-h-[320px]">
                          {cert.image ? (
                            <img
                              src={cert.image}
                              alt={`${cert.title} - ${cert.issuer}`}
                              className="max-h-[320px] w-auto object-contain rounded-xl shadow-lg transition-transform duration-500 hover:scale-105"
                            />
                          ) : (
                            <div className="text-center">
                              <Award className="w-16 h-16 text-pink mx-auto mb-4" />
                              <span className="text-sm text-secondary-foreground/60">Certificate Preview</span>
                            </div>
                          )}
                        </div>

                        {/* Content */}
                        <div className="p-8 flex flex-col justify-center">
                          <span className="text-pink text-sm font-medium">{cert.issuer}</span>
                          <h3 className="text-2xl font-display font-medium mt-2">{cert.title}</h3>
                          <p className="text-secondary-foreground/70 mt-4">{cert.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {certifications.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex
                    ? 'w-8 bg-pink'
                    : 'w-2 bg-secondary-foreground/30 hover:bg-secondary-foreground/50'
                    }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Certifications;
