import { useRoute } from "wouter";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import caseStudy1 from "@assets/generated_images/Case_study_1_mockup_5fda571d.png";
import caseStudy2 from "@assets/generated_images/Case_study_2_mockup_29c42256.png";
import caseStudy3 from "@assets/generated_images/Case_study_3_mockup_07b4d5ee.png";
import caseStudy4 from "@assets/generated_images/Case_study_4_mockup_adf24dd1.png";

export default function CaseStudyDetailPage() {
  const [, params] = useRoute("/case-study/:id");
  
  const caseStudies: Record<string, any> = {
    "mobile-banking": {
      title: "Mobile Banking Redesign",
      category: "Financial Services",
      role: "Lead UX Designer",
      timeline: "6 months",
      imageUrl: caseStudy1,
      overview: "Led the digital transformation of an enterprise banking application serving over 2 million users. The goal was to modernize the experience while maintaining security and trust.",
      problem: "Users were abandoning complex financial tasks due to confusing navigation, outdated interface patterns, and lack of transparency in processes. Task completion rates were below industry standards.",
      research: "Conducted 30+ user interviews, analyzed behavioral data from 100K+ sessions, and performed competitive analysis of 15 banking apps. Key insight: users wanted clarity and control, not just simplification.",
      insights: [
        "85% of users felt anxious during high-stakes transactions due to unclear feedback",
        "Users preferred progressive disclosure over hiding complexity entirely",
        "Trust signals (security badges, transaction confirmations) significantly reduced anxiety"
      ],
      ia: "Restructured navigation from 8 top-level categories to 4 intuitive sections. Implemented a context-aware menu that surfaced relevant actions based on user behavior.",
      designs: "Created a design system with 40+ components optimized for accessibility and consistency. Introduced micro-interactions that provided clear feedback at every step.",
      learnings: "The importance of balancing simplicity with transparency. Users don't want to be 'protected' from complexity—they want to understand and control it.",
      impact: "45% reduction in task completion time, 32% increase in feature adoption, 28% improvement in customer satisfaction scores"
    },
    "analytics-dashboard": {
      title: "Analytics Dashboard",
      category: "Enterprise Software",
      role: "Senior UX Strategist",
      timeline: "4 months",
      imageUrl: caseStudy2,
      overview: "Designed a sophisticated data visualization platform for C-suite executives at a Fortune 200 company, enabling faster and more informed decision-making.",
      problem: "Executives were drowning in data but starving for insights. Existing tools required significant manual work to extract meaningful patterns.",
      research: "Shadowed 12 executives in their daily workflows, analyzed decision-making patterns, and identified the critical metrics that drove strategic choices.",
      insights: [
        "Executives needed to see the 'story' in data, not just numbers",
        "Context and comparison were more valuable than absolute values",
        "Mobile access was crucial for time-sensitive decisions"
      ],
      ia: "Organized dashboards around business questions rather than data sources. Implemented smart filtering that learned user preferences.",
      designs: "Crafted elegant visualizations that balanced detail with clarity. Used color strategically to highlight anomalies and trends.",
      learnings: "Great data visualization is about editorial judgment—knowing what to show and what to hide.",
      impact: "3x faster decision-making, 67% increase in platform daily active users, adopted across 5 additional departments"
    },
    "ecommerce-experience": {
      title: "Luxury E-Commerce",
      category: "Retail & Fashion",
      role: "Lead UX/UI Designer",
      timeline: "5 months",
      imageUrl: caseStudy3,
      overview: "Created an elevated online shopping experience for a luxury fashion brand, balancing aesthetic sophistication with universal accessibility.",
      problem: "The brand's digital presence didn't match its premium positioning. The website felt generic and failed to convey the quality of products.",
      research: "Analyzed luxury retail competitors, conducted user testing with target demographic, and studied accessibility best practices for e-commerce.",
      insights: [
        "Luxury shoppers expected editorial-quality imagery and storytelling",
        "Accessibility features could be elegant, not utilitarian",
        "Product discovery was as important as efficient checkout"
      ],
      ia: "Designed a discovery-first architecture that encouraged exploration. Implemented visual browsing with smart categorization.",
      designs: "Developed a refined design language with generous white space, sophisticated typography, and high-quality imagery. Every interaction felt premium.",
      learnings: "Accessibility and aesthetics are not opposing forces—they can elevate each other.",
      impact: "32% increase in conversion rate, 48% improvement in average session duration, WCAG 2.1 AA compliance achieved"
    },
    "healthcare-booking": {
      title: "Healthcare Appointment Booking",
      category: "Healthcare",
      role: "UX Designer & Researcher",
      timeline: "4 months",
      imageUrl: caseStudy4,
      overview: "Streamlined the patient journey for a healthcare provider, making it easier and less stressful to find care and book appointments.",
      problem: "Patients faced a confusing maze of options when trying to book appointments. The process felt cold and transactional during an already stressful time.",
      research: "Interviewed 25 patients, observed booking sessions, and mapped emotional journeys to identify pain points and moments that mattered.",
      insights: [
        "Patients valued empathy and clarity over speed",
        "Transparency about wait times and costs reduced anxiety",
        "Personal touches (doctor bios, photos) built trust"
      ],
      ia: "Created a progressive disclosure flow that asked one question at a time. Implemented smart defaults based on patient history.",
      designs: "Designed with compassion—warm colors, friendly micro-copy, and reassuring feedback at every step. Made the system feel human.",
      learnings: "In healthcare, the how matters as much as the what. Every interaction is an opportunity to build trust.",
      impact: "28% improvement in patient satisfaction, 41% reduction in booking abandonment, 52% decrease in support calls"
    }
  };

  const study = params?.id ? caseStudies[params.id] : null;

  if (!study) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-4xl font-bold mb-4">Case Study Not Found</h1>
          <Link href="/case-studies">
            <Button>Back to Case Studies</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24">
      <section className="py-12 px-6 max-w-4xl mx-auto">
        <Link href="/case-studies">
          <Button variant="ghost" className="mb-8" data-testid="button-back">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Case Studies
          </Button>
        </Link>

        <div className="mb-8">
          <p className="text-sm font-medium text-primary mb-2" data-testid="text-category">{study.category}</p>
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6" data-testid="text-title">
            {study.title}
          </h1>
          <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
            <div>
              <span className="font-semibold text-foreground">Role:</span> {study.role}
            </div>
            <div>
              <span className="font-semibold text-foreground">Timeline:</span> {study.timeline}
            </div>
          </div>
        </div>

        <img
          src={study.imageUrl}
          alt={study.title}
          className="w-full rounded-xl mb-16 shadow-lg"
          data-testid="img-hero"
        />

        <div className="space-y-16">
          <section>
            <h2 className="font-serif text-3xl font-bold mb-4" data-testid="text-section-overview">Overview</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{study.overview}</p>
          </section>

          <section>
            <h2 className="font-serif text-3xl font-bold mb-4" data-testid="text-section-problem">The Problem</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{study.problem}</p>
          </section>

          <section>
            <h2 className="font-serif text-3xl font-bold mb-4" data-testid="text-section-research">Research</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">{study.research}</p>
          </section>

          <section>
            <h2 className="font-serif text-3xl font-bold mb-4" data-testid="text-section-insights">Key Insights</h2>
            <ul className="space-y-3">
              {study.insights.map((insight: string, index: number) => (
                <li key={index} className="flex gap-3 text-lg" data-testid={`text-insight-${index}`}>
                  <span className="text-primary mt-1">•</span>
                  <span className="text-muted-foreground">{insight}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-3xl font-bold mb-4" data-testid="text-section-ia">Information Architecture</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{study.ia}</p>
          </section>

          <section>
            <h2 className="font-serif text-3xl font-bold mb-4" data-testid="text-section-designs">Final Designs</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{study.designs}</p>
          </section>

          <section>
            <h2 className="font-serif text-3xl font-bold mb-4" data-testid="text-section-learnings">Learnings</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{study.learnings}</p>
          </section>

          <section className="border-t border-border pt-8">
            <h2 className="font-serif text-3xl font-bold mb-4" data-testid="text-section-impact">Impact</h2>
            <p className="text-xl font-medium text-primary">{study.impact}</p>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-border">
          <Link href="/case-studies">
            <Button variant="outline" data-testid="button-back-bottom">
              <ArrowLeft className="h-4 w-4 mr-2" />
              View All Case Studies
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
