import { useEffect } from "react";
import styled from "styled-components";
import MemoAside from "../components/MemoPage/Aside";
import MemoContent from "../components/MemoPage/Content";
import { FlexBox } from "../components/ui";
import { useMemoList } from "../store/memo/hooks";

const MemoPage = () => {
  const memo = useMemoList();

  useEffect(() => {
    localStorage.setItem("memoList", JSON.stringify(memo));
  }, [memo]);

  return (
    <Wrap>
      <MemoLayoutBox>
        <MemoAside />
        <MemoContent />
      </MemoLayoutBox>
    </Wrap>
  );
};

export default MemoPage;

const Wrap = styled.div`
  height: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MemoLayoutBox = styled(FlexBox)`
  height: 500px;
  border: 1px solid rgb(230, 230, 230);
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 30px;
`;
