// reducer takes: 
// 1 the action 
// 2 copy of current state

function postComments(state = [], action) {
	switch(action.type) {
		case 'ADD_COMMENT':
			return [...state,{
				user: action.author,
				text: action.comment
			}];
		case 'REMOVE_COMMENT':
			console.log('rem com');
			return [
				...state.slice(0,action.i),
				...state.slice(action.i + 1)
			];
		default:
			return state;
	}
	return state;
}

function comments(state = [], action) {
	console.log(action.postId);
	if ( typeof action.postId !== 'undefined' ) {
		return {
			...state,
			[action.postId]: postComments(state[action.postId], action)
		}
	}
	return state;
}

export default comments;