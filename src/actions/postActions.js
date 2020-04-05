import { FETCH_POSTS, NEW_POST } from '../actions/types';

export const fetchPosts = payload => {
    return {
        type: FETCH_POSTS,
        payload
    };
};

export const newPost = payload => {
    return {
        type: NEW_POST,
        payload
    };
};