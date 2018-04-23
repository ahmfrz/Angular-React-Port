import {
  REQUEST_PHONES,
  RECEIVE_PHONES,
  QUERY_PHONES,
  REORDER_PHONES,
  RECEIVE_PHONE_DETAILS,
  UPDATE_CURRENT_IMAGE,
  FILTER_PHONES
} from './actions';

const initialPhoneDetails =
  {
    name: '',
    description: '',
    currentImage: '',
    images: [],
    specs: {
      availability: [],
      battery: {},
      storage: {},
      connectivity: {},
      android: {},
      sizeAndWeight: {dimensions: []},
      display: {},
      hardware: {},
      camera: {features:[]}
      }
  }

const initialState = {
  isFetching: false,
  phones: [],
  query: '',
  order: 'name',
  image: '',
  phoneDetails: initialPhoneDetails
  }

function rootReducer(state = initialState, action){
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

    case RECEIVE_PHONE_DETAILS:
      return Object.assign({}, state, {
        phoneDetails: action.phoneDetails
      });

    case UPDATE_CURRENT_IMAGE:
      return Object.assign({}, state, {
        image: action.image
      });

    case FILTER_PHONES:
      // Simply return the same phones, filtering logic is in
      // VisiblePhonesContainer
      return Object.assign({}, state, {
        phones: [...state.phones]
      });

    default:
      return state;
  }
}

export default rootReducer;