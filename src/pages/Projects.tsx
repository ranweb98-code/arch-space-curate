import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import { projects } from "@/data/projects";

const Projects = () => (
  <>
    <section className="py-20 md:py-32">
      <div className="container">
        <ScrollReveal>
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">Portfolio</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight max-w-3xl mb-16">
            Selected Projects
          </h1>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
          {projects.map((p, i) => (
            <ScrollReveal key={p.id} delay={(i % 2) * 0.15}>
              <Link to={`/projects/${p.id}`} className="group block">
                <div className="aspect-[4/3] overflow-hidden mb-4 relative">
                  <img
                    src={p.thumbnail}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-500 flex items-end p-6">
                    <span className="text-primary-foreground font-serif text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-2 group-hover:translate-y-0">
                      View Project
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-xs tracking-widest uppercase text-muted-foreground">{p.category}</span>
                  <span className="text-muted-foreground/30">·</span>
                  <span className="text-xs text-muted-foreground">{p.location}</span>
                </div>
                <h2 className="font-serif text-xl md:text-2xl">{p.title}</h2>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Projects;
