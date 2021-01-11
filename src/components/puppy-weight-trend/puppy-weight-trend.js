import React from 'react';

const PuppyWeightTrend = ({data}) => {
	const [minDateTime, maxDateTime] = (() =>
		data.reduce((minMax, current) => {
			return [current.getTime() < minMax[0] ? current.getTime() : minMax[0],
				current.getTime() > minMax[1] ? current.getTime() : minMax[1]]
		}, [data[0].getTime(), data[0].getTime()]))();
	return (
		<div>

		</div>
	);
};

export default PuppyWeightTrend;