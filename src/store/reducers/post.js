const initialState = {
    allPosts: [],
    bookedPosts: [],
    loading: true,
};

export const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOAD_POSTS': 
            return {
                ...state, 
                allPosts: action.payload, 
                bookedPosts: action.payload.filter(post => post.booked),
                loading: false
            };
        case 'TOGGLE_BOOKED':
            const allPosts = state.allPosts.map(post => {
                if (post.id === action.payload) {
                    post.booked = !post.booked;
                };
                return post
            });
            return {
                ...state, 
                allPosts, 
                bookedPosts: allPosts.filter(post => post.booked)
            };
        case 'DELETE_POST':
            const posts = state.allPosts.filter(post => post.id !== action.payload);
            return {
                ...state, 
                allPosts: posts, 
                bookedPosts: posts.filter(post => post.booked)
            }
        case 'ADD_POST':
            return {
                ...state, 
                allPosts: [{...action.payload}, ...state.allPosts], 
            }
        default: 
            return state;
    }
};