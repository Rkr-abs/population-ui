import { React } from 'react';
import Title from './TableHead';
import PopulationData from './PopulationData';

const PopulationsTable = ({ data: populations, config }) =>
	<table className="table">
		<Title { ...{ config } }/>
		<PopulationData { ...{ populations, config } }/>
	</table>;

export default PopulationsTable;
