import React, { useState } from 'react';
import "./Form.css"
import { useDispatch, useSelector } from 'react-redux';
import createPostAction from '../../store/actions/post.action';

const Form = () => {
    const authors = useSelector((state) => state.author.authors);

    const [postContent, setPostContent] = useState("");
    const [postImg, setPostImg] = useState("");
    const [authorObject, setAuthorObject] = useState(authors[0]);

    const dispatch = useDispatch();

    const selectOnChange = e => {
        const selectedIndex = e.target.selectedIndex;
        setAuthorObject(authors[selectedIndex])
    }

    const timeFunction = () => {
        const startDate = new Date('2021-01-01').getTime();
        const endDate = new Date('2023-01-01').getTime();
        const randomTimestamp = Math.random() * (endDate - startDate) + startDate;

        const randomDate = new Date(randomTimestamp);

        const year = randomDate.getFullYear();
        const month = String(randomDate.getMonth() + 1).padStart(2, '0');
        const day = String(randomDate.getDate()).padStart(2, '0');
        const formattedDate = `${year}-${month}-${day}`;

        return formattedDate;
    }

    const randNumber = () => Math.round(Math.random() * 1000) + 1

    const resetData = () => {
        setPostContent("");
        setPostImg("");
        setAuthorObject(authors[0]);
    }

    const onClickBtn = () => {
        if (postContent === "" || postImg === "") {
            alert("NO");
        } else {
            const postObject = {
                ...authorObject,
                postImg,
                postContent,
                postDate: timeFunction(),
                likes: randNumber(),
                comments: randNumber(),
                reposts: randNumber(),
                isLiked: false,
                isCommented: false,
                isReposted: false,
            }
            dispatch(createPostAction(postObject));
            resetData();
        }
    }

    return (
        <div className='form'>
            <input value={postContent} className='form-input' type="text" placeholder='Enter publication...'
                onChange={e => setPostContent(e.target.value)}
            />
            <input value={postImg} className='form-input' type="text" placeholder='Enter href...'
                onChange={e => setPostImg(e.target.value)}
            />

            <select className='form-input'
                onChange={e => selectOnChange(e)}
            >
                {authors.map((author, id) => (
                    <option key={id} value={author.authorName}>
                        {author.authorName}
                    </option>
                ))}
            </select>
            <button className='form-button'
                onClick={onClickBtn}

            >Submit</button>
        </div>
    );
};

export default Form;