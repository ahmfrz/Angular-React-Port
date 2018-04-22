import React from 'react';
import { connect } from 'react-redux';
import {
  fetchPhonesIfNeeded,
  queryPhones,
  reOrderPhones
 } from '../../core/actions';
import PhoneList from '../PhoneList';

function getPhones(phones = [], query = '', order = ''){
  query = query.toLocaleLowerCase();
  const filtered = phones.filter(phone => phone.name.toLocaleLowerCase().indexOf(query) > -1 || phone.snippet.toLocaleLowerCase().indexOf(query) > -1);
  if(order === 'name'){
    filtered.sort((a, b) => a.name < b.name);
  }
  else{
    filtered.sort((a, b) => a.age <  b.age);
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
      dispatch(fetchPhonesIfNeeded('phones/phones.json'));
    },
    onNewOrder: order => {
      dispatch(reOrderPhones(order))
      dispatch(fetchPhonesIfNeeded('phones/phones.json'));
    },
    dispatch
  }
}

class VisiblePhones extends React.Component{
  componentDidMount(){
    this.props.dispatch(fetchPhonesIfNeeded('phones/phones.json'));
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
  mapDispatchToProps)(VisiblePhones);