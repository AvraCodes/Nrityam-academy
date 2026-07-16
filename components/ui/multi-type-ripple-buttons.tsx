import React from "react";

export function RippleButton({
  children,
  className = "",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`relative overflow-hidden ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
