import React from "react";
type textOwnProps<E extends React.ElementType> = {
  size?: 'sm'|'md'|'lg';
  color?: 'primary'|'secondary';
  children: React.ReactNode;
  as?: E;
};

type textProps<E extends React.ElementType>=textOwnProps<E> & React.ComponentProps<E> & 
Omit<React.ComponentProps<E>,keyof textOwnProps<E>>
const Text = <E extends React.ElementType>({ size, color ,children,as}: textProps<E>) => {
  const Component=as||'div';
  return <Component className={`class-w-th-${size}-${color}`}>
    {children}
  </Component>; 
};

export default Text;
