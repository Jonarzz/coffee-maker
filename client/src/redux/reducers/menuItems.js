import {ADD_MENU_ITEM, DELETE_ALL_MENU_ITEMS, DELETE_MENU_ITEM} from "../actions/ActionTypes";

const initialState = [];
let idIndex = 1;

const menuItems = (state = initialState, action) => {
    switch(action.type) {
        case ADD_MENU_ITEM:
            return [
                ...state,
                {...action.item, id: idIndex++}
            ];
        case DELETE_MENU_ITEM:
            return state.filter(item => item.id !== action.itemId);
        case DELETE_ALL_MENU_ITEMS:
            return initialState;
        default:
            return state;
    }
};

export default menuItems;