import { React } from 'react';
import './App.scss';
import PopulationsTable from './components/PopulationTable/';
import config from './core/config';
import populations from './data/populations';
import PopulationsSummary from './components/SummarizedTable';

const App = () =>
	<div className="App" role="App">
		<PopulationsTable { ...{ data: populations, config: config } }/>
		<PopulationsSummary { ...{ data: populations } }/>

	</div>;

export default App;
