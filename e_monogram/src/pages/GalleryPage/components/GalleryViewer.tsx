import React, { useState, useEffect } from "react";
import {
  ViewerContainer,
  MainImageContainer,
  MainImage,
  ThumbnailList,
  Thumbnail,
} from "../styles";

// Load images dynamically
const modules = import.meta.glob<string>("../../../assets/galleries/*.webp", {
  query: "?url",
  import: "default",
  eager: true,
});

interface GalleryImage {
  id: number;
  url: string;
  title: string;
}

// Convert to array of objects
const GALLERY_IMAGES: GalleryImage[] = Object.entries(modules).map(
  ([, url], index) => {
    return {
      id: index + 1,
      url: url,
      title: `Photo ${index + 1}`,
    };
  },
);

const GalleryViewer: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage>(
    GALLERY_IMAGES[0],
  );

  useEffect(() => {
    if (GALLERY_IMAGES.length > 0) {
      setSelectedImage(GALLERY_IMAGES[0]);
    }
  }, []);

  if (GALLERY_IMAGES.length === 0) {
    return <div>No images found</div>;
  }

  return (
    <ViewerContainer>
      <MainImageContainer>
        <MainImage src={selectedImage?.url} alt={selectedImage?.title} />
      </MainImageContainer>
      <ThumbnailList>
        {GALLERY_IMAGES.map((image) => (
          <ThumbnailItem
            key={image.id}
            image={image}
            isSelected={selectedImage?.id === image.id}
            onClick={setSelectedImage}
          />
        ))}
      </ThumbnailList>
    </ViewerContainer>
  );
};

// Memoized Thumbnail Component to prevent unnecessary re-renders
const ThumbnailItem = React.memo(
  ({
    image,
    isSelected,
    onClick,
  }: {
    image: GalleryImage;
    isSelected: boolean;
    onClick: (image: GalleryImage) => void;
  }) => {
    return (
      <Thumbnail
        src={image.url}
        alt={image.title}
        $active={isSelected}
        onClick={() => onClick(image)}
        loading="lazy"
        width="100"
        height="100"
      />
    );
  },
  (prevProps, nextProps) => {
    return (
      prevProps.isSelected === nextProps.isSelected &&
      prevProps.image.id === nextProps.image.id
    );
  },
);

export default GalleryViewer;
