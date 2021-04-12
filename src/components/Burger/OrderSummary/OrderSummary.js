import React, { Component } from "react";
import Aux from "../../../hoc/Auxilliary";
import Button from "../../UI/Button/Button";

class OrderSummary extends Component {
  render() {
    const ingredientSummary = Object.keys(this.props.ingredientSummary).map(
      (igKey) => {
        return (
          <li key={igKey}>
            <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
            {this.props.ingredientSummary[igKey]}
          </li>
        );
      }
    );

    return (
      <Aux>
        <h3>Your Order</h3>
        <p>Your delicious burger has the following ingredients: </p>
        <ul>{ingredientSummary}</ul>
        <h4>Total price: ${this.props.price.toFixed(2)}</h4>
        <p>Continue to payment?</p>
        <Button btnType='Danger' click={this.props.cancelled}>Cancel</Button>
        <Button btnType='Success' click={this.props.continue}>Continue</Button>
      </Aux>
    );
  }
};

export default OrderSummary;
