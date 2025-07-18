import { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  TreePine, 
  Users, 
  Recycle, 
  TrendingUp, 
  ArrowRight,
  Thermometer,
  Home,
  Factory
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import environmentImage from "@/assets/environment-impact.jpg";
import inequalityImage from "@/assets/inequality-gap.jpg";
import resourceImage from "@/assets/resource-depletion.jpg";

gsap.registerPlugin(ScrollTrigger);

const ImpactSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      ScrollTrigger.create({
        trigger: titleRef.current,
        start: "top 80%",
        onEnter: () => {
          gsap.fromTo(titleRef.current, {
            y: 60,
            opacity: 0,
            scale: 0.9
          }, {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "power3.out"
          });
        }
      });

      // Impact cards animations
      const impactCards = document.querySelectorAll('.impact-card');
      impactCards.forEach((card, index) => {
        const image = card.querySelector('.impact-image');
        const content = card.querySelector('.impact-content');
        const stats = card.querySelectorAll('.stat-card');

        ScrollTrigger.create({
          trigger: card,
          start: "top 75%",
          onEnter: () => {
            const tl = gsap.timeline();
            
            // Image animation with 3D effect
            tl.fromTo(image, {
              rotationY: index % 2 === 0 ? -90 : 90,
              opacity: 0,
              scale: 0.8
            }, {
              rotationY: 0,
              opacity: 1,
              scale: 1,
              duration: 1.2,
              ease: "power3.out"
            })
            // Content animation
            .fromTo(content, {
              x: index % 2 === 0 ? -100 : 100,
              opacity: 0
            }, {
              x: 0,
              opacity: 1,
              duration: 0.8,
              ease: "power2.out"
            }, "-=0.6")
            // Stats stagger animation
            .fromTo(stats, {
              y: 30,
              opacity: 0,
              rotationX: 45
            }, {
              y: 0,
              opacity: 1,
              rotationX: 0,
              duration: 0.6,
              stagger: 0.2,
              ease: "back.out(1.7)"
            }, "-=0.4");
          }
        });

        // Hover animations for cards
        card.addEventListener('mouseenter', () => {
          gsap.to(image, {
            scale: 1.05,
            rotationY: 5,
            duration: 0.3,
            ease: "power2.out"
          });
          gsap.to(stats, {
            y: -5,
            duration: 0.3,
            stagger: 0.1,
            ease: "power2.out"
          });
        });

        card.addEventListener('mouseleave', () => {
          gsap.to(image, {
            scale: 1,
            rotationY: 0,
            duration: 0.3,
            ease: "power2.out"
          });
          gsap.to(stats, {
            y: 0,
            duration: 0.3,
            stagger: 0.1,
            ease: "power2.out"
          });
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const impacts = [
    {
      id: "environment",
      title: "Environmental Degradation",
      description: "Unchecked growth accelerates climate change, pollution, and biodiversity loss, threatening our planet's life-supporting systems.",
      image: environmentImage,
      icon: TreePine,
      stats: [
        { icon: Thermometer, value: "1.5°C", label: "Temperature increase" },
        { icon: Factory, value: "36Gt", label: "Annual CO2 emissions" },
      ],
      gradient: "from-emerald-500/20 to-green-600/20"
    },
    {
      id: "inequality",
      title: "Rising Inequality",
      description: "Economic growth often concentrates wealth among the elite while leaving behind marginalized communities, widening social gaps.",
      image: inequalityImage,
      icon: Users,
      stats: [
        { icon: TrendingUp, value: "82%", label: "Wealth to top 1%" },
        { icon: Home, value: "700M", label: "People in poverty" },
      ],
      gradient: "from-amber-500/20 to-orange-600/20"
    },
    {
      id: "sustainability",
      title: "Resource Depletion",
      description: "Our consumption-driven economy depletes finite resources faster than they can regenerate, jeopardizing future generations.",
      image: resourceImage,
      icon: Recycle,
      stats: [
        { icon: Recycle, value: "1.7x", label: "Earth's capacity used" },
        { icon: TreePine, value: "10M", label: "Hectares lost annually" },
      ],
      gradient: "from-red-500/20 to-pink-600/20"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 px-4">
      <div className="container mx-auto">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            The Real Cost of
            <span className="gradient-accent bg-clip-text text-transparent"> Unlimited Growth</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            While economic growth has brought prosperity, it has also created unprecedented challenges 
            that threaten our collective future.
          </p>
        </div>

        <div className="space-y-20">
          {impacts.map((impact, index) => (
            <div
              key={impact.id}
              id={impact.id}
              className={`impact-card grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Image */}
              <div className={`impact-image relative group ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative overflow-hidden rounded-2xl shadow-elegant">
                  <img
                    src={impact.image}
                    alt={impact.title}
                    className="w-full h-80 object-cover transition-smooth"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${impact.gradient} opacity-60`}></div>
                  <div className="absolute top-6 left-6">
                    <div className="w-12 h-12 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center">
                      <impact.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={`impact-content ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 rounded-lg gradient-hero flex items-center justify-center">
                    <impact.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <span className="text-sm font-medium text-primary uppercase tracking-wider">
                    Impact #{index + 1}
                  </span>
                </div>

                <h3 className="text-3xl md:text-4xl font-display font-bold mb-6">
                  {impact.title}
                </h3>

                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  {impact.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-6 mb-8">
                  {impact.stats.map((stat, statIndex) => (
                    <Card key={statIndex} className="stat-card p-4 hover:shadow-elegant transition-smooth">
                      <div className="flex items-center space-x-3">
                        <stat.icon className="w-5 h-5 text-primary" />
                        <div>
                          <div className="text-2xl font-bold">{stat.value}</div>
                          <div className="text-sm text-muted-foreground">{stat.label}</div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>

                <Button variant="outline" size="lg">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;