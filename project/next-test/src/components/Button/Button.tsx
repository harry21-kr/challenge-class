import { VariantProps, cva } from "class-variance-authority";
import React, { ComponentProps } from "react";

const buttonVariant = cva(
  "rounded border font-semibold text-white hover:brightness-90 active:brightness-75",
  {
    variants: {
      size: {
        sm: "px-3 py-1.5 text-sm",
        md: "px-4 py-2 text-[15px]",
        lg: "px-5 py-2.5 text-[17px]",
      },
      intent: {
        primary: "bg-blue-500 border-blue-500",
        danger: "bg-red-500 border-red-500",
      },
      outline: {
        true: "bg-white",
        false: "",
      },
    },
    compoundVariants: [
      { intent: "primary", outline: true, className: "text-blue-500" },
      { intent: "danger", outline: true, className: "text-red-500" },
    ],
    defaultVariants: { size: "md", intent: "primary", outline: false },
  }
);

type ButtonProps = {} & ButtonVariantProps & ComponentProps<"button">;

type ButtonVariantProps = VariantProps<typeof buttonVariant>;

const Button: React.FC<ButtonProps> = ({
  children,
  size,
  intent,
  outline,
  ...props
}) => {
  return (
    <button className={buttonVariant({ size, intent, outline })} {...props}>
      {children}
    </button>
  );
};

export default Button;
