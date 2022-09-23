import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import itemReducer from './itemReducer'
import { composeWithDevTools } from 'redux-devtools-extension';
const store = createStore(itemReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;