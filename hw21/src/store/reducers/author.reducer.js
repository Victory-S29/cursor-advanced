import { CREATE_AUTHOR_TYPE } from "../actions/author.action";



const initialState = {
    authors: [{
        profileImg: "https://i.pinimg.com/736x/eb/c3/48/ebc348d81886de5912ac88c4c8dd6725.jpg",
        authorName: "Anakin skywalker",
        authorNickname: "@dart_vader",
    }, {
        profileImg: "https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/800/Loki.Thor.webp",
        authorName: "Loki",
        authorNickname: "@godofmischief",
    }, {
        profileImg: "https://i.skyrock.net/4632/53234632/pics/3322761290_1_3_UKwcPZFW.png",
        authorName: "Agent Fitz",
        authorNickname: "@agentfitz",
    }]
}

const AuthorReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_AUTHOR_TYPE: {
            return {
                state
            };
        }
        default: {
            return initialState;
        }
    }
}

export default AuthorReducer;
