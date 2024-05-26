import { useDispatch } from "react-redux";
import styled from "styled-components";
import { EDIT_MEMO } from "../../../store/memo";
import { useMemoList } from "../../../store/memo/hooks";
import { formatDate } from "../../../utils";
import { FlexBox, Text } from "../../ui";

const MemoContent = () => {
  const { memoList, selectedId } = useMemoList();

  const dispatch = useDispatch();

  const { date, detail } = memoList.find(({ id }) => id == selectedId);

  const formattedDate = formatDate(date, "long");

  return (
    <MemoContentBox>
      <Text $fontSize="10px" $color="#808080" $textAlign="center">
        {formattedDate}
      </Text>
      <MemoContextTextArea
        value={detail}
        onChange={(e) => dispatch({ type: EDIT_MEMO, detail: e.target.value })}
      />
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
  padding-top: 32px;
`;
