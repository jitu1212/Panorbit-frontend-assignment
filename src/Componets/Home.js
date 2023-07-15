import React, { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { data } from "./data";
import img1 from "../Vector 52.png";
import img2 from "../Vector 53.png"
import './Home.css'
function Home() {

 const navigate = useNavigate();
 const { ipaddress } = useParams();

const handleSelectName=(e)=>{
    navigate(`/my-profile?`);
    localStorage.setItem('user',e)
}

  console.log(data.users);
  return (
    <>
  <div class="image-container">
  <img src={img1} alt="Image 1" class="image1" />
  <img src={img2} alt="Image 2" class="image2" />
  <div className="user-section">
  
    <ul class="dropdown-menu1">
      <p id="drop-id">Select An Account</p>
       <div className="drop-container">
      {data.users.map((item, index) => {
        return (
          
          <li id="drop_section" onClick={() => handleSelectName(item.name)}>
            <img src={item.profilepicture} alt="" srcset="" />
            <p>{item.name}</p>
          </li>
          
        );
      })}
      </div>
    </ul>
  </div>
  </div>


    </>
  );
}

export default Home;
