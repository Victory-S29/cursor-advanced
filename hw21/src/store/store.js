import { combineReducers, createStore } from "redux";
import PostReducer from "./reducers/post.reducer";
import {composeWithDevTools } from "redux-devtools-extension";
import AuthorReducer from "./reducers/author.reducer";

const reducers = {
    post: PostReducer,
    author: AuthorReducer,
}
const rootReducer = combineReducers(reducers);
const store = createStore(rootReducer, composeWithDevTools());

export default store;