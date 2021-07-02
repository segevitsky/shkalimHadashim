import React, { useEffect, useState } from "react";
import { getTables } from "../../components/api/oursAPI";
import Category from "./Category/Category";
import Layout from "../../components/UI/Layout/Layout";
import "./categories.css";

export default function Categories() {
	const [tables, setTables] = useState([]);
	const [cat, setCat] = useState([]);
	useEffect(() => {
		(async function () {
			try {
				const allData = await getTables;
				const data = allData;
				console.log({ data });
				setCat(Object.keys(data.data));
				setTables(data.data);
			} catch (e) {
				console.log(e);
			}
		})();
	}, []);

	const cats = cat.map((el, i) => (
		<Category key={el + i} name={el} className={i} style={{}} tables={tables} />
	));

	return (
		<Layout>
			<div className="categories">{cats}</div>
		</Layout>
	);
}
