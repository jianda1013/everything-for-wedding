import React from "react";
import {
  ScheduleContainer,
  ScheduleItem,
  TimeLabel,
  EventLabel,
  DressCodeContainer,
  ColorPaletteContainer,
  ColorCircle,
} from "../styles";

const WeddingSchedule: React.FC = () => {
  return (
    <ScheduleContainer>
      <div
        style={{
          padding: "0 84px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          gap: "24px",
          borderLeft: "1px solid #7E5A40",
        }}
      >
        <ScheduleItem>
          <TimeLabel>10:30</TimeLabel>
          <EventLabel>證婚典禮</EventLabel>
        </ScheduleItem>
        <ScheduleItem>
          <TimeLabel>12:00</TimeLabel>
          <EventLabel>簽到入席</EventLabel>
        </ScheduleItem>
        <ScheduleItem>
          <TimeLabel>12:30</TimeLabel>
          <EventLabel>準時開席</EventLabel>
        </ScheduleItem>
      </div>

      <div style={{ display: "flex", gap: "16px", flexDirection: "column" }}>
        <DressCodeContainer>
          <TimeLabel>Dress Code</TimeLabel>
          <EventLabel>淺色服裝</EventLabel>
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
