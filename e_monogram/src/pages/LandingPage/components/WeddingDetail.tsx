import React from "react";
import Hotel from "../../../assets/hotel.jpg";
import WeddingSchedule from "./WeddingSchedule";
import { Flex } from "../../../components/Flex";
import {
  WeddingDetailTitle,
  HotelName,
  AddressText,
  DetailContent,
  ResponsiveImage,
} from "../styles";

const WeddingDetail: React.FC = () => {
  return (
    <div id="details" style={{ padding: "80px 0" }}>
      <WeddingDetailTitle>婚禮資訊</WeddingDetailTitle>
      <DetailContent>
        <Flex flex={1} direction="column" gap="54px" align="center">
          <ResponsiveImage src={Hotel} alt="hotel" />
          <Flex
            direction="column"
            gap="24px"
            align="center"
            style={{ fontFamily: "'ChenYuluoyan 2.0', Arial, sans-serif" }}
          >
            <HotelName>嘉義長榮文苑酒店</HotelName>
            <AddressText>61248 嘉義縣太保市故宮大道777號</AddressText>
          </Flex>
        </Flex>
        <Flex flex={1}>
          <WeddingSchedule />
        </Flex>
      </DetailContent>
    </div>
  );
};

export default WeddingDetail;
