import { useSelector } from "react-redux";

export const useMemoList = () => {
  return useSelector((state) => state.memo);
};
