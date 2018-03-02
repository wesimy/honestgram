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

export function addPost(newPost){
    // this should be removed .. will return from the API a list of posts after adding new post
    let posts = [
        {
            _id: 1,
            wall: 1,
            date: '12APR',
            author: null,
            authorSecretID: 123,
            content:'some post content',
            isPrivate: false,
            avatar: 'https://getuikit.com/docs/images/avatar.jpg',
            
            },
            {
                _id: 2,
                wall: 1,
                date: '12APR',
                author: 'moataz',
                authorSecretID: 1234,
                content:'some post content 2',
                isPrivate: false,
                avatar: 'https://getuikit.com/docs/images/avatar.jpg',
                }
    ]
    console.log(newPost);
    
    return function(dispatch){
        dispatch({type: "ADD_POST", payload: [newPost,...posts]});
    }
}

export function updatePost(post){
    
    return function(dispatch){
    //     ax.post("/cart", updatedCart)
    //     .then(function(res){
    //         dispatch({
    //             type: "UPDATE_CART",
    //             payload: res.data,
    //         });
    //     })
    //     .catch(function(err){
    //         throw err;
    //     })

    dispatch({type: "UPDATE_POST", payload: post});
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