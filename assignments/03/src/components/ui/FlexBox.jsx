import styled from "styled-components";

export const FlexBox = styled.div`
  width: ${({ $width }) => $width ?? "100%"};
  min-width: ${($minWidth) => $minWidth ?? "845"}px;
  height: ${({ $height }) => $height ?? "100%"};
  min-height: ${($minHeight) => $minHeight ?? "500"}px;
  display: flex;
  justify-context: ${({ $justifyContent }) => $justifyContent};
  align-items: ${({ $alignItems }) => $alignItems};
  gap: ${({ $gap }) => $gap};
`;
