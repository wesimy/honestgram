"use strict"

import {combineReducers} from 'redux';
import {postReducers} from './components/post/Reducers';
//import {cartReducers} from './widgets/cart/cartReducers';

export default combineReducers({
   posts: postReducers,
//cart: cartReducers,
});

