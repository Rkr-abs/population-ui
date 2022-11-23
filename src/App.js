import { React } from 'react';
import './App.scss';
import PopulationsTable from './components/PopulationTable/Index';
import populations from './data/populations';

const App = () =>
	<div className="App" role="App">
		<PopulationsTable { ...{ data: populations } }/>
	</div>;

export default App;
