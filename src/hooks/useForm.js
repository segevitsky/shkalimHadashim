import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const useForm = (callback, validate, currentMonth) => {
	const [values, setValues] = useState({
		id: uuidv4(),
		date: new Date(),
		type: "הכנסה",
		name: "",
		amount: "",
		constant: "רגילה",
		monthNum: +currentMonth,
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
				constant: "true",
			});
		}
	};

	return { handleChange, handleSubmit, values, setValues, errors };
};

export default useForm;
