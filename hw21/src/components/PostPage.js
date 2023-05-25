import React from 'react';
import { useSelector } from 'react-redux';
import Post from './Post';

const PostPage = () => {
    const posts = useSelector((state) => state.post.posts)
    return (
        <>
            {posts.map((data, index) => <Post key={index} {...data} />)}
        </>
    );
};

export default PostPage;