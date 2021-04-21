import React from "react";
import classes from "./Order.module.css";
import * as actions from "../../store/actions/index";
import { connect } from "react-redux";

const order = (props) => {
  const ingredients = [];
  for (let name in props.ingredients) {
    ingredients.push({ name: name, amount: props.ingredients[name] });
  }

  const output = ingredients.map((ig) => {
    return (
      <span
        style={{
          textTransform: "capitalize",
          display: "inline-block",
          margin: "0 8px",
          border: "1px solid #ccc",
          padding: "5px",
        }}
        key={ig.name}
      >
        {ig.name}: {ig.amount}
      </span>
    );
  });

  return (
    <div className={classes.Order}>
      <p>Ingredients: {output}</p>
      <p>
        Price: <strong>${Number.parseFloat(props.price).toFixed(2)}</strong>
      </p>
      <button className={classes.Button} onClick={props.deleteOrder}>Delete</button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteOrder: () => dispatch(actions.deleteOrder())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(order);
