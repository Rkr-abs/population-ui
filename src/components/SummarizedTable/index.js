import { React } from 'react';
import SummarizedTable from './SummaryTable';
import Title from './TableHead';
const PopulationsSummary = (context) =>
	<div>
		<h1>Summary</h1>
		<table>
			<Title/>
			<SummarizedTable { ...context }/>
		</table>
	</div>;

export default PopulationsSummary;
