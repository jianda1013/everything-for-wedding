import styled from "styled-components";

export const TrafficTitle = styled.h1`
  font-family: "ChenYuluoyan 2.0", Arial, sans-serif;
  font-size: 76px;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

export const TrafficSectionTitle = styled.h2`
  font-family: "ChenYuluoyan 2.0", Arial, sans-serif;
  font-size: 32px;
  margin: 0;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const TrafficContainer = styled.div`
  width: 840px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 48px;
  text-align: left;
  font-size: 32px;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 320px;
    font-size: 16px;
  }
`;

export const TrafficText = styled.p`
  font-family: "ChenYuluoyan 2.0", Arial, sans-serif;
  line-height: 1.8;
  margin: 0;
`;

export const MapButton = styled.a`
  display: inline-block;
  background-color: #8b6b5d;
  color: #fff;
  padding: 12px 24px;
  text-decoration: none;
  font-family: "Montaga", serif;
  font-size: 16px;
  border-radius: 4px;
  margin-top: 24px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #6d5448;
  }
`;
