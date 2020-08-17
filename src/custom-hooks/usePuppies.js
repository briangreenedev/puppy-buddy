import React, {useEffect, useState} from 'react';

const usePuppies = () => {
	const [puppies, setPuppies] = useState([]);
	const getSetPuppies = async () => {
		setPuppies(await new Promise((resolve, reject) => {
			setTimeout(() => {
				const data = [{
					"id": 1,
					"name": "Cacilie",
					"surname": "Darcey",
					"gender": "Female",
					"birthDate": "5/27/2020",
					"lastVaccineDate": "1/18/2020",
					"nextVaccineDate": "8/20/2020",
					"sire": "Harland",
					"dame": "Hedvige"
				}, {
					"id": 2,
					"name": "Tallie",
					"surname": "Verheijden",
					"gender": "Male",
					"birthDate": "11/30/2019",
					"lastVaccineDate": "7/19/2020",
					"nextVaccineDate": "2/29/2020",
					"sire": "Martainn",
					"dame": "Phillida"
				}, {
					"id": 3,
					"name": "Eddie",
					"surname": "Dulwitch",
					"gender": "Female",
					"birthDate": "5/15/2020",
					"lastVaccineDate": "7/3/2020",
					"nextVaccineDate": "8/15/2020",
					"sire": "Maison",
					"dame": "Crissie"
				}, {
					"id": 4,
					"name": "Gracie",
					"surname": "Sleeford",
					"gender": "Female",
					"birthDate": "9/17/2019",
					"lastVaccineDate": "10/20/2019",
					"nextVaccineDate": "12/31/2019",
					"sire": "Fin",
					"dame": "Jenna"
				}, {
					"id": 5,
					"name": "Cirstoforo",
					"surname": "Trayes",
					"gender": "Male",
					"birthDate": "2/11/2020",
					"lastVaccineDate": "10/10/2019",
					"nextVaccineDate": "8/28/2020",
					"sire": "Paddy",
					"dame": "Bernete"
				}]
				resolve(data)
			}, 2000)
		}));
	}
	useEffect(() => {
		getSetPuppies();
	}, []);

	return [puppies]
};

export default usePuppies;