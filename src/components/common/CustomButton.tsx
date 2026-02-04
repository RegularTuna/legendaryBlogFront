import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'quirk' | 'contrast';
  size?: 'sm' | 'md' | 'lg';
}
const CustomButton = ({children, variant = 'primary',size ='md',className ='', ...props} : ButtonProps) => {

    const baseStyles = ""

    const variants = {
        primary: "bg-brand-primary text-white hover:bg-opacity-90",
        quirk: "bg-brand-quirk text-white hover:brightness-110",
        contrast: "bg-brand-contrast text-white hover:bg-red-700"
    };

  const sizes = {
    sm: "px-3 py-1 text-sm rounded",
    md: "px-6 py-2 rounded-lg",
    lg: "px-8 py-3 text-lg rounded-xl"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default CustomButton