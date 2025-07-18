import { Button } from "@/components/ui/button";
import { ArrowDown, TrendingDown, AlertTriangle } from "lucide-react";
import heroImage from "@/assets/hero-economic-growth.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Economic growth impact visualization"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/90"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-16 h-16 rounded-full bg-destructive/20 animate-float"></div>
      <div className="absolute top-1/3 right-1/4 w-12 h-12 rounded-full bg-secondary/30 animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/4 left-1/3 w-20 h-20 rounded-full bg-primary/10 animate-float" style={{ animationDelay: '2s' }}></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <AlertTriangle className="w-6 h-6 text-destructive animate-pulse" />
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              Critical Economic Analysis
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
            The <span className="gradient-hero bg-clip-text text-transparent">Hidden Costs</span>
            <br />
            of Economic Growth
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Explore the environmental degradation, rising inequality, and sustainability challenges 
            that shadow our pursuit of unlimited economic expansion.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <Button variant="hero" size="xl">
              Explore the Impact
              <TrendingDown className="ml-2" />
            </Button>
            <Button variant="outline" size="xl">
              View Research
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
              <div className="text-3xl font-bold text-destructive mb-2">40%</div>
              <div className="text-sm text-muted-foreground">Increase in CO2 emissions</div>
            </div>
            <div className="text-center animate-slide-in-left" style={{ animationDelay: '0.4s' }}>
              <div className="text-3xl font-bold text-secondary mb-2">70%</div>
              <div className="text-sm text-muted-foreground">Wealth inequality gap</div>
            </div>
            <div className="text-center animate-slide-in-left" style={{ animationDelay: '0.6s' }}>
              <div className="text-3xl font-bold text-primary mb-2">85%</div>
              <div className="text-sm text-muted-foreground">Resource depletion rate</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;