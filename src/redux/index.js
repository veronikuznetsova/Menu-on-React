import { createStore, combineReducers, applyMiddleware } from 'redux';
import todoReducer from './reducers/todoReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import userReducer from './reducers/userReducer';
import countReducer from './reducers/countReducer';
import thunk from 'redux-thunk';
import lightReducer from './reducers/lightReducer'

const redusers = combineReducers({
    todo: todoReducer,
    user: todoReducer,
    count: countReducer,
    light: lightReducer,
});

// const store = createStore(todoReducer);
const store = createStore(redusers, composeWithDevTools(applyMiddleware(thunk)));

export default store;