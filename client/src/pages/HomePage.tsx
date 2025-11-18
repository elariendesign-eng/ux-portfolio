import Hero from "@/components/Hero";
import CaseStudyCard from "@/components/CaseStudyCard";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Lightbulb, Target, TrendingUp } from "lucide-react";
import caseStudy1 from "@assets/generated_images/Banking_app_UX_mockup_4be14834.png";
import caseStudy2 from "@assets/generated_images/E-commerce_UX_mockup_4ac035df.png";

export default function HomePage() {
  const featuredProjects = [
    {
      id: "mobile-banking",
      title: "Mobile Banking Transformation",
      description: "Led end-to-end redesign of enterprise banking app serving 2M+ users. Reduced task completion time by 45% through simplified IA and intuitive flows.",
      category: "Financial Services · UX Strategy",
      imageUrl: caseStudy1,
    },
    {
      id: "luxury-ecommerce",
      title: "Luxury E-Commerce Experience",
      description: "Designed accessible, premium shopping experience that increased conversion by 32% while achieving WCAG 2.1 AA compliance.",
      category: "Retail · Product Design",
      imageUrl: caseStudy2,
    },
  ];

  const services = [
    {
      icon: Users,
      title: "User Research",
      description: "Deep qualitative & quantitative research to uncover user needs and validate design decisions",
    },
    {
      icon: Lightbulb,
      title: "UX Strategy",
      description: "Strategic design thinking that aligns business goals with user needs for measurable impact",
    },
    {
      icon: Target,
      title: "Product Design",
      description: "Crafting intuitive, accessible interfaces from wireframes to high-fidelity prototypes",
    },
  ];

  return (
    <div className="min-h-screen">
      <Hero />

      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-6" data-testid="text-services-heading">
            What I Do
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I bring strategic UX thinking to complex product challenges, transforming research insights
            into elegant, user-centered design solutions that drive business results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-2xl border border-border hover-elevate active-elevate-2 transition-all"
              data-testid={`card-service-${index}`}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                <service.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-semibold text-xl mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 px-6 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-4" data-testid="text-featured-heading">
                Featured Work
              </h2>
              <p className="text-muted-foreground max-w-2xl">
                Case studies showcasing my process from research to shipped product
              </p>
            </div>
            <Link href="/case-studies">
              <Button variant="ghost" className="hidden md:flex items-center gap-2" data-testid="button-view-all">
                View All Projects
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <CaseStudyCard key={project.id} {...project} />
            ))}
          </div>

          <div className="mt-12 text-center md:hidden">
            <Link href="/case-studies">
              <Button variant="outline" className="w-full" data-testid="button-view-all-mobile">
                View All Projects
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6" data-testid="text-about-preview-heading">
              A Global Perspective on UX
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              With a background in international relations and experience as a professional soccer player,
              I bring unique perspectives to UX design — understanding team dynamics, global cultural nuances,
              and the importance of strategic thinking under pressure.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              For the past 2 years at a Fortune 500 company, I've led UX strategy for digital transformation
              initiatives, always focused on creating experiences that are both beautiful and measurably effective.
            </p>
            <Link href="/about">
              <Button variant="outline" data-testid="button-learn-more">
                Learn More About Me
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>
          <div className="order-first md:order-last">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center overflow-hidden">
              <TrendingUp className="h-32 w-32 text-primary/30" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-primary/10 via-background to-accent/10 rounded-2xl p-12 md:p-16 text-center border border-primary/20">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4" data-testid="text-cta-heading">
            Divine Align Design
          </h2>
          <p className="text-lg text-muted-foreground mb-2 max-w-2xl mx-auto">
            Available for freelance UX consulting
          </p>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            UX Audits · Interface Redesigns · Product Strategy · Brand Consulting
          </p>
          <Link href="/services">
            <Button size="lg" variant="default" data-testid="button-view-services">
              Explore Services
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
