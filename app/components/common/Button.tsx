import React, { ButtonHTMLAttributes, MouseEventHandler } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  variant?: string;
}

interface ColorVariants {
  [key: string]: string;
}

const Button = ({
  children,
  containerStyles,
  handleClick,
  variant,
}: ButtonProps) => {
  const colorVariants: ColorVariants = {
    default:
      "bg-light-blue w-full rounded-3xl text-primary-blue font-semibold text-lg",
    secondary: "bg-white w-full rounded-lg text-primary-blue font-semibold text-md hover:bg-slate-400 transition ease-in-out duration-300",
  };

  const customStyles = variant ? colorVariants[variant] : "";

  return (
    <button onClick={handleClick} className={`custom-btn ${customStyles} ${containerStyles}`}>
      {children}
    </button>
  );
};

export default Button;
