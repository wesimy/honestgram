import React, { Component } from 'react';
import TypeIt from 'typeit';
import FormGetStarted from '../formGetStarted/FormGetStarted';
import * as Spread from '../../components/spread/Spread';

import UIkit from 'uikit';
import './homeSlideShow.scss';

import logo from '../../assets/images/paper-plane.svg';
import speach from '../../assets/images/paper-speach.svg';

import p01 from '../../assets/images/P01.svg';
import p02 from '../../assets/images/P02.svg';
import p03 from '../../assets/images/P03.svg';
import p04 from '../../assets/images/P04.svg';
import p05 from '../../assets/images/P05.svg';
import p06 from '../../assets/images/P06.svg';

import origramiFacebook from '../../assets/images/F.png';
import origramiInstagram from '../../assets/images/Insta.png';
import origramiYoutube from '../../assets/images/Y.png';
import origramiPinterest from '../../assets/images/P.png';
import origramiLinkedIn from '../../assets/images/In.png';
import origramiTumb from '../../assets/images/Tumb.png';
import origramiGoogle from '../../assets/images/G.png';
import origramiTwitter from '../../assets/images/Twitter.png';

class HomeSlideShow extends Component {
    constructor() {
        super();
        this.state = { currentSlide: 0, sliding: false, subslides: false };
    }
    componentDidMount() {
        document.querySelector('#home-slide-show').addEventListener('beforeitemshow', (event) => {
            if (event.detail[0].index !== this.state.currentSlide) {
                Spread.start(event.target.getAttribute('data-background'));
                this.setState({
                    currentSlide: event.detail[0].index,
                    sliding: true
                });
                setTimeout(() => {
                    this.setState({
                        sliding: false
                    });
                }, 2000);
            }
        });
        //document.querySelector('#home-slide-show').off('touchstart mousedown');    
        // var handler = function(e) {
        //     e.preventDefault();
        // }
        //console.log(UIkit.slideshow(document.querySelector('#home-slide-show'),{'pointer-events': false,drag: false}));
        //console.log(document.querySelector('#home-slide-show'));
        //document.querySelector('#home-slide-show').removeEventListener('pointerDown',handler,false);
        //UIkit.slideshow().on('swipeRight');
        
        // UIkit.util.on('afterready.uk.dom', function() {    
        //     function stopDrag() {    
        
        //     }    
        //     setTimeout(stopDrag, 10);    
        //   });   
        // typit
        //     new TypeIt('.type-it', {
        //         strings: ['a twat', 'a sweatheart', 'a bumm', 'a cool guy', 'an idiot', 'a dick'],
        //         loop: true,
        //         nextStringDelay: 4000,
        //         breakLines: false,
        //    });
    }
   
