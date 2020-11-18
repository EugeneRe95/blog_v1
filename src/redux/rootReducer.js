import {SHOW_MENU, HIDE_MENU, SHOW_POSTS} from './types'
import {posts} from './posts'

const initialState ={
    posts,
    postsRev: posts.slice().reverse(),
    menu: false
}

export function rootReducer(state = initialState, action){
    switch (action.type) {
        case SHOW_POSTS:
            return {...state}
    
        case SHOW_MENU:
            return {...state, menu: true}
        case HIDE_MENU:
            return {...state, menu: false}
    
        default:
            return state;
    }
}