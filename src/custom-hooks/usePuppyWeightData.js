import React, {useEffect, useState} from 'react';
import {getLocalStorageData} from "../utils/my-local-storage";

const usePuppyWeightData = ({puppyId}) => {


	const [data, setData] = useState();
	const getData = async () => {
		setData(await new Promise((resolve, reject) => {
			setTimeout(() => {
				let data = getLocalStorageData('puppy-weight');
				resolve(data && data.filter(d => d.puppyId === puppyId))
			}, 500);
		}));
	}
	useEffect(() => {
		getData()
	}, [])

	return sample;
};

export default usePuppyWeightData;