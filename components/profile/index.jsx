import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../header";

import {Link} from "react-router-dom"

import { profile } from "../../mockData";
import "./profile.css"
import { IoIosClose } from "react-icons/io";
import { TbTag } from "react-icons/tb";
const currentYear = new Date().getFullYear();

const Profile = (props) => {
    // const { userName } = useParams();
    
    const [activeSection,setSection] =useState("posts");
    const [togglwModal,setModal] = useState(false);
    const [modalData,setModalData] = useState("");

    const openModal = (url) =>{
        setModalData(url);
        setModal(true);
    }
    

    return (
        <div className="profile-container">
            <div className="profile-top">
                <div className="profile-image-wrapper" >
                    <div className="profile-image" style={{ 'backgroundImage': 'url(./images/profile-img2.jpg)' }}>

                    </div>

                </div>
                <div className="profile-intro" >
                    <div className="profile-username">
                        {profile.username}
                    </div>
                    <div className="profile-analytics">
                        <div className="count-wrapper">
                            <span className="count " >{profile.postCount}</span> Posts
                        </div>
                        <div className="count-wrapper">
                            <span className="count " >{profile.followingcount} </span> Following
                        </div>
                        <div className="count-wrapper">
                            <span className="count " >{profile.followersCount} </span> Followers
                        </div>
                    </div>
                    
                    <div className="profile-about">
                        <div className="profile-name">
                            {profile.name}
                        </div>
                        <div className="profile-description">
                            {profile.about}
                        </div>
                        <div className="profile-link">
                            <span><a href="https://github.com/Arun12311">{profile.abountLink}</a></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="profile-part"></div>
            <div className="profile-tag profile-bottom">
                <div className={`${activeSection==='posts' && 'active-tag'} profile-tag`} onClick={() => setSection("posts")} >
                POSTS
                </div>
                <div className={`${activeSection==='saved' && 'active-tag'} profile-tag profile-saved`} onClick={() => setSection("saved")}>
                SAVED
                </div>
                <div className={`${activeSection==='tagged' && 'active-tag'} profile-tag profile-tags`}  onClick={() => setSection("tagged")}>
                TAGS
                </div>
            </div>
            <div className="profile-selection">
                {
                    activeSection === "posts" &&
                    <div className="post-card-wrapper">
                        <div className="post-card" onClick={() => openModal(<img className="openModal-img" src='https://source.unsplash.com/random' />)}>
                            <img src="https://source.unsplash.com/random" />
                        </div>
                        <div className="post-card" onClick={() => openModal(<img className="openModal-img" src='https://source.unsplash.com/random' />)}>
                            <img src="https://source.unsplash.com/random" />
                        </div>
                        <div className="post-card" onClick={() => openModal(<img className="openModal-img" src='https://source.unsplash.com/random' />)}>
                            <img src="https://source.unsplash.com/random" />
                        </div>
                        <div className="post-card" onClick={() => openModal(<img className="openModal-img" src='https://source.unsplash.com/random' />)}>
                            <img src="https://source.unsplash.com/random" />
                        </div>
                        <div className="post-card" onClick={() => openModal(<img className="openModal-img" src='https://source.unsplash.com/random' />)}>
                            <img src="https://source.unsplash.com/random" />
                        </div>
                        <div className="post-card" onClick={() => openModal(<img className="openModal-img" src='https://source.unsplash.com/random' />)}>
                            <img src="https://source.unsplash.com/random" />
                        </div>
                        <div className="post-card" onClick={() => openModal(<img className="openModal-img" src='https://source.unsplash.com/random' />)}>
                            <img src="https://source.unsplash.com/random" />
                        </div>
                    </div>
                }
                {
                    activeSection === "saved" &&
                    <div className="post-card-wrapper">
                        <div className="post-card">
                            <img src="https://source.unsplash.com/random" />
                        </div>
                        <div className="post-card">
                            <img src="https://source.unsplash.com/random" />
                        </div>
                        <div className="post-card">
                            <img src="https://source.unsplash.com/random" />
                        </div>
                        <div className="post-card">
                            <img src="https://source.unsplash.com/random" />
                        </div>
                    </div>
                }
                {
                    activeSection === "tagged" &&
                    <div className="tagged">
                    <TbTag size={35} /> <br />
                    <span className="bold">Photos of you </span> <br/>
                    <span>When people tag you in photos, they'll appear here. </span>
                    </div>
                }
            </div>
          
        {
            togglwModal &&
            <div className="modal">
                
                <div className="modal-card">
                <IoIosClose size={35} className="close-modal" onClick={() => setModal(false)}/>
                {modalData}
                </div>
                
            </div>
            
        }
        
        
         <div class="footer">
            <p class="copyright">© {currentYear} PicBlast from Arun</p>
         </div>
        

        </div>
        
    )
};

export default Profile;