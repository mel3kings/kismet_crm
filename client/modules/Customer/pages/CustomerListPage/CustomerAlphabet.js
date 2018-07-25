import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

const Letters = props => {
  const {handleSubmit} = props;
  return (
    <div>
      <Link to={`/customers/A`}>
        A
      </Link>| <Link to={`/customers/B`}>
      B
    </Link>
    </div>
  )
};

export default connect(null)(Letters)

