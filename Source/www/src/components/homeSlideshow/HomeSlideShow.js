import React, { Component } from 'react';
import TypeIt from 'typeit';
import FormGetStarted from '../formGetStarted/FormGetStarted';
import * as Spread from '../../components/spread/Spread';
import logo from '../../assets/images/paper-plane.svg';
import speach from '../../assets/images/paper-speach.svg';
import UIkit from 'uikit';

import './homeSlideShow.scss';

class HomeSlideShow extends Component {
    constructor() {
        super();
        this.state = {currentSlide: 0, sliding: false};
    }
    componentDidMount() {
        document.querySelector('#home-slide-show').addEventListener('beforeitemshow',(event)=>{
          if(event.detail[0].index !== this.state.currentSlide){
            Spread.start(event.target.getAttribute('data-background'));
            this.setState({
                currentSlide: event.detail[0].index,
                sliding: true
              });
              setTimeout(()=>{
                this.setState({
                              sliding: false
                            });
            },2000);
          }
        });
        // typit
        new TypeIt('.type-it', {
            strings: ['a twat', 'a sweatheart', 'a bumm', 'a cool guy', 'an idiot', 'a dick'],
            loop: true,
            nextStringDelay: 4000,
            breakLines: false,
       });
    }
    wheel(e) {
        if(!this.state.sliding){
            if(e.deltaY < 0 & this.state.currentSlide > 0){
              
                UIkit.slideshow(document.querySelector('#home-slide-show')).show(this.state.currentSlide - 1);
            }
            else if(e.deltaY > 0 & this.state.currentSlide < 4){
               
                UIkit.slideshow(document.querySelector('#home-slide-show')).show(this.state.currentSlide + 1);
            }
            
        }
        
        
      }
    render() {
        return (
            <div id="home-slide-show" className="home-slide-show uk-position-relative uk-visible-toggle" data-uk-slideshow="animation: fade"  onWheel = {(e) => this.wheel(e)}>
                <ul className="uk-slideshow-items" data-uk-height-viewport>
                    <li className="home-intro" data-background="#f6f6f6">
                        <div className="uk-width-4-5@l uk-width-3-5@xl uk-position-center uk-position-small uk-text-center uk-transition-fade">
                        <div className="uk-container">
                        <div className="brand">
                                
                                <h1 title="honestgram" data-uk-slideshow-parallax="y: -60,60">honestgram<img src={logo} alt="honestgram logo"/></h1>
                            </div>
                            <p data-uk-slideshow-parallax="y: -50,50">speak your mind, stop the gossips</p>
                            
                                <div className="uk-flex-center uk-grid-collapse" data-uk-grid>
                                    <div className="uk-width-1-1 uk-width-1-3@m uk-width-1-4@xl">
                                    <FormGetStarted/>
                                    </div>
                                </div>
                
                        </div>
                            
                        </div>
                    </li>
                    <li className="uk-light home-slide" data-background="#9c342e">
                        <div className="uk-width-4-5@l uk-width-3-5@xl uk-position-center uk-position-small uk-text-center uk-transition-fade">
                        <div className="uk-container">
                        
                        <h2><b>honestgram</b> is a place for everyone to tell you<br/>what<span className="type-it"></span>you are</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                       
                        </div>
                        </div>
                    </li>
                    <li className="uk-light home-slide" data-background="#fad251">
                        <div className="uk-width-4-5@l uk-width-3-5@xl uk-position-center uk-position-small uk-text-center uk-transition-fade">
                        <div className="uk-container">
                            <div className="home-slide-02">
                            <img className="img-speach" src={speach} alt="honestgram"/>
                            </div>
                        </div>
                        </div>
                    </li>
                    <li className="home-intro" data-background="#f6f6f6">
                        <div className="uk-width-4-5@l uk-width-3-5@xl uk-position-center uk-position-small uk-text-center uk-transition-fade">
                        <div className="uk-container">
                            <h2  data-uk-slideshow-parallax="y: -60,60">Lets Get Started</h2>
                            <p  data-uk-slideshow-parallax="y: -50,50">Lorem ipsum dolor sit amet.</p>
                            <FormGetStarted/>
                        </div>
                        </div>
                    </li>
                </ul>
                <ul className="uk-slideshow-nav uk-dotnav uk-dotnav-vertical uk-position-center-left uk-position-small "></ul>
                
            </div>
        );
    }
}
export default HomeSlideShow;

