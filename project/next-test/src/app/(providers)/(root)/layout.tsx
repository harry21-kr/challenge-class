import { PropsWithChildren } from "react";
import { Header } from "./_components/Header";

const RootLayout: PropsWithChildren = ({ children }) => {
  return (
    <div id="root">
      <Header />
      {children}
    </div>
  );
};

export default RootLayout;
