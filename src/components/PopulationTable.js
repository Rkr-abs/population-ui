import { React } from 'react';

const PopulationRow = ({
	state,
	estimate2011: estimateFirst,
	estimate2022: estimateSecond,
}, key) =>
	<tr key={ key } className="table">
		<td> {state}</td>
		<td>{estimateFirst}</td>
		<td>{estimateSecond}</td>
	</tr>;

const Header = () =>
	<thead className="table">
		<tr>
			<th>state</th>
			<th>estimate2011</th>
			<th>estimate2022</th>
		</tr>
	</thead>;

const PopulationsTable = ({ data }) => <table>
	<Header/>
	<tbody>
		{data.map(PopulationRow)}
	</tbody>
</table>;

export default PopulationsTable;
