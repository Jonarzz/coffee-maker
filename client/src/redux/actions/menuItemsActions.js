import {ADD_MENU_ITEM, DELETE_ALL_MENU_ITEMS, DELETE_MENU_ITEM} from "./ActionTypes";

export const addMenuItem = item => ({ type: ADD_MENU_ITEM, item });
export const deleteMenuItem = itemId => ({ type: DELETE_MENU_ITEM, itemId });
export const deleteAllMenuItems = () => ({ type: DELETE_ALL_MENU_ITEMS });