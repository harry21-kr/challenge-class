import styled from "styled-components";
import { FlexBox, Text } from "../../ui";

const MemoContent = () => {
  return (
    <MemoContentBox>
      <Text $fontSize="10px" $color="#808080" $textAlign="center">
        2024년 5월 26일, 오후 5:05
      </Text>
      <MemoContextTextArea />
    </MemoContentBox>
  );
};

export default MemoContent;

const MemoContentBox = styled(FlexBox)`
  flex-direction: column;
  padding: 20px;
`;

const MemoContextTextArea = styled.textarea`
  all: unset;
  height: 100%;
  margin-top: 28px;
`;
