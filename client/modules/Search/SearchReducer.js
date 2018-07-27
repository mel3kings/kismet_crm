import SEARCH_ACTION from './SearchActions';

const initialState = {searchResults: []};

const SearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_ACTION:
      return {
        data: state.searchResults
      };
    default:
      return state;

  }
};

export default SearchReducer;
