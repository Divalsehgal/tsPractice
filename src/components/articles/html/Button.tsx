import React from 'react'
// this props for normal one 
// type buttonProps={
//     variant:'primary'|'secondary'|'outlined'
// } & React.ComponentProps<"button">


// this props for if want to restrict chidlren from only to type op string

type buttonProps = {
  variant: 'primary' | 'secondary' | 'outlined',
  children: string
} & Omit<React.ComponentProps<"button">, 'children'>

function CustomButton(props: buttonProps) {
  const { variant, children, ...rest } = props;
  return (
    <button className={`class-with-${variant}`} {...rest}>
      {children}
    </button>
  )
}

export default CustomButton

