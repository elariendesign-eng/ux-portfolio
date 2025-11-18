import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Photo {
  id: string;
  url: string;
  alt: string;
}

interface PhotoGalleryProps {
  photos: Photo[];
}

export default function PhotoGallery({ photos }: PhotoGalleryProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {photos.map((photo, index) => (
          <button
            key={photo.id}
            onClick={() => setSelectedPhoto(photo)}
            className="group relative aspect-[3/4] overflow-hidden rounded-xl hover-elevate active-elevate-2 transition-all duration-300"
            data-testid={`button-photo-${photo.id}`}
          >
            <img
              src={photo.url}
              alt={photo.alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        ))}
      </div>

      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-lg flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <Button
            size="icon"
            variant="ghost"
            className="absolute top-4 right-4 text-foreground"
            onClick={() => setSelectedPhoto(null)}
            data-testid="button-close-lightbox"
          >
            <X className="h-6 w-6" />
          </Button>
          <img
            src={selectedPhoto.url}
            alt={selectedPhoto.alt}
            className="max-w-full max-h-[90vh] object-contain rounded-xl"
            onClick={(e) => e.stopPropagation()}
            data-testid="img-lightbox"
          />
        </div>
      )}
    </>
  );
}
