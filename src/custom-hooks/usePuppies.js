import React, {useEffect, useState} from 'react';
import {getLocalStorageData, setLocalStorageArrayItem} from '../utils/my-local-storage'

const usePuppies = (aggregator) => {
	debugger;
	const [puppiesState, setPuppiesState] = useState([]);
	const getPuppies = async () => {
		setPuppiesState(await new Promise((resolve, reject) => {
			setTimeout(() => {
				let data = getLocalStorageData('puppies');
				aggregator && (data = data.filter(aggregator()))
				resolve(data)
			}, 500)
		}));
	}
	const savePuppy = async (puppy) => {
		debugger
		setTimeout(() => {
			setLocalStorageArrayItem('puppies', puppy);
		}, 200)
	}

	useEffect(() => {
		getPuppies();
	}, []);

	return [puppiesState, savePuppy];
};

export default usePuppies;