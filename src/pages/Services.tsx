import { Link } from "react-router-dom";
import { Building2, Compass, PenTool, Hammer, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";

const services = [
  {
    icon: Building2,
    title: "Residential Architecture",
    desc: "From single-family homes to multi-unit residences, we design living spaces that respond to how you inhabit them. Every home is a dialogue between client, site, and the possibilities of form.",
  },
  {
    icon: Compass,
    title: "Commercial Architecture",
    desc: "Offices, retail spaces, and hospitality projects designed to strengthen brand identity and support productivity. We create commercial environments that attract talent and inspire performance.",
  },
  {
    icon: PenTool,
    title: "Interior Architecture",
    desc: "Interiors conceived as integral to the architectural whole — not decoration, but the shaping of space from within. Materials, light, and proportion work in concert to create atmosphere.",
  },
  {
    icon: Hammer,
    title: "Renovations & Planning",
    desc: "Sensitive restoration and adaptive reuse that breathes new life into existing structures. We see potential where others see constraints, transforming buildings while respecting their story.",
  },
];

const Services = () => (
  <>
    <section className="py-20 md:py-32">
      <div className="container">
        <ScrollReveal>
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">Services</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight max-w-3xl mb-6">
            What We Offer
          </h1>
          <p className="text-muted-foreground max-w-xl leading-relaxed mb-16">
            Every project is unique, and our services adapt to match. Whether you need a complete architectural 
            vision or targeted expertise, we bring the same rigour and care.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 0.1}>
              <div className="border border-border p-8 md:p-10 hover:bg-secondary transition-colors h-full">
                <s.icon className="h-7 w-7 mb-6 text-muted-foreground" strokeWidth={1.5} />
                <h2 className="font-serif text-xl md:text-2xl mb-4">{s.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="mt-16 text-center">
            <Button asChild size="lg" className="rounded-none px-10 text-xs tracking-widest uppercase">
              <Link to="/contact">Discuss Your Project <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </>
);

export default Services;
