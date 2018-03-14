import React from 'react';
import { connect } from 'react-redux';
import {onSetAuthUser} from '../../Actions';
import {bindActionCreators} from 'redux';

const withAuthentication = (Component) => {
  class WithAuthentication extends React.Component {
    componentDidMount() {
      this.props.onSetAuthUser();
    }

    render() {
      return (
        <Component {...this.props} />
      );
    }
  }

  // const mapDispatchToProps = (dispatch) => ({
  //   onSetAuthUser: onSetAuthUser,
  // });

  function mapDispatchToProps(dispatch){
    return bindActionCreators({
      onSetAuthUser:onSetAuthUser,
    },dispatch);
  }

  function mapStateToProps(state) {
    return{
      session: state.session
    }
  }
  
  
  return connect(mapStateToProps, mapDispatchToProps)(WithAuthentication);
  //return WithAuthentication;
}

export default withAuthentication;