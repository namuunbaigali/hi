import { useState } from "react";
import { content } from "../../../hi/src/Content";
import Modal from "react-modal";
import TravelPhoto from "./photos/TravelPhotos";
import Hero_person from "../assets/images/Hireme/person.png";
// import Hero_person2 from "../assets/images/Hero/person2.png";


const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "90%", // Use a percentage for width
    maxWidth: "110rem", // Set a maximum width for larger screens
    maxHeight: "80vh", // Use viewport height for maximum height
    overflow: "auto", // Enable scrolling if the content overflows
  },
  overlay: {
    padding: "2rem",
  },
  "@media (max-width: 600px)": {
    content: {
      width: "100%", // Adjust width for smaller screens
      maxHeight: "70vh", // Adjust maximum height for smaller screens
    },
  },
};


Modal.setAppElement("#root");

const Hireme = () => {
  const { Hireme } = content;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <section className="bg-bg_light_primary">
      <div className="md:container px-5 pt-14 ">
        <h2 className="title italic" data-aos="fade-down">
          {Hireme.title}
        </h2>
        <h4 className="subtitle italic" data-aos="fade-down">
          {Hireme.subtitle}
        </h4>
        <br />
        <div className="flex items-center md:flex-row flex-col-reverse ">
          <img
            src={Hero_person}
            alt="..."
            data-aos="fade-right"
            className="max-w-sm md:block hidden max-h-md"
          />
          <img
            src={Hero_person}
            data-aos="fade-up"
            alt="..."
            className="max-w-sm md:hidden max-h-md"
          />
          <div
            data-aos="fade-left"
            className="border-2 border-dark_primary max-w-sm
           p-6 shadow-sm rounded-xl rounded-br-[8rem] sm:min-w-[22rem]"
          >
            <p className="leading-7 italic">{Hireme.para}</p>
            <br />
            <button
              className="btn  bg-dark_primary text-white"
              onClick={() => openModal()}
            >
              {Hireme.btnText}
            </button>
          </div>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <TravelPhoto />
        <div className="flex mt-8 justify-end">
          <button onClick={() => closeModal()} className="btn">
            Xaax
          </button>
        </div>
      </Modal>
    </section>
  );
};

export default Hireme;
