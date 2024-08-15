// import the banner images
import img1 from "../../assets/banner/1.jpg";
import img2 from "../../assets/banner/2.jpg";
import img3 from "../../assets/banner/3.jpg";
import img4 from "../../assets/banner/4.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

const Banner = () => {
  return (
    <div className="mb-24 z-0 ">
      <Swiper
        loop={true}
        spaceBetween={30}
        centeredSlides={true}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="">
          {" "}
          <div
            className="hero md:min-h-screen"
            style={{ backgroundImage: `url(${img1})` }}
          >
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-3xl mt-28 md:mt-0">
                <h4 className="mb-5 text-white text-xl md:text-2xl lg:text-5xl font-bold">
                Power Up Your Productivity
                </h4>
                <p className="mb-5 text-sm md:text-base lg:text-lg">
                  Join NovaHomes to explore an extensive collection Discover our range of high-performance laptops, designed to meet all your computing needs. Whether youre working, gaming, or creating, our laptops deliver speed and efficiency.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div
            className="hero md:min-h-screen"
            style={{ backgroundImage: `url(${img2})` }}
          >
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-3xl mt-28 md:mt-0">
                <h4 className="mb-5 text-white text-xl md:text-2xl lg:text-5xl font-bold">
                Stay Connected, Anywhere
                </h4>
                <p className="mb-5 text-sm md:text-base lg:text-lg">
                Explore the latest mobile phones that keep you connected on the go. With cutting-edge technology and sleek designs, our phones offer the perfect balance of style and functionality.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div
            className="hero md:min-h-screen"
            style={{ backgroundImage: `url(${img3})` }}
          >
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-3xl mt-28 md:mt-0">
                <h4 className="mb-5 text-white text-xl md:text-2xl lg:text-5xl font-bold">
                Type with Precision
                </h4>
                <p className="mb-5 text-sm md:text-base lg:text-lg">
                Enhance your typing experience with our premium keyboards. From mechanical to wireless options, our keyboards are built for comfort, durability, and accuracy.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div
            className="hero md:min-h-screen"
            style={{ backgroundImage: `url(${img4})` }}
          >
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-3xl mt-28 md:mt-0">
                <h4 className="mb-5 text-white text-xl md:text-2xl lg:text-5xl font-bold">
                Navigate with Ease
                </h4>
                <p className="mb-5 text-sm md:text-base lg:text-lg">
                Get the perfect grip with our ergonomic mice. Designed for precision and comfort, our mice are ideal for both work and play, ensuring smooth navigation every time.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      {/* Custom navigation buttons */}
      <button className="custom-prev absolute bottom-0 md:-bottom-40 transform left-10 md:left-24 bg-transparent text-orange-600 md:text-white  border-2 border-gray-300 shadow-lg cursor-pointer btn w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full flex items-center justify-center transition duration-300 ease-in-out z-10 hover:bg-black hover:bg-opacity-30">
        <FontAwesomeIcon icon={faChevronLeft} className="text-xl" />
      </button>
      <button className="custom-next absolute bottom-0 md:-bottom-40 transform left-28  md:left-56 bg-transparent text-white  border-2 border-gray-300 shadow-lg cursor-pointer  w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full flex items-center btn justify-center transition duration-300 ease-in-out z-10 hover:bg-black hover:bg-opacity-30">
        <FontAwesomeIcon icon={faChevronRight} className="text-xl" />
      </button>
    </div>
  );
};

export default Banner;
