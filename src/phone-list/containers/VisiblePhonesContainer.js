import React from 'react';
import { connect } from 'react-redux';
import {
  fetchPhonesIfNeeded,
  queryPhones,
  reOrderPhones,
  filterPhones
 } from '../../core/actions';
import PhoneList from '../PhoneList';

function compareItems(a, b){
  if(a < b){
    return -1;
  }

  if(a > b){
    return 1;
  }

  return 0;
}

function getPhones(phones = [], query = '', order = ''){
  query = query.toLocaleLowerCase();
  const filtered = phones.filter(phone => phone.name.toLocaleLowerCase().indexOf(query) > -1 || phone.snippet.toLocaleLowerCase().indexOf(query) > -1);
  if(order === 'name'){
    filtered.sort((a, b) => compareItems(a.name.toLocaleLowerCase(), b.name.toLocaleLowerCase()));
  }
  else{
    filtered.sort((a, b) => compareItems(a.age, b.age));
  }

  return filtered;
}

const mapStateToProps = (state, ownProps) => {
  return {
    phones: getPhones(state.phones, state.query, state.order),
    query: state.query,
    orderProp: state.order
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onNewQuery: query => {
      dispatch(queryPhones(query));

      // If the query is empty then we need all phones
      // otherwise no need to retrieve the list every time
      // a new query is applied
      query.trim() === '' ?
        dispatch(fetchPhonesIfNeeded('phones/phones.json')) :
        dispatch(filterPhones());
    },
    onNewOrder: order => {
      dispatch(reOrderPhones(order))

      // Calling the API just to reorder is not a good idea
      // dispatch(fetchPhonesIfNeeded('phones/phones.json'));
      dispatch(filterPhones());
    },
    fetchPhones: url => {
      dispatch(fetchPhonesIfNeeded(url));
    }
  }
}

class VisiblePhonesContainer extends React.Component{
  componentDidMount(){
    this.props.fetchPhones('phones/phones.json');
  }

  render(){
    return (
      <React.Fragment>
        {!this.props.isFetching &&
          <PhoneList {...this.props} />}
      </React.Fragment>
      );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)(VisiblePhonesContainer);