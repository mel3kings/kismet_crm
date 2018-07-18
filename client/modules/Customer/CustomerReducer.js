import {LIST_CUSTOMER, ADD_CUSTOMER, TOGGLE_ADD_CUSTOMER} from "./CustomerActions";

const initialState = {showAddData: false, data: []};

const CustomerReducer = (state = initialState, action) => {
  console.log(action.type);
  console.log(action.customers);
  console.log(action.customer);

  switch (action.type) {
    case LIST_CUSTOMER:
      return {
        data: action.customers
      };

    case ADD_CUSTOMER:
      return{
        ...state,
        data: [action.customer, ...state.data],
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
