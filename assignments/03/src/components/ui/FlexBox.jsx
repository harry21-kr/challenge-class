import styled from "styled-components";

export const FlexBox = styled.div`
  width: ${({ $width }) => $width ?? "100%"};
  max-width: ${({ $minWidth }) => $minWidth ?? "1024px"};
  height: ${({ $height }) => $height};
  display: flex;
  justify-context: ${({ $justifyContent }) => $justifyContent};
  align-items: ${({ $alignItems }) => $alignItems};
  gap: ${({ $gap }) => $gap};
  border: ${({ $border }) => $border};
  border-radius: ${({ $borderRadius }) => $borderRadius};
  box-shadow: ${({ $boxShadow }) => $boxShadow};
  box-sizing: border-box;
`;
