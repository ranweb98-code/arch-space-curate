import { MessageCircle, Lightbulb, FileText, HardHat } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const steps = [
  {
    icon: MessageCircle,
    number: "01",
    title: "Initial Consultation",
    desc: "We begin every project with a conversation. This is where we listen to your ambitions, understand your site, and establish the brief that will guide the design. No commitments — just an open dialogue about possibilities.",
  },
  {
    icon: Lightbulb,
    number: "02",
    title: "Concept & Design",
    desc: "With the brief defined, we explore ideas through sketches, models, and visualisations. We present design options, refine the direction together, and arrive at a concept that feels right — one that balances aspiration with practicality.",
  },
  {
    icon: FileText,
    number: "03",
    title: "Development & Planning",
    desc: "The chosen concept is developed into detailed drawings, specifications, and documentation. We coordinate with engineers and consultants, navigate planning approvals, and prepare everything needed to build with confidence.",
  },
  {
    icon: HardHat,
    number: "04",
    title: "Execution & Delivery",
    desc: "During construction, we remain closely involved — reviewing progress, resolving challenges, and ensuring the built result honours the design intent. We're there until the final detail is in place.",
  },
];

const Process = () => (
  <>
    <section className="py-20 md:py-32">
      <div className="container">
        <ScrollReveal>
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">Process</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight max-w-3xl mb-6">
            How We Work
          </h1>
          <p className="text-muted-foreground max-w-xl leading-relaxed mb-16">
            Our process is structured to be clear and collaborative at every stage, 
            giving you confidence from first conversation to final handover.
          </p>
        </ScrollReveal>

        <div className="space-y-0">
          {steps.map((s, i) => (
            <ScrollReveal key={s.number} delay={i * 0.1}>
              <div className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-6 md:gap-12 py-12 border-t border-border last:border-b">
                <div className="flex md:flex-col items-center md:items-start gap-4">
                  <span className="font-serif text-4xl md:text-5xl text-muted-foreground/30">{s.number}</span>
                  <s.icon className="h-6 w-6 text-muted-foreground" strokeWidth={1.5} />
                </div>
                <div>
                  <h2 className="font-serif text-xl md:text-2xl mb-4">{s.title}</h2>
                  <p className="text-muted-foreground leading-relaxed max-w-2xl">{s.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Process;
