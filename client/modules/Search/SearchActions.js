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
    return callApi("/search", "post", {
      searchAction: {
        term: searchValue
      }
    }).then(res => dispatch(searchCustomer(res))).error(err=>{console.log(err);});
  }
}
