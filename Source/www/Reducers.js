"use strict"

import {combineReducers} from 'redux';
import {booksReducers} from './widgets/books/booksReducers';
import {cartReducers} from './widgets/cart/cartReducers';

export default combineReducers({
    books: booksReducers,
    cart: cartReducers,
});

