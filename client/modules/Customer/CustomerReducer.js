import {LIST_CUSTOMER, ADD_CUSTOMER} from "./CustomerActions";

const initialState = {data: []};

const CustomerReducer = (state = initialState, action) => {
  console.log('returning2');
    switch (action.type) {
      case LIST_CUSTOMER:
        console.log("listing");
        return {
          data: action.customers
        };

      default:
        return state;
    }
};

export const getCustomers = state => state.customer.data;
export default CustomerReducer;
