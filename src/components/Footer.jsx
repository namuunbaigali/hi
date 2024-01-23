import React from "react";
import Modal from "react-modal";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import ReactPlayer from "react-player";

import "swiper/css";
import "swiper/css/pagination";

import { content } from "../Content";

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

const Footer = () => {
    const { Footer } = content;
    return(
        <section className="bg-bg_light_primary" id="projects">
 <p className="text-center xs:font-light xs:text-sm" data-aos="fade-down">
            {Footer.text}
          </p>
</section>
    )
}

export default Footer