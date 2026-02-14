import React from "react";
import GalleryViewer from "./components/GalleryViewer";
import { GalleryContainer, PageTitle, SubTitle } from "./styles";

const GalleryPage: React.FC = () => {
  return (
    <GalleryContainer>
      <PageTitle>一起抓住二字頭的尾巴</PageTitle>
      <SubTitle>
        每一張照片
        <br />
        都是我們從螢幕兩端走向彼此的珍貴紀錄
      </SubTitle>
      <GalleryViewer />
    </GalleryContainer>
  );
};

export default GalleryPage;
