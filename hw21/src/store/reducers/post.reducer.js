import { CHANGE_COMMENT_TYPE, CHANGE_LIKED_TYPE, CHANGE_REPOST_TYPE, CREATE_POST_TYPE } from "../actions/post.action";

const initialState = {
    posts: [{
        id: 0,
        profileImg: "https://i.pinimg.com/736x/eb/c3/48/ebc348d81886de5912ac88c4c8dd6725.jpg",
        postImg: "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale",
        authorName: "Anakin skywalker",
        authorNickname: "@dart_vader",
        postContent: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
        postDate: "2023-05-11",
        likes: 576,
        comments: 200,
        reposts: 392,
        isLiked: false,
        isCommented: false,
        isReposted: false,
    }, {
        id: 1,
        profileImg: "https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/800/Loki.Thor.webp",
        postImg: "https://w7w5t4b3.rocketcdn.me/wp-content/uploads/2019/03/tesseract-captain-marvel-ship.jpg",
        authorName: "Loki",
        authorNickname: "@godofmischief",
        postContent: "Glorious.",
        postDate: "2023-04-13",
        likes: 183,
        comments: 62,
        reposts: 825,
        isLiked: false,
        isCommented: false,
        isReposted: false,
    }, {
        id: 2,
        profileImg: "https://i.skyrock.net/4632/53234632/pics/3322761290_1_3_UKwcPZFW.png",
        postImg: "https://variety.com/wp-content/uploads/2015/12/141217_6762.jpg",
        authorName: "Agent Fitz",
        authorNickname: "@agentfitz",
        postContent: "Fuck you @AgentWard",
        postDate: "2014-05-13",
        likes: 1832,
        comments: 472,
        reposts: 953,
        isLiked: false,
        isCommented: false,
        isReposted: false,
    }]
}

const PostReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_POST_TYPE: {
            const newId = state.posts.length;
            const finalPost = {
                id: newId,
                ...action.payload,
            }
            return {
                posts: state?.posts?.length ? [...state.posts, finalPost] : [finalPost]
            };
        }
        case CHANGE_LIKED_TYPE: {
            const { id, isLiked } = action.payload;
            return {
                posts: state.posts.map((post) => {
                    if (post.id === id) {
                        if (isLiked) {
                            return {
                                ...post,
                                isLiked: isLiked,
                                likes: state.posts[id].likes + 1,
                            };
                        } else {
                            return {
                                ...post,
                                isLiked: isLiked,
                                likes: state.posts[id].likes - 1,
                            };
                        }
                    }
                    return post;
                }),
            };
        }
        case CHANGE_COMMENT_TYPE: {
            const { id, isCommented } = action.payload;
            return {
                posts: state.posts.map((post) => {
                    if (post.id === id) {
                        if (isCommented) {
                            return {
                                ...post,
                                isCommented: isCommented,
                                comments: state.posts[id].comments + 1,
                            };
                        } else {
                            return {
                                ...post,
                                isCommented: isCommented,
                                comments: state.posts[id].comments - 1,
                            };
                        }
                    }
                    return post;
                }),
            };
        }
        case CHANGE_REPOST_TYPE: {
            const { id, isReposted } = action.payload;
            return {
                posts: state.posts.map((post) => {
                    if (post.id === id) {
                        if (isReposted) {
                            return {
                                ...post,
                                isReposted: isReposted,
                                reposts: state.posts[id].reposts + 1,
                            };
                        } else {
                            return {
                                ...post,
                                isReposted: isReposted,
                                reposts: state.posts[id].reposts - 1,
                            };
                        }
                    }
                    return post;
                }),
            };
        }
        default: {
            return initialState;
        }
    }
}

export default PostReducer;