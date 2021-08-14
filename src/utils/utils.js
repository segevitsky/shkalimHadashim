import { v4 as uuidv4 } from "uuid";
// import { complement } from "ramda";
import ours from "../../src/components/api/ours";

export const reduce = (arr) =>
	arr.reduce((acc, el) => {
		return acc + +el.amount;
	}, 0);

export const myFilter = (arr, type) => {
	let returnedArr = [];
	returnedArr = arr.filter((el) => el.type === type);
	return returnedArr;
};

export const breakDateDown = (obj) => {
	console.log(obj);
	let dateNumber;
	if (typeof obj?.date === "object") {
		dateNumber = obj?.date.toLocaleDateString().split("/")[0];
	}
	if (typeof obj.date === "string") {
		dateNumber = obj?.date?.split("-")[1];
	}
	return {
		...obj,
		monthNum: dateNumber,
	};
};

export const permanent = (obj) => {
	const newObj = breakDateDown(obj);
	const objArray = [];
	for (let i = newObj.monthNum; i <= 12; i++) {
		objArray.push({
			...obj,
			id: uuidv4(),
			amount: +obj.amount,
			monthNum: i + "",
		});
	}
	console.log(objArray);
	return objArray;
};

export const changing = (obj) => {
	const newObj = breakDateDown(obj);
	const objArray = [];
	for (let i = newObj.monthNum; i <= 12; i++) {
		objArray.push({ ...newObj, id: uuidv4(), monthNum: i, amount: "" });
	}
	return objArray;
};

export const oneTime = (obj) => {
	const newObj = breakDateDown(obj);
	console.log(newObj);
	return [newObj];
};

export const handleSubmitionCase = {
	permanent,
	changing,
	oneTime,
};

export const creatingYearData = (obj) => {
	if (obj.constant === "קבועה" || obj.constant === true) {
		return handleSubmitionCase.permanent(obj);
	}
	if (obj.constant === "רגילה") {
		return handleSubmitionCase.oneTime(obj);
	}
};

//Random color generator
export const generColor = () => {
	const rC = {
		r: Math.floor(Math.random() * 255),
		g: Math.floor(Math.random() * 255),
		b: Math.floor(Math.random() * 255),
		a: Math.random(),
	};
	return `rgb(${rC.r},${rC.g},${rC.b},${rC.a})`;
};

export const sendEditedExpenseToServer = async (obj) => {
	const { name, monthNum } = obj;
	const { data } = await ours.get(
		`${process.env.REACT_APP_URL}/tables/${name}/2021/newYearEx.json`
	);
	const itemsIndex = data.findIndex((el) => el.monthNum === monthNum);
	ours.patch(
		`${process.env.REACT_APP_URL}/tables/${name}/2021/newYearEx/${itemsIndex}.json`,
		obj
	);
};
