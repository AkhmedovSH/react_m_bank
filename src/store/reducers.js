import { combineReducers } from "redux"

import loader from "./loader/reducer"
import account from "./account/reducer"

const allReducers = combineReducers({
	loader,
	account,
})

export const rootReducer = (state, action) => {
	// when a logout action is dispatched it will reset redux state
	if (action.type === 'USER_LOGGED_OUT') {
		state = undefined;
	}

	return allReducers(state, action);
};

export default rootReducer
