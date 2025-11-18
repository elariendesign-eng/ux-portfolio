import Footer from "@/components/Footer";
import PhotoGallery from "@/components/PhotoGallery";
import { Card } from "@/components/ui/card";
import { Camera, Palette, Video, Sparkles } from "lucide-react";
import photo1 from "@assets/generated_images/Professional_modeling_portrait_1_bfc8bf09.png";
import photo2 from "@assets/generated_images/Editorial_modeling_photo_2_b89ad56c.png";
import photo3 from "@assets/generated_images/Fantasy_editorial_photo_3_88f836dd.png";
import photo4 from "@assets/generated_images/High_fashion_portrait_4_b95d6d1d.png";
import creativePhoto from "@assets/generated_images/Creative_director_workspace_photo_f2afd831.png";

export default function TalentsPage() {
  const modelingPhotos = [
    { id: "m1", url: photo1, alt: "Professional modeling portrait" },
    { id: "m2", url: photo2, alt: "Editorial fashion shoot" },
    { id: "m3", url: photo3, alt: "Fantasy editorial concept" },
    { id: "m4", url: photo4, alt: "High fashion beauty shot" },
    { id: "m5", url: photo2, alt: "Elegant portrait" },
    { id: "m6", url: photo3, alt: "Ethereal styling" },
    { id: "m7", url: photo1, alt: "Professional headshot" },
    { id: "m8", url: photo4, alt: "Creative direction" },
    { id: "m9", url: creativePhoto, alt: "Behind the scenes" },
  ];

  const talents = [
    {
      icon: Camera,
      title: "Professional Modeling",
      description: "Editorial and fashion photography with high-end brands. Bringing elegance and versatility to every shoot.",
    },
    {
      icon: Sparkles,
      title: "Fantasy Concepts",
      description: "Fantasy and medieval-inspired photoshoots that blend storytelling with visual artistry. Think elven princess meets modern edge.",
    },
    {
      icon: Palette,
      title: "Creative Direction",
      description: "Conceptualizing and directing photoshoots from mood boards to final execution. Building cohesive visual narratives.",
    },
    {
      icon: Video,
      title: "Motion & Content",
      description: "Creating engaging content for digital platforms. Motion design, video editing, and social media storytelling.",
    },
  ];

  return (
    <div className="min-h-screen pt-24">
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6" data-testid="text-page-heading">
          Additional Talents
        </h1>
        <p className="text-xl text-muted-foreground mb-16">
          Where creativity meets strategic vision. Exploring the intersection of fashion, fantasy, and digital storytelling.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {talents.map((talent, index) => (
            <Card key={index} className="p-8 hover-elevate active-elevate-2 transition-all" data-testid={`card-talent-${index}`}>
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                <talent.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-serif text-2xl font-bold mb-3">{talent.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{talent.description}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-b from-card/30 to-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-center" data-testid="text-gallery-heading">
            Portfolio Gallery
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            A curated collection of modeling work, creative direction, and fantasy-inspired concepts
          </p>
          <PhotoGallery photos={modelingPhotos} />
        </div>
      </section>

      <section className="py-20 px-6 max-w-4xl mx-auto">
        <div className="text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4" data-testid="text-collaboration-heading">
            Let's Collaborate
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether you're looking for creative direction, content creation, or unique photoshoot concepts,
            I bring a blend of professional experience and imaginative vision to every project.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <span className="px-6 py-3 bg-primary/10 rounded-xl border border-primary/20 text-sm font-medium">
              Editorial
            </span>
            <span className="px-6 py-3 bg-accent/10 rounded-xl border border-accent/20 text-sm font-medium">
              Fashion
            </span>
            <span className="px-6 py-3 bg-chart-3/10 rounded-xl border border-chart-3/20 text-sm font-medium">
              Fantasy Concepts
            </span>
            <span className="px-6 py-3 bg-primary/10 rounded-xl border border-primary/20 text-sm font-medium">
              Creative Direction
            </span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
