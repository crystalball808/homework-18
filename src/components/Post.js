import React from 'react';

const Post = (props) => {
    return(
        <div className='Post'>
            <img className='avatar' src={props.author.photo} alt="photo"/>
             <div className='postContent'>
                <p className='contentText' className='name'>{props.author.name}</p>
                <p className='nickName'> {props.author.nickname}</p>
                <p className='date'> • {props.date}</p>
                <p className='contentText'>{props.content}</p>
                <img className='photoContent' src={props.image} alt="photo"/>
            </div>
        </div>
    )
}

export default Post;