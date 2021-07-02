import React, { useState, useEffect } from "react";
import "./categoryPage.css";
import { useParams } from "react-router-dom";
import ours from "../../components/api/ours";
import { getMonths } from "../../components/api/oursAPI";
import BarChart from "../../components/UI/Charts/BarChart/BarChart";
import PieChart from "../../components/UI/Charts/PieChart/PieChart";
import Layout from "../../components/UI/Layout/Layout";

export default function CategoryPage() {
	const [data, setData] = useState([]);
	const [months, setMonths] = useState([]);
	const { slug } = useParams();

	useEffect(() => {
		(async function () {
			try {
				const year = new Date().getFullYear();

				const monthsData = await getMonths;
				const awaitedMonthesData = monthsData.data;
				let finalD = awaitedMonthesData.filter((el) => el !== null);
				console.log(finalD);
				setMonths(finalD);

				const table = await ours.get(
					`${process.env.REACT_APP_URL}/tables/${slug}/${year}.json`
				);
				const data = await table.data;
				console.log({ data });
				setData(Object.values(data));
			} catch (e) {
				console.log("error on ");
			}
		})();
	}, []);

	return (
		<Layout>
			<p className="welcome-header"> {slug} </p>
			<p className="welcome-desc">
				{" "}
				פה יוצג גרף שנתי של כלל ההוצאות או של ההכנסות ברמה השנתית נוכל לראות פה
				סיכום מהי העלות השנתית שלנו כמשק בית, כמה כסף אנחנו מכניסים בשנה, מתי
				נוכל להתחיל להשקיע, כמה כסף אנחנו מוציאים שיכולנו לחסוך, מבצעים ועוד...{" "}
			</p>
			<div style={{ height: "500px" }}>
				{/* <PieChart data={data} /> */}
				{/* <BarChart data={fakeData} months={months} /> */}
			</div>
		</Layout>
	);
}

const fakeData = [
	{
		country: "ינואר",
		"hot dog": 71,
		"hot dogColor": "hsl(65, 70%, 50%)",
		burger: 166,
		burgerColor: "hsl(150, 70%, 50%)",
		sandwich: 111,
		sandwichColor: "hsl(210, 70%, 50%)",
		kebab: 193,
		kebabColor: "hsl(239, 70%, 50%)",
		fries: 92,
		friesColor: "hsl(257, 70%, 50%)",
		donut: 111,
		donutColor: "hsl(347, 70%, 50%)",
	},
	{
		country: "AE",
		"hot dog": 58,
		"hot dogColor": "hsl(285, 70%, 50%)",
		burger: 81,
		burgerColor: "hsl(82, 70%, 50%)",
		sandwich: 176,
		sandwichColor: "hsl(247, 70%, 50%)",
		kebab: 40,
		kebabColor: "hsl(44, 70%, 50%)",
		fries: 89,
		friesColor: "hsl(284, 70%, 50%)",
		donut: 80,
		donutColor: "hsl(334, 70%, 50%)",
	},
	{
		country: "AF",
		"hot dog": 81,
		"hot dogColor": "hsl(38, 70%, 50%)",
		burger: 97,
		burgerColor: "hsl(79, 70%, 50%)",
		sandwich: 134,
		sandwichColor: "hsl(248, 70%, 50%)",
		kebab: 170,
		kebabColor: "hsl(23, 70%, 50%)",
		fries: 136,
		friesColor: "hsl(33, 70%, 50%)",
		donut: 200,
		donutColor: "hsl(344, 70%, 50%)",
	},
	{
		country: "AG",
		"hot dog": 194,
		"hot dogColor": "hsl(329, 70%, 50%)",
		burger: 17,
		burgerColor: "hsl(215, 70%, 50%)",
		sandwich: 178,
		sandwichColor: "hsl(240, 70%, 50%)",
		kebab: 78,
		kebabColor: "hsl(350, 70%, 50%)",
		fries: 154,
		friesColor: "hsl(203, 70%, 50%)",
		donut: 58,
		donutColor: "hsl(41, 70%, 50%)",
	},
	{
		country: "AI",
		"hot dog": 84,
		"hot dogColor": "hsl(104, 70%, 50%)",
		burger: 136,
		burgerColor: "hsl(251, 70%, 50%)",
		sandwich: 130,
		sandwichColor: "hsl(192, 70%, 50%)",
		kebab: 30,
		kebabColor: "hsl(287, 70%, 50%)",
		fries: 34,
		friesColor: "hsl(309, 70%, 50%)",
		donut: 113,
		donutColor: "hsl(36, 70%, 50%)",
	},
	{
		country: "AL",
		"hot dog": 178,
		"hot dogColor": "hsl(92, 70%, 50%)",
		burger: 28,
		burgerColor: "hsl(192, 70%, 50%)",
		sandwich: 200,
		sandwichColor: "hsl(72, 70%, 50%)",
		kebab: 62,
		kebabColor: "hsl(136, 70%, 50%)",
		fries: 144,
		friesColor: "hsl(294, 70%, 50%)",
		donut: 129,
		donutColor: "hsl(258, 70%, 50%)",
	},
	{
		country: "AM",
		"hot dog": 7,
		"hot dogColor": "hsl(66, 70%, 50%)",
		burger: 121,
		burgerColor: "hsl(255, 70%, 50%)",
		sandwich: 14,
		sandwichColor: "hsl(181, 70%, 50%)",
		kebab: 26,
		kebabColor: "hsl(53, 70%, 50%)",
		fries: 80,
		friesColor: "hsl(332, 70%, 50%)",
		donut: 102,
		donutColor: "hsl(316, 70%, 50%)",
	},
];
