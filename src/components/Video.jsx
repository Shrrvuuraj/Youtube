import React from 'react'
import {AiFillEye} from "react-icons/ai"
import "./stylesheet/apptwo.css"

const Video = () => {
  return (
    <div className='video'>
     <div className="video__top">
      <img src="https://i.ytimg.com/vi/l6E16JAk_Fs/hqdefault.jpg?sqp=-oaymwExCOADEI4CSFryq4qpAyMIARUAAIhCGAHwAQH4Af4JgALQBYoCDAgAEAEYMyBUKHIwDw==&rs=AOn4CLDhGkcKxsuh-ASYBWvyqw2Tvw_2Bg" alt="" />
      <span>05:43</span>
     </div>
     <div className="video__title">
      Create App in 5 minutes made by chintu
     </div>
     <div className="video__detail">
      <span>
        <AiFillEye/> 5m views
      </span>
      <span>
        5 days ago
      </span>
     </div>
     <div className="video__channel">
      <img src="" alt="" />
      <p>Rainbow head Junior</p>
     </div>
    </div>
  )
}

export default Video
