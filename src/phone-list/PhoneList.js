import React from 'react';
import PropTypes from 'prop-types';
import Phone from './Phone';
import PhoneSearch from './PhoneSearch';

const PhoneList = ({phones, searchOptions}) => {
  const phoneList = phones.map((phone) =>
    <Phone {...phone} key={phone.id} />
  );

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <PhoneSearch {...searchOptions} />
        </div>
        <div className="col-md-10">
          <ul className="phones">
            {phoneList}
          </ul>
        </div>
      </div>
    </div>
    );
}

PhoneList.propTypes = {
  phones: PropTypes.arrayOf(
    PropTypes.shape({
      imageUrl: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      snippet: PropTypes.string.isRequired
    })).isRequired
}

export default PhoneList;