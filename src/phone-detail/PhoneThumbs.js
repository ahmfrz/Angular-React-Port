import React from 'react';
import PropTypes from 'prop-types';

const PhoneThumbs = ({images, onImageChange}) => {
  return (
  <ul className="phone-thumbs">
    {
      images.map(image =>
        <li key={image}>
          <img src={image}
            onClick={(e) => onImageChange(e.target.src)}
            alt={image}
            style={{cursor: 'pointer'}} />
        </li>
      )
    }
  </ul>
  );
}

PhoneThumbs.propTypes = {
  images: PropTypes.array.isRequired,
  onImageChange: PropTypes.func.isRequired,
}

export default PhoneThumbs;