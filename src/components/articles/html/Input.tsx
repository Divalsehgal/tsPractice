import React, { forwardRef, InputHTMLAttributes, Ref } from "react";

interface InputProps<T>
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "value"> {
  value?: T;
}

const CustomInput = forwardRef(
  <T,>({ value, ...rest }: InputProps<T>, ref: Ref<HTMLInputElement>) => {
    return <input ref={ref} value={value as any} {...rest} />;
  }
);

export default CustomInput;
