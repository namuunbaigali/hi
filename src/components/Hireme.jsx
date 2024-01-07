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
      <div className="px-5 md:container pt-14 ">
        <h2 className="italic title" data-aos="fade-down">
          {Hireme.title}
        </h2>
        <h4 className="italic subtitle" data-aos="fade-down">
          {Hireme.subtitle}
        </h4>
        <br />
        <div className="flex flex-col-reverse items-center md:flex-row ">
          <img
            src={Hero_person}
            alt="..."
            data-aos="fade-right"
            className="hidden max-w-sm md:block max-h-md"
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
            <p className="italic leading-7">{Hireme.para}</p>
            <br />
            <button
              className="text-white btn bg-dark_primary"
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
        <h7>
          Сайн уу ? Миний үр ээ . Жаргаах зүрхний наран минь чамайгаа ямар их
          санаж байгааг чи минь мэддэг ч болоосой. Чамайгаа дэргэд байхад ямар
          сайхан байсан гэдгийг хожуу ойлгосон би толгой руу гаа цохих ч
          багадмаар санагдана надад . Бидний бяцхан хийгээд хамгийн том мөрөөдөл
          бол чи манай хүү болж би танай охин л болох туйлын ганц л хүсэлтэй .
          Тэр хүсэл мөрөөдөлөө биелүүлэхийн төлөө төдийгөөс өдийг хүртэл ямар их
          зүйл туулсан юмдээ хамтдаа. Чинийхээ дэргэд зовсон гэж хэлэхгүй ээ яаж
          болох юм бэ . Охин бүрийн хүсдэг хайраар хайрлуулсан юмсан дэргэд чинь
          байхдаа хошуугаа тэр доор унжуулчихаад л гоншигнодог байж билээ хмм
          чинийхээ хайр бас халамжийг ямар их санаж байна аа . Чамайг явсанаас
          хойш нуурандаа үлдсэн доголон хун шиг л тэнгэрийн хаяа ширтээд суудаг
          сан . Аз жаргал гэж юу вэ гэвэл ямар ч эргэлзээгүй чамайгаа л гэж
          хэлнэ . Чамтай хэрэлдэх үедээ хааяа хэргээс унгадаг байж билээ
          тэгэхээр чи инээгээд шоолхоор чинь би битгий шоолоод бай гээлл эрхлээл
          эвлэрчихнэ хаха. Би чамайг өглөө босохдоо өдөр ажил дээрээ орой бүр
          ярилт байхгүй их санадаг . Яаж мартаж чадах билээ дээ тэр ихийг хайрыг
          нулимс болгочихоод яаж харамсахгүй байж чадах билээ дээ .
        </h7>
        <div className="flex justify-end mt-8">
          <button onClick={() => closeModal()} className="btn">
            Xaax
          </button>
        </div>
      </Modal>
    </section>
  );
};

export default Hireme;
