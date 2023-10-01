import './Button.css'

interface ButtonProps {
    label: string;
}

export const Button: React.FC<ButtonProps> = ({ label }) => {
    return (
        <button className="Button">{label}</button>
    );
}