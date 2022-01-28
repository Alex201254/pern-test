import React from "react";
import f from "./Footer.module.css";

export const Footer = () => {
   return (
      <div className={f.main}>
         <img src="Group 5041.png" className={f.icons} alt="Here are icons"/>
         <img src="Group.png" alt="Here is an image" className={f.ball_1} />
         <img src="red_cartoon 4.png" alt="Here is an image" className={f.ball_2} />
         <img src="Group 80.png" alt="Here is an image" className={f.ball_3} />
      </div>
   )
}