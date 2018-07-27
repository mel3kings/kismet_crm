import React from 'react';
import {reduxForm} from "redux-form";


const renderSearchField = ({input, placeholder, type, className, name}) => (
  <div>
    <input {...input} placeholder={placeholder} type={type} name={name} className={className}/>
  </div>
);

let SearchForm = props => {
  const {handleSubmit} = props;
  return (<form onSubmit={handleSubmit}>
    <div>
      <Field placeholder="Search Customer" className="test" name="search" component={renderSearchField}
             type="text"/>
    </div>
  </form>)
};

SearchForm = reduxForm({
  form: 'search'
})(SearchForm)

export default SearchForm
