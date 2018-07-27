import React from 'react';
import SearchForm from './SearchForm';
import {searchCustomerAction} from "../SearchActions";
import {connect} from "react-redux";

class SearchPage extends React.Component {
  handleSearch = (values) => {
    this.props.dispatch(searchCustomerAction(values.search));
  };


  render() {
    return <div>
      <h1>Search</h1>
      <SearchForm onSubmit={this.handleSearch}/>
    </div>;
  }
}

function mapStateToProps(state, ownProps) {
  return {
    data: state.searchResults
  };
}

export default connect(mapStateToProps)(SearchPage);


