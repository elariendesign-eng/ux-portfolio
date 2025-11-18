import Footer from "@/components/Footer";
import CaseStudyCard from "@/components/CaseStudyCard";
import caseStudy1 from "@assets/generated_images/Case_study_1_mockup_5fda571d.png";
import caseStudy2 from "@assets/generated_images/Case_study_2_mockup_29c42256.png";
import caseStudy3 from "@assets/generated_images/Case_study_3_mockup_07b4d5ee.png";
import caseStudy4 from "@assets/generated_images/Case_study_4_mockup_adf24dd1.png";

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      id: "mobile-banking",
      title: "Mobile Banking Redesign",
      description: "Leading UX strategy for digital transformation of enterprise banking app with 2M+ users. Reduced task completion time by 45% through simplified information architecture.",
      category: "Financial Services",
      imageUrl: caseStudy1,
    },
    {
      id: "analytics-dashboard",
      title: "Analytics Dashboard",
      description: "Designing a sophisticated data visualization platform for Fortune 200 company. Empowered executives to make data-driven decisions 3x faster.",
      category: "Enterprise Software",
      imageUrl: caseStudy2,
    },
    {
      id: "ecommerce-experience",
      title: "Luxury E-Commerce",
      description: "Creating an elevated shopping experience with accessibility at the forefront. Increased conversion rates by 32% while achieving WCAG 2.1 AA compliance.",
      category: "Retail & Fashion",
      imageUrl: caseStudy3,
    },
    {
      id: "healthcare-booking",
      title: "Healthcare Appointment Booking",
      description: "Streamlining patient journey from discovery to booking with compassionate design. Improved patient satisfaction scores by 28%.",
      category: "Healthcare",
      imageUrl: caseStudy4,
    },
  ];

  return (
    <div className="min-h-screen pt-24">
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="mb-16">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6" data-testid="text-page-heading">
            Case Studies
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            A collection of projects where strategy meets creativity. Each case study showcases
            the process, challenges, and impact of designing meaningful digital experiences.
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
