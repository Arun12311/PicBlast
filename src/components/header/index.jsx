import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css"
import { IconName } from "react-icons/io";
import { AiOutlineHome, AiOutlineMessage } from 'react-icons/ai';
import { CgProfile,CgDetailsMore } from 'react-icons/cg';
import { FiHeart } from 'react-icons/fi';

import { GrCompass } from "react-icons/gr";
import { BsSearch,BsCameraReels,BsPlusSquare } from "react-icons/bs";
import { SlHome } from "react-icons/sl";

const Header = () =>{



    return(
        

        <header>
        <div className="mobile-wrapper">
             <div className="logo" >
             <Link to="/" ><img src="./images/new_logo.png"  /></Link>
            </div>
        </div>
        <div className="header-wrapper">

            <div className="logo" >
             <Link to="/" ><img src="./images/new_logo.png"  /></Link>
            </div>
         <div className="header-container">
             
             <div className="home size" >
             <Link to="/"><SlHome className="icon-margin" size={30} />Home</Link>
             </div>
             <div className="search size" >
             <Link to="/"><BsSearch className="icon-margin" size={30}/>Search</Link>
             </div>
             <div className="explore size" >
             <Link to="/"><GrCompass className="icon-margin" size={30}/>Explore</Link>
             </div>
             <div className="reels size" >
             <Link to="/"><BsCameraReels className="icon-margin" size={30}/>Reels</Link>
             </div>
             <div className="messages size" >
             <Link to="/"><AiOutlineMessage className="icon-margin" size={30}/>Messages</Link>
             </div>
             <div className="notifications size" >
             <Link to="/"><FiHeart className="icon-margin" size={30}/>Notifications</Link>
             </div>
             <div className="create size" >
             <Link to="/"><BsPlusSquare className="icon-margin" size={30}/>Create</Link>
             </div>
             <div className="profile size" >
             {/* <div className="profile-image  " style={{ 'backgroundImage': 'url(./images/profile-img2.jpg)','display':'inline'}}>
             </div> */}
             <Link to="/Arun"><CgProfile className="icon-margin"  size={30}/>Profile</Link>  
             </div>
             <div className="more size" >
             <Link to="/"><CgDetailsMore className="icon-margin" size={30}/>More</Link>
             </div>
         </div>
        </div>

        {/* <div className="header-container" >
            <div className="logo">
            <Link to="/"><img src="./images/new_logo.png"  /></Link>
            
            </div>
            <div className="search-bar">
            <div className="search">
            <input type="text" placeholder="Search" />
            <AiOutlineSearch className="search-icon"/>
            </div>
            </div>
            <div className="nav">
            <AiOutlineSearch size={25} className="search-icon-nav"/>
            <Link to="/"><AiOutlineHome size={25}/></Link>
            <Link to="/Arun"><CgProfile size={25}/></Link>
            </div>
        </div>
             */}
         
        </header>
    )
};

export default Header;