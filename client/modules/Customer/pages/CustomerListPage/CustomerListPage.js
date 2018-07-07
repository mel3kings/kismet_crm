import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchCustomers, toggleAddCustomer, addCustomer} from "../../CustomerActions";
import {getCustomers} from "../../CustomerReducer";
import _ from 'lodash';
import CustomerAddPage from './CustomerAddPage';
import CustomerForm from './CustomerReduxAddPage';

class CustomerListPage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchCustomers());
  }

  handleClick = () => {
    this.props.dispatch(toggleAddCustomer());
  };

  submitRedux = values => {
    const customer = {
      title: values.title,
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email
    };
    this.props.dispatch(addCustomer(customer));
  };


  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
          Add Customer
        </button>
        <CustomerForm onSubmit={this.submitRedux}/>
        <br/>
        <div className="listView">
          <h4>Customer List</h4>
          {this.renderItem()}
        </div>
      </div>
    );
  }


  renderItem() {
    return _.map(this.props.customerData, data => {
      return (
        <div>{data.title} {data.firstName} {data.lastName}
          <br/> Email: {data.email}
          <br/> Telephone: {data.telephone}
          <br/> Date Added: {data.dateAdded}
          <br/>
        </div>
      );
    })
  }
}

function mapStateToProps(state) {
  return {
    customerData: getCustomers(state)
  };
}

export default connect(mapStateToProps)(CustomerListPage);
