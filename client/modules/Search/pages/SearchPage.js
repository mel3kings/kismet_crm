import React from 'react';
import SearchForm from './SearchForm';
import {searchCustomerAction} from "../SearchActions";
import {connect} from "react-redux";
import _ from 'lodash';
import styles from './SearchForm.css';

class SearchPage extends React.Component {
  handleSearch = (values) => {
    this.props.dispatch(searchCustomerAction(values.search));
  };


  render() {
    return <div>
      <h1>Search</h1>
      <SearchForm onSubmit={this.handleSearch}/>
      {this.props.data && <div>
        <h2>Search Results </h2> <br/>{this.renderResults()}</div>
      }

    </div>;
  }

  renderResults() {
    return _.map(this.props.data, data => {
      return (
        <div>
          <p className={styles['customer-name']}>{data.title} {data.firstName} {data.lastName}</p>
          <p className={styles['customer-desc']}>Email: {data.email}
            <br/> Telephone: {data.telephone}
            <br/> Date Added: {new Date(data.dateAdded).toLocaleString()}
          </p>
          <hr className={styles.divider}/>
        </div>
      );
    })
  }

}

function mapStateToProps(state, ownProps) {
  return {
    data: state.search.data.customers
  };
}

export default connect(mapStateToProps)(SearchPage);


