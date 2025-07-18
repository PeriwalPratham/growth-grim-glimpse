import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, TrendingDown, AlertTriangle } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import heroImage from "@/assets/hero-economic-growth.jpg";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const floatingElementsRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Master timeline for hero animations
      const tl = gsap.timeline();

      // Parallax background effect
      gsap.set(backgroundRef.current, { scale: 1.1 });
      
      ScrollTrigger.create({
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          gsap.to(backgroundRef.current, {
            y: progress * 100,
            scale: 1.1 + progress * 0.1,
            duration: 0.3,
            ease: "none"
          });
        }
      });

      // Floating elements continuous animation
      gsap.to(".floating-element", {
        y: -20,
        duration: 3,
        ease: "power1.inOut",
        stagger: {
          each: 0.5,
          repeat: -1,
          yoyo: true
        }
      });

      // Main content animations
      tl.fromTo(titleRef.current, {
        y: 100,
        opacity: 0,
        scale: 0.8
      }, {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "power3.out"
      })
      .fromTo(subtitleRef.current, {
        y: 50,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out"
      }, "-=0.6")
      .fromTo(buttonsRef.current?.children || [], {
        y: 30,
        opacity: 0,
        scale: 0.9
      }, {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.6,
        stagger: 0.2,
        ease: "back.out(1.7)"
      }, "-=0.4")
      .fromTo(statsRef.current?.children || [], {
        y: 40,
        opacity: 0,
        rotationX: 90
      }, {
        y: 0,
        opacity: 1,
        rotationX: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out"
      }, "-=0.3");

      // Alert icon pulsing animation
      gsap.to(".alert-icon", {
        scale: 1.2,
        duration: 1,
        ease: "power2.inOut",
        repeat: -1,
        yoyo: true
      });

      // Scroll indicator animation
      gsap.to(".scroll-indicator", {
        y: 10,
        duration: 1.5,
        ease: "power2.inOut",
        repeat: -1,
        yoyo: true
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);
  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <div ref={backgroundRef} className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Economic growth impact visualization"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/90"></div>
      </div>

      {/* Floating Elements */}
      <div ref={floatingElementsRef} className="absolute inset-0 pointer-events-none">
        <div className="floating-element absolute top-1/4 left-1/4 w-16 h-16 rounded-full bg-destructive/20"></div>
        <div className="floating-element absolute top-1/3 right-1/4 w-12 h-12 rounded-full bg-secondary/30"></div>
        <div className="floating-element absolute bottom-1/4 left-1/3 w-20 h-20 rounded-full bg-primary/10"></div>
        <div className="floating-element absolute top-1/2 right-1/3 w-14 h-14 rounded-full bg-accent/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <AlertTriangle className="alert-icon w-6 h-6 text-destructive" />
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              Critical Economic Analysis
            </span>
          </div>

          <h1 ref={titleRef} className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
            The <span className="gradient-hero bg-clip-text text-transparent">Hidden Costs</span>
            <br />
            of Economic Growth
          </h1>

          <p ref={subtitleRef} className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Explore the environmental degradation, rising inequality, and sustainability challenges 
            that shadow our pursuit of unlimited economic expansion.
          </p>

          <div ref={buttonsRef} className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <Button variant="hero" size="xl">
              Explore the Impact
              <TrendingDown className="ml-2" />
            </Button>
            <Button variant="outline" size="xl">
              View Research
            </Button>
          </div>

          {/* Stats */}
          <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center stat-item">
              <div className="text-3xl font-bold text-destructive mb-2">40%</div>
              <div className="text-sm text-muted-foreground">Increase in CO2 emissions</div>
            </div>
            <div className="text-center stat-item">
              <div className="text-3xl font-bold text-secondary mb-2">70%</div>
              <div className="text-sm text-muted-foreground">Wealth inequality gap</div>
            </div>
            <div className="text-center stat-item">
              <div className="text-3xl font-bold text-primary mb-2">85%</div>
              <div className="text-sm text-muted-foreground">Resource depletion rate</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;