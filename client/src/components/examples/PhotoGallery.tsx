import PhotoGallery from '../PhotoGallery';
import photo1 from '@assets/generated_images/Professional_modeling_portrait_1_bfc8bf09.png';
import photo2 from '@assets/generated_images/Editorial_modeling_photo_2_b89ad56c.png';

export default function PhotoGalleryExample() {
  const photos = [
    { id: '1', url: photo1, alt: 'Professional portrait' },
    { id: '2', url: photo2, alt: 'Editorial shot' },
    { id: '3', url: photo1, alt: 'Another portrait' },
  ];

  return (
    <div className="p-8 max-w-4xl">
      <PhotoGallery photos={photos} />
    </div>
  );
}
