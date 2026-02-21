import styled, { keyframes, css } from "styled-components";

export const ScheduleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: "ChenYuluoyan 2.0", Arial, sans-serif;
  color: #4a3b32;
  gap: 24px;
  width: 486px;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 320px;
  }
`;

export const ScheduleContent = styled.div`
  padding: 0 84px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 24px;
  border-left: 1px solid #7e5a40;

  @media (max-width: 768px) {
    padding: 0 42px;
  }
`;

export const ScheduleItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 28px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const TimeLabel = styled.div`
  text-align: left;
  flex: 1;
`;

export const EventLabel = styled.div`
  text-align: right;
  flex: 1;
  white-space: nowrap;
`;

export const DressCodeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 28px;
  padding: 0 84px;

  @media (max-width: 768px) {
    font-size: 20px;
    padding: 0 42px;
  }
`;

export const ColorPaletteContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const popIn = keyframes`
  0%   { opacity: 0; transform: scale(0.3) translateY(12px); }
  70%  { transform: scale(1.15) translateY(-2px); }
  100% { opacity: 1; transform: scale(1) translateY(0); }
`;

export const ColorCircle = styled.div<{
  color: string;
  $index: number;
  $visible: boolean;
}>`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  border: 3px solid #e0e0e0;
  opacity: 0;
  transform: scale(0.3) translateY(12px);

  ${({ $visible, $index }) =>
    $visible &&
    css`
      animation: ${popIn} 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)
        ${$index * 0.12}s forwards;
    `}
`;
