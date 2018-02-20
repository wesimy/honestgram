import React, { Component } from 'react';
import './homeSlideShow.scss';
import FormGetStarted from '../formGetStarted/FormGetStarted';
import * as Spread from '../../components/spread/Spread';

class HomeSlideShow extends Component {
    constructor() {
        super();
        this.state = {currentSlide: 0};
    }
    componentDidMount() {
        document.querySelector('#home-slide-show').addEventListener('beforeitemshow',(event)=>{
          if(event.detail[0].index !== this.state.currentSlide){
            Spread.start(event.target.getAttribute('data-background'));
            this.setState({
                currentSlide: event.detail[0].index
              });
          }
        });
    }
    render() {
        return (
            <div id="home-slide-show" className="home-slide-show uk-position-relative uk-visible-toggle" data-uk-slideshow="animation: fade" >
                <ul className="uk-slideshow-items" data-uk-height-viewport>
                    <li data-background="#fff">
                        <div className="uk-position-center uk-position-small uk-text-center uk-transition-fade">
                            <div className="brand">
                                <h1 title="honestgram" data-uk-slideshow-parallax="y: -60,60">honestgram</h1>
                            </div>
                            <p data-uk-slideshow-parallax="y: -50,50">speak your mind, stop the gossips</p>
                            <section>
                            <FormGetStarted/>
                            </section>
                        </div>
                    </li>
                    <li data-background="#9c342e">
                        <div className="uk-position-center uk-position-small uk-text-center uk-transition-fade">
                            <h2 data-uk-slideshow-parallax="y: -60,60">Heading</h2>
                            <p  data-uk-slideshow-parallax="y: -50,50">Lorem ipsum dolor sit amet.</p>
                        </div>
                    </li>
                    <li data-background="#fad251">
                        <div className="uk-position-center uk-position-small uk-text-center uk-transition-fade">
                            <h2  data-uk-slideshow-parallax="y: -60,60">Heading</h2>
                            <p  data-uk-slideshow-parallax="y: -50,50">Lorem ipsum dolor sit amet.</p>
                        </div>
                    </li>
                    <li data-background="#fff">
                        <div className="uk-position-center uk-position-small uk-text-center uk-transition-fade">
                            <h2  data-uk-slideshow-parallax="y: -60,60">Lets Get Started</h2>
                            <p  data-uk-slideshow-parallax="y: -50,50">Lorem ipsum dolor sit amet.</p>
                            <FormGetStarted/>
                        </div>
                    </li>
                </ul>
                <ul className="uk-slideshow-nav uk-dotnav uk-dotnav-vertical uk-position-center-left uk-position-small "></ul>
                
            </div>
        );
    }
}
export default HomeSlideShow;

