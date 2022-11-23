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

export default PopulationRow;
