import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Sidebar() {
   const  isMenuOpen = useSelector ((store) => store.app.isMenuOpen)
 //Early Return Pattern
if(!isMenuOpen) return null; 
 //or can be written as

  return (
    <div className="w-40 shadow-lg pl-5 mr-4 " >
      <ul>
        <li ><Link to ="/">Home</Link></li>
        <li>Shorts</li>
        <li>Subscription</li>
      </ul>
      <h2 className="pt-4 font-bold">Subscriptions</h2>
      <ul>
        <li>Movies</li>
        <li>sports</li>
        <li>Gaming</li>
        <li>Music</li>
      </ul>

      <h2 className=" pt-4 font-bold">Watch Later</h2>
      <ul>
        <li>Movies</li>
        <li>sports</li>
        <li>Gaming</li>
        <li>Music</li>
      </ul>

      <h2 className=" pt-4 font-bold">Explore</h2>
      <ul>
        <li>Movies</li>
        <li>sports</li>
        <li>Gaming</li>
        <li>Music</li>
      </ul>
    </div>
  );
}

export default Sidebar;
