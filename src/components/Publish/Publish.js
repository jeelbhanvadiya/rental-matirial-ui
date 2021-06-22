import { useEffect } from 'react'

import { NavLink, useParams } from "react-router-dom";
import PublishHouse from "./PublishHouse";
import PublishInquiry from "./PublishInquiry";

export default function MainPublish (){
  const {name} = useParams();
  return (
    <>
    <div className="publishNavContain">
      <NavLink to="/publish/house" className="navBtn">My House List</NavLink>
      <NavLink to="/publish/inquiry" className="navBtn">My Inquiry List</NavLink>
    </div>
    {name == 'house' ? <PublishHouse /> : <PublishInquiry />}
    </>
  );
}


