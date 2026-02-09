import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container py-16 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
        <div className="md:col-span-2">
          <h3 className="font-serif text-2xl mb-4">
            ARCHI<span className="font-light">STUDIO</span>
          </h3>
          <p className="text-primary-foreground/60 text-sm leading-relaxed max-w-sm">
            Creating spaces that inspire. We believe in architecture that serves both people and place, 
            with unwavering attention to craft and context.
          </p>
        </div>

        <div>
          <h4 className="font-sans text-xs tracking-widest uppercase mb-4 text-primary-foreground/40">Pages</h4>
          <div className="flex flex-col gap-2">
            {[
              { to: "/about", label: "About" },
              { to: "/projects", label: "Projects" },
              { to: "/services", label: "Services" },
              { to: "/pricing", label: "Pricing" },
              { to: "/process", label: "Process" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <Link key={l.to} to={l.to} className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-sans text-xs tracking-widest uppercase mb-4 text-primary-foreground/40">Contact</h4>
          <div className="flex flex-col gap-2 text-sm text-primary-foreground/60">
            <span>hello@archistudio.com</span>
            <span>+1 (555) 234-5678</span>
            <span className="mt-2">123 Design Avenue<br />New York, NY 10001</span>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center">
        <p className="text-xs text-primary-foreground/40">
          © {new Date().getFullYear()} ArchiStudio. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
