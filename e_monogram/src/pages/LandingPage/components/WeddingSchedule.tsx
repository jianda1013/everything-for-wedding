import React from "react";
import {
  ScheduleContainer,
  ScheduleItem,
  TimeLabel,
  EventLabel,
  DressCodeContainer,
  ColorPaletteContainer,
  ColorCircle,
  ScheduleContent,
} from "../styles";

const WeddingSchedule: React.FC = () => {
  return (
    <ScheduleContainer>
      <ScheduleContent>
        <ScheduleItem>
          <TimeLabel>10:30</TimeLabel>
          <EventLabel>證婚典禮</EventLabel>
        </ScheduleItem>
        <ScheduleItem>
          <TimeLabel>12:00</TimeLabel>
          <EventLabel style={{ letterSpacing: "2px" }}>簽到入席</EventLabel>
        </ScheduleItem>
        <ScheduleItem>
          <TimeLabel>12:30</TimeLabel>
          <EventLabel style={{ letterSpacing: "2px" }}>準時開席</EventLabel>
        </ScheduleItem>
      </ScheduleContent>

      <div style={{ display: "flex", gap: "16px", flexDirection: "column" }}>
        <DressCodeContainer>
          <TimeLabel>Dress Code</TimeLabel>
          <EventLabel style={{ letterSpacing: "2px" }}>淺色服裝</EventLabel>
        </DressCodeContainer>
        <ColorPaletteContainer>
          <ColorCircle color="#F8F5F2" />
          <ColorCircle color="#F2E3D5" />
          <ColorCircle color="#D3C2B2" />
          <ColorCircle color="#C7CCB1" />
          <ColorCircle color="#6B705C" />
        </ColorPaletteContainer>
      </div>
    </ScheduleContainer>
  );
};

export default WeddingSchedule;
