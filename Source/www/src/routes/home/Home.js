import React, { Component } from 'react';
import HomeSlideShow from '../../components/homeSlideshow/HomeSlideShow';

class Home extends Component {
    render() {
        return (
            <div className="app-page">
                <HomeSlideShow/>
                <div id="spread"></div>
            </div>
        );
    }
}
export default Home;
