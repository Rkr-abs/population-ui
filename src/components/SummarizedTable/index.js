import { React } from 'react';
import SummarizedData from './SummaryTable';
import Title from './TableHead';
const PopulationsSummary = (context) =>
	<div>
		<h1>Summary</h1>
		<table>
			<Title/>
			<SummarizedData { ...context }/>
		</table>
	</div>;

export default PopulationsSummary;
