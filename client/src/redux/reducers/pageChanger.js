import React from 'react';
import {CHANGE_PAGE} from '../actions/ActionTypes';
import CategoryChooser from "../../component/main_page/CategoryChooser";

const initialState = <CategoryChooser/>;

const currentPageComponent = (state = initialState, action) => {
    switch(action.type) {
        case CHANGE_PAGE:
            const Component = action.targetComponent;
            return <Component {...action.props}/>;
        default:
            return state;
    }
};

export default currentPageComponent;