import {
  REQUEST_PHONES,
  RECEIVE_PHONES,
  QUERY_PHONES,
  REORDER_PHONES
} from './actions';

function phoneListReducer(state = {
    isFetching: false,
    phones: [],
    query: '',
    order: ''
  }, action){
  switch(action.type){
    case REQUEST_PHONES:
      return Object.assign({}, state, {
        isFetching: true
      });

    case RECEIVE_PHONES:
      return Object.assign({}, state, {
        isFetching: false,
        phones: action.phones,
        lastUpdated: action.receivedAt
      });

    case QUERY_PHONES:
      return Object.assign({}, state, {
        query: action.query
      });

    case REORDER_PHONES:
      return Object.assign({}, state, {
        order: action.order
      });

    default:
      return state;
  }
}

export default phoneListReducer;