import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchCustomers, toggleAddCustomer, addCustomer, deleteCustomer} from "../../CustomerActions";
import {getCustomers} from "../../CustomerReducer";
import _ from 'lodash';
import styles from './CustomerListPage.css';
import CustomerForm from './CustomerForm';

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
      firstName: -values.firstName,
      lastName: values.lastName,
      email: values.email,
      telephone: values.telephone,
      car: values.car
    };
    this.props.dispatch(addCustomer(customer));
  };

  deleteCustomer = email =>{
   // console.log("RECEIVED 2 DELETE" + email);
    //this.props.dispatch(deleteCustomer(email));
  };


  render() {
    const display = `${styles.form} ${(this.props.showAddData ? styles.appear : '')}`;
    return (
      <div className={styles['form-content']}>
        <button className={styles['post-submit-button']} onClick={this.handleClick}>
          Add New Customer
        </button>
        <div className={display}>
          <h2 className={styles['form-title']}>Add Customer</h2>
          <CustomerForm onSubmit={this.submitRedux}/>
        </div>
        <br/>
        <div className="listView">
          <p className={styles['customer-header']}>Customer List</p>
          {this.renderItem()}
        </div>
      </div>
    );
  }


  renderItem() {
    return _.map(this.props.customerData, data => {
      return (
        <div>
          <button className={styles['post-delete-button']} onClick={this.handleClick}>
           Delete
          </button>
          <p className={styles['customer-name']}>{data.title} {data.firstName} {data.lastName}</p>
          <p className={styles['customer-desc']}>Email: {data.email}
            <br/> Telephone: {data.telephone}
            <br/> Date Added: {data.dateAdded}
          </p>
          <hr className={styles.divider}/>
        </div>
      );
    })
  }
}

function mapStateToProps(state) {
  return {
    customerData: getCustomers(state),
    showAddData: state.customer.showAddData
  };
}

export default connect(mapStateToProps)(CustomerListPage);
