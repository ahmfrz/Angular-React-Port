import React from 'react';
import PropTypes from 'prop-types';

const Phone = ({imageUrl, name, id, snippet}) => {
  return (
    <li className="thumbnail phone-list-item">
      <a href="#">
        <img className="thumb" src={imageUrl} alt={name} />
      </a>
      <a href="">
        {name}
      </a>
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