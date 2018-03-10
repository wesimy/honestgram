import React, { Component } from 'react';
import HomeSlideShow from '../../components/homeSlideshow/HomeSlideShow';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {onSetAuthUser} from '../../Actions';
//import withAuthentication from '../../components/session/withAuthentication';

class Home extends Component {
    
    constructor(props){
        super(props);
        
    }
    componentDidMount(){
        this.props.onSetAuthUser();
    }
    render() {
        return (
            <div className="app-page">
                <HomeSlideShow history={this.props.history}/>
                <div id="spread"></div>
            </div>
        );
    }
}


function mapDispatchToProps(dispatch){
  return bindActionCreators({
    onSetAuthUser:onSetAuthUser,
  },dispatch);
}

// function mapStateToProps(state) {
//   return{
//       user: state.user
//   }
// }
export default connect(null,mapDispatchToProps)(Home);

//export default Home;
