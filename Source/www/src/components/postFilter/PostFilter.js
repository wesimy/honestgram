
import React, { Component } from 'react';
// import './FormSearch.scss';

class FormSearch extends Component {
    render(){
       return(
        <div className="content-filter uk-flex-center uk-grid-collapse uk-margin-medium" data-uk-grid>
        <div className="uk-child-expand@s uk-width-4-5@m uk-width-3-5@l">
            <div className="uk-flex-center uk-grid-collapse" data-uk-grid>
                <div className="uk-width-1-2 uk-width-2-3@m uk-width-2-3@l">
                    <form className="uk-search uk-search-default">
                        <div className="uk-inline uk-width-1-1">
                            <span className="uk-form-icon" data-uk-icon="icon: search"></span>
                            <input placeholder="search this wall.." className="uk-input uk-form-blank" type="text" />
                        </div>
                    </form>
                </div>
                <div className="uk-width-1-2 uk-width-1-3@m uk-width-1-3@l">
                    <div className="uk-float-right">
                        <span data-uk-icon="icon:  chevron-down">Show All</span>
                        <div uk-dropdown="mode: click;boundary: .content-filter">
                            <ul className="uk-nav uk-dropdown-nav">
                                <li><a href="#">Show All</a></li>
                                <li><a href="#">Show Public</a></li>
                                <li><a href="#">Show Private</a></li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
       );
    }
}
    export default FormSearch;
    