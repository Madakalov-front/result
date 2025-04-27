import React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    type?: 'button' | 'submit';
    text: string;
    variant?: string;
    size?: string;
    disabled?: boolean;
    onClick?: () => void;
} 