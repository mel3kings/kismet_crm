import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import styles from './style/CustomerListPage.css';

import {fetchCustomers, toggleAddCustomer, addCustomer, deleteCustomer,sendEmail} from "../../CustomerActions";
import {getCustomers} from "../../CustomerReducer";
import CustomerForm from './CustomerForm';

class CustomerListPage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchCustomers());
  }

  handleClick = () => {
    this.props.dispatch(toggleAddCustomer());
  };

  handleDelete = (email) => {
    this.props.dispatch(deleteCustomer(email));
  };

  handleEmail = (email) =>{
    this.props.dispatch(sendEmail(email));
    alert("Reminder Email has been Sent");
  };


  submitRedux = values => {
    const customer = {
      title: values.title,
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      telephone: values.telephone,
      car: values.car,
      regoDate: values.regoDate
    };


    this.props.dispatch(addCustomer(customer));
    values.title="";
    values.firstName="";
    values.lastName="";
    values.email="";
    values.telephone="";
    values.car="";
    values.regoDate="";
    alert("Add Customer Request sent");

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
          <p className={styles['customer-header']}> {!this.props.letter ? '' : 'Letter ' + this.props.letter} Customer List (Last 50) </p>
          {this.renderItem()}
        </div>
      </div>
    );
  }


  renderItem() {
    return _.map(this.props.customerData, data => {
      return (
        <div>

          <a href="#" className={styles['post-delete-button']} onClick={() => {
            this.handleDelete(data.email)
          }}>
            Delete
          </a>

          <p className={styles['customer-name']}>{data.title} {data.firstName} {data.lastName}</p>
          <p className={styles['customer-desc']}>Email: {data.email}
            <br/> Telephone: {data.telephone}
            <br/> Date Added: {new Date(data.dateAdded).toLocaleString()}
          </p>
          <a href="#" className={styles['post-email-button']} onClick={()=>{
            this.handleEmail(data.email);
          }} >
            Send Email
          </a>
          <hr className={styles.divider}/>
        </div>
      );
    })
  }
}

function mapStateToProps(state, ownProps) {
  return {
    customerData: getCustomers(state),
    showAddData: state.customer.showAddData,
    letter : ownProps.params.letter
  };
}

export default connect(mapStateToProps)(CustomerListPage);
