import Footer from "@/components/Footer";
import CaseStudyCard from "@/components/CaseStudyCard";
import caseStudy1 from "@assets/generated_images/Banking_app_UX_mockup_4be14834.png";
import caseStudy2 from "@assets/generated_images/E-commerce_UX_mockup_4ac035df.png";
import caseStudy3 from "@assets/generated_images/Healthcare_UX_mockup_8d3e503d.png";
import caseStudy4 from "@assets/generated_images/Analytics_dashboard_UX_mockup_7a064afa.png";

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      id: "mobile-banking",
      title: "Mobile Banking Transformation",
      description: "Led comprehensive UX strategy for digital transformation of enterprise banking app serving 2M+ users. Reduced task completion time by 45% through research-driven redesign and simplified information architecture.",
      category: "Financial Services · UX Strategy",
      imageUrl: caseStudy1,
    },
    {
      id: "luxury-ecommerce",
      title: "Luxury E-Commerce Experience",
      description: "Designed accessible, premium shopping experience that increased conversion by 32% while achieving WCAG 2.1 AA compliance. Elevated brand through editorial-quality UI and intuitive product discovery.",
      category: "Retail · Product Design",
      imageUrl: caseStudy2,
    },
    {
      id: "healthcare-portal",
      title: "Patient Portal Redesign",
      description: "Transformed healthcare appointment booking flow with empathy-driven design. Improved patient satisfaction by 28% and reduced support calls by 52% through compassionate, transparent UX.",
      category: "Healthcare · User Research",
      imageUrl: caseStudy3,
    },
    {
      id: "analytics-dashboard",
      title: "Executive Analytics Dashboard",
      description: "Crafted sophisticated data visualization platform for C-suite decision-making. Enabled 3x faster insights through strategic information design and context-aware interfaces.",
      category: "Enterprise SaaS · Data Visualization",
      imageUrl: caseStudy4,
    },
  ];

  return (
    <div className="min-h-screen pt-24">
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="mb-16">
          <h1 className="font-serif text-5xl md:text-6xl font-semibold mb-6" data-testid="text-page-heading">
            Case Studies
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            A collection of projects showcasing my UX process — from research and strategy
            to design and measurable impact. Each case study demonstrates how empathy-driven
            design creates meaningful business results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.id} {...study} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
