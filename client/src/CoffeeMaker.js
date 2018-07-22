import React, {Component} from 'react';
import Header from "./component/common/Header";
import CartInfoBar from "./component/common/CartInfoBar";
import CategoryChooser from "./component/main_page/CategoryChooser";
import store from './redux/store';
import './CoffeeMaker.css';

class CoffeeMaker extends Component {

    render() {
        const {changePage} = this.props;
        const {currentPageComponent} = store.getState();
        return (
            <div className="coffee-maker__wrapper">
                <div className="coffee-maker">
                    <Header text="Coffee Maker" onClick={() => {
                        this._mainComponentRef.classList.add('coffee-maker__main-component--hiding');
                        setTimeout(() => {
                            changePage(CategoryChooser);
                            this._mainComponentRef.classList.remove('coffee-maker__main-component--hiding');
                        }, 200);
                    }}/>
                    <CartInfoBar changePage={changePage}/>
                    <div className="coffee-maker__main-component__wrapper">
                        <div className="coffee-maker__main-component" ref={ref => this._mainComponentRef = ref}>
                        {currentPageComponent}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default CoffeeMaker;
