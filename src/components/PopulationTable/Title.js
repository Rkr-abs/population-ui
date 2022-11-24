import { map, values } from '@laufire/utils/collection';
import { React } from 'react';

const Title = ({ config: { fields }}) => {
	const fieldValues = values(fields);

	return <thead className="table">

		{map(fieldValues, (field) => <th>{field}</th>)}
	</thead>;
};
// const Title = () =>
// 	<thead className="table">
// 		<tr>
// 			<th>state</th>
// 			<th>estimate2011</th>
// 			<th>estimate2022</th>
// 		</tr>
// 	</thead>;

export default Title;
