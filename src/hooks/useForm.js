import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const useForm = (callback, validate) => {
	const [values, setValues] = useState({
		id: uuidv4(),
		date: new Date(),
		type: "",
		name: "",
		amount: "",
		constant: "",
		monthNum: "",
	});

	const [isSubmitting, setIsSubmitting] = useState(false);
	const [errors, setErrors] = useState({});

	const handleChange = (e) => {
		console.log(e);
		if (!e.target) {
			setValues({
				...values,
				date: e,
			});
			return;
		}
		const { name, value } = e.target;
		console.log(value);
		setValues({
			...values,
			[name]: value,
		});
	};

	const handleSubmit = (e) => {
		console.log(e);
		console.log(e.which || e.keyCode || 0);
		e.preventDefault();
		setErrors(validate(values));
		setIsSubmitting(true);
		if (Object.keys(errors).length === 0 && isSubmitting) {
			callback(values);
			setValues({
				id: uuidv4(),
				type: "",
				name: "",
				amount: "",
				date: new Date(),
				constant: "",
			});
		}
	};

	return { handleChange, handleSubmit, values, errors };
};

export default useForm;
