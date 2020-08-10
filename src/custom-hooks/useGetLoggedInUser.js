import React, {useEffect, useReducer} from 'react';

const reducer = (state, action) => {
	switch (action.type) {
		case 'fetch-user': {
			return {
				...state,
				user: action.value
			}
		}
	}
}

function useGetLoggedInUser() {
	const [state, dispatch] = useReducer(reducer, {
		user: {}
	})

	useEffect(() => {
		(async function() {
				const user = await new Promise((resolve, reject) => {
					resolve({
						userId: 4,
						firstName: 'Brian',
						lastName: 'Greene',
						email: 'brian@cloversoftware.net',
						imgUrl: 'https://media-exp1.licdn.com/dms/image/C5603AQGYP-hfXHtduA/profile-displayphoto-shrink_200_200/0?e=1601510400&v=beta&t=FeBpuE-HFTKoplXROGi7XiDaLtTnD1ObYSybrIrotIY'
					})
				})
				dispatch({type:'fetch-user', value: user})
			}
		)()
	}, [])

	return [state['user']]
}

export default useGetLoggedInUser