import callApi from '../../util/apiCaller';

export const SEARCH_ACTION = 'search_action';

export function searchCustomer(searchResults) {
  return {
    type: SEARCH_ACTION,
    searchResults
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
