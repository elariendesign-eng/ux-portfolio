import Footer from "@/components/Footer";
import PhotoGallery from "@/components/PhotoGallery";
import { Card } from "@/components/ui/card";
import { Briefcase, Globe, Heart, Sparkles } from "lucide-react";
import photo1 from "@assets/generated_images/Professional_modeling_portrait_1_bfc8bf09.png";
import photo2 from "@assets/generated_images/Editorial_modeling_photo_2_b89ad56c.png";
import photo3 from "@assets/generated_images/Fantasy_editorial_photo_3_88f836dd.png";
import photo4 from "@assets/generated_images/High_fashion_portrait_4_b95d6d1d.png";
import creativePhoto from "@assets/generated_images/Creative_director_workspace_photo_f2afd831.png";

export default function AboutPage() {
  const photos = [
    { id: "1", url: photo1, alt: "Professional portrait" },
    { id: "2", url: photo2, alt: "Editorial photography" },
    { id: "3", url: photo3, alt: "Fantasy-inspired photoshoot" },
    { id: "4", url: photo4, alt: "High fashion portrait" },
    { id: "5", url: creativePhoto, alt: "Creative workspace" },
    { id: "6", url: photo1, alt: "Additional portrait" },
  ];

  const skills = [
    "User Research & Testing",
    "Information Architecture",
    "Interaction Design",
    "Design Systems",
    "Prototyping",
    "Data Visualization",
    "Accessibility",
    "UX Strategy",
  ];

  return (
    <div className="min-h-screen pt-24">
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6" data-testid="text-page-heading">
          About Me
        </h1>
        <p className="text-xl text-muted-foreground mb-12">
          A story-driven creator blending UX strategy, global perspective, and creative energy
        </p>

        <div className="space-y-12">
          <div>
            <h2 className="font-serif text-3xl font-bold mb-4 flex items-center gap-3">
              <Briefcase className="h-6 w-6 text-primary" />
              My UX Journey
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              For the past 2 years, I've been leading UX strategy and digital transformation at a Fortune 200 company,
              where I've learned that the best design isn't just beautiful—it's empowering. I approach every project
              with systems thinking, ensuring that each decision serves both the user and the business.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My work spans financial services, enterprise software, healthcare, and e-commerce, always with a focus
              on creating experiences that feel intuitive, trustworthy, and delightful. I believe great UX is about
              understanding people deeply and translating that understanding into meaningful solutions.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-3xl font-bold mb-4 flex items-center gap-3">
              <Globe className="h-6 w-6 text-primary" />
              Global Perspective
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              My background in international relations has shaped how I think about design. I understand that
              great experiences transcend borders and cultures. Having traveled extensively, I bring a global
              awareness to every project, designing with cultural sensitivity and inclusive thinking.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              This perspective, combined with my professional soccer career, taught me about teamwork, resilience,
              and the importance of strategic thinking under pressure—skills that translate perfectly to UX work.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-3xl font-bold mb-4 flex items-center gap-3">
              <Heart className="h-6 w-6 text-primary" />
              Who I Am
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm naturally friendly and magnetic, with an intuitive sense for what people need before they
              articulate it. My colleagues describe me as someone who brings both analytical rigor and creative
              energy to every project. I'm equally comfortable diving into user research data and crafting
              beautiful interfaces that feel magical.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-3xl font-bold mb-4 flex items-center gap-3">
              <Sparkles className="h-6 w-6 text-primary" />
              Skills & Expertise
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {skills.map((skill, index) => (
                <Card key={index} className="p-4 text-center hover-elevate active-elevate-2 transition-all" data-testid={`card-skill-${index}`}>
                  <p className="font-medium">{skill}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-center" data-testid="text-gallery-heading">
            Beyond the Portfolio
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            A glimpse into my creative world—from professional modeling to fantasy-inspired photoshoots
          </p>
          <PhotoGallery photos={photos} />
        </div>
      </section>

      <Footer />
    </div>
  );
}
