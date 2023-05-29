import { combineReducers, createStore } from "redux"
import ProjectReducer from "./reducers/project.reducer";
import LanguageReducer from "./reducers/lang.reducer";

const reducers = {
    projects: ProjectReducer,
    lang: LanguageReducer,
}

const rootReducer = combineReducers(reducers);
const store = createStore(rootReducer);
export default store;