import React, { useState } from "react";
import {
  ViewerContainer,
  MainImageContainer,
  MainImage,
  ThumbnailList,
  Thumbnail,
} from "../styles";

// Mock data
const MOCK_IMAGES = [
  {
    id: 1,
    url: "https://placehold.co/800x600/e3eadf/262815?text=Photo+1",
    title: "Photo 1",
  },
  {
    id: 2,
    url: "https://placehold.co/800x600/f7f7f2/5a4a42?text=Photo+2",
    title: "Photo 2",
  },
  {
    id: 3,
    url: "https://placehold.co/800x600/d4e0d0/262815?text=Photo+3",
    title: "Photo 3",
  },
  {
    id: 4,
    url: "https://placehold.co/800x600/e8e8e8/5a4a42?text=Photo+4",
    title: "Photo 4",
  },
  {
    id: 5,
    url: "https://placehold.co/800x600/f0f4f0/262815?text=Photo+5",
    title: "Photo 5",
  },
  {
    id: 6,
    url: "https://placehold.co/800x600/ffffff/5a4a42?text=Photo+6",
    title: "Photo 6",
  },
];

const GalleryViewer: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState(MOCK_IMAGES[0]);

  return (
    <ViewerContainer>
      <MainImageContainer>
        <MainImage src={selectedImage.url} alt={selectedImage.title} />
      </MainImageContainer>
      <ThumbnailList>
        {MOCK_IMAGES.map((image) => (
          <Thumbnail
            key={image.id}
            src={image.url}
            alt={image.title}
            $active={selectedImage.id === image.id}
            onClick={() => setSelectedImage(image)}
          />
        ))}
      </ThumbnailList>
    </ViewerContainer>
  );
};

export default GalleryViewer;
