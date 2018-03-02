import React, { Component } from 'react';
import './search.scss';
class Search extends Component {
    render() {
        return (
                 <div id="search-modal" className="uk-modal-full uk-modal" data-uk-modal>
                    <div className="uk-modal-dialog uk-flex uk-flex-center uk-flex-middle" data-uk-height-viewport>
                        <button className="uk-modal-close-full" type="button" data-uk-close></button>
                        <div className="uk-container">
                            <form className="uk-search uk-search">
                                <input className="uk-search-input uk-text-center" type="search" placeholder="Find Someone's Wall..." data-autofocus />
                            </form>
                        </div>
                    </div>
                </div>
        );
    }
}

export default Search;

