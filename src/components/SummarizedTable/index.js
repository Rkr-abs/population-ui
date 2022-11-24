import { React } from 'react';
import SummarizedData from './SummarizedData';
import Title from './Title';
const PopulationsSummary = (context) =>
	<div>
		<h1>Summary</h1>
		<table>
			<Title/>
			<SummarizedData { ...context }/>
		</table>
	</div>;

export default PopulationsSummary;
