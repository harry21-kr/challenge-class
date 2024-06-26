import { PropsWithChildren } from "react";

interface PageProps {
  title: string;
  hideTitle?: boolean;
}

export const Page: PropsWithChildren<PageProps> = ({
  children,
  title,
  hideTitle = false,
}) => {
  return (
    <main className="container mx-auto max-w-[1224px] px-5 py-20">
      <h1 className={`${hideTitle && "hidden"} text-3xl font-bold mb-12`}>
        {title}
      </h1>
      {children}
    </main>
  );
};
