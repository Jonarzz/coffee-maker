import React from 'react';
import ReactDOM from 'react-dom';
import {connect, Provider} from 'react-redux';
import './index.css';
import CoffeeMaker from './CoffeeMaker';
import registerServiceWorker from './registerServiceWorker';
import {addMenuItem, deleteMenuItem} from './redux/actions/menuItemsActions';
import {changePage} from "./redux/actions/pageChangerActions";
import store from './redux/store';

const mapStateToProps = state => ({
    menuItems: state.menuItems,
    currentPageComponent: state.currentPageComponent
});
const mapDispatchToProps = { addMenuItem, deleteMenuItem, changePage };

const WrappedCoffeeMaker = connect(
    mapStateToProps,
    mapDispatchToProps
)(CoffeeMaker);


ReactDOM.render(
    <Provider store={store}>
        <WrappedCoffeeMaker/>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
