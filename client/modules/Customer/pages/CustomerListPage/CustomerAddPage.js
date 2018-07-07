import React, {Component} from 'react';
import {addCustomer} from "../../CustomerActions";
import {getCustomers} from "../../CustomerReducer";
import {connect} from "react-redux";

class CustomerAddPage extends Component {
  constructor(props) {
    super(props);
    this.state = {title: '', firstName: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const customer = {
      title: this.state.title,
      firstName: this.state.firstName
    };
    this.props.dispatch(addCustomer(customer));
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  render() {
    return <form onSubmit={this.handleSubmit}>
      <label>
        Title:
        <input type="text" name="title" value={this.state.value} onChange={this.handleChange}/>
        First Name:
        <input type="text" name="firstName" value={this.state.value} onChange={this.handleChange}/>
        {/*<input className={styles['form-field']} ref="title"/>*/}
        {/*<input className={styles['form-field']} ref="firstName"/>*/}
        {/*<input className={styles['form-field']} ref="lastName"/>*/}
        {/*<input className={styles['form-field']} ref="email"/>*/}
        {/*<input className={styles['form-field']} ref="telephone"/>*/}
        {/*<input className={styles['form-field']} ref="car"/>*/}
      </label>
      <input type="submit" value="Submit"/>
    </form>
  }
}

function mapStateToProps(state) {
  return {
    customerData: getCustomers(state)
  };
}

export default connect(mapStateToProps)(CustomerAddPage);
