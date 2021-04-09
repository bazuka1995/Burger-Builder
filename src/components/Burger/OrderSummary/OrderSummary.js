import React from "react";
import Aux from "../../../hoc/Auxilliary";
import Button from "../../UI/Button/Button";

const OrderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredientSummary).map(
    (igKey) => {
      return (
        <li key={igKey}>
          <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
          {props.ingredientSummary[igKey]}
        </li>
      );
    }
  );

  return (
    <Aux>
      <h3>Your Order</h3>
      <p>Your delicious burger has the following ingredients: </p>
      <ul>{ingredientSummary}</ul>
      <h4>Total price: ${props.price.toFixed(2)}</h4>
      <p>Continue to payment?</p>
      <Button btnType='Danger' click={props.cancelled}>Cancel</Button>
      <Button btnType='Success' click={props.continue}>Continue</Button>
    </Aux>
  );
};

export default OrderSummary;
