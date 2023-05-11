import React from 'react';
import "./Publication.css"

const postData = [{
    profileImg: "https://i.pinimg.com/736x/eb/c3/48/ebc348d81886de5912ac88c4c8dd6725.jpg",
    postImg: "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale",
    authorName: "Anakin skywalker",
    authorNickname: "@dart_vader",
    postContent: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
    postDate: "2023-05-11"
}, {
    profileImg: "https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/800/Loki.Thor.webp",
    postImg: "https://w7w5t4b3.rocketcdn.me/wp-content/uploads/2019/03/tesseract-captain-marvel-ship.jpg",
    authorName: "Loki",
    authorNickname: "@godofmischief",
    postContent: "Glorious.",
    postDate: "2023-04-13"
}, {
    profileImg: "https://i.skyrock.net/4632/53234632/pics/3322761290_1_3_UKwcPZFW.png",
    postImg: "https://variety.com/wp-content/uploads/2015/12/141217_6762.jpg",
    authorName: "Agent Fitz",
    authorNickname: "@agentfitz",
    postContent: "Fuck you @AgentWard",
    postDate: "2014-05-13"
}, {
    profileImg: "https://static1.srcdn.com/wordpress/wp-content/uploads/2019/07/Luke-Hemsworth-as-Gale-in-The-Hunger-Games.jpg",
    postImg: "https://f.ptcdn.info/393/037/000/nxt8kuqozjqFW7AOvsc-o.jpg",
    authorName: "Gale Hawthorne",
    authorNickname: "@galehawthorne",
    postContent: "Hello, everyone! Just wanted to share my excitement for the Hungry Games. Can't wait to see how it unfolds! #HungryGames #Excited",
    postDate: "2023-03-11"
}]

