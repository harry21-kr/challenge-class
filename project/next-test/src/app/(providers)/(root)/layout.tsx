import { PropsWithChildren } from "react";
import { Header } from "./_components/Header";

const RootLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div id="root">
      <Header />
      {children}
    </div>
  );
};

export default RootLayout;
