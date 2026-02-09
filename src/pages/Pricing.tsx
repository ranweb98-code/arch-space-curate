import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";

const tiers = [
  {
    name: "Concept & Planning",
    price: "From €3,500",
    desc: "Initial design exploration and feasibility study for projects in the early stages.",
    features: [
      "Site analysis & assessment",
      "Concept design proposals",
      "Preliminary floor plans",
      "Material & finish direction",
      "Budget estimation",
    ],
  },
  {
    name: "Full Architectural Project",
    price: "From €12,000",
    desc: "Comprehensive architectural service from concept through to construction documentation.",
    features: [
      "Everything in Concept & Planning",
      "Detailed design development",
      "Construction drawings",
      "Planning permission support",
      "Contractor coordination",
      "On-site supervision",
    ],
    highlighted: true,
  },
  {
    name: "Custom Projects",
    price: "Request a Quote",
    desc: "Tailored scope for large-scale, complex, or multi-phase commissions.",
    features: [
      "Bespoke project scope",
      "Dedicated project team",
      "Phased delivery options",
      "Ongoing consultancy",
      "Full project management",
    ],
  },
];

const Pricing = () => (
  <>
    <section className="py-20 md:py-32">
      <div className="container">
        <ScrollReveal>
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">Pricing</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight max-w-3xl mb-6">
            Transparent & Fair
          </h1>
          <p className="text-muted-foreground max-w-xl leading-relaxed mb-16">
            We believe in clarity from the start. Our pricing reflects the value, expertise, and attention 
            we bring to every project — no hidden fees, no surprises.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 0.1}>
              <div
                className={`border p-8 md:p-10 flex flex-col h-full ${
                  t.highlighted
                    ? "border-foreground bg-primary text-primary-foreground"
                    : "border-border"
                }`}
              >
                <h2 className="font-serif text-xl md:text-2xl mb-2">{t.name}</h2>
                <p className="font-serif text-2xl md:text-3xl mb-4">{t.price}</p>
                <p className={`text-sm leading-relaxed mb-8 ${t.highlighted ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                  {t.desc}
                </p>
                <ul className="space-y-3 flex-1 mb-8">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <Check className={`h-4 w-4 mt-0.5 shrink-0 ${t.highlighted ? "text-primary-foreground/60" : "text-muted-foreground"}`} />
                      <span className={t.highlighted ? "text-primary-foreground/80" : ""}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  size="lg"
                  className={`rounded-none w-full text-xs tracking-widest uppercase ${
                    t.highlighted
                      ? "bg-primary-foreground text-foreground hover:bg-primary-foreground/90"
                      : ""
                  }`}
                  variant={t.highlighted ? "default" : "outline"}
                >
                  <Link to="/contact">{t.price === "Request a Quote" ? "Get in Touch" : "Start a Project"}</Link>
                </Button>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Pricing;
