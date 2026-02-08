import { styled } from "styled-components";

export const Flex = styled.div<{
  direction?: string;
  justify?: string;
  align?: string;
  gap?: string;
  width?: string;
  height?: string;
  padding?: string;
  flex?: number | string;
}>`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: ${(props) => props.justify || "flex-start"};
  align-items: ${(props) => props.align || "stretch"};
  gap: ${(props) => props.gap || "0"};
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
  padding: ${(props) => props.padding || "0"};
  flex: ${(props) => props.flex || "none"};
`;
