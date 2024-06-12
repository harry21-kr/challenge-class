import { PropsWithChildren } from "react";

interface CounterButtonProps {
  onClick: () => void;
}

function CounterButton({
  onClick,
  children,
}: PropsWithChildren<CounterButtonProps>) {
  return <button onClick={onClick}>{children}</button>;
}

export default CounterButton;
