import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { 
  Github, 
  Twitter, 
  Linkedin, 
  Mail,
  ArrowUp,
  Leaf
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);
  const newsletterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Footer entrance animation
      ScrollTrigger.create({
        trigger: footerRef.current,
        start: "top 90%",
        onEnter: () => {
          const tl = gsap.timeline();
          
          tl.fromTo(footerRef.current?.children || [], {
            y: 50,
            opacity: 0
          }, {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: "power2.out"
          });
        }
      });

      // Newsletter section animation
      ScrollTrigger.create({
        trigger: newsletterRef.current,
        start: "top 85%",
        onEnter: () => {
          gsap.fromTo(newsletterRef.current, {
            scale: 0.9,
            opacity: 0,
            rotationX: 20
          }, {
            scale: 1,
            opacity: 1,
            rotationX: 0,
            duration: 1,
            ease: "back.out(1.7)"
          });
        }
      });

      // Social icons hover animations
      const socialIcons = document.querySelectorAll('.social-icon');
      socialIcons.forEach(icon => {
        icon.addEventListener('mouseenter', () => {
          gsap.to(icon, {
            scale: 1.2,
            rotation: 360,
            duration: 0.4,
            ease: "back.out(1.7)"
          });
        });

        icon.addEventListener('mouseleave', () => {
          gsap.to(icon, {
            scale: 1,
            rotation: 0,
            duration: 0.3,
            ease: "power2.out"
          });
        });
      });

    }, footerRef);

    return () => ctx.revert();
  }, []);

  const scrollToTop = () => {
    gsap.to(window, {
      scrollTo: { y: 0 },
      duration: 1.5,
      ease: "power2.inOut"
    });
  };

  const footerLinks = {
    Learn: [
      { label: "Environmental Impact", href: "#environment" },
      { label: "Social Inequality", href: "#inequality" },
      { label: "Resource Depletion", href: "#sustainability" },
      { label: "Solutions", href: "#solutions" }
    ],
    Resources: [
      { label: "Research Papers", href: "#" },
      { label: "Case Studies", href: "#" },
      { label: "Data Sources", href: "#" },
      { label: "Further Reading", href: "#" }
    ],
    Connect: [
      { label: "Newsletter", href: "#" },
      { label: "Community", href: "#" },
      { label: "Contact Us", href: "#" },
      { label: "Feedback", href: "#" }
    ]
  };

  return (
    <footer ref={footerRef} className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 rounded-full gradient-hero animate-pulse-glow"></div>
              <span className="font-display font-bold text-xl">EconoImpact</span>
            </div>
            
            <p className="text-muted-foreground mb-6 max-w-md">
              Educating minds about the hidden costs of unlimited economic growth 
              and exploring pathways to a sustainable future.
            </p>
            
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="social-icon">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="social-icon">
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="social-icon">
                <Github className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="social-icon">
                <Mail className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-smooth text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-border pt-8 mb-8">
          <div ref={newsletterRef} className="max-w-md mx-auto text-center">
            <Leaf className="w-8 h-8 text-primary mx-auto mb-4" />
            <h4 className="font-semibold mb-2">Stay Informed</h4>
            <p className="text-muted-foreground text-sm mb-4">
              Get updates on sustainable economics and environmental policy.
            </p>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 text-sm border border-input rounded-md bg-background"
              />
              <Button variant="hero" size="sm">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between">
          <div className="text-sm text-muted-foreground mb-4 md:mb-0">
            © 2024 EconoImpact. Educational content for sustainable future.
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              Privacy Policy
            </Button>
            <Button variant="ghost" size="sm">
              Terms of Use
            </Button>
            <Button 
              variant="ghost" 
              size="icon"
              onClick={scrollToTop}
              className="hover:shadow-glow transition-bounce"
            >
              <ArrowUp className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;