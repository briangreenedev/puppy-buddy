import React from 'react';
import PuppyWeightForm from "../../components/puppy-weight-form";
import PuppyWeightTrend from "../../components/puppy-weight-trend";

const PuppyWeight = ({puppyId}) => {
	return (
		<div>
			<PuppyWeightForm puppyId={parseInt(puppyId)} />
			<PuppyWeightTrend puppyId={parseInt(puppyId)} />
		</div>
	);
};

export default PuppyWeight;