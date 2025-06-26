import type {
  ReactNode,
  ButtonHTMLAttributes,
} from "react";

import "./Button.css";

type ButtonProps = {
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, ...props }: ButtonProps) => {

  return (
    <button
      data-ui="btn"
      {...props}
    >
      { children }
    </button>
  )
}

export default Button;