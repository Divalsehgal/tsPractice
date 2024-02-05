import React from "react";

interface ButtonProps<T> extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "tertiary";
  classNames?: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>, data?: T) => void;
  children?: React.ReactNode;
}

//Reusable CustomButton component with generic type T

function CustomButton<T>({
  onClick,
  children,
  ...rest
}: Readonly<ButtonProps<T>>) {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    // You can access standard event properties here
    // For example, event.currentTarget.value

    onClick(event);
  };

  return (
    <button onClick={handleClick} {...rest}>
      {children}
    </button>
  );
}

export default CustomButton;
