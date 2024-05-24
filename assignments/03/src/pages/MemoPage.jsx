import { useEffect } from "react";
import { useMemoList } from "../store/memo/hooks";

const MemoPage = () => {
  const memo = useMemoList();

  useEffect(() => {
    localStorage.setItem("memoList", JSON.stringify(memo));
  }, [memo]);

  return <></>;
};

export default MemoPage;
