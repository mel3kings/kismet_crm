import callApi from '../../util/apiCaller';

export const LIST_CUSTOMER = 'LIST_CUSTOMER';
export const ADD_CUSTOMER = 'ADD_CUSTOMER';

export function listCustomers(customers){
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
