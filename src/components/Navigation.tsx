import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const menuItemsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate navigation on scroll
      ScrollTrigger.create({
        start: "top -50",
        end: "bottom top",
        onUpdate: (self) => {
          const isScrolledNow = self.scroll() > 50;
          if (isScrolledNow !== isScrolled) {
            setIsScrolled(isScrolledNow);
            
            gsap.to(navRef.current, {
              backgroundColor: isScrolledNow ? "rgba(255, 255, 255, 0.8)" : "transparent",
              backdropFilter: isScrolledNow ? "blur(16px)" : "none",
              boxShadow: isScrolledNow ? "0 10px 30px -10px rgba(0,0,0,0.1)" : "none",
              duration: 0.3,
              ease: "power2.out"
            });
          }
        }
      });

      // Animate logo on load
      gsap.fromTo(logoRef.current, {
        scale: 0,
        rotation: -180,
        opacity: 0
      }, {
        scale: 1,
        rotation: 0,
        opacity: 1,
        duration: 1,
        ease: "back.out(1.7)",
        delay: 0.2
      });

      // Animate menu items on load
      gsap.fromTo(menuItemsRef.current?.children || [], {
        y: -30,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        delay: 0.5
      });
    }, navRef);

    return () => ctx.revert();
  }, [isScrolled]);

  const navItems = [
    { href: "#overview", label: "Overview" },
    { href: "#environment", label: "Environment" },
    { href: "#inequality", label: "Inequality" },
    { href: "#sustainability", label: "Sustainability" },
    { href: "#solutions", label: "Solutions" },
  ];

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
    
    if (!isOpen) {
      gsap.fromTo(".mobile-menu", {
        opacity: 0,
        y: -20,
        scale: 0.95
      }, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.3,
        ease: "back.out(1.7)"
      });
    }
  };

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 w-full z-50 transition-smooth ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-elegant"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div ref={logoRef} className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full gradient-hero animate-pulse-glow"></div>
            <span className="font-display font-bold text-xl">EconoImpact</span>
          </div>

          {/* Desktop Navigation */}
          <div ref={menuItemsRef} className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
              onMouseEnter={() => gsap.to(event.currentTarget, { scale: 1.1, duration: 0.2 })}
              onMouseLeave={() => gsap.to(event.currentTarget, { scale: 1, duration: 0.2 })}
              className="text-muted-foreground hover:text-foreground transition-smooth relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-smooth"></span>
              </a>
            ))}
            <Button variant="hero" size="sm">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMobileMenu}
          >
            {isOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card rounded-lg mt-2 shadow-elegant">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-smooth"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="px-3 pt-2">
                <Button variant="hero" size="sm" className="w-full">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;