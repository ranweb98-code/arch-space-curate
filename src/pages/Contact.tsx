import { useState } from "react";
import { MapPin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import ScrollReveal from "@/components/ScrollReveal";

const Contact = () => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      toast({ title: "Message sent", description: "We'll get back to you shortly." });
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
    }, 800);
  };

  return (
    <section className="py-20 md:py-32">
      <div className="container">
        <ScrollReveal>
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">Contact</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight max-w-3xl mb-6">
            Get in Touch
          </h1>
          <p className="text-muted-foreground max-w-xl leading-relaxed mb-16">
            Ready to start your project? We'd love to hear from you. 
            Fill out the form below or reach us directly.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-16">
          <ScrollReveal>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-xs tracking-widest uppercase">Name</Label>
                  <Input id="name" name="name" required placeholder="Your name" className="rounded-none border-border" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-xs tracking-widest uppercase">Email</Label>
                  <Input id="email" name="email" type="email" required placeholder="your@email.com" className="rounded-none border-border" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="projectType" className="text-xs tracking-widest uppercase">Project Type</Label>
                <Select name="projectType">
                  <SelectTrigger className="rounded-none border-border">
                    <SelectValue placeholder="Select project type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="residential">Residential</SelectItem>
                    <SelectItem value="commercial">Commercial</SelectItem>
                    <SelectItem value="interior">Interior</SelectItem>
                    <SelectItem value="renovation">Renovation</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-xs tracking-widest uppercase">Message</Label>
                <Textarea id="message" name="message" required placeholder="Tell us about your project..." rows={6} className="rounded-none border-border resize-none" />
              </div>
              <Button type="submit" size="lg" disabled={submitting} className="rounded-none px-10 text-xs tracking-widest uppercase">
                {submitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="space-y-8">
              <div>
                <h3 className="font-serif text-lg mb-4">Studio</h3>
                <div className="space-y-4 text-sm text-muted-foreground">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                    <span>123 Design Avenue<br />New York, NY 10001</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 shrink-0" />
                    <span>hello@archistudio.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 shrink-0" />
                    <span>+1 (555) 234-5678</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-serif text-lg mb-4">Hours</h3>
                <div className="text-sm text-muted-foreground space-y-1">
                  <p>Monday – Friday: 9:00 – 18:00</p>
                  <p>Saturday – Sunday: By appointment</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
