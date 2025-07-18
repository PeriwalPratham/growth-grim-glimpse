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

const SolutionsSection = () => {
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
    <section id="solutions" className="py-20 px-4 gradient-subtle">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <Card 
              key={index} 
              className="p-8 hover:shadow-elegant transition-smooth animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl gradient-hero flex items-center justify-center flex-shrink-0">
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
          <Card className="max-w-4xl mx-auto p-12 gradient-subtle border-primary/20">
            <Globe className="w-16 h-16 text-primary mx-auto mb-6 animate-float" />
            
            <h3 className="text-3xl font-display font-bold mb-4">
              Join the Movement for Sustainable Progress
            </h3>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              The future of our economy depends on our collective action today. 
              Together, we can build a world that thrives within planetary boundaries.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
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