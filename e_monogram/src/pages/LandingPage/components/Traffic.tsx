import React from "react";
import { Flex } from "../../../components/Flex";
import {
  TrafficTitle,
  TrafficSectionTitle,
  TrafficText,
  MapButton,
} from "../styles";
import weddingInfo from "../../../configs/weddingInfo.json";

const Traffic: React.FC = () => {
  const { traffic, map } = weddingInfo.hotel;

  const drivingSuggestions = traffic.suggestions.filter((s) =>
    s.title.includes("自行開車"),
  );
  const publicTransportSuggestions = traffic.suggestions.filter(
    (s) => !s.title.includes("自行開車"),
  );

  return (
    <Flex direction="column" align="center" padding="96px 0" gap="64px">
      <TrafficTitle>交通資訊</TrafficTitle>

      <Flex
        direction="column"
        align="flex-start"
        gap="48px"
        width="840px"
        style={{ textAlign: "left", fontSize: "32px" }}
      >
        {/* Driving */}
        <Flex direction="column" align="flex-start">
          <TrafficSectionTitle>【自行前往】</TrafficSectionTitle>
          <Flex direction="column" gap="16px">
            {drivingSuggestions.map((suggestion, index) => (
              <TrafficText key={index}>• {suggestion.description}</TrafficText>
            ))}
          </Flex>
          <MapButton href={map.url} target="_blank" rel="noopener noreferrer">
            MAP
          </MapButton>
        </Flex>

        {/* Parking */}
        <Flex direction="column" align="flex-start">
          <TrafficSectionTitle>【停車資訊】</TrafficSectionTitle>
          <TrafficText>{traffic.extra_instructions}</TrafficText>
        </Flex>

        {/* Public Transport */}
        <Flex direction="column" align="flex-start">
          <TrafficSectionTitle>【大眾運輸】</TrafficSectionTitle>
          <Flex direction="column" gap="16px">
            {publicTransportSuggestions.map((suggestion, index) => (
              <TrafficText key={index}>
                • {suggestion.title}
                <br />
                {suggestion.description}
              </TrafficText>
            ))}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Traffic;
