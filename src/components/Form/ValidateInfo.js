export default function validateInfo(values) {
	let errors = {};

	if (!values.type.trim()) {
		errors.type = "בחר סוג";
	}

	if (!values.name.trim()) {
		errors.name = "חסר שם";
	}

	if (!values.amount.trim()) {
		errors.amount = "שכחת סכום אבאלה";
	}

	if (values.constant.trim() === "----") {
		errors.constant = "בחר אם ההוצאה קבועה משתנה או חד פעמית";
	}

	// if (!values.constant) {
	// 	console.log(!values.constant);
	// 	console.log(values.constant);
	// 	errors.constant = "שכחת לסמן חמודי";
	// }

	return errors;
}
