import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchCustomers} from "../../CustomerActions";
import {getCustomers} from "../../CustomerReducer";
import _ from 'lodash';
class CustomerListPage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchCustomers());
  }

  render() {
    return (
      <div>
        <div className="listView">
          test7
          {this.renderItem()}
        </div>
      </div>
    );
  }


  renderItem() {
    return _.map(this.props.customerData, data=>{
      return (
        <div>Name is: {data.firstName}
        <br/> Last name is: {data.lastName}
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
