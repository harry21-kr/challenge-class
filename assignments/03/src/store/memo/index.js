import { v4 as uuidv4 } from "uuid";

const savedMemoList = localStorage.getItem("memoList");

const initialId = uuidv4();

const initialState = savedMemoList
  ? JSON.parse(savedMemoList)
  : {
      memoList: [
        {
          id: initialId,
          detail: "",
          date: Date.now(),
        },
      ],
      selectedId: initialId,
    };

export const ADD_MEMO = "memo/ADD_MEMO";
export const DELETE_MEMO = "memo/DELETE_MEMO";
export const EDIT_MEMO = "memo/EDIT_MEMO";
export const SELECT_MEMO = "memo/SELECT_MEMO";

const memoReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case ADD_MEMO: {
      const newMemo = {
        id: uuidv4(),
        detail: "",
        date: Date.now(),
      };

      return {
        selectedId: newMemo.id,
        memoList: [newMemo, ...prevState.memoList],
      };
    }

    case DELETE_MEMO: {
      const newMemoList = prevState.memoList.filter(
        ({ id }) => id !== prevState.selectedId
      );
      return {
        ...prevState,
        selectedId: newMemoList[0]?.id,
        memoList: newMemoList,
      };
    }

    case EDIT_MEMO: {
      const newMemoList = prevState.memoList.map((prevMemoList) =>
        prevState.selectedId === prevMemoList.id
          ? { ...prevMemoList, detail: action.detail }
          : prevMemoList
      );
      return { ...prevState, memoList: newMemoList };
    }

    case SELECT_MEMO: {
      return {
        ...prevState,
        selectedId: action.id,
      };
    }

    default:
      return prevState;
  }
};

export default memoReducer;
