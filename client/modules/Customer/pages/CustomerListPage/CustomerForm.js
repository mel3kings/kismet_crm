import {Field, reduxForm} from 'redux-form';
import React from 'react'
import styles from './CustomerListPage.css';


const validate = values => {
  const errors = {};
  if (!values.title) {
    errors.title = 'Title is Required';
  }
  if (!values.firstName) {
    errors.firstName = "First Name is Required";
  }
  if (!values.lastName) {
    errors.lastName = "Last Name is Required";
  }
  if (!values.telephone) {
    errors.telephone = "Telephone is Required";
  }
  if (!values.email) {
    errors.email = "Email is Required";
  }

  return errors;
};

const renderField = ({input, placeholder, type, className, name, meta: {touched, error, warning}}) => (
  <div>
    <div>
      {touched && ((error && <span className={styles['error']}>{error}</span>))}
      <br/>
      <input {...input} placeholder={placeholder} type={type} name={name} className={className}/>
    </div>
  </div>
);

let CustomerForm = props => {
  const {handleSubmit, reset,submitting, pristine} = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field placeholder="Title" className={styles['form-field-short']} name="title" component={renderField}
               type="text"/>
      </div>
      <div>
        <Field placeholder="First Name" className={styles['form-field']} name="firstName" component={renderField}
               type="text"/>
      </div>
      <div>
        <Field placeholder="Last Name" className={styles['form-field']} name="lastName" component={renderField}
               type="text"/>
      </div>
      <div>
        <Field placeholder="Telephone" className={styles['form-field']} name="telephone" component={renderField}
               type="text"/>
      </div>
      <div>
        <Field placeholder="Email" className={styles['form-field']} name="email" component={renderField} type="text"/>
      </div>
      <div>
        <Field placeholder="Car Details" className={styles['form-field']} name="car" component="textarea" type="textarea"/>
      </div>
      <button className={styles['post-submit-button']} type="submit">Submit</button>
      <button className={styles['post-submit-button']} type="button" disabled={pristine || submitting} onClick={reset}> Clear </button>
    </form>
  )
};

CustomerForm = reduxForm({
  form: 'customer',
  validate
})(CustomerForm)

export default CustomerForm