function Post({ profileImg, postImg, authorName, authorNickname, postContent, postDate }) {
    const post = {
        author: {
            name: authorName,
            photo: profileImg,
            nickname: authorNickname
        },
        content: postContent,
        image: postImg,
        date: postDate
    };
    return (
        <div className='post'>
            <div className='main-title'>
                <img className='bio-img' src={post.author.photo} alt='author'></img>
                <p className='bio-name'>{post.author.name}</p>
                <p className='bio-nickname'>{post.author.nickname}</p>
                <p className='post-date'>{post.date}</p>
            </div>
            <p className='post-content'>{post.content}</p>
            <img className='post-img' src={post.image} alt='post'></img>
            <div className='reaction-section'>
                <div className='reaction-section--part'>
                    <img className='reaction-img' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAdVBMVEX///8UFBQAAAAMDAyIiIg2Nja6urpoaGju7u4QEBDz8/MKCgr29vYFBQWdnZ2AgIDf39/V1dXBwcGQkJCtra1vb29MTExXV1e0tLQtLS3n5+d5eXlEREQ/Pz8kJCRfX1+hoaHMzMwaGho6OjooKCjR0dGNjY0DjS+EAAAFD0lEQVR4nO2d2XbiMAxAa4UCJixlL0uBQun/f+KwD6R2gEhBso/uyzxMOegeJ94l3t4URVEURVEURVEURVEURVEURVEURVEURVGiZVptVzqd/uC7yR1JWfThzKZd5w6mFAZgTqQAwyl3OCVQvRjuAFhxx0PP97WhsbDkDoicjxvDXTOOuCOiZpoxNDDmDomYRtbQwC93TLT8NTTwzR0UKQ2wWcP0nTsoUhyGBgbcUVHiMkwW3FFR4jI00OMOixCnYSumEcPRl+4bMaKVhsfwkzsuOupuwyF3XHRk56VHrOGOi45vp6GBeFaKVY9hPOPFwGPY5g6MjL7HMJ6uZug2jGjMH6VOwySe9cUkcRrahDswKuquaenhRYxl3uYe8PeGDe7QiPAMFhEN+RWv4Qd3aER8ubvSeAybqaejicaw63tIozFc+Q0j6WnGLa9hJKOFb7yPZsT3LH/N/pgtDsOO33DNHRsN/oc0krXF1tuEsawP/Q+pgRp3cCT4H1IDHe7gKPBssx0NV9zRUeAf7iPZTfQufg+GW+7wCJjlGkYwafPu0OyxwB0eAd7V/Z50zh0entwmNDDjjg9Pzmhvoji2mOY2YQyDRS23CSNY4efMuY+G3AGi8ZxWnEm/uAPE4jk0/N+EFe4IkeTO1w6GoV9s2/g2ui+GzrVTs9ls7Nj98+qAnyV3NnNS7B7+slnv9j4H/U5tPJpvJj+LtbG7QWa9mGzmo+WsP6h2GxJte/cFd/PSYaU2+rnkYrRaaZLYC0mStk7/sx7NBl1upVvujPUXRYA0eeAv7UF13BZ0CDDJWfcWZa+5kJJyM37gGS1EAlCT0JD5E24kADP2jufeUI92NMz3/P2HaVQkvDdTyxfcd8KMC6+yH9GzIlufWmoncwXbgcCdNS+lInL5XH+I7HZnff4yQeSJQPsdHqI1unnht+vXCRpMlmbjC7wXYG7ZzaOuNgTbkL+mpyXdFDccPdMS0D99qv7Ux/Agzo/zjsP+cu62V1DCXDsPxC7P8rm2OO5FPPkhAhDDxftzb9NxP+l1o8Tle4tvmIdiWHzNH4YhJj8zDEPMZmsghohJWxCGqIl3GIaYzZoQDHEJUwEYWtwljgAMkWc68g2x2bXyDRPk0ap8Q+zlafmGqPV9GIbIWgUhGNo0dkPcdaogDFF5DEEYom6MBWKIuNcYhiHmQlUYhnZdfNQPxLBVfHkRiGH0bZgiakuGYXg5L4nV0Ma/14ZowiAMcRVeAzAEXCqKeMMUm7Yo3NDCHJvxJtvQQhXpJ92QIpNIuCHBZWjhhgQXL4UbEqR/yzakKMMg25Aid1i6If5FlG6IvwAt3RCzqgjDEN+ZqmH2G19tiM/LlG64it4Qn2kh3RCfaCHbELNPGoYhRcaTaMN0ghcUbWhJimUKNmzRpKyJNUxgQ5MgK9UQfqjSKoUaJhR9jGhDwsRYqYZ02c1qmP3mVxnS1cWQakhXVEqqIZmgUEPK36GTaUhZn0+oIWFRKaGGhDVbRBoSztmEGpIWkSxkWHKmM22hj0KG202p5QZoy2LfrSSX+fLTTxd/Lh4q71UIZK5aFs8viPn4v6ppp2U5EpcU8v9Yg4vrHKRGBUp5HclLSD7VL96OxNMaffEIW0Jt+iWAfYgE/vTi3Tltl2OhlBKZvaV9qD7NYuaYafR+7n/wCSoSq5r3qhS0K51faeUgFUVRFEVRFEVRFEVRFEVRFEVRFEVRFEVRHPwD8Opit7p1eroAAAAASUVORK5CYII=' alt='like'></img>
                    <p className='reaction-p'>887</p>
                </div>
                <div className='reaction-section--part'>
                    <img className='reaction-img' src='data:image/png;base64,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' alt='retweet'></img>
                    <p className='reaction-p'>146</p>
                </div>
                <div className='reaction-section--part'>
                    <img className='reaction-img' src='https://cdn2.iconfinder.com/data/icons/medical-healthcare-26/28/Chat-2-512.png' alt='comments'></img>
                    <p className='reaction-p'>482</p>
                </div>
                <div className='reaction-section--part'>
                    <img className='reaction-img' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEX///8AAACOjo709PTu7u6WlpbPz8+qqqrIyMj4+PhRUVGurq58fHzr6+uRkZGzs7Nubm7c3Nw6OjrZ2dkVFRVsbGweHh6hoaEyMjLCwsJtbW1MTEwODg51dXUsLCxPT09CQkJgYGAkJCRoET7uAAADx0lEQVR4nO2da3PaMBBF7UALhpAA4ZV3nP//I9sm7YxlQMjSaveK3vOZeHTiITdaSauqyst0u6t97LbTzCPIy2jm1ftmNrIeZjzNOkCwrteN9UCjuQ0SrOtb64HGsggUrOuF9VAjmQQbTqyHGsldsOGd9VAjuQk2vLEeaiQ0pCE+NKQhPjSkIT40pCE+NKQhPjSkIT40pCE+NKQhPjSkIT40pCE+NKQhPjSkIT40pCE+NKQhPjSkIT40pCE+NKQhPjSkIT40pCE+NKQhPjSkIT40pCE+NKQhPjSkIT40pCE+NKQhPjSkIT40pCE+NKQhPjQs3/Aaugo+7n94CGnP+s3M95j9o5nf/DNYIY1Po96Yof1XJTDp4RrenVQCg7cY3mBWBv02tffKhvfqhktlw6W64VbZcKtueP3v8Pq/h2Nlw7G6ofJL1H+Fle43Uf9b+EX4f9apzGwEq+agJHgwuzxhvFER3Bj8lfnHSsVwZSf4ewqsIGg3Af5inl1wbis4pBgTB0AJ5ymr4JO13h+eMwo+W8t9EXgjUAwotwgtcsXiBuaGnVyxaBqELtMsglD3leWIRfMgdAlfhQkFbrVGujKlX3m6iOxs0WpG6EM0FlGC0GXxIib4AhOELnKxCBSELlKxCBWELjIrbtB3BUrEIlwQurwmC75aK1wiNRYRg9BllFZEPRRwdW7a8jdoELqkxCJsELrExyJwELrExiJ0ELrEFVEBSqPhxMQifBC6DC+iYpRGw2neBgq+Qc4IfYx3gwR3hmuEsTwMMnywHm4MQ2KxmCB0CS+igpVGwwmNxaKC0CUsFgsLQpeQWCwtCF0CttzYbZaRYXEpFndaM8Kf55km/ZIvxWJSEDZTz7h7n/UNIu3fDX8spgWhdwto77P5DL2xmBiEIIaeImpqaRTF8OxO1ORdozCG1fvJ574nPxfH8GQsCgQhjuGpLTcSm2WADE/EosSMEMnwKBZFZoRQhr0iqkxpFMvQiUWhNUIww86hU6kjoWiG1f7vA/dSD4QzrMaTZbucCD4PzlAaGnahISY07EJDTGjYhYaY0LALDTGhYRcaYkLDLjTEhIZdaIgJDbvQEBMadvm/DVfNCJPGezxngGGh0LB8aFg+NCwfGpYPDcuHhuVDw/LpGQ49tovPW89Qr6+zFv0mKfvLP1IY/S2e2hdy5OfoKMCH9YiE+egLZmpfaceJswCt9ZhEaY8FhzZBwOZ0iwadBus6nOlVtLqWt7g5e+Jo3FqPTYTWtwwxLT80Pi6dqFpM2rXOpQ7ybNbt5CjofwEAFldZHF9FhAAAAABJRU5ErkJggg==' alt='download'></img>
                </div>
            </div>
        </div>
    )
}
const Publication = () => {
    return (
        <div>
            {
                postData.map((data, index) => (
                    <Post key={index} {...data} />
                ))
            }
        </div>
    );
};

export default Publication;