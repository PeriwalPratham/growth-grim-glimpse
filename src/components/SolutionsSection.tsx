import { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Lightbulb, 
  Target, 
  Users, 
  Leaf, 
  BarChart3, 
  Globe,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SolutionsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      ScrollTrigger.create({
        trigger: titleRef.current,
        start: "top 80%",
        onEnter: () => {
          gsap.fromTo(titleRef.current?.children || [], {
            y: 50,
            opacity: 0,
            rotationX: 45
          }, {
            y: 0,
            opacity: 1,
            rotationX: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out"
          });
        }
      });

      // Solution cards stagger animation
      ScrollTrigger.create({
        trigger: cardsRef.current,
        start: "top 75%",
        onEnter: () => {
          const cards = cardsRef.current?.children || [];
          gsap.fromTo(cards, {
            y: 80,
            opacity: 0,
            rotationY: 15,
            scale: 0.9
          }, {
            y: 0,
            opacity: 1,
            rotationY: 0,
            scale: 1,
            duration: 0.8,
            stagger: {
              amount: 0.6,
              from: "random"
            },
            ease: "power3.out"
          });
        }
      });

      // CTA animation
      ScrollTrigger.create({
        trigger: ctaRef.current,
        start: "top 80%",
        onEnter: () => {
          const tl = gsap.timeline();
          
          tl.fromTo(ctaRef.current, {
            scale: 0.8,
            opacity: 0,
            rotationX: 30
          }, {
            scale: 1,
            opacity: 1,
            rotationX: 0,
            duration: 1,
            ease: "back.out(1.7)"
          })
          .fromTo(".cta-globe", {
            rotationY: -180,
            scale: 0
          }, {
            rotationY: 0,
            scale: 1,
            duration: 1,
            ease: "back.out(1.7)"
          }, "-=0.5")
          .fromTo(".cta-buttons", {
            y: 30,
            opacity: 0
          }, {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.2,
            ease: "power2.out"
          }, "-=0.3");
        }
      });

      // Continuous floating animation for globe
      gsap.to(".cta-globe", {
        y: -10,
        duration: 2,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true
      });

      // Card hover animations
      const solutionCards = document.querySelectorAll('.solution-card');
      solutionCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            scale: 1.05,
            rotationY: 5,
            z: 50,
            duration: 0.3,
            ease: "power2.out"
          });
          gsap.to(card.querySelector('.solution-icon'), {
            rotationY: 360,
            scale: 1.2,
            duration: 0.6,
            ease: "power2.out"
          });
        });

        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            scale: 1,
            rotationY: 0,
            z: 0,
            duration: 0.3,
            ease: "power2.out"
          });
          gsap.to(card.querySelector('.solution-icon'), {
            rotationY: 0,
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
          });
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const solutions = [
    {
      icon: Target,
      title: "Sustainable Development Goals",
      description: "Implement policies that balance economic progress with environmental protection and social equity.",
      features: ["Green technology investment", "Circular economy models", "Carbon pricing mechanisms"]
    },
    {
      icon: BarChart3,
      title: "Alternative Metrics",
      description: "Move beyond GDP to measure genuine progress including wellbeing, sustainability, and equality.",
      features: ["Gross National Happiness", "Genuine Progress Indicator", "Human Development Index"]
    },
    {
      icon: Users,
      title: "Inclusive Growth",
      description: "Ensure economic benefits reach all segments of society, reducing inequality and promoting shared prosperity.",
      features: ["Progressive taxation", "Universal basic services", "Skills development programs"]
    },
    {
      icon: Leaf,
      title: "Regenerative Economy",
      description: "Transition to an economy that restores and regenerates natural and social capital.",
      features: ["Renewable energy transition", "Ecosystem restoration", "Biodiversity conservation"]
    }
  ];

  return (
    <section ref={sectionRef} id="solutions" className="py-20 px-4 gradient-subtle">
      <div className="container mx-auto">
        <div ref={titleRef} className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Lightbulb className="w-6 h-6 text-primary animate-pulse" />
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Pathways Forward
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Building a 
            <span className="gradient-hero bg-clip-text text-transparent"> Better Future</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The challenges of economic growth are not insurmountable. Here are proven approaches 
            to create prosperity while protecting our planet and people.
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <Card 
              key={index} 
              className="solution-card p-8 hover:shadow-elegant transition-smooth"
            >
              <div className="flex items-start space-x-4">
                <div className="solution-icon w-12 h-12 rounded-xl gradient-hero flex items-center justify-center flex-shrink-0">
                  <solution.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-3">{solution.title}</h3>
                  <p className="text-muted-foreground mb-4">{solution.description}</p>
                  
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card ref={ctaRef} className="max-w-4xl mx-auto p-12 gradient-subtle border-primary/20">
            <Globe className="cta-globe w-16 h-16 text-primary mx-auto mb-6" />
            
            <h3 className="text-3xl font-display font-bold mb-4">
              Join the Movement for Sustainable Progress
            </h3>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              The future of our economy depends on our collective action today. 
              Together, we can build a world that thrives within planetary boundaries.
            </p>
            
            <div className="cta-buttons flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button variant="hero" size="lg">
                Take Action Now
                <ArrowRight className="ml-2" />
              </Button>
              
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;