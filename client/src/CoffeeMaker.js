import React, {Component} from 'react';
import Header from "./component/common/Header";
import CartInfoBar from "./component/main_page/CartInfoBar";
import store from './redux/store';
import './CoffeeMaker.css';

class CoffeeMaker extends Component {

    render() {
        const {changePage} = this.props;
        const {currentPageComponent} = store.getState();
        return (
            <div className="coffee-maker__wrapper">
                <div className="coffee-maker">
                    <Header text="Coffee Maker"/>
                    <CartInfoBar changePage={changePage}/>
                    {currentPageComponent}
                </div>
            </div>
        );
    }

}

export default CoffeeMaker;
