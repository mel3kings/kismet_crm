import {Field, reduxForm} from 'redux-form';
import React from 'react'
import styles from './CustomerListPage.css';

let CustomerForm = props => {
  const {handleSubmit} = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field placeholder="Title" className={styles['form-field-short']} name="title" component="input" type="text"/>
      </div>
      <div>
        <Field placeholder="First Name" className={styles['form-field']} name="firstName" component="input" type="text"/>
      </div>
      <div>
        <Field placeholder="Last Name" className={styles['form-field']} name="lastName" component="input" type="text"/>
      </div>
      <div>
        <Field placeholder="Telephone" className={styles['form-field']} name="telephone" component="input" type="text"/>
      </div>
      <div>
        <Field placeholder="Email" className={styles['form-field']} name="email" component="input" type="text"/>
      </div>
      <div>
        <Field placeholder="Car Details" className={styles['form-field']} name="car" component="textarea" type="text"/>
      </div>
      <button className={styles['post-submit-button']} type="submit">Submit</button>
    </form>
  )
};


CustomerForm = reduxForm({
  // a unique name for the form
  form: 'customer'
})(CustomerForm)

export default CustomerForm