    wheel(e) {
        if (!this.state.sliding) {
            // go up
            //console.log(UIkit.slideshow(document.querySelector('#home-slide-show')).index);


            if (e.deltaY < 0 & this.state.currentSlide > 0) {

                if (document.querySelector('#home-slide-show .home-slide-' + UIkit.slideshow(document.querySelector('#home-slide-show')).index) && document.querySelector('#home-slide-show .home-slide-' + UIkit.slideshow(document.querySelector('#home-slide-show')).index).getAttribute('data-steps')) {
                    let slide = document.querySelector('#home-slide-show .home-slide-' + UIkit.slideshow(document.querySelector('#home-slide-show')).index);
                    let steps = parseInt(document.querySelector('#home-slide-show .home-slide-' + UIkit.slideshow(document.querySelector('#home-slide-show')).index).getAttribute('data-steps'));
                    let step = parseInt(document.querySelector('#home-slide-show .home-slide-' + UIkit.slideshow(document.querySelector('#home-slide-show')).index).getAttribute('data-current-step'));
                    if (step > 1) {

                        slide.setAttribute('data-current-step', step - 1);
                        slide.classList.remove('step-' + step);
                        slide.classList.add('step-' + slide.getAttribute('data-current-step'));

                        this.setState({
                            sliding: true
                        });
                        setTimeout(() => {
                            this.setState({
                                sliding: false
                            });
                        }, 2000);
                    }
                    else {
                        UIkit.slideshow(document.querySelector('#home-slide-show')).show(this.state.currentSlide - 1);
                    }

                }
                else {
                    UIkit.slideshow(document.querySelector('#home-slide-show')).show(this.state.currentSlide - 1);
                }


            }
            // go down
            else if (e.deltaY > 0 & this.state.currentSlide < 4) {
                if (document.querySelector('#home-slide-show .home-slide-' + UIkit.slideshow(document.querySelector('#home-slide-show')).index) && document.querySelector('#home-slide-show .home-slide-' + UIkit.slideshow(document.querySelector('#home-slide-show')).index).getAttribute('data-steps')) {
                    let slide = document.querySelector('#home-slide-show .home-slide-' + UIkit.slideshow(document.querySelector('#home-slide-show')).index);
                    let steps = parseInt(document.querySelector('#home-slide-show .home-slide-' + UIkit.slideshow(document.querySelector('#home-slide-show')).index).getAttribute('data-steps'));
                    let step = parseInt(document.querySelector('#home-slide-show .home-slide-' + UIkit.slideshow(document.querySelector('#home-slide-show')).index).getAttribute('data-current-step'));
                    if (step < steps) {

                        slide.setAttribute('data-current-step', step + 1);
                        slide.classList.remove('step-' + step);
                        slide.classList.add('step-' + slide.getAttribute('data-current-step'));

                        this.setState({
                            sliding: true
                        });
                        setTimeout(() => {
                            this.setState({
                                sliding: false
                            });
                        }, 2000);
                    }
                    else {
                        UIkit.slideshow(document.querySelector('#home-slide-show')).show(this.state.currentSlide + 1);
                    }

                }
                else {
                    UIkit.slideshow(document.querySelector('#home-slide-show')).show(this.state.currentSlide + 1);
                }


            }
        }
    }
    render() {
        return (
            <div id="home-slide-show" className="home-slide-show uk-position-relative uk-visible-toggle" data-uk-slideshow="animation: fade;finite: true" onWheel={(e) => this.wheel(e)}>
                <ul className="uk-slideshow-items" data-uk-height-viewport>
                    <li className="home-intro" data-background="#f6f6f6">
                        <div className="uk-width-4-5@l uk-width-3-5@xl uk-position-center uk-position-small uk-text-center uk-transition-fade">
                            <div className="uk-container">
                                <div className="brand">
                                    <h1 title="honestgram" data-uk-slideshow-parallax="y: -60,60">honestgram<img src={logo} alt="honestgram logo" /></h1>
                                </div>
                                <p data-uk-slideshow-parallax="y: -50,50">speak your mind, stop the gossips</p>
                                <div className="uk-flex-center uk-grid-collapse" data-uk-grid>
                                    <div className="uk-width-1-1 uk-width-1-3@m uk-width-1-4@xl">
                                        <FormGetStarted />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className="uk-light home-slide" data-background="#9c342e">
                        <div className="uk-width-4-5@l uk-width-3-5@xl uk-position-center uk-position-small uk-text-center uk-transition-fade">
                            <div className="uk-container">
                                <div className="home-slide-1">
                                    <img className="img-plane" src={logo} alt="honestgram" />
                                    <h2><b>honestgram</b> is a place for everyone to tell you<br />what<span className="type-it"></span>you are</h2>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="uk-light home-slide" data-background="#fad251">
                        <div className="uk-width-4-5@l uk-width-3-5@xl uk-position-center uk-position-small uk-text-center uk-transition-fade">
                            <div className="uk-container">
                                <div className="home-slide-2 step-1" data-steps="3" data-current-step="1">
                                    <div className="step-images">
                                        <img className="img-speach" src={speach} alt="honestgram" />
                                        <div className="img-planes">
                                            <img src={p01} alt="honestgram message" />
                                            <img src={p02} alt="honestgram message" />
                                            <img src={p03} alt="honestgram message" />
                                            <img src={p04} alt="honestgram message" />
                                            <img src={p05} alt="honestgram message" />
                                            <img src={p06} alt="honestgram message" />
                                        </div>
                                        <div className="img-social">
                                            <img src={origramiTwitter} alt="Share to Twitter" />
                                            <img src={origramiFacebook} alt="Share to Facebook" />
                                            <img src={origramiGoogle} alt="Share to Google" />
                                            <img src={origramiLinkedIn} alt="Share to LinkedIn" />
                                            <img src={origramiPinterest} alt="Share to Pinterest" />
                                            <img src={origramiYoutube} alt="Share to Youtube" />
                                            <img src={origramiTumb} alt="Share to Tumblr" />
                                            <img src={origramiInstagram} alt="Share to Instagram" />

                                        </div>
                                    </div>
                                    <div className="step-content">
                                        <h2>Create your honestgram wall</h2>
                                        <p>it takes few minutes to create your wall</p>
                                    </div>
                                    <div className="step-content">
                                        <h2>Share your page out loud</h2>
                                        <p>the more you share your wall the more hear </p>
                                    </div>
                                    <div className="step-content">
                                        <h2>Find out what people say about you</h2>
                                        <p>it takes few minutes to create your wall</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className="home-intro" data-background="#f6f6f6">
                        <div className="uk-width-4-5@l uk-width-3-5@xl uk-position-center uk-position-small uk-text-center uk-transition-fade">
                            <div className="uk-container">
                                <h2 data-uk-slideshow-parallax="y: -60,60">Lets Get Started</h2>
                                <p data-uk-slideshow-parallax="y: -50,50">Lorem ipsum dolor sit amet.</p>
                                <FormGetStarted />
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

