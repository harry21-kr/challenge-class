import styled from "styled-components";
import { Button, FlexBox } from "../../ui";

const MemoAsideEdit = () => {
  return (
    <MemoAsideEditButtonWrap>
      <MemoAsideEditButton>새 메모 작성하기</MemoAsideEditButton>
      <MemoAsideEditButton>삭제</MemoAsideEditButton>
    </MemoAsideEditButtonWrap>
  );
};

export default MemoAsideEdit;

const MemoAsideEditButtonWrap = styled(FlexBox)`
  height: 48px;
  padding: 12px 16px;
  justify-content: space-between;
  border-bottom: 1px solid rgb(230, 230, 230);
`;

const MemoAsideEditButton = styled(Button)`
  font-weight: 500;
  text-align: center;
  padding: 4px 8px;
`;
