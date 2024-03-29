import { content } from "../Content";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import { useState } from "react";

const Testimonials = () => {
  const { Testimonials } = content;
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <section>
      <div className="px-5 md:container pt-14">
        <h2 className="title" data-aos="fade-down">
          {Testimonials.title}
        </h2>
        <h4 className="text-lg text-gray" data-aos="fade-down">
          {Testimonials.subtitle}
        </h4>
        <br />
        <Swiper
          direction={"vertical"}
          pagination={{
            clickable: false,
          }}
          data-aos="fade-up"
          loop={true}
          spaceBetween={40}
          slidesPerView={2}
          onSlideChange={(e) => {
            console.log(e.realIndex);
            setActiveIndex(e.realIndex);
          }}
          modules={[Pagination]}
          className="md:h-[24rem]  h-[40rem] max-w-3xl  "
        >
          {Testimonials.testimonials_content.map((content, i) => (
            <SwiperSlide key={i}>
              <div
                className={` duration-500 bg-bg_light_primary mx-8 border-2 
              p-4 h-[24rem] md:h-[8rem] rounded-2xl flex items-center gap-6
               border-slate-200  md:flex-row flex-col overflow-y-scroll no-scrollbar 
                ${activeIndex !== i && "scale-75 blur-sm   overflow-y-scroll no-scrollbar"}`}
              >
                <img src={content.img} alt="..." className="sticky top-0 items-center h-24 rounded-full xs:sticky " />
                <div>
                  <p className="items-center overflow-y-scroll text-sm sm:text-base md:pt-32 no-scrollbar">{content.review}</p>
                  <br />
                  {/* <h6>{content.name}</h6> */}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
