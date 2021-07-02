import { ResponsivePie } from "@nivo/pie";
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const MyResponsivePie = ({ data /* see data tab */ }) => (
	<ResponsivePie
		data={data}
		margin={{ top: 40, right: 80, bottom: 150, left: 80 }}
		innerRadius={0.5}
		padAngle={0.7}
		fit={false}
		value="amount"
		cornerRadius={3}
		enableRadialLabels
		colors={{ scheme: "nivo" }}
		borderWidth={1}
		borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
		radialLabel={(e) => e.data.name}
		radialLabelsTextColor="black"
		radialLabelsLinkColor={{ from: "color" }}
		sliceLabelsTextColor="black"
		defs={[
			{
				id: "dots",
				type: "patternDots",
				background: "inherit",
				color: "rgba(255, 255, 255, 0.3)",
				size: 4,
				padding: 1,
				stagger: true,
			},
			{
				id: "lines",
				type: "patternLines",
				background: "inherit",
				color: "rgba(255, 255, 255, 0.3)",
				rotation: -45,
				lineWidth: 6,
				spacing: 10,
			},
		]}
		fill={[
			{
				match: {
					id: "ruby",
				},
				id: "dots",
			},
			{
				match: {
					id: "c",
				},
				id: "dots",
			},
			{
				match: {
					id: "go",
				},
				id: "dots",
			},
			{
				match: {
					id: "python",
				},
				id: "dots",
			},
			{
				match: {
					id: "scala",
				},
				id: "lines",
			},
			{
				match: {
					id: "lisp",
				},
				id: "lines",
			},
			{
				match: {
					id: "elixir",
				},
				id: "lines",
			},
			{
				match: {
					id: "javascript",
				},
				id: "lines",
			},
		]}
		// legends={[
		// 	{
		// 		anchor: "top-right",
		// 		direction: "column",
		// 		justify: false,
		// 		translateX: 150,
		// 		translateY: 0,
		// 		itemWidth: 100,
		// 		itemHeight: 20,
		// 		itemsSpacing: 0,
		// 		symbolSize: 20,
		// 		itemDirection: "left-to-right",
		// 		legendFormat: (d) => {
		// 			return d.name + d.id;
		// 		},
		// 	},
		// ]}
	/>
);

export default MyResponsivePie;
