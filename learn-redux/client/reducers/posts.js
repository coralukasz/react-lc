// reducer takes: 
// 1 the action 
// 2 copy of current state

function posts(state = [], action) {
	console.log("post will change");
	// console.log(state, action);
	switch(action.type) {
		case 'INCREMENT_LIKES' :
			const i = action.index;
			return [
				...state.slice(0,i), // elements before the one we want to update
				{...state[i], likes: state[i].likes + 1},
				...state.slice(i + 1) // elements after the one we want to update
			]
		default:
			return state;
	}
}

export default posts;