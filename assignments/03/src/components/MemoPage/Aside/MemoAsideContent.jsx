import { useDispatch } from "react-redux";
import styled from "styled-components";
import { SELECT_MEMO } from "../../../store/memo";
import { useMemoList } from "../../../store/memo/hooks";
import { formatDate } from "../../../utils";
import { Button, FlexBox, Text } from "../../ui";

const MemoAsideContent = () => {
  const { memoList, selectedId } = useMemoList();
  const dispatch = useDispatch();
  return (
    <MemoAsideContentWrap>
      {memoList.map(({ id, detail, date }) => {
        const formattedDate = formatDate(date, "short");
        return (
          <MemoAsideContentButton
            key={id}
            $isSelected={selectedId === id}
            onClick={() => dispatch({ type: SELECT_MEMO, id })}
          >
            <Text $fontWeight="700" $margin="0px 0px 5px 0px">
              {detail ? detail : "새로운 메모"}
            </Text>
            <Text $fontSize="xs" $color="#404040">
              {formattedDate}
            </Text>
          </MemoAsideContentButton>
        );
      })}
    </MemoAsideContentWrap>
  );
};

export default MemoAsideContent;

const MemoAsideContentWrap = styled(FlexBox)`
  padding: 20px 12px;
  flex-direction: column;
  gap: 8px;
  overflow-y: scroll;
  overflow-x: hidden;
`;

const MemoAsideContentButton = styled(Button)`
  width: 100%;
  height: 56px;
  padding: 12px 24px;
  text-align: start;
  background-color: ${({ $isSelected }) => $isSelected && "#ffe07f"};
  border-radius: 4px;
`;
