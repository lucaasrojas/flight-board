import { SyntheticEvent } from "react";

interface ButtonProps {
	label: string;
	onClick?: (e: SyntheticEvent) => void;
    type?: "submit" | "reset" | "button";
}

const Button: React.FC<ButtonProps> = ({ label, onClick, type }) => {
	return (
		<button
			className="bg-transparent hover:bg-white-500 text-white-700 font-semibold hover:text-white py-2 px-4 border border-white-500 hover:border-white rounded"
			onClick={onClick}
            type={type}
		>
			{label}
		</button>
	);
};

export default Button