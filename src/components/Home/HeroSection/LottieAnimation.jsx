
import React from "react";
import Lottie from "lottie-react";
import animationData1 from "../../../data/animation/ani1.json";
import animationData2 from "../../../data/animation/ani2.json";
export const LottieAnimation = () => {
  return (
   <>
    <div id="lottie-animation1">
        <Lottie animationData={animationData1} loop={true} autoplay={true} />
      </div>
    
   
   </>
  )
}
