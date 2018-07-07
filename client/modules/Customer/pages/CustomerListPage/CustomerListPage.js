import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchCustomers, toggleAddCustomer} from "../../CustomerActions";
import {getCustomers} from "../../CustomerReducer";
import _ from 'lodash';

import styles from './CustomerListPage.css'

class CustomerListPage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchCustomers());
  }

  handleClick = () => {
    this.props.dispatch(toggleAddCustomer());
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
          Add Customer
        </button>
        <br/>
        <div className='test'>
          <div className={styles['form-content']}>
            <h2 className={styles['form-title']}>Add Customer</h2>
            <input className={styles['form-field']} ref="name"/>
            <input className={styles['form-field']} ref="title"/>
            <textarea className={styles['form-field']} ref="content"/>
            <a className={styles['post-submit-button']} href="#" onClick={this.addPost}>Submit</a>
          </div>
        </div>

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
        <div>{data.firstName} {data.lastName}
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
