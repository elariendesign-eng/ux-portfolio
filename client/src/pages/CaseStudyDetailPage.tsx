import { useRoute } from "wouter";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import caseStudy1 from "@assets/generated_images/Banking_app_UX_mockup_4be14834.png";
import caseStudy2 from "@assets/generated_images/E-commerce_UX_mockup_4ac035df.png";
import caseStudy3 from "@assets/generated_images/Healthcare_UX_mockup_8d3e503d.png";
import caseStudy4 from "@assets/generated_images/Analytics_dashboard_UX_mockup_7a064afa.png";

export default function CaseStudyDetailPage() {
  const [, params] = useRoute("/case-study/:id");
  
  const caseStudies: Record<string, any> = {
    "mobile-banking": {
      title: "Mobile Banking Transformation",
      category: "Financial Services · UX Strategy",
      role: "Lead UX Designer",
      timeline: "6 months",
      tools: "Figma, Miro, UserTesting, Google Analytics",
      imageUrl: caseStudy1,
      overview: "Led the digital transformation of an enterprise banking application serving over 2 million active users. The goal was to modernize the experience, improve task completion rates, and maintain the trust users expect from their financial institution.",
      problem: "Users were abandoning complex tasks like fund transfers and bill payments due to confusing navigation, lack of transparency in multi-step processes, and outdated interface patterns. Task completion rates were 23% below industry benchmarks, directly impacting customer satisfaction and retention.",
      research: "Conducted 30+ moderated user interviews across diverse demographics, analyzed behavioral data from 100K+ user sessions, and performed competitive analysis of 15 banking apps. Key insight: users didn't want simplified features—they wanted clarity and control over complex processes.",
      insights: [
        "85% of users reported anxiety during high-stakes transactions due to unclear progress indicators and lack of confirmation",
        "Users preferred progressive disclosure that revealed complexity when needed, rather than hiding it entirely",
        "Trust signals (security badges, real-time transaction confirmations) significantly reduced abandonment"
      ],
      ia: "Restructured navigation from 8 scattered top-level categories to 4 intuitive sections aligned with mental models. Implemented a context-aware action menu that surfaced relevant options based on user behavior and transaction history.",
      designs: "Created a comprehensive design system with 40+ components optimized for accessibility (WCAG 2.1 AA) and consistency across iOS and Android. Introduced micro-interactions that provided clear, reassuring feedback at every step of critical flows.",
      learnings: "The most important lesson: users don't want to be 'protected' from complexity through oversimplification. They want to understand and control it. Transparency builds trust more than simplification.",
      impact: "45% reduction in average task completion time, 32% increase in feature adoption, 28% improvement in customer satisfaction scores, 67% decrease in support calls related to navigation confusion"
    },
    "luxury-ecommerce": {
      title: "Luxury E-Commerce Experience",
      category: "Retail · Product Design",
      role: "Senior UX/UI Designer",
      timeline: "5 months",
      tools: "Figma, Principle, Hotjar, Axe DevTools",
      imageUrl: caseStudy2,
      overview: "Created an elevated online shopping experience for a luxury fashion brand, balancing aesthetic sophistication with universal accessibility. The challenge was to reflect the brand's premium positioning digitally while ensuring an inclusive experience for all users.",
      problem: "The brand's digital presence felt generic and failed to convey the quality and craftsmanship of their products. The website had a 68% bounce rate on product pages and conversion rates 40% below luxury retail benchmarks. Additionally, accessibility issues excluded users with disabilities.",
      research: "Analyzed 12 luxury retail competitors, conducted user testing with 25 participants from the target demographic, and performed comprehensive accessibility audits. Studied editorial fashion magazines to understand visual storytelling expectations in the luxury space.",
      insights: [
        "Luxury shoppers expected editorial-quality imagery, generous white space, and sophisticated typography—not busy promotional layouts",
        "Accessibility features could be elegantly integrated without compromising aesthetics",
        "Product discovery and browsing was as important as efficient checkout—the journey matters"
      ],
      ia: "Designed a discovery-first architecture that encouraged exploration through curated collections, visual browsing, and smart categorization. Implemented a persistent, minimalist navigation that never interrupted the browsing experience.",
      designs: "Developed a refined design language with generous spacing, sophisticated serif/sans pairings, and museum-quality imagery. Every interaction—from add-to-cart animations to checkout flow—felt premium and intentional. Achieved WCAG 2.1 AA compliance through careful color contrast, focus indicators, and semantic HTML.",
      learnings: "Accessibility and aesthetics are not opposing forces—they elevate each other. Constraints often lead to more creative, thoughtful solutions. Premium doesn't mean exclusive; it means exceptional for everyone.",
      impact: "32% increase in conversion rate, 48% improvement in average session duration, 52% reduction in bounce rate, WCAG 2.1 AA compliance achieved, featured in 3 design publications"
    },
    "healthcare-portal": {
      title: "Patient Portal Redesign",
      category: "Healthcare · User Research",
      role: "UX Designer & Researcher",
      timeline: "4 months",
      tools: "Figma, Maze, Dovetail, Optimal Workshop",
      imageUrl: caseStudy3,
      overview: "Streamlined the patient journey for a major healthcare provider, making it easier and less stressful to find appropriate care and book appointments. The focus was on compassionate design that acknowledged the emotional state of users seeking medical care.",
      problem: "Patients faced a confusing maze of options when trying to book appointments, leading to high abandonment (61%) and increased load on phone support. The process felt cold and transactional during an already stressful time, contributing to negative patient experience scores.",
      research: "Interviewed 25 patients, observed 12 live booking sessions, and mapped emotional journeys to identify pain points and moments that mattered. Collaborated with front-desk staff and nurses to understand operational constraints and patient needs from their perspective.",
      insights: [
        "Patients valued empathy and clarity over speed—they needed confidence they were booking the right appointment",
        "Transparency about wait times, costs, and what to expect reduced anxiety significantly",
        "Personal touches (doctor bios, photos, specialties) built trust and helped patients feel cared for"
      ],
      ia: "Created a progressive disclosure flow that asked one question at a time, never overwhelming users. Implemented smart defaults based on patient history and reason for visit, while allowing full control when needed.",
      designs: "Designed with compassion at every touchpoint—warm, accessible colors; friendly, reassuring micro-copy; and clear feedback at each step. Made the system feel human through thoughtful illustrations and photography. Included features like estimated cost transparency and appointment preparation guidance.",
      learnings: "In healthcare, the how matters as much as the what. Every interaction is an opportunity to build trust, reduce anxiety, and make people feel cared for. Emotional design isn't frivolous—it's essential.",
      impact: "28% improvement in patient satisfaction scores, 41% reduction in booking abandonment, 52% decrease in support calls, 35% increase in appointment completion rate"
    },
    "analytics-dashboard": {
      title: "Executive Analytics Dashboard",
      category: "Enterprise SaaS · Data Visualization",
      role: "Senior UX Strategist",
      timeline: "4 months",
      tools: "Figma, D3.js, Tableau (research), Optimal Workshop",
      imageUrl: caseStudy4,
      overview: "Designed a sophisticated data visualization platform for C-suite executives at a Fortune 500 company, enabling faster and more informed decision-making. The challenge was transforming complex datasets into clear, actionable insights.",
      problem: "Executives were drowning in data but starving for insights. Existing tools required significant manual work to extract meaningful patterns. Decisions were delayed by days as analysts prepared custom reports for every request.",
      research: "Shadowed 12 executives in their daily workflows, analyzed decision-making patterns across departments, and identified the critical metrics that drove strategic choices. Conducted card sorting exercises to understand mental models for data categorization.",
      insights: [
        "Executives needed to see the 'story' in data—context and narrative, not just numbers",
        "Comparison and trends were more valuable than absolute values",
        "Mobile access was crucial for time-sensitive decisions made outside the office"
      ],
      ia: "Organized dashboards around business questions rather than data sources (e.g., 'How is regional performance?' instead of 'Sales Data'). Implemented smart filtering that learned user preferences and suggested relevant views.",
      designs: "Crafted elegant visualizations that balanced detail with clarity. Used color strategically to highlight anomalies and trends without overwhelming. Designed for progressive disclosure—overview first, details on demand. Mobile interface provided key metrics optimized for decision-making on the go.",
      learnings: "Great data visualization is about editorial judgment—knowing what to show, what to hide, and what context to provide. The best interfaces disappear, letting insights speak for themselves.",
      impact: "3x faster decision-making (from days to hours), 67% increase in platform daily active users, adopted across 5 additional departments beyond initial scope, $2.3M in analyst time saved annually"
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
          <h1 className="font-serif text-5xl md:text-6xl font-semibold mb-6" data-testid="text-title">
            {study.title}
          </h1>
          <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
            <div>
              <span className="font-semibold text-foreground">Role:</span> {study.role}
            </div>
            <div>
              <span className="font-semibold text-foreground">Timeline:</span> {study.timeline}
            </div>
            <div>
              <span className="font-semibold text-foreground">Tools:</span> {study.tools}
            </div>
          </div>
        </div>

        <img
          src={study.imageUrl}
          alt={study.title}
          className="w-full rounded-2xl mb-16 shadow-lg"
          data-testid="img-hero"
        />

        <div className="space-y-16">
          <section>
            <h2 className="font-serif text-3xl font-semibold mb-4" data-testid="text-section-overview">Overview</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{study.overview}</p>
          </section>

          <section>
            <h2 className="font-serif text-3xl font-semibold mb-4" data-testid="text-section-problem">The Problem</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{study.problem}</p>
          </section>

          <section>
            <h2 className="font-serif text-3xl font-semibold mb-4" data-testid="text-section-research">Research & Discovery</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">{study.research}</p>
          </section>

          <section>
            <h2 className="font-serif text-3xl font-semibold mb-4" data-testid="text-section-insights">Key Insights</h2>
            <ul className="space-y-3">
              {study.insights.map((insight: string, index: number) => (
                <li key={index} className="flex gap-3 text-lg" data-testid={`text-insight-${index}`}>
                  <span className="text-primary mt-1 text-xl">•</span>
                  <span className="text-muted-foreground">{insight}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-3xl font-semibold mb-4" data-testid="text-section-ia">Information Architecture</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{study.ia}</p>
          </section>

          <section>
            <h2 className="font-serif text-3xl font-semibold mb-4" data-testid="text-section-designs">Design Solution</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{study.designs}</p>
          </section>

          <section>
            <h2 className="font-serif text-3xl font-semibold mb-4" data-testid="text-section-learnings">Key Learnings</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{study.learnings}</p>
          </section>

          <section className="border-t border-border pt-8">
            <h2 className="font-serif text-3xl font-semibold mb-4" data-testid="text-section-impact">Impact & Results</h2>
            <p className="text-xl font-medium text-primary leading-relaxed">{study.impact}</p>
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
