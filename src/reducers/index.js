import {RECEIVED_BEERS, SEARCHED_BEERS} from "../actions/index";

const initialState = {
  beers: [],
  loading: false,
  messages: []
};

export function beersReducer(state = initialState, action) {
  switch(action.type) {
    case SEARCHED_BEERS:
      return {
        ...state,
        loading: true,
        messages: []
      };
    case SEARCHED_BEERS_ERROR:
      return {
        ...state,
        loading: true,
        messages: [{type: 'error', text: action.payload}]
      };
    case RECEIVED_BEERS:
      return {
        ...state,
        beers: action.payload,
        loading: false
      };
    default: return state;
  }
}

export default beersReducer;
