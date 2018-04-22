import React from 'react';
import PropTypes from 'prop-types';
import PhoneThumbs from './PhoneThumbs';
import PhoneSpecs from './PhoneSpecs';

const PhoneDetails = ({name, description, currentImage, onImageChange, images, ...props}) => {
  const img = currentImage ? currentImage : images[0];
  return (
    <React.Fragment>
      <div className='phone-images'>
        {
          <img src={img} className='selected' alt={name} />
        }
      </div>
      <h1>{name}</h1>
      <p>{description}</p>

      <PhoneThumbs images={images} onImageChange={onImageChange} />
      <h2>{this.props}</h2>
      <PhoneSpecs {...props} />
    </React.Fragment>
    );
}

PhoneDetails.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  currentImage: PropTypes.string.isRequired,
  onImageChange: PropTypes.func.isRequired,
  images: PropTypes.array.isRequired
}

export default PhoneDetails;