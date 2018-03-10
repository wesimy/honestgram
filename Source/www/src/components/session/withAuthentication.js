import React from 'react';
import { connect } from 'react-redux';
import {onSetAuthUser} from '../../Actions';

const withAuthentication = (Component) => {
  class WithAuthentication extends React.Component {
    componentDidMount() {
    //this.props.onSetAuthUser();
    console.log('HOC');
    }

    render() {
      return (
        <Component />
      );
    }
  }

  const mapDispatchToProps = (dispatch) => ({
    onSetAuthUser: onSetAuthUser,
  });
  
  //return connect(null, mapDispatchToProps)(WithAuthentication);
  return WithAuthentication;
}

export default withAuthentication;