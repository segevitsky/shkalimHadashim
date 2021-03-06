import { ResponsiveBar } from "@nivo/bar";
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const BarChart = ({ data,months /* see data tab */ }) => {
    console.log(data[0])
    console.log(months);
    const keys = months.map(el => el.name)
    console.log(keys);
    return (

	<ResponsiveBar
		data={data}
		keys={keys}
		indexBy="name"
		margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
		padding={0.3}
		valueScale={{ type: "linear" }}
		indexScale={{ type: "band", round: true }}
		colors={{ scheme: "nivo" }}
		defs={[
			{
				id: "dots",
				type: "patternDots",
				background: "inherit",
				color: "#38bcb2",
				size: 4,
				padding: 1,
				stagger: true,
			},
			{
				id: "lines",
				type: "patternLines",
				background: "inherit",
				color: "#eed312",
				rotation: -45,
				lineWidth: 6,
				spacing: 10,
			},
		]}
		fill={[
			{
				match: {
					id: "ינואר",
				},
				id: "dots",
			},
			{
				match: {
					id: "דצמבר",
				},
				id: "lines",
			},
		]}
		borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
		axisTop={null}
		axisRight={null}
		axisBottom={{
			tickSize: 5,
			tickPadding: 5,
			tickRotation: 0,
			legend: "הוצאה / הכנסה",
			legendPosition: "middle",
			legendOffset: 32,
		}}cas
		axisLeft={{
			tickSize: 5,
			tickPadding: 5,
			tickRotation: 0,
			legend: {},
			legendPosition: "middle",
			legendOffset: -40,
		}}
		labelSkipWidth={12}
		labelSkipHeight={12}
		labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
		legends={[
			{
				dataFrom: "amount",
				anchor: "bottom-right",
				direction: "column",
				justify: false,
				translateX: 120,
				translateY: 0,
				itemsSpacing: 2,
				itemWidth: 100,
				itemHeight: 20,
				itemDirection: "left-to-right",
				itemOpacity: 0.85,
				symbolSize: 20,
				effects: [
					{
						on: "hover",
						style: {
							itemOpacity: 1,
						},
					},
				],
			},
		]}
		animate={true}
		motionStiffness={90}
		motionDamping={15}
	/>
)
};

export default BarChart;
