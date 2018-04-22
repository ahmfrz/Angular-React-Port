import React from 'react';
import PropTypes from 'prop-types';

const PhoneSearch = ({query, orderProp, onNewQuery, onNewOrder}) => {
  return (
    <React.Fragment>
      <p>Search:
        <input value={query} onChange={(e) => {onNewQuery(e.target.value)}} />
      </p>

      <p>
        Sort by:
        <select value={orderProp} onChange={(e) => {onNewOrder(e.target.value)}}>
          <option value="name">Alphabetical</option>
          <option value="age">Newest</option>
        </select>
      </p>
    </React.Fragment>
    );
}

PhoneSearch.propTypes = {
  query: PropTypes.string.isRequired,
  orderProp: PropTypes.string.isRequired,
  onNewOrder: PropTypes.func.isRequired,
  onNewQuery: PropTypes.func.isRequired
}

export default PhoneSearch;