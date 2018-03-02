"use strict"


export function postReducers(state = { posts:[]}, action) {
    switch(action.type){
        case "GET_POSTS":
        return {
            posts:action.payload,
        };
        break;

        case "ADD_POST":
        return state = {
            posts : action.payload,
        };
        break;
    }
    return state ;
    
}