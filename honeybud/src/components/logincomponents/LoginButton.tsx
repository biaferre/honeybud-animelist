import React from 'react';
import './LoginButton';

interface ButtonProps {
    label: string;
    type?: "button" | "submit" | "reset"; 
}

export const LoginButton: React.FC<ButtonProps> = (props) => {
    return (
        <button type={props.type || 'button'}>{props.label}</button>
    );
}
