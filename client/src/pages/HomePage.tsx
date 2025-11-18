import Hero from "@/components/Hero";
import CaseStudyCard from "@/components/CaseStudyCard";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Users, Globe, Target } from "lucide-react";
import caseStudy1 from "@assets/generated_images/Case_study_1_mockup_5fda571d.png";
import caseStudy2 from "@assets/generated_images/Case_study_2_mockup_29c42256.png";
import caseStudy3 from "@assets/generated_images/Case_study_3_mockup_07b4d5ee.png";

export default function HomePage() {
  const caseStudies = [
    {
      id: "mobile-banking",
      title: "Mobile Banking Redesign",
      description: "Leading UX strategy for digital transformation of enterprise banking app with 2M+ users",
      category: "Financial Services",
      imageUrl: caseStudy1,
    },
    {
      id: "analytics-dashboard",
      title: "Analytics Dashboard",
      description: "Designing a sophisticated data visualization platform for Fortune 200 company",
      category: "Enterprise Software",
      imageUrl: caseStudy2,
    },
    {
      id: "ecommerce-experience",
      title: "Luxury E-Commerce",
      description: "Creating an elevated shopping experience with accessibility at the forefront",
      category: "Retail & Fashion",
      imageUrl: caseStudy3,
    },
  ];

  const values = [
    {
      icon: Target,
      title: "Systems Thinking",
      description: "Approaching problems holistically to create cohesive, scalable solutions",
    },
    {
      icon: Users,
      title: "User Research",
      description: "Deep empathy-driven insights that inform every design decision",
    },
    {
      icon: Sparkles,
      title: "Product Strategy",
      description: "Aligning business goals with user needs for meaningful impact",
    },
    {
      icon: Globe,
      title: "Global Awareness",
      description: "Designing with cultural sensitivity and international perspective",
    },
  ];

  return (
    <div className="min-h-screen">
      <Hero />

      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6" data-testid="text-value-heading">
            Crafting Meaningful Experiences
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            With 2 years at a Fortune 200 company, I blend strategic thinking with creative storytelling
            to transform complex challenges into intuitive, delightful user experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl border border-border hover-elevate active-elevate-2 transition-all"
              data-testid={`card-value-${index}`}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                <value.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
              <p className="text-sm text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4" data-testid="text-featured-heading">
                Featured Work
              </h2>
              <p className="text-muted-foreground">
                A selection of projects showcasing UX strategy and design thinking
              </p>
            </div>
            <Link href="/case-studies">
              <Button variant="ghost" className="hidden md:flex items-center gap-2" data-testid="button-view-all">
                View All
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <CaseStudyCard key={study.id} {...study} />
            ))}
          </div>

          <div className="mt-12 text-center md:hidden">
            <Link href="/case-studies">
              <Button variant="outline" className="w-full" data-testid="button-view-all-mobile">
                View All Case Studies
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-chart-3/10 rounded-2xl p-12 md:p-16 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4" data-testid="text-cta-heading">
            Let's Create Something Magical
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether you need UX strategy, product design, or creative direction,
            I'm here to bring your vision to life.
          </p>
          <Link href="/contact">
            <Button size="lg" data-testid="button-get-in-touch">
              Get in Touch
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
