import React from "react";
import Header from "./header/index";
import Feed from "./feed/index";
import Profile from './profile/index';
import { Post } from "./Post";
import { BrowserRouter, Route, Routes } from "react-router-dom";


const App = () => {
    return (
        
 
        <BrowserRouter>
         <Header></Header>
        <div className="insta-container">
        <Routes>
        <Route path="/" element={ <Feed />} />
        <Route path="/:userName" element={ <Profile />} />
        <Route path="/posts" element={ <Post />} />
        {/* <Route path="/:userName/saved" element={ <Saved />} /> */}
        {/* <Route path="/:userName/tags" element={ <Tags />} /> */}
        </Routes> 
        </div>   
        </BrowserRouter>
      
    )
};

export default App;