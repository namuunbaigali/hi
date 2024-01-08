import React from "react";
import Modal from "react-modal";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import ReactPlayer from "react-player";

import "swiper/css";
import "swiper/css/pagination";

import { content } from "../App";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "23rem",
    width: "90%",
  },
  overlay: {
    padding: "2rem",
  },
};

Modal.setAppElement("#root");

const Services = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [selectSkill, setSelectSkill] = React.useState(null);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const { services } = content;

  return (
    <section id="services">
      <div className="px-5 md:container py-14">
        <h2 className="title" data-aos="fade-down">
          {services.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {services.subtitle}
        </h4>
        <br />

        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
        >
          {services.service_content.map((content, i) => (
            <SwiperSlide key={`services ${i + 2}`}>
              {content.logo && (
                <img
                  src={content.logo}
                  alt={`Slide ${i + 1}`}
                  className="xs:w-36 xs:h-36 x md:h-[64vh] md:w-[56rem]"
                />
              )}
              {content.video && (
                <video
                  width="750"
                  height="16rem"
                  controls
                  className="xs:w-36 xs:h-36 x md:h-[64vh] md:w-[56rem]"
                >
                  <source src={content.video} type="video/mp4" />
                  <source
                    src={content.otherVideoFormat}
                    type="video/otherFormat"
                  />
                </video>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Services;
