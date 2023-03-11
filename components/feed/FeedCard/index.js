import React from "react";
import { AiOutlineHeart, AiOutlineMore } from 'react-icons/ai';
import { FaRegComment } from 'react-icons/fa';
import { BsBookmark } from 'react-icons/bs';
import "./FeedCard.css";

export const FeedCard = (props) => {
    const {data} = props;
    console.log(data);
return(
<div className="feed-card">

    <div className="top">
        <div className="profile">
            <div className="profile-icon">
                <img src="./images/profile-img.jpg" alt=""/>
            </div>
            <div className="profile-detail">
                <div className="profile-name">
                    {data.name} 
                </div>
                <div className="profile-location">
                    {data.location}
                </div>
            </div>
        </div>
        <AiOutlineMore className="profile-more-menu"/>
    </div>
    <div className="mid">
        <img src={data.image} alt="photo" />
    </div>
    <div className="bottom">
        <div className="profile-reaction">
            <AiOutlineHeart className="reaction-icon" size={28}/>
            <FaRegComment className="reaction-icon" size={25}/>
            <BsBookmark className="reaction-icon" size={25}/>
        </div>
        <div className="profile-likes">
            {data.likes} Likes
        </div>
        
        <div className="comment-container">

        {
            data.comments.map((comment) => {
                return(
        <div className="comment-box" key={comment.id}> 
            <span className="comment-user-name">{comment.author}</span>
            <span className="comment">{comment.comment}</span>
        </div>
                )
            })
        }
        </div>

        <div className="add-comment">
            <input  type="text" placeholder="Add a comment..." />
        </div>
    </div>
</div>
);
}