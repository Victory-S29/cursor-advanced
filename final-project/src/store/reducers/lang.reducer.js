import { CHANGE_LANGUAGE_TYPE } from "../actions/lang.action";

const initialState = {
    lang: "en"
}

const LanguageReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_LANGUAGE_TYPE: {
            return {
                ...action.payload,
                lang: state.lang === "en" ? "ua" : "en",
            };
        }
     
        default: {
            return initialState;
        }
    }
}

export default LanguageReducer;