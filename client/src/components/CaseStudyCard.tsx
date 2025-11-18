import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

interface CaseStudyCardProps {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
}

export default function CaseStudyCard({
  id,
  title,
  description,
  category,
  imageUrl,
}: CaseStudyCardProps) {
  return (
    <Link href={`/case-study/${id}`}>
      <a data-testid={`card-case-study-${id}`}>
        <Card className="group overflow-hidden hover-elevate active-elevate-2 transition-all duration-300 cursor-pointer h-full">
          <div className="relative aspect-[4/3] overflow-hidden">
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <div className="text-white">
                <p className="text-sm font-medium mb-2">{category}</p>
                <h3 className="font-serif text-2xl font-bold mb-2">{title}</h3>
                <p className="text-sm text-white/80 mb-4">{description}</p>
                <div className="flex items-center gap-2 text-primary">
                  <span className="text-sm font-medium">View Case Study</span>
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </div>
          </div>
          <div className="p-6 group-hover:bg-card transition-colors">
            <p className="text-xs font-medium text-primary mb-2" data-testid={`text-category-${id}`}>
              {category}
            </p>
            <h3 className="font-serif text-xl font-bold mb-2" data-testid={`text-title-${id}`}>
              {title}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-2" data-testid={`text-description-${id}`}>
              {description}
            </p>
          </div>
        </Card>
      </a>
    </Link>
  );
}
