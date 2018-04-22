import fetch from 'cross-fetch';

export const REQUEST_PHONES = 'REQUEST_PHONES';
function requestPhones(){
  return {
    type: REQUEST_PHONES
  }
}

export const RECEIVE_PHONES = 'RECEIVE_PHONES';
function receivePhones(phones){
  return {
    type: RECEIVE_PHONES,
    phones: phones,
    receivedAt: Date.now()
  }
}

export const QUERY_PHONES = 'QUERY_PHONES';
export function queryPhones(query){
  return {
    type: QUERY_PHONES,
    query
  }
}

export const REORDER_PHONES = 'REORDER_PHONES';
export function reOrderPhones(order){
  return {
    type: REORDER_PHONES,
    order
  }
}

// Thunk middleware
function fetchPhones(phonesUrl){
  return function(dispatch){
    // Inform that API call is starting
    dispatch(requestPhones);

    return fetch(phonesUrl)
      .then(response => response.json(),
            error => console.log('Error occurred', error))
      .then(phones => dispatch(receivePhones(phones)));
  }
}

function shouldFetchPhones(state){
  if(state.isFetching){
    return false;
  }

  return true;
}

export function fetchPhonesIfNeeded(phonesUrl){
  return (dispatch, getState) => {
    if(shouldFetchPhones(getState())){
      return dispatch(fetchPhones(phonesUrl));
    }
    else{
      return Promise.resolve();
    }
  }
}