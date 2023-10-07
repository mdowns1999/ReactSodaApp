import React, {useState, useEffect} from "react";
import SmartSlider from "react-smart-slider";
import classes from './SlideShow.module.css';


const Caption = ({ caption }) => (
    <div className={classes.caption}>
      {caption}
    </div>
  )

const SlideShow = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [windowHeight, setHeight] = useState(650);
 
//choose the screen size 
const handleResize = () => {
  if (window.innerWidth < 768) {
      setIsMobile(true)
  } else {
      setIsMobile(false)
  }
}

// create an event listener
useEffect(() => {
  window.addEventListener("resize", handleResize);
  if(isMobile){
    setHeight(450)
  }else{
    setHeight(650)
  }
}, [windowHeight, isMobile])


    const slidesArray = [
        {
            url: "https://i.imgur.com/7u8i7L1.jpg",
     
            // (Optional) Set if you want to add any content on your slide
            childrenElem: <Caption caption="Caption 1" />
          },
          {
            url: "https://i.imgur.com/E8gkF2f.jpg",
            childrenElem: <Caption caption="Caption 2" />
          },
          {
            url: "https://i.imgur.com/t2a1zLi.jpg"
          },
      ];

    return <SmartSlider
    slides={slidesArray}
    buttonShape="square" // round or square
    height={windowHeight}
    autoSlideInterval={5000}
    autoSlide={true}
  />
};

export default SlideShow;