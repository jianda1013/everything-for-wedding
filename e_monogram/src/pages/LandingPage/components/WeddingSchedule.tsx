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
import useScrollVisible from "../../../hooks/useScrollVisible";

const PALETTE_COLORS = ["#F8F5F2", "#F2E3D5", "#D3C2B2", "#C7CCB1", "#6B705C"];

const WeddingSchedule: React.FC = () => {
  const [paletteRef, visible] = useScrollVisible<HTMLDivElement>({
    repeat: true,
  });

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
        <ColorPaletteContainer ref={paletteRef}>
          {PALETTE_COLORS.map((color, i) => (
            <ColorCircle
              key={color}
              color={color}
              $index={i}
              $visible={visible}
            />
          ))}
        </ColorPaletteContainer>
      </div>
    </ScheduleContainer>
  );
};

export default WeddingSchedule;
