import styled from "styled-components";

export const ScheduleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: "ChenYuluoyan 2.0", Arial, sans-serif;
  color: #4a3b32;
  gap: 24px;
  width: 486px;
`;

export const ScheduleItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 28px; /* Adjust based on visuals */
`;

export const TimeLabel = styled.div`
  text-align: left;
  flex: 1;
`;

export const EventLabel = styled.div`
  text-align: right;
  flex: 1;
`;

export const DressCodeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 28px;
  padding: 0 84px;
`;

export const ColorPaletteContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
`;

export const ColorCircle = styled.div<{ color: string }>`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  border: 3px solid #e0e0e0; /* Subtle border for lighter colors */
`;
