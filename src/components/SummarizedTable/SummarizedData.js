import { React } from 'react';
import getSummarized from '../../services/getSummarize';

const SummarizedData = ({ data: populations }) => {
	const summary = getSummarized({ data: populations });

	return <tbody>
		<tr>
			<td>Maximum</td>
			<td>{summary.maxState}</td>
			<td>{summary.maximum}</td>
		</tr>
		<tr>
			<td>minimum</td>
			<td>{summary.minState}</td>
			<td>{summary.minimum}</td>
		</tr>
		<tr>
			<td>Total</td>
			<td>-</td>
			<td>{summary.total}</td>
		</tr>
	</tbody>;
};

export default SummarizedData;
