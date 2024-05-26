import { useDispatch } from "react-redux";
import styled from "styled-components";
import { ADD_MEMO, DELETE_MEMO } from "../../../store/memo";
import { useMemoList } from "../../../store/memo/hooks";
import { Button, FlexBox } from "../../ui";

const MemoAsideEdit = () => {
  const { memoList } = useMemoList();
  const dispatch = useDispatch();

  const handleDeleteMemo = () => {
    if (!(memoList.length - 1))
      return alert("하나 이상의 메모는 남겨두어야 합니다.");

    dispatch({ type: DELETE_MEMO });
  };
  return (
    <MemoAsideEditButtonWrap>
      <MemoAsideEditButton onClick={() => dispatch({ type: ADD_MEMO })}>
        새 메모 작성하기
      </MemoAsideEditButton>
      <MemoAsideEditButton onClick={handleDeleteMemo}>삭제</MemoAsideEditButton>
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
  transition: all 0.12s ease;

  &:hover {
    color: black;
  }
`;
