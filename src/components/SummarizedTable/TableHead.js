import { map } from '@laufire/utils/collection';
import { React } from 'react';
const titles = ['category', 'state', 'census'];
const Title = () => <thead>
	<tr>
		{map(titles, (title) => <th>{title}</th>)}
	</tr>
</thead>;

export default Title;
