import styled from "styled-components";

export const Button = styled.button`
  cursor: pointer;
  border: none;
  background-color: ${({ $backgroundColor }) => $backgroundColor ?? "inherit"};
  color: ${({ $color }) => $color ?? "#808080"};
  padding: ${({ $padding }) => $padding ?? "4px 8px"};
  font-size: 13px;
`;
