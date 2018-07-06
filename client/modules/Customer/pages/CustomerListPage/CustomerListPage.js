import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';


class CustomerListPage extends Component {
  componentDidMount() {

  }

  render() {
    return (
      <div>
        HEASDASD
      </div>
    );
  }
}

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
  };
}

export default connect(mapStateToProps)(CustomerListPage);
