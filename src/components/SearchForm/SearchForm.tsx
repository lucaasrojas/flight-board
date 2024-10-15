import { useState } from "react";
import Button from "../Button/Button";

interface SearchFormProps {
	onSubmit: (e: SearchFormValue) => void;
}

export interface SearchFormValue {
    flightNumber: string
}

const SearchForm: React.FC<SearchFormProps> = ({ onSubmit }) => {
	const [formValue, setFormValue] = useState<SearchFormValue>({ flightNumber: "" });
	return (
		<div className="flex gap-4 items-center py-4">
			<label className="text-xl">Flight Number</label>
			<input
				name="flightNumber"
				type="text"
				value={formValue.flightNumber}
				onChange={(e) =>
					setFormValue({
						...formValue,
						[e.target.name]: (e.target.value).replaceAll(' ',''),
					})
				}
			/>
			<Button
				label="Search"
				type="submit"
				onClick={() => onSubmit(formValue)}
			/>
		</div>
	);
};

export default SearchForm;
