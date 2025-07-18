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
import environmentImage from "@/assets/environment-impact.jpg";
import inequalityImage from "@/assets/inequality-gap.jpg";
import resourceImage from "@/assets/resource-depletion.jpg";

const ImpactSection = () => {
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
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
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
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Image */}
              <div className={`relative group ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative overflow-hidden rounded-2xl shadow-elegant">
                  <img
                    src={impact.image}
                    alt={impact.title}
                    className="w-full h-80 object-cover transition-smooth group-hover:scale-105"
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
              <div className={`animate-slide-in-left ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
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
                    <Card key={statIndex} className="p-4 hover:shadow-elegant transition-smooth">
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