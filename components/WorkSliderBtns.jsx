"use client"

import { useSwiper } from "swiper/react"
import { RiArrowLeftDoubleLine } from "react-icons/ri";
import { RiArrowRightDoubleLine } from "react-icons/ri";

const WorkSliderBtns = ({ containerStyles, btnStyles, iconsStyles }) => {
    const swiper = useSwiper();
    return (
      <div className={containerStyles}>
        <button className={btnStyles} onClick={() => swiper.slidePrev()}>
        <RiArrowLeftDoubleLine  className={iconsStyles} />
        </button>
        <button className={btnStyles} onClick={() => swiper.slideNext()}>
        <RiArrowRightDoubleLine className={iconsStyles} />
        </button>
      </div>
    );
  };
  
  export default WorkSliderBtns;