// src/js/reducers/action-types.js


import {ADD_ARTICLE} from "../constants/action-types";

const initialState = {
    articles: []
};
function rootReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_ARTICLE:
            console.log("From add article");
            return Object.assign({}, state, {
                articles: state.articles.concat(action.payload)
            });
        default:
            console.log("From default");
            return state;
    }
    return state;
};
export default rootReducer;