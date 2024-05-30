import clsx from "clsx";
import { useEffect, useState } from "react";

const Toast = ({ options }) => {
  const { title, content, delay } = options;
  const [isShowingToast, setIsShowingToast] = useState(false);

  const className = clsx(
    "shadow-lg bg-white flex flex-col gap-1 p-6 border rounded-lg w-[320px] transition-all duration-500",
    isShowingToast ? "translate-x-0" : "translate-x-[346px]"
  );

  useEffect(() => {
    setIsShowingToast(true);

    setTimeout(() => {
      setIsShowingToast(false);
    }, delay ?? 2000);
  }, [delay, title]);

  return (
    <div className={className}>
      <h3 className="font-bold text-sm">{title}</h3>
      <p className="text-xs">{content}</p>
    </div>
  );
};

export default Toast;
