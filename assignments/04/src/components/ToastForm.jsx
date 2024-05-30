import { useState } from "react";
import useToast from "../contexts/Toast/useToast";
import Input from "./Input";

const ToastForm = () => {
  const { onPresentToast } = useToast();

  const [title, setTitle] = useState("Scheduled: Catch up");
  const [content, setContent] = useState(
    "Friday, February 10, 2023 at 5:57 PM"
  );
  const [delay, setDelay] = useState(2000);

  return (
    <>
      <Input
        label="제목 (필수)"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Input
        label="내용 (필수)"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <Input
        type="number"
        label="노출 시간 (선택)"
        value={delay}
        onChange={(e) => setDelay(e.target.value)}
      />
      <button
        onClick={() =>
          onPresentToast({ title: title, content: content, delay: delay })
        }
        className="bg-black text-white w-full py-3 text-[15px] rounded-md hover:bg-black/80 active:bg-black/70 transition-all"
      >
        토스트 띄우기
      </button>
    </>
  );
};

export default ToastForm;
