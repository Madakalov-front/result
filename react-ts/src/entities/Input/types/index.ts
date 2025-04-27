import React from "react";

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    title?: string;
    value: string;
    name: string;
    type?: "text" | "password";
    error: string;
    valid: boolean;
    placeholder?: string; 
    onChange: ({ target }: React.ChangeEvent<HTMLInputElement>) => void;
    onBeforeInput?: ({ target }: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: ({ target }: React.FocusEvent<HTMLInputElement>) => void;
}
