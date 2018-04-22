import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Phone = ({imageUrl, name, id, snippet}) => {
  return (
    <li className="thumbnail phone-list-item">
      <Link to={"/phones/" + id}>
        <img className="thumb" src={imageUrl} alt={name} />
      </Link>
      <Link to={"/phones/" + id}>
        {name}
      </Link>
      <p>
        {snippet}
      </p>
    </li>
    );
}

Phone.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  snippet: PropTypes.string.isRequired
}

export default Phone;