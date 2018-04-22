import React from 'react';
import PhoneDetails from '../PhoneDetails';
import { connect } from 'react-redux';
import { fetchPhoneDetails, updateCurrentImage } from '../../core/actions';

class PhoneDetailsContainer extends React.Component{
  componentDidMount(){
    const phoneId = this.props.match.params.id;
    const url = '/phones/' + phoneId + '.json';
    this.props.dispatch(fetchPhoneDetails(url));
  }

  render(){
    return(
      <React.Fragment>
        {!this.props.isFetching &&
          <PhoneDetails {...this.props} />}
      </React.Fragment>
      );
  }
}

const mapStateToProps = (state) => {
  return {
    name: state.phoneDetails.name,
    description: state.phoneDetails.description,
    currentImage: state.image,
    images: state.phoneDetails.images,
    specs: state.phoneDetails,
    isFetching: state.isFetching
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onImageChange: (image) => {
      dispatch(updateCurrentImage(image));
    },
    dispatch
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)(PhoneDetailsContainer);