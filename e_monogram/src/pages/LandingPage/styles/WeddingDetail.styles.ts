import styled from "styled-components";

export const WeddingDetailTitle = styled.h1`
  font-family: "ChenYuluoyan 2.0", Arial, sans-serif;
  font-size: 76px;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

export const HotelName = styled.h2`
  font-size: 56px;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

export const AddressText = styled.div`
  font-size: 32px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const DetailContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 84px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 32px;
  }
`;

export const ResponsiveImage = styled.img`
  width: 512px;
  height: 512px;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 320px;
    height: auto;
    aspect-ratio: 1/1;
  }
`;
