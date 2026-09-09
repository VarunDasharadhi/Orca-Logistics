import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/App";
import logoImg from "@/assets/logo-nobg.png";
import logoImgDark from "@/assets/logo-nobg-dark.png";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Why Us", href: "#why-us" },
    { name: "Fleet", href: "#fleet" },
    { name: "Process", href: "#process" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">

          {/* Logo + name — fixed width so it never pushes into the nav */}
          <a
            href="#"
            className="flex items-center gap-2 shrink-0 group"
            data-testid="link-logo"
          >
            <img
              src={theme === "dark" ? logoImgDark : logoImg}
              alt="Orca Transports"
              className="h-14 w-14 object-contain"
            />
            <span className="hidden sm:block font-heading text-lg tracking-widest text-foreground whitespace-nowrap">
              ORCA TRANSPORTS
            </span>
          </a>

          {/* Desktop nav — pushed to the right, never wraps */}
          <nav className="hidden md:flex items-center gap-6 shrink-0">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors tracking-widest uppercase font-sans whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={toggleTheme}
              className="p-2 border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors rounded-sm"
              aria-label="Toggle dark mode"
              data-testid="button-theme-toggle"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <Button
              asChild
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-heading tracking-widest px-5 rounded-sm whitespace-nowrap"
            >
              <a href="#contact">GET A QUOTE</a>
            </Button>
          </nav>

          {/* Mobile controls */}
          <div className="md:hidden flex items-center gap-2 shrink-0">
            <button
              onClick={toggleTheme}
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
              aria-label="Toggle dark mode"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              className="text-foreground p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border p-4 flex flex-col gap-4 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-foreground p-2 hover:bg-muted transition-colors tracking-widest uppercase border-b border-border/50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button
            asChild
            className="w-full bg-primary font-heading tracking-widest mt-2 rounded-sm"
          >
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
              GET A QUOTE
            </a>
          </Button>
        </div>
      )}
    </header>
  );
}
