import { FETCH_POSTS, NEW_POST } from '../actions/types';
import { fetchPosts, newPost } from '../actions/postActions';

const initialState = {
    items: [],
    item: {}
};

export default function(state = initialState, action){
    switch(action.type) {
        case FETCH_POSTS:
            return { ...state, items: action.payload };  
        case NEW_POST:
            return { ...state, item: action.payload };
        default:
           return state; 
    }
};

export const fetchPostsRequest = () => {
    return (dispatch) => {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then(res => res.json())
            .then(data => dispatch(fetchPosts(data)));       
    }
};

export const newPostRequest = (post) => {
    return (dispatch) => {
        fetch(`https://jsonplaceholder.typicode.com/posts`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(post)
        })
            .then(res => res.json())
            .then(data => dispatch(newPost(data)))
    }
};