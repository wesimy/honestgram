// 'use strict'
import { auth } from '../../firebase/firebase';

// Listens to auth changes and update session info
export function onSetAuthUser() {
    return dispatch => auth.onAuthStateChanged((authUser) => {
                        dispatch({ type: "AUTH_USER_SET", payload: authUser });
                    });
         
}

export function signup(u,p) {
    return dispatch => auth.createUserWithEmailAndPassword(u, p);
        
}

export function signin(u,p) {
    return dispatch => auth.signInWithEmailAndPassword(u, p)
}

export function signout() {
    return dispatch => auth.signOut();
        
}
