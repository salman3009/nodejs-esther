import { combineReducers } from "redux";
import users from './users';
import list from './list';

const rootReducers = combineReducers({
     users:users,
     list:list
});

export default rootReducers;