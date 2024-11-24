const accountReducer = function (state = {}, action) {
	switch (action.type) {
		case "SET_ACCOUNT":
			return { ...state, ...action.payload };
		case "SET_BILLS":
			return { ...state, bills: action.payload };
		default:
			return state;
	}
};

export default accountReducer