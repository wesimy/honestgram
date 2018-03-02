"use strict"


export function postReducers(state = { posts:[]}, action) {
    switch(action.type){
        case "GET_POSTS":
        console.log('reduser called with data', action.payload);
        return {post:action.payload };
        break;

        // case "UPDATE_POST":
        // const deleteBooksArray = [...state.books];
   
        // const deleteIndex = deleteBooksArray.findIndex(
        //     function(item){
        //         return item._id == action.payload
        //     }
        // )
        // return {books : [...deleteBooksArray.slice(0,deleteIndex), ...deleteBooksArray.slice(deleteIndex+1)]}; 
        // break;
    }
    return state ;
    
}