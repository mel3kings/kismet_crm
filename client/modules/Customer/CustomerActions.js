import callApi from '../../util/apiCaller';

export const LIST_CUSTOMER = 'LIST_CUSTOMER';
export const ADD_CUSTOMER = 'ADD_CUSTOMER';
export const TOGGLE_ADD_CUSTOMER = 'TOGGLER';
export const DELETE_CUSTOMER = 'DELETE_CUSTOMER';

export function toggleAddCustomer() {
  return {
    type: TOGGLE_ADD_CUSTOMER,
  }
}

export function listCustomers(customers) {
  return {
    type: LIST_CUSTOMER,
    customers
  }
}

export function fetchCustomers() {
  return (dispatch) => {
    return callApi('customers').then(res => {
      dispatch(listCustomers(res.customers));
    });
  };
}

export function addCustomerAction(customer) {
  return {
    type: ADD_CUSTOMER,
    customer
  }
}

export function addCustomer(customer) {
  console.log("trying to add customer");
  return (dispatch) => {
    return callApi('addCustomer', 'post', {
      customer: {
        title: customer.title,
        firstName: customer.firstName,
        lastName: customer.lastName,
        email: customer.email,
        telephone: customer.telephone,
        car: customer.car
      },
    }).then(res => dispatch(addCustomerAction(res.customer)));
  }
}

export function deleteCustomerAction(email) {
  return {
    type: DELETE_CUSTOMER,
    email
  }
}

export function deleteCustomer(email) {
  return (dispatch) => {
    return callApi('deleteCustomer', 'post', {
      customer:{
        email: email
      }
    }).then(res => dispatch(deleteCustomerAction()));
  }
}
