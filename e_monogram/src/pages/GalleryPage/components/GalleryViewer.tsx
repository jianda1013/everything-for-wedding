import React, { useState, useEffect, useCallback } from "react";
import {
  ViewerContainer,
  MainImageContainer,
  MainImage,
  ThumbnailList,
  Thumbnail,
  LightboxOverlay,
  LightboxImage,
  LightboxCloseButton,
} from "../styles";

// Load full-size images
const fullModules = import.meta.glob<string>(
  "../../../assets/galleries/*.webp",
  {
    query: "?url",
    import: "default",
    eager: true,
  },
);

// Load preview (thumbnail) images
const previewModules = import.meta.glob<string>(
  "../../../assets/galleries/previews/*.webp",
  {
    query: "?url",
    import: "default",
    eager: true,
  },
);

interface GalleryImage {
  id: number;
  fullUrl: string;
  previewUrl: string;
  title: string;
}

// Build sorted array pairing full + preview URLs by filename
const GALLERY_IMAGES: GalleryImage[] = Object.entries(fullModules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([path, fullUrl], index) => {
    // Derive the matching preview path key
    const filename = path.split("/").pop(); // e.g. "01.webp"
    const previewKey = Object.keys(previewModules).find((k) =>
      k.endsWith(`/previews/${filename}`),
    );
    const previewUrl = previewKey ? previewModules[previewKey] : fullUrl;

    return {
      id: index + 1,
      fullUrl,
      previewUrl,
      title: `Photo ${index + 1}`,
    };
  });

const GalleryViewer: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage>(
    GALLERY_IMAGES[0],
  );
  const [lightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => {
    if (GALLERY_IMAGES.length > 0) {
      setSelectedImage(GALLERY_IMAGES[0]);
    }
  }, []);

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleThumbnailClick = useCallback((image: GalleryImage) => {
    setSelectedImage(image);
  }, []);

  if (GALLERY_IMAGES.length === 0) {
    return <div>No images found</div>;
  }

  return (
    <>
      <ViewerContainer>
        {/* Main display – click opens lightbox */}
        <MainImageContainer
          onClick={() => setLightboxOpen(true)}
          style={{ cursor: "zoom-in" }}
        >
          <MainImage src={selectedImage?.fullUrl} alt={selectedImage?.title} />
        </MainImageContainer>

        {/* Thumbnail strip – uses preview images */}
        <ThumbnailList>
          {GALLERY_IMAGES.map((image) => (
            <ThumbnailItem
              key={image.id}
              image={image}
              isSelected={selectedImage?.id === image.id}
              onClick={handleThumbnailClick}
            />
          ))}
        </ThumbnailList>
      </ViewerContainer>

      {/* Lightbox */}
      {lightboxOpen && (
        <LightboxOverlay onClick={() => setLightboxOpen(false)}>
          <LightboxCloseButton
            onClick={(e) => {
              e.stopPropagation();
              setLightboxOpen(false);
            }}
            aria-label="Close"
          >
            ✕
          </LightboxCloseButton>
          <LightboxImage
            src={selectedImage?.fullUrl}
            alt={selectedImage?.title}
            onClick={(e) => e.stopPropagation()}
          />
        </LightboxOverlay>
      )}
    </>
  );
};

// Memoized Thumbnail Component uses previewUrl
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
        src={image.previewUrl}
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
