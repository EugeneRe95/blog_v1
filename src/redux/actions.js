import { SHOW_POSTS, SHOW_MENU, HIDE_MENU } from "./types";

export function showPosts(payload){
    return {
        type: SHOW_POSTS,
        payload
    }
}

export function showMenu(){
    return {
        type: SHOW_MENU
    }
}
export function hideMenu(){
    return {
        type: HIDE_MENU
    }
}