import { Link } from "react-router-dom";
import { ArrowRight, Compass, PenTool, Building2, Hammer } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import { projects } from "@/data/projects";

const Index = () => {
  const featured = projects.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[90vh] md:h-screen flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1920&q=80')" }}
        />
        <div className="absolute inset-0 bg-foreground/50" />
        <div className="relative container">
          <ScrollReveal>
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-primary-foreground/70 mb-4">
              Architecture &amp; Design Studio
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-medium text-primary-foreground leading-[1.1] max-w-4xl">
              Architecture<br />With Vision
            </h1>
            <p className="mt-6 text-primary-foreground/70 text-base md:text-lg max-w-lg leading-relaxed font-sans">
              We create spaces that balance beauty and function — designed with precision, 
              built with purpose, and shaped by the people who inhabit them.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild size="lg" className="rounded-none px-8 text-xs tracking-widest uppercase bg-primary-foreground text-foreground hover:bg-primary-foreground/90">
                <Link to="/projects">View Projects</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-none px-8 text-xs tracking-widest uppercase border-primary-foreground/70 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent">
                <Link to="/contact">Contact</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Studio Snapshot */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <ScrollReveal>
              <p className="font-sans text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">About Us</p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight mb-6">
                Designing for life,<br />built to endure
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                For over a decade, our studio has pursued architecture that resonates — spaces where 
                light, material, and proportion come together in quiet harmony. Every project begins 
                with listening, and every detail is considered.
              </p>
              <Link to="/about" className="inline-flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all">
                Learn more <ArrowRight className="h-4 w-4" />
              </Link>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
                  alt="Studio interior"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 md:py-32 bg-secondary">
        <div className="container">
          <ScrollReveal>
            <div className="flex items-end justify-between mb-12">
              <div>
                <p className="font-sans text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">Portfolio</p>
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl">Featured Projects</h2>
              </div>
              <Link to="/projects" className="hidden md:inline-flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all">
                All projects <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featured.map((p, i) => (
              <ScrollReveal key={p.id} delay={i * 0.1}>
                <Link to={`/projects/${p.id}`} className="group block">
                  <div className="aspect-[3/4] overflow-hidden mb-4 relative">
                    <img
                      src={p.thumbnail}
                      alt={p.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-500" />
                  </div>
                  <p className="text-xs tracking-widest uppercase text-muted-foreground mb-1">{p.category}</p>
                  <h3 className="font-serif text-xl">{p.title}</h3>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-8 md:hidden text-center">
            <Link to="/projects" className="inline-flex items-center gap-2 text-sm font-medium">
              All projects <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 md:py-32">
        <div className="container">
          <ScrollReveal>
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">What We Do</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-12">Our Services</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Building2, title: "Residential", desc: "Homes designed around how you live — from concept to completion." },
              { icon: Compass, title: "Commercial", desc: "Workspaces and retail environments that elevate brand and function." },
              { icon: PenTool, title: "Interior", desc: "Interior architecture that transforms spaces with precision and warmth." },
              { icon: Hammer, title: "Renovations", desc: "Thoughtful renovations that honor existing character while looking ahead." },
            ].map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 0.1}>
                <div className="border border-border p-8 hover:bg-secondary transition-colors">
                  <s.icon className="h-6 w-6 mb-6 text-muted-foreground" strokeWidth={1.5} />
                  <h3 className="font-serif text-lg mb-3">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="mt-10 text-center">
              <Link to="/services" className="inline-flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all">
                View all services <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Process Preview */}
      <section className="py-20 md:py-32 bg-secondary">
        <div className="container">
          <ScrollReveal>
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">How We Work</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-12">Our Process</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { n: "01", title: "Consultation", desc: "Understanding your vision, site, and aspirations." },
              { n: "02", title: "Concept & Design", desc: "Exploring ideas and refining the architectural direction." },
              { n: "03", title: "Development", desc: "Detailed planning, specifications, and coordination." },
              { n: "04", title: "Execution", desc: "Overseeing construction to ensure quality and intent." },
            ].map((s, i) => (
              <ScrollReveal key={s.n} delay={i * 0.1}>
                <div>
                  <span className="font-serif text-4xl md:text-5xl text-muted-foreground/30">{s.n}</span>
                  <h3 className="font-serif text-lg mt-4 mb-3">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 md:py-32 bg-primary text-primary-foreground">
        <div className="container text-center">
          <ScrollReveal>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6">
              Let's create something<br />extraordinary together
            </h2>
            <p className="text-primary-foreground/60 max-w-lg mx-auto mb-8">
              Whether you're planning a new build or reimagining an existing space, 
              we'd love to hear about your project.
            </p>
            <Button asChild size="lg" className="rounded-none px-10 text-xs tracking-widest uppercase bg-primary-foreground text-foreground hover:bg-primary-foreground/90">
              <Link to="/contact">Start a Conversation</Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default Index;
