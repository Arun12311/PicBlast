import React from "react";
import Header from "../header";
import { FeedCard } from "./FeedCard";
import { feed } from "../../mockData";
import "./feed.css"




const Feed = () =>{
    
    return(
        
       <div className="feed-container">
       {
        feed.map((feedCard,index) => {
            return(
               <FeedCard 
               key={index}
                data={feedCard}
                />
            )
        })
       }
        </div>  
    );
};

export default Feed;