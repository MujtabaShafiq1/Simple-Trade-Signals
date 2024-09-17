import React from "react";

export const Button = ({
  children,
  size = "medium",
  variant = "primary",
  disabled = false,
  onClick,
  className = "",
}) => {
  const buttonSize = {
    large: "px-6 py-2 text-2xl font-medium rounded-2xl",
    medium: "px-4 py-2 text-base font-medium rounded-xl",
    small: "px-3 py-1 text-sm font-medium rounded-lg",
    tiny: "px-3 py-1 text-xs font-medium rounded-lg",
  }[size];

  const buttonVariant = {
    primary: "bg-primary-200 text-neutral-50 font-bold rounded",
    secondary: "bg-neutral-50 text-primary-300 font-bold rounded border border-primary-300",
  }[variant];

  const hoverVariant = {
    primary: "hover:bg-primary-300",
    secondary: "hover:bg-primary-200 hover:text-neutral-50",
  }[variant];

  return (
    <button
      className={`
			flex justify-center items-center
          	${buttonSize} 
          	${buttonVariant}
          	${hoverVariant}
          	${className}
        	`}
      onClick={onClick}
      disabled={disabled}>
      {children}
    </button>
  );
};
