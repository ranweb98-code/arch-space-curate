import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/services", label: "Services" },
  { to: "/pricing", label: "Pricing" },
  { to: "/process", label: "Process" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/50">
      <nav className="container flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="font-serif text-xl md:text-2xl font-semibold tracking-tight">
          ARCHI<span className="font-light">STUDIO</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={cn(
                "text-sm tracking-wide transition-colors hover:text-foreground",
                pathname === l.to ? "text-foreground" : "text-muted-foreground"
              )}
            >
              {l.label}
            </Link>
          ))}
          <Button asChild size="sm" className="rounded-none px-6 text-xs tracking-widest uppercase">
            <Link to="/contact">Contact</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="container py-6 flex flex-col gap-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={cn(
                  "text-sm tracking-wide py-2 transition-colors",
                  pathname === l.to ? "text-foreground" : "text-muted-foreground"
                )}
              >
                {l.label}
              </Link>
            ))}
            <Button asChild size="sm" className="rounded-none w-fit px-6 text-xs tracking-widest uppercase mt-2">
              <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
