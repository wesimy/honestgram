import React, { Component } from 'react';
import UIkit from 'uikit';

class Home extends Component {

    constructor() {
        super();




    }
    componentDidMount() {
        //console.log(this.refs);
    }

    render() {

        return (
            <div className="app-page">
                <div className="uk-position-relative uk-visible-toggle" data-uk-slideshow="animation: fade">
                    <ul className="uk-slideshow-items" data-uk-height-viewport="offset-top: true;">
                        <li>
                            <div className="uk-position-center uk-position-small uk-text-center ">
                                
                                <h1>honestgram</h1>
                <p >Lorem ipsum dolor sit amet.</p>
                            </div>
                        </li>
                        <li>
                            <div className="uk-position-center uk-position-small uk-text-center ">
                            <h2>Heading</h2>
                <p >Lorem ipsum dolor sit amet.</p>
                            </div>
                        </li>
                        <li>
                            <div className="uk-position-center uk-position-small uk-text-center ">
                            <h2 >Heading</h2>
                <p >Lorem ipsum dolor sit amet.</p>
                            </div>
                        </li>
                    </ul>
                      <ul className="uk-slideshow-nav uk-dotnav uk-dotnav-vertical uk-position-center-left uk-position-small "></ul>
                </div>
            </div>
        );
    }
}

export default Home;
