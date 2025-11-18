import Footer from "@/components/Footer";
import PhotoGallery from "@/components/PhotoGallery";
import { Card } from "@/components/ui/card";
import { Briefcase, Globe2, Users, Zap } from "lucide-react";
import photo1 from "@assets/generated_images/Professional_modeling_portrait_1_bfc8bf09.png";
import photo2 from "@assets/generated_images/Editorial_modeling_photo_2_b89ad56c.png";
import photo3 from "@assets/generated_images/Fantasy_editorial_photo_3_88f836dd.png";
import headshot from "@assets/generated_images/Professional_headshot_Angela_b930a33f.png";

export default function AboutPage() {
  const photos = [
    { id: "1", url: photo1, alt: "Professional portrait" },
    { id: "2", url: photo2, alt: "Editorial photography" },
    { id: "3", url: photo3, alt: "Creative photoshoot" },
  ];

  const values = [
    {
      icon: Users,
      title: "Empathy-Driven",
      description: "Deep user understanding informs every design decision I make"
    },
    {
      icon: Globe2,
      title: "Global Perspective",
      description: "International background brings cultural awareness to inclusive design"
    },
    {
      icon: Briefcase,
      title: "Strategic Thinking",
      description: "Aligning business goals with user needs for measurable impact"
    },
    {
      icon: Zap,
      title: "Adaptable",
      description: "From professional sports to UX—thriving in dynamic, high-pressure environments"
    }
  ];

  const skills = [
    "User Research & Testing",
    "Information Architecture",
    "Interaction Design",
    "Wireframing & Prototyping",
    "Design Systems",
    "Data Visualization",
    "Accessibility (WCAG 2.1)",
    "UX Strategy",
    "Stakeholder Management",
    "Workshop Facilitation"
  ];

  return (
    <div className="min-h-screen pt-24">
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="md:col-span-1">
            <img
              src={headshot}
              alt="Angela Rose Boyle"
              className="w-full rounded-2xl shadow-lg"
              data-testid="img-about-headshot"
            />
          </div>
          <div className="md:col-span-2">
            <h1 className="font-serif text-5xl md:text-6xl font-semibold mb-6" data-testid="text-page-heading">
              About Me
            </h1>
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              I'm a Senior UX Designer and Strategist who brings logic and imagination together to create
              meaningful digital experiences.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              For the past 2 years at a Fortune 500 company, I've led UX strategy for digital transformation
              initiatives—always focused on understanding users deeply and translating those insights into
              elegant, effective solutions.
            </p>
          </div>
        </div>

        <div className="space-y-12">
          <div>
            <h2 className="font-serif text-3xl font-semibold mb-4 flex items-center gap-3">
              <Briefcase className="h-7 w-7 text-primary" />
              My UX Journey
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              My path to UX wasn't traditional—and that's become my strength. I started with a background
              in international relations, which taught me to think systemically, consider diverse perspectives,
              and understand complex human dynamics. This foundation shapes how I approach design: with
              empathy, strategic thinking, and an awareness that great UX transcends borders and cultures.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              As a UX Designer at a Fortune 500 company, I've led projects across financial services,
              healthcare, and enterprise software—each one teaching me that the best design isn't just
              beautiful, it's measurably effective. I believe great UX emerges from deep user understanding,
              collaborative problem-solving, and the courage to simplify complexity.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-3xl font-semibold mb-4 flex items-center gap-3">
              <Globe2 className="h-7 w-7 text-primary" />
              Beyond Design
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Before UX, I was a professional soccer player—an experience that taught me about teamwork,
              resilience, and performing under pressure. I learned that success requires both individual
              skill and collaborative strategy, a lesson I apply to every design project.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I've also traveled extensively, living and working across different cultures. This global
              perspective informs my design work, ensuring I create inclusive experiences that respect
              cultural nuances and serve diverse user populations. I approach every project with curiosity,
              asking: How do different people experience this? What assumptions am I making?
            </p>
          </div>

          <div>
            <h2 className="font-serif text-3xl font-semibold mb-6">Core Values & Approach</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="p-6 hover-elevate active-elevate-2 transition-all" data-testid={`card-value-${index}`}>
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                    <value.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-serif text-3xl font-semibold mb-6">Skills & Expertise</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {skills.map((skill, index) => (
                <div key={index} className="p-4 rounded-xl border border-border text-center hover-elevate active-elevate-2 transition-all" data-testid={`card-skill-${index}`}>
                  <p className="font-medium text-sm">{skill}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4 text-center" data-testid="text-gallery-heading">
            Creative Portfolio
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            A glimpse into my creative work—modeling and editorial photography that showcase
            visual storytelling and brand aesthetic sensibility
          </p>
          <PhotoGallery photos={photos} />
        </div>
      </section>

      <section className="py-20 px-6 max-w-4xl mx-auto">
        <div className="text-center bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-12 border border-primary/10">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4">
            Let's Create Together
          </h2>
          <p className="text-lg text-muted-foreground mb-2">
            Angela Rose Boyle · UX Designer & Strategist
          </p>
          <p className="text-muted-foreground italic">
            Divine Align Design — Where logic meets imagination
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
