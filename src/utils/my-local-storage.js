export const getLocalStorageData = key =>
	localStorage.getItem(key) !== null
		? JSON.parse(localStorage.getItem(key))
		: null

export const setLocalStorageData = (key, data) => {
	if(typeof data !== 'string' && !(data instanceof String))
		data = JSON.stringify(data);
	localStorage.setItem(key, JSON.stringify(data));
}

export const setLocalStorageArrayItem = (key, data) => {
	if(typeof data !== 'string' && !(data instanceof String))
		data = JSON.stringify(data);
	const arr = localStorage.getItem(key) && JSON.parse(localStorage.getItem(key));
	if(Array.isArray(arr)) {
		arr.push(data);
		localStorage.setItem(key, JSON.stringify(arr));
	}
}