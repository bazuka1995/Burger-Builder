import React, { Component } from "react";
import Button from "../../../components/UI/Button/Button";
import classes from "./ContactData.module.css";
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      zipCode: "",
      country: "",
    },
    loading: false,
  };

  orderHandler = (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: "Dov Royal",
        address: {
          street: "Napier St",
          zipCode: "2030",
          country: "Australia",
        },
        email: "dov@gmail.com",
      },
      deliveryMethod: "fastest",
    };

    axios.post( '/orders.json', order )
      .then( response => {
        this.setState({ loading: false });
        this.props.history.push('/');
      })
      .catch( error => {
        this.setState({ loading: false });
      })
  };

  render() {
    let form = (
      <form>
          <input
            className={classes.Input}
            type="text"
            name="name"
            placeholder="Full Name"
          />
          <input
            className={classes.Input}
            type="email"
            name="email"
            placeholder="Email Address"
          />
          <input
            className={classes.Input}
            type="text"
            name="street"
            placeholder="Street Address"
          />
          <input
            className={classes.Input}
            type="text"
            name="zip"
            placeholder="Zip Code"
          />
          <input
            className={classes.Input}
            type="text"
            name="country"
            placeholder="Country"
          />
          <Button click={this.orderHandler} btnType="Success">
            Order
          </Button>
        </form>
    );

    if (this.state.loading) {
      form = <Spinner />
    }

    return (
      <div className={classes.ContactData}>
        <h4>Please enter your details: </h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
