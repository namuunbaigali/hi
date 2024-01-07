import { content } from "../../../hi/src/Content";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import video from '../assets/videos/mainVideo.mp4'
import ReactPlayer from 'react-player'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

const Projects = () => {
  const { Projects } = content;
  return (
    <section className="bg-bg_light_primary" id="projects">
      <div className="flex flex-col justify-between min-h-screen px-5 md:container pt-14">
      {/* <video
                  width="750"
                  height="16rem"
                  controls
                  className="xs:w-36 xs:h-36 x md:h-[64vh] md:w-[56rem]"
                >
                  <source src="https://www.youtube.com/watch?v=my6jVptuYRw" type="video/mp4" />
                  <source
                    src="https://www.youtube.com/watch?v=my6jVptuYRw"
                    type="video/otherFormat"
                  />
                </video> */}
        <div>
          <h2 className="title" data-aos="fade-down">
            {Projects.title}
          </h2>
          <h4 className="subtitle" data-aos="fade-down">
            {Projects.subtitle}
          </h4>
          <br />
        </div>
        <div className="flex flex-col-reverse items-center gap-5 lg:flex-row">
          <img
            src={Projects.image}
            alt="..."
            data-aos="fade-right"
            className=" min-w-[28rem] max-w-sm md:block  max-h-md"
          />
       
          <Swiper
            pagination={{
              clickable: true,
            }}
            data-aos="fade-left"
            spaceBetween={20}
            modules={[Pagination]}
            className="self-start max-w-xs pb-16 rounded-3xl drop-shadow-primary"
          >
            {Projects.project_content.map((content, i) => (
              <SwiperSlide
                key={i}
                className="bg-white rounded-3xl p-5 border-b-8 border-[#FAF9FD] h-fit"
              >
                <img src={content.image} alt="..." />
                {/* <div className="flex flex-col gap-1 mt-2">
                  <h5 className="font-bold font-Poppins">{content.title}</h5>
                  <button className="self-end font-bold text-gray">
                    READ MORE
                  </button>
                </div> */}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Projects;
