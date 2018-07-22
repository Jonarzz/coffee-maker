import { combineReducers } from 'redux'
import menuItems from './menuItems'
import currentPageComponent from "./pageChanger";

const reducers = combineReducers({
    menuItems,
    currentPageComponent
});

export default reducers;