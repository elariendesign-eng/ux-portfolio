import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import heroBackground from "@assets/generated_images/Celestial_teal_gold_hero_background_e218c69a.png";
import headshot from "@assets/generated_images/Professional_headshot_Angela_b930a33f.png";

export default function Hero() {
  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight * 0.85, behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[85vh] w-full flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroBackground})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl py-20">
        <div className="mb-8 inline-block">
          <img
            src={headshot}
            alt="Angela Rose Boyle"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-primary/20 shadow-2xl mx-auto"
            data-testid="img-headshot"
          />
        </div>
        
        <h1
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium mb-4 text-foreground"
          data-testid="text-hero-name"
        >
          Angela Rose Boyle
        </h1>
        
        <p
          className="font-serif text-xl md:text-2xl lg:text-3xl text-foreground/80 font-light italic mb-8"
          data-testid="text-hero-tagline"
        >
          Where logic meets imagination
        </p>

        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
          Senior UX Designer & Strategist crafting meaningful digital experiences through
          user research, product strategy, and empathetic design
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/case-studies">
            <Button size="lg" data-testid="button-view-work">
              View My Work
            </Button>
          </Link>
          <Link href="/about">
            <Button size="lg" variant="outline" className="backdrop-blur-sm bg-background/50" data-testid="button-read-about">
              Read About Me
            </Button>
          </Link>
        </div>
      </div>

      <button
        onClick={scrollToContent}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce hover-elevate active-elevate-2 p-3 rounded-full"
        data-testid="button-scroll-indicator"
        aria-label="Scroll to content"
      >
        <ArrowDown className="h-6 w-6 text-primary" />
      </button>
    </section>
  );
}
