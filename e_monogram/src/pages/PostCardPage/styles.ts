import styled from "styled-components";

export const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem 2rem;
  /* background-color is handled by Layout/LandingPageContainer usually, but we can enforce if needed */
  width: 100%;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1200px;
  width: 100%;
  gap: 4rem;
  align-items: center;

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

export const ImageSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    max-width: 600px;
    height: auto;
    object-fit: cover;
    border-radius: 4px; /* Optional rounded corners */
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
`;

export const TextSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  color: #4a3b32;
  padding: 1rem;
`;

export const HeaderText = styled.h2`
  font-family: "ChenYuluoyan 2.0", cursive;
  font-size: 3rem;
  margin-bottom: 0.5rem;
  color: #8b7355;
  text-align: left;

  @media (max-width: 900px) {
    text-align: center;
    font-size: 2.5rem;
  }
`;

export const BodyText = styled.p`
  font-family: "ChenYuluoyan 2.0", cursive;
  /* Using the cursive font for the body text as well to match the "handwritten" look if desired, 
     or Montaga for readability. The design looks like handwritten script. */
  font-size: 1.5rem;
  line-height: 1.8;
  white-space: pre-line;

  @media (max-width: 900px) {
    text-align: center;
  }
`;

export const AddressText = styled.div`
  margin-top: 1rem;
  font-family: "ChenYuluoyan 2.0", cursive;
  font-size: 1.25rem;
  line-height: 1.6;

  @media (max-width: 900px) {
    text-align: center;
  }
`;
