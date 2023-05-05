import React from 'react';
import like from './imgs/like.png'
import comments from './imgs/chat2.png'
import download from './imgs/download.png'
import retweet from './imgs/retweet.png'

function Post(){
    const ANAKIN_IMAGE = "https://i.pinimg.com/736x/eb/c3/48/ebc348d81886de5912ac88c4c8dd6725.jpg";
    const RAY_IMAGE = "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale";
    const post = { 
        author: {
            name: "Anakin skywalker",
            photo: ANAKIN_IMAGE, 
            nickname: "@dart_vader"
        },
        content: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
        image: RAY_IMAGE,
        date: "26 февр."
    }
    return (
    <div className='post'>
        <div className='main-title'>
            <img className='bio-img' src= {post.author.photo} alt='author'></img>
            <p className='bio-name'>{post.author.name}</p>
            <p className='bio-nickname'>{post.author.nickname}</p>
            <p className='post-date'>{post.date}</p>
        </div>
        <p className='post-content'>{post.content}</p>
        <img className='post-img' src= {post.image} alt='post'></img>
        <div className='reaction-section'>
            <div className='reaction-section--part'>
                <img className='reaction-img' src={like} alt='like'></img>
                <p className='reaction-p'>887</p>
            </div>
            <div className='reaction-section--part'>
                <img className='reaction-img' src={retweet} alt='retweet'></img>
                <p className='reaction-p'>146</p>
            </div>
            <div className='reaction-section--part'>
                <img className='reaction-img' src={comments} alt='comments'></img>
                <p className='reaction-p'>482</p>
            </div>
            <div className='reaction-section--part'>
                <img className='reaction-img' src={download} alt='download'></img>
            </div>
        </div>
    </div>)
}
export default Post;