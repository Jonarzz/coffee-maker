import {ADD_MENU_ITEM, DELETE_MENU_ITEM} from "../actions/ActionTypes";

const initialState = [];

const menuItems = (state = initialState, action) => {
    switch(action.type) {
        case ADD_MENU_ITEM:
            return [
                ...state,
                action.item
            ];
        case DELETE_MENU_ITEM:
            return state.filter(item => item.id !== action.item.id);
        default:
            return state;
    }
};

export default menuItems;