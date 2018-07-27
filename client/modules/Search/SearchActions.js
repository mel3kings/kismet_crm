import callApi from '../../util/apiCaller';

export const SEARCH_ACTION = 'search_action';

export function searchCustomer(searchResponse) {
  return {
    type: SEARCH_ACTION,
    searchResponse
  }
}


export function searchCustomerAction(searchValue) {
  return (dispatch) => {
    return callApi("/search", "get", {
      searchAction: {
        term: searchValue
      }
    }).then(res => dispatch(searchCustomer(res.result)));
  }
}
