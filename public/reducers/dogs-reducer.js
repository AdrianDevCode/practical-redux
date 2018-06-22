let dogsDefaultState = {
	dogPicture: "",
	isLoading: false
}

const dogsReducer = (state = dogsDefaultState, action) => {
	
	let stateCopy = {...state};

	if(action.type === "DOG_SEARCH_INITIATED"){
		stateCopy.isLoading = true;
	}else if(action.type === "DOG_FOUND"){
		let { dog } = action;
		stateCopy.dogPicture = dog;
		stateCopy.isLoading = false;
		return stateCopy;
	}
	return state;
}