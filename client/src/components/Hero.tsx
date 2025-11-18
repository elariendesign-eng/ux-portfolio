import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBackground from "@assets/generated_images/Hero_ethereal_gradient_background_f91fffb1.png";

export default function Hero() {
  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroBackground})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl">
        <h1
          className="font-serif text-7xl md:text-8xl lg:text-9xl font-bold mb-6 text-foreground"
          data-testid="text-hero-name"
        >
          ARB
        </h1>
        <p
          className="font-serif text-xl md:text-2xl lg:text-3xl text-foreground/90 font-light mb-8"
          data-testid="text-hero-tagline"
        >
          UX Designer. Strategist. Story-Driven Creator.
        </p>
        <div className="flex flex-wrap gap-4 justify-center text-sm md:text-base text-muted-foreground max-w-3xl mx-auto">
          <span className="px-4 py-2 bg-card/50 backdrop-blur rounded-xl border border-border">Systems Thinking</span>
          <span className="px-4 py-2 bg-card/50 backdrop-blur rounded-xl border border-border">User Research</span>
          <span className="px-4 py-2 bg-card/50 backdrop-blur rounded-xl border border-border">Product Strategy</span>
          <span className="px-4 py-2 bg-card/50 backdrop-blur rounded-xl border border-border">Global Awareness</span>
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
