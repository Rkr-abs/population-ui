import { keys, map } from '@laufire/utils/collection';
import { React } from 'react';

const PopulationRow = ({ data, key, config: { fields }}) =>
	<tr key={ key }>
		{map(keys(fields), (field) => <td> {data[field]} </td>)}
	</tr>;
const PopulationData = ({ populations, config }) =>
	<tbody>
		{populations.map((population, i) =>
			PopulationRow({ data: population, key: i, config: config }))}
	</tbody>;

export default PopulationData;
