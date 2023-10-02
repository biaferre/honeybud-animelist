import React from 'react';

interface ButtonProps {
    label: string;
    type?: "button" | "submit" | "reset"; // Add this line to allow the 'type' prop.
}

export const LoginButton: React.FC<ButtonProps> = (props) => { // Change { props } to props
    return (
        <button type={props.type || 'button'}>{props.label}</button>
    );
}
