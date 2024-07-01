import { cva } from "class-variance-authority";
import { PropsWithChildren } from "react";

interface PageProps {
  title: string;
  hideTitle?: boolean;
  width?: "sm" | "md" | "full";
}

const pageVariant = cva("container mx-auto max-w-[1224px] px-5 py-20", {
  variants: {
    width: {
      sm: "max-w-[620px]",
      md: "max-w-[1024px]",
      full: "max-w-full",
    },
  },
  defaultVariants: {
    width: "md",
  },
});

const Page: React.FC<PropsWithChildren<PageProps>> = ({
  children,
  title,
  hideTitle = false,
  width,
}) => {
  return (
    <main className={pageVariant({ width })}>
      <h1 className={`${hideTitle && "hidden"} text-3xl font-bold mb-12`}>
        {title}
      </h1>
      {children}
    </main>
  );
};

export default Page;
