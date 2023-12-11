const SET_POSTS = 'SET_POSTS';

let initialState = {
    newsPostData: [],
}

const newsPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POSTS:
            return { 
                ...state,
                newsPostData: action.data,
            };
        
        default:
            return state;
    }
}

export const setPostsAC = data => ({ type: SET_POSTS, data });

export default newsPageReducer;