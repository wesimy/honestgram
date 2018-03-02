'use strict'
//import axios from 'axios';
//const ax = axios.create({baseURL: process.env.REACT_APP_API})

export function getPosts(post){
    return function(dispatch){
        // ax.get("/posts")
        // .then(function(res){
        //     dispatch({type: "GET_POSTS", payload:res.data});
        // })
        // .catch(function(err){
        //     throw err;
        // });
            
            
        dispatch({type: "GET_POSTS", payload: post});
    }
}

// export function postBooks(book){
//       return function(dispatch){
//         ax.post("/books",book)
//         .then(function(response){
//             dispatch({
//                     type: "POST_BOOKS",
//                     payload: response.data,
//                 })
//         })
//         .catch(function(err){
//             throw err;
//         });
//     }
// }

// export function deleteBooks(id){
//     return function(dispatch){
        
//         ax.delete("/books/" + id )
//         .then(function(response){
//             dispatch({
//                     type: "DELETE_BOOKS",
//                     payload: id,
//                 })
//         })
//         .catch(function(err){
//             throw err;
//         });
//     }
// }