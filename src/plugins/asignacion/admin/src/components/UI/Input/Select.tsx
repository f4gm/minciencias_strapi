import type {
  ReactNode,
  SelectHTMLAttributes,
} from "react";

import "./Input.css";

type SelectProps = {
  children: ReactNode;
} & SelectHTMLAttributes<HTMLSelectElement>;

const Select = ({ children, ...props }: SelectProps) => {

  return (
    <select
      data-ui="input"
      {...props}
    >
      { children }
    </select>
  )
}

export default Select;