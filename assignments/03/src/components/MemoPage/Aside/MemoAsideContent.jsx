import styled from "styled-components";
import { Button, FlexBox, Text } from "../../ui";

const MemoAsideContent = () => {
  return (
    <MemoAsideContentWrap>
      <MemoAsideContentButton>
        <Text $fontWeight="700">새로운 메모</Text>
        <Text $fontSize="xs" $color="#404040">
          오후 1:31
        </Text>
      </MemoAsideContentButton>
    </MemoAsideContentWrap>
  );
};

export default MemoAsideContent;

const MemoAsideContentWrap = styled(FlexBox)`
  padding: 20px 12px;
  flex-direction: column;
  gap: 8px;
`;

const MemoAsideContentButton = styled(Button)`
  width: 100%;
  height: 56px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 12px 24px;
  text-align: start;
  background-color: #ffe07f;
  border-radius: 4px;
`;
