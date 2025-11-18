import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Search, Palette, Target, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      icon: Search,
      title: "UX Audits",
      description: "Comprehensive evaluation of your digital product's usability, accessibility, and user experience. Detailed findings with actionable recommendations.",
      deliverables: [
        "Heuristic evaluation report",
        "Accessibility compliance assessment (WCAG 2.1)",
        "User flow analysis",
        "Prioritized improvement roadmap"
      ]
    },
    {
      icon: Palette,
      title: "Interface Redesigns",
      description: "Transform outdated or underperforming interfaces into modern, intuitive experiences that delight users and drive results.",
      deliverables: [
        "User research & competitive analysis",
        "Information architecture & wireframes",
        "High-fidelity designs & prototypes",
        "Design system components"
      ]
    },
    {
      icon: Target,
      title: "Product Strategy",
      description: "Strategic UX consultation to align product vision with user needs. From discovery to roadmap planning.",
      deliverables: [
        "Stakeholder interviews & workshops",
        "User persona development",
        "Feature prioritization matrix",
        "UX strategy documentation"
      ]
    },
    {
      icon: Sparkles,
      title: "Brand Consulting",
      description: "Harmonize your brand identity with exceptional user experience. Create cohesive, memorable digital touchpoints.",
      deliverables: [
        "Brand audit & positioning analysis",
        "Visual design system creation",
        "Content & tone strategy",
        "Brand application guidelines"
      ]
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery",
      description: "Understanding your goals, users, and constraints through stakeholder interviews and research"
    },
    {
      step: "02",
      title: "Strategy",
      description: "Defining the approach, creating frameworks, and establishing success metrics"
    },
    {
      step: "03",
      title: "Design",
      description: "Crafting solutions through iterative design, testing, and refinement"
    },
    {
      step: "04",
      title: "Delivery",
      description: "Providing comprehensive documentation, assets, and ongoing support"
    }
  ];

  return (
    <div className="min-h-screen pt-24">
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="font-serif text-5xl md:text-6xl font-semibold mb-6" data-testid="text-page-heading">
            Divine Align Design
          </h1>
          <p className="font-serif text-xl md:text-2xl text-muted-foreground italic mb-4">
            Where logic meets imagination
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Freelance UX consulting services that combine strategic thinking with creative problem-solving
            to deliver exceptional digital experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {services.map((service, index) => (
            <Card key={index} className="p-8 hover-elevate active-elevate-2 transition-all" data-testid={`card-service-${index}`}>
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-6">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-serif text-2xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
              <div className="space-y-2">
                <p className="text-sm font-semibold">Deliverables:</p>
                {service.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-12 text-center" data-testid="text-process-heading">
            My Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {process.map((phase, index) => (
              <div key={index} className="text-center" data-testid={`card-process-${index}`}>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent text-primary-foreground font-serif text-2xl font-semibold mb-4">
                  {phase.step}
                </div>
                <h3 className="font-semibold text-lg mb-2">{phase.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 max-w-4xl mx-auto">
        <Card className="p-12 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4" data-testid="text-consulting-heading">
              Ready to Work Together?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Whether you need a comprehensive UX audit, a full product redesign, or strategic consultation,
              I'd love to discuss how we can create something exceptional together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" data-testid="button-contact">
                  Start a Conversation
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
              <Link href="/case-studies">
                <Button size="lg" variant="outline" data-testid="button-view-work">
                  View My Work
                </Button>
              </Link>
            </div>
          </div>
        </Card>
      </section>

      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center">
          <h3 className="font-serif text-2xl md:text-3xl font-semibold mb-4">Why Choose Divine Align Design?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="p-6">
              <h4 className="font-semibold text-lg mb-2">Fortune 500 Experience</h4>
              <p className="text-sm text-muted-foreground">
                2+ years leading UX strategy and digital transformation at enterprise scale
              </p>
            </div>
            <div className="p-6">
              <h4 className="font-semibold text-lg mb-2">Research-Driven</h4>
              <p className="text-sm text-muted-foreground">
                Every decision backed by user insights, data analysis, and strategic thinking
              </p>
            </div>
            <div className="p-6">
              <h4 className="font-semibold text-lg mb-2">Global Perspective</h4>
              <p className="text-sm text-muted-foreground">
                International background brings cultural awareness and inclusive design thinking
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
