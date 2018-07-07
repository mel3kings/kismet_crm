import {LIST_CUSTOMER, ADD_CUSTOMER, TOGGLE_ADD_CUSTOMER} from "./CustomerActions";

const initialState = {showAddData: false, data: []};

const CustomerReducer = (state = initialState, action) => {
  switch (action.type) {
    case LIST_CUSTOMER:
      return {
        data: action.customers
      };

    case ADD_CUSTOMER:
      return{
        ...state,
        data: action.customers
      };

    case TOGGLE_ADD_CUSTOMER:
      return{
        ...state,
        showAddData: !state.showAddData
      };

    default:
      return state;
  }
};

export const getCustomers = state => state.customer.data;
export default CustomerReducer;
