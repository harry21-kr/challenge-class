import styled from "styled-components";
import { FlexBox } from "../../ui";
import MemoAsideContent from "./MemoAsideContent";
import MemoAsideEdit from "./MemoAsideEdit";

const MemoAside = () => {
  return (
    <MemoAsideBox>
      <MemoAsideEdit />
      <MemoAsideContent />
    </MemoAsideBox>
  );
};

const MemoAsideBox = styled(FlexBox)`
  flex-direction: column;
  max-width: 240px;
  border-right: 1px solid rgb(230, 230, 230);
`;

export default MemoAside;
