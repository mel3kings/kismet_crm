import {SEARCH_ACTION} from './SearchActions';

const initialState = {data: []};

const SearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_ACTION:
      return {
        data: action.searchResults
      };
    default:
      return state;

  }
};

export default SearchReducer;
