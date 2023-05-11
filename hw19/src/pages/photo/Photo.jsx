import React from 'react';
import "./Photo.css";

const postData = [
    {
        link: "https://images.pexels.com/photos/240572/pexels-photo-240572.jpeg?auto=compress&cs=tinysrgb&w=600",
        postText: "Embrace the magic of the night city bathed in shades of blue. Feel its mystery and ambiance as the streets shimmer under the silvery moon, carrying you away to a dreamy realm🌃",
    },
    {
        link: "https://images.pexels.com/photos/462402/pexels-photo-462402.jpeg?auto=compress&cs=tinysrgb&w=600",
        postText: "A stunning photo showcasing an explosion of color from vibrant orange flowers in full bloom, their bright hues symbolizing joy and excitement, creating a visual delight.🍂🍂",
    },
    {
        link: "https://images.pexels.com/photos/711004/pexels-photo-711004.jpeg?auto=compress&cs=tinysrgb&w=600",
        postText: "A photo depicting a serene environment where the golden glow of autumn envelops the surroundings with warmth and coziness, creating a sense of peace and comfort ❤️❤️❤️",
    }, {
        link: "https://images.pexels.com/photos/53135/hydrangea-blossom-bloom-flower-53135.jpeg?auto=compress&cs=tinysrgb&w=600",
        postText: "Better days begin with bouquets💙💙💙",
    },
    {
        link: "https://images.pexels.com/photos/175773/pexels-photo-175773.jpeg?auto=compress&cs=tinysrgb&w=600",
        postText: "💙Embrace the feeling of the wind and the salty waves, and let the ocean calm your thoughts and inspire your dreams",
    }, {
        link: "https://images.pexels.com/photos/714525/pexels-photo-714525.jpeg?auto=compress&cs=tinysrgb&w=600",
        postText: "A captivating photo capturing the colorful palette of orange and golden hues of the autumn season, filling the landscape with warmth and beauty☀️",
    }

]

function PhotoCard({ link, postText }) {
    return (
        <div className='photo-card'>
            <img src={link} alt="card" className='photo-card--main-photo'></img>
            <p className='photo-card--main-text'>{postText}</p>
            <div className='photo-card--reaction-section'>
                <img className='photo-card--reaction-img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHO9ggkiQxuXVSPSwV-XQnq6uHEeJIRzti0w&usqp=CAU" alt="like"></img>
                <img className='photo-card--reaction-img' src="https://cdn2.iconfinder.com/data/icons/medical-healthcare-26/28/Chat-2-512.png" alt="comment"></img>
            </div>
        </div>
    )
}

const Photo = () => {
    return (
        <div className='photo-section'>
            {
                postData.map((data, index) => (
                    <PhotoCard key={index} {...data} />
                ))
            }
        </div>
    );
};

export default Photo;