import { reduce } from '@laufire/utils/collection';

const getMaximum = (populations) => {
	const maximum = reduce(
		populations, (acc, cur) => {
			const { max } = acc;

			return { max: max < cur.estimate2011 ? cur.estimate2011 : max };
		}, { max: 0 }
	);
	const maximumPopulation = populations.find((population) =>
		population.estimate2011 === maximum.max);

	return maximumPopulation;
};

const getMinimum = (populations) => {
	const minimum = reduce(
		populations, (acc, cur) => {
			const { min } = acc;

			return { min: min > cur.estimate2011 ? cur.estimate2011 : min };
		}, { min: Infinity }
	);
	const minimumPopulation = populations.find((population) =>
		population.estimate2011 === minimum.min);

	return minimumPopulation;
};

const Total = (populations) => reduce(
	populations, (acc, cur) => acc + cur.estimate2011, 0
);

const getSummarized = ({ data: populations }) => ({
	maxState: getMaximum(populations).state,
	maximum: getMaximum(populations).estimate2011,
	total: Total(populations),
	minState: getMinimum(populations).state,
	minimum: getMinimum(populations).estimate2011,

});

export default getSummarized;
