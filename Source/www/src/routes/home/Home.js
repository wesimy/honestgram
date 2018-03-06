import React, { Component } from 'react';
import HomeSlideShow from '../../components/homeSlideshow/HomeSlideShow';
import { withRouter} from 'react-router-dom';
class Home extends Component {
    constructor(props){
        super(props);
        
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
export default Home;
