import React from "react";
import coverPhoto from "../../assets/cover_photo.jpg";
import {
  PageWrapper,
  ContentContainer,
  ImageSection,
  TextSection,
  HeaderText,
  BodyText,
  AddressText,
} from "./styles";

const PostCardPage: React.FC = () => {
  return (
    <PageWrapper>
      <ContentContainer>
        <ImageSection>
          <img src={coverPhoto} alt="Couple" />
        </ImageSection>
        <TextSection>
          <HeaderText>致</HeaderText>
          <BodyText>
            Feugiat pretium egestas enim blandit purus euismod. Feugiat magna
            aliquam lectus lectus eu amet. Eros, accumsan purus enim nascetur
            quam diam felis, fringilla varius.
          </BodyText>
          <AddressText>
            4750 Tyler Avenue
            <br />
            Boise, Idaho 83705
          </AddressText>
        </TextSection>
      </ContentContainer>
    </PageWrapper>
  );
};

export default PostCardPage;
