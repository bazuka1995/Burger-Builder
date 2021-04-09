import React from "react";
import Aux from "../../../hoc/Auxilliary";

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
      <p>Continue to payment?</p>
    </Aux>
  );
};

export default OrderSummary;
