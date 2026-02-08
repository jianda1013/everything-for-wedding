import styled from "styled-components";
import coverPhoto from "../../../assets/cover_photo.jpg";

export const HeroSectionContainer = styled.header`
  position: relative;
  height: 900px;
  background-image: url(${coverPhoto});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  color: #fff;
  gap: 32px;
  padding-bottom: 54px;
`;

export const HeroTitle = styled.div`
  font-size: 101px;
  font-weight: normal;
  margin: 0;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
  font-family: Montaga, Arial, sans-serif;
`;

export const HeroDate = styled.div`
  font-size: 24px;
  letter-spacing: 0;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
  font-family: "ChenYuluoyan 2.0", Arial, sans-serif;
`;
