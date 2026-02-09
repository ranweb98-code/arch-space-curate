import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { projects } from "@/data/projects";

const ProjectDetail = () => {
  const { id } = useParams();
  const idx = projects.findIndex((p) => p.id === id);
  const project = projects[idx];

  if (!project) {
    return (
      <div className="container py-32 text-center">
        <h1 className="font-serif text-3xl mb-4">Project not found</h1>
        <Link to="/projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
          ← Back to projects
        </Link>
      </div>
    );
  }

  const prev = idx > 0 ? projects[idx - 1] : null;
  const next = idx < projects.length - 1 ? projects[idx + 1] : null;

  return (
    <>
      {/* Header */}
      <section className="py-20 md:py-32">
        <div className="container">
          <ScrollReveal>
            <Link to="/projects" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
              <ArrowLeft className="h-4 w-4" /> All Projects
            </Link>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6">{project.title}</h1>
            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground mb-8">
              <span><strong className="text-foreground">Category:</strong> {project.category}</span>
              <span><strong className="text-foreground">Location:</strong> {project.location}</span>
              <span><strong className="text-foreground">Year:</strong> {project.year}</span>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-2xl">{project.description}</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Gallery */}
      <section className="pb-20 md:pb-32">
        <div className="container space-y-6">
          {project.images.map((img, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="aspect-[16/9] overflow-hidden">
                <img src={img} alt={`${project.title} - ${i + 1}`} className="w-full h-full object-cover" loading="lazy" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Navigation */}
      <section className="border-t border-border">
        <div className="container">
          <div className="grid grid-cols-2">
            {prev ? (
              <Link to={`/projects/${prev.id}`} className="py-10 pr-4 group">
                <span className="text-xs tracking-widest uppercase text-muted-foreground">Previous</span>
                <p className="font-serif text-lg md:text-xl mt-1 group-hover:translate-x-[-4px] transition-transform">{prev.title}</p>
              </Link>
            ) : <div />}
            {next ? (
              <Link to={`/projects/${next.id}`} className="py-10 pl-4 text-right border-l border-border group">
                <span className="text-xs tracking-widest uppercase text-muted-foreground">Next</span>
                <p className="font-serif text-lg md:text-xl mt-1 group-hover:translate-x-1 transition-transform">{next.title}</p>
              </Link>
            ) : <div />}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectDetail;
