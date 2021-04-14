import React, { Component } from 'react';
import CheckoutSummary from '../../components/Order/ChekoutSummary/CheckoutSummary';

class Checkout extends Component {
    state = { 
        ingredients: {
            salad: 0,
            meat: 0,
            cheese: 0,
            bacon: 0
        }
    }

    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {}
        for (let param of query.entries()) {
            ingredients[param[0]] = +param[1]
        }
        this.setState({ingredients: ingredients})
    }

    cancelCheckoutHandler = () => {
        this.props.history.goBack();
    }

    continueCheckoutHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    render() {
        return (
            <div>
                <CheckoutSummary 
                ingredients={this.state.ingredients} 
                checkoutCancelled={ this.cancelCheckoutHandler }
                checkoutContinued={ this.continueCheckoutHandler }/>
            </div>
        );
    }
}
 
export default Checkout;