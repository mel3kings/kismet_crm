import React from 'react';
import {reduxForm, Field} from "redux-form";
import styles from './SearchForm.css';

const renderSearchField = ({input, placeholder, type, className, name}) => (
  <div>
    <input {...input} placeholder={placeholder} type={type} name={name} className={className}/>
  </div>
);

let SearchForm = props => {
  const {handleSubmit} = props;
  return (<form onSubmit={handleSubmit}>
    <div>
      <Field placeholder="Search Customer" className={styles['form-field']} name="search"  component={renderSearchField}
             type="text"/>
      <button className={styles['post-submit-button']} type="submit">Submit</button>
    </div>
  </form>)
};

SearchForm = reduxForm({
  form: 'search'
})(SearchForm);

export default SearchForm
