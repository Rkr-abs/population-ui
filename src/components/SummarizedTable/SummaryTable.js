import { React } from 'react';
import getSummary from '../../services/getSummary';

const SummarizedTable = ({ populations }) => {
	const summary = getSummary({ populations });

	return <tbody>
		<tr>
			<td>Maximum</td>
			<td>{summary.maxState}</td>
			<td>{summary.maximum}</td>
		</tr>
		<tr>
			<td>Minimum</td>
			<td>{summary.minState}</td>
			<td>{summary.minimum}</td>
		</tr>
		<tr>
			<td>Total</td>
			<td>-</td><td>{summary.total}</td>
		</tr>
	</tbody>;
};

export default SummarizedTable;
