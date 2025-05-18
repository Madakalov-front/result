import type { ChangeEvent  } from "react";

export interface InputProps {
    value: string;
    placeholder: string;
    type?: string;
    name: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (e: ChangeEvent<HTMLInputElement>) => void;
}
