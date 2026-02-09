import ScrollReveal from "@/components/ScrollReveal";

const About = () => (
  <>
    {/* Hero */}
    <section className="py-20 md:py-32">
      <div className="container">
        <ScrollReveal>
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">About</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight max-w-3xl">
            Architecture rooted in craft, guided by purpose
          </h1>
        </ScrollReveal>
      </div>
    </section>

    {/* Content */}
    <section className="pb-20 md:pb-32">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          <ScrollReveal>
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80"
                alt="Studio workspace"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="flex flex-col justify-center">
              <h2 className="font-serif text-2xl md:text-3xl mb-6">Our Philosophy</h2>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  We believe great architecture begins with empathy — a deep understanding of the people 
                  who will inhabit a space, and the landscape that surrounds it. Our work seeks to create 
                  environments that feel inevitable, as if they've always belonged.
                </p>
                <p>
                  Every project is an opportunity to explore the relationship between light and material, 
                  between openness and enclosure. We approach each commission with fresh eyes, guided by a 
                  commitment to clarity, proportion, and enduring quality.
                </p>
                <p>
                  Founded over a decade ago, our studio has grown into a close-knit team of architects, 
                  designers, and thinkers united by a shared passion for meaningful design. We work 
                  collaboratively — with each other and with our clients — to deliver architecture that 
                  enriches daily life.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="py-20 md:py-32 bg-secondary">
      <div className="container">
        <ScrollReveal>
          <h2 className="font-serif text-3xl md:text-4xl mb-12">What Defines Us</h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { title: "Attention to Detail", desc: "Every joint, every sightline, every material choice is considered. We believe the quality of a building lives in its details." },
            { title: "Client-Centered", desc: "Your vision is our starting point. We listen carefully, ask the right questions, and design spaces that reflect how you truly want to live and work." },
            { title: "Contextual Design", desc: "Architecture doesn't exist in isolation. We respond to site, climate, and culture to create buildings that belong to their place." },
          ].map((v, i) => (
            <ScrollReveal key={v.title} delay={i * 0.1}>
              <h3 className="font-serif text-xl mb-4">{v.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{v.desc}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default About;
