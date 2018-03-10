"use strict"

import {combineReducers} from 'redux';
import {postReducers} from './components/post/Reducers';
import sessionReducer from './components/session/Reducers';
//import userReducer from './components/user/Reducers';



export default combineReducers({
   posts: postReducers,
   session: sessionReducer,
  // userState: userReducer,
});

