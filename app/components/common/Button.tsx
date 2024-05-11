import React, { ButtonHTMLAttributes, MouseEventHandler } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  variant?: string;
}

const Button = ({
  children,
  containerStyles,
  handleClick,
  variant,
}: ButtonProps) => {
  const colorVariants = {
    default:
      "bg-light-blue w-full rounded-3xl text-primary-blue font-semibold text-lg",
  };

  const customStyles = variant === "default" ? colorVariants.default : "";

  return (
    <button className={`custom-btn ${customStyles} ${containerStyles}`}>
      {children}
    </button>
  );
};

export default Button;
