import { React } from 'react';
import Header from './Header';
import PopulationRow from './PopulationRow';

const PopulationsTable = ({ data }) => <table>
	<Header/>
	<tbody>
		{data.map(PopulationRow)}
	</tbody>
</table>;

export default PopulationsTable;
