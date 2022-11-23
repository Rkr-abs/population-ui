import { React } from 'react';

const populations = [
	{
		state: 'UttarPradesh',
		estimate2011: 19.98,
		estimate2022: 23.32,
	},
	{
		state: 'Maharashtra',
		estimate2011: 11.23,
		estimate2022: 12.54,
	},
	{
		state: 'Bihar',
		estimate2011: 10.4,
		estimate2022: 12.49,
	},
	{
		state: 'WestBengal',
		estimate2011: 9.12,
		estimate2022: 9.86,
	},
	{
		state: 'MadhyaPradesh',
		estimate2011: 7.26,
		estimate2022: 8.55,
	},
	{
		state: 'TamilNadu',
		estimate2011: 7.21,
		estimate2022: 7.66,
	},
	{
		state: 'Rajashtan',
		estimate2011: 6.8,
		estimate2022: 8,
	},
	{
		state: 'Karnataka',
		estimate2011: 6.1,
		estimate2022: 6.72,
	},
	{
		state: 'Gujarat',
		estimate2011: 6.04,
		estimate2022: 7,
	},
	{
		state: 'Odisha',
		estimate2011: 4.19,
		estimate2022: 4.6,
	},
];

const Table = () => <table>
	<thead className="table">
		<tr>
			<th>state</th>
			<th>estimate2011</th>
			<th>estimate2022</th>
		</tr></thead>
	<tbody>
		{populations.map((item, key) =>
			<tr key={ key }>
				<td> {item.state}</td>
				<td>{item.estimate2011}</td>
				<td>{item.estimate2022}</td>
			</tr>)}
	</tbody>
</table>;

export default Table;
