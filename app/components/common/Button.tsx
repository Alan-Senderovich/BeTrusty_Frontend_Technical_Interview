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
    default: "btn__default",
    secondary: "btn__secondary",
  };

  const customStyles = variant ? colorVariants[variant] : "";

  return (
    <button
      onClick={handleClick}
      className={`custom-btn ${customStyles} ${containerStyles}`}
    >
      {children}
    </button>
  );
};

export default Button;
