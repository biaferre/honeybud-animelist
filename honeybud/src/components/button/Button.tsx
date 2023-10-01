import './Button.css'

interface ButtonProps {
    label: string;
}

export const Button: React.FC<ButtonProps> = ({ label }) => {
    return (
        <div className="Button">{label}</div>
    );
}