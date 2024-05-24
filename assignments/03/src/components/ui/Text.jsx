import styled from "styled-components";

export const Text = styled.p`
  font-size: ${({ $fontSize }) => {
    switch ($fontSize) {
      case "xs":
        return "12px";
      case "sm":
        return "14px";
      case "base":
        return "16px";
    }
  }};
  font-weight: ${({ $fontWeight }) => $fontWeight};
  color: ${({ $color }) => $color ?? "black"};
`;
