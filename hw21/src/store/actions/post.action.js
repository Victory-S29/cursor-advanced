export const CREATE_POST_TYPE = "CREATE_POST_ACTION"
export const CHANGE_LIKED_TYPE = "CHANGE_LIKED_ACTION"
export const CHANGE_COMMENT_TYPE = "CHANGE_COMMENT_ACTION"
export const CHANGE_REPOST_TYPE = "CHANGE_REPOST_ACTION"

const createPostAction = (post) => {
    return {
        type: CREATE_POST_TYPE,
        payload: post,
    }
}

export const changeLikeAction = (like) => {
    return {
        type: CHANGE_LIKED_TYPE,
        payload: like,
    }
}

export const changeCommentAction = (comment) => {
    return {
        type: CHANGE_COMMENT_TYPE,
        payload: comment,
    }
}

export const changeRepostAction = (repost) => {
    return {
        type: CHANGE_REPOST_TYPE,
        payload: repost,
    }
}
export default createPostAction;