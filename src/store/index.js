import { createStore } from "redux"
import { loadState } from './localStorage'
import rootReducer from "./reducers"

const persistedState = loadState();

export const store = createStore(
	rootReducer,
	persistedState,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)


export default store
	