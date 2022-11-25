import { map, values } from '@laufire/utils/collection';
import { React } from 'react';

const Title = ({ config: { fields }}) => {
	const fieldValues = values(fields);

	return <thead className="table">
		{map(fieldValues, (field) => <th>{field}</th>)}
	</thead>;
};

export default Title;
