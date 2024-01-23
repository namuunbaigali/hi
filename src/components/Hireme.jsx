import { useState } from "react";
import { content } from "../Content";
import Modal from "react-modal";
import TravelPhoto from "./photos/TravelPhotos";
import Hero_person from "../assets/images/Hireme/person.png";
// import Hero_person2 from "../assets/images/Hero/person2.png";

// const customStyles = {
//   content: {
//     top: "50%",
//     left: "47%",
//     right: "auto",
//     bottom: "auto",
//     marginRight: "-50%",
//     transform: "translate(-50%, -50%)",
//     width: "90%",
//     maxWidth: "23rem",
//     maxHeight: "35rem",
//     overflow: "auto",
//   },
//   overlay: {
//     zindex: 3500,
//     padding: "2rem",
//   },
//   "@media (max-width: 600px)": {
//     content: {
//       width: "100%", // Adjust width for smaller screens
//       maxHeight: "70vh", // Adjust maximum height for smaller screens
//     },
//   },
// };
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
    maxHeight: "23rem",
    height: "90%",
  },
  overlay: {
    padding: "2rem",
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
        <p>
          Энэ захиаг бичнэ гэж бодсонгүй ээ ... Гэхдээ ингэж хичээсэн project -
          ний төгсгөлд ийм юм хийнэ гэж хэн ч санах билээ дээ гунигтай юм. Чамд
          үнэхээр урам хугарч итгэл алдарлаа ... Чи намайг дахин нэг удаа аллаа
          ... Чи чадлаа чиний төлөө бүгдийг хийж чадах атгахан зүрхийг минь чи
          зогсоолоо чамайг санахдаа нойргүй хоносон шөнө бүрийн тоогоор чи минь
          жаргаг , чамаар л хоосорч чамаар дүүрдэг сэтгэл минь энэ хүрээд дуусга
          , сайхан хайрыг бүтээх хэцүү ч нураах амархан шүү . Жаргалтай үедээ
          дурсаж хэцүү үедээ мартаарай намайгаа зовож дуусаад явлаа гэж бодье
          чамайгаа жаргал дүүрэн амьдралд очсон гэж тайвширья би . Надгүй
          орчлонг инээж туулна гэж найдаж байгаа шүү муу яваж намайг эргэлзүүлж
          болохгүй шүү . Муу явахыг чинь үзвэл гүйгээд очиж мэднэ энэ сэтгэл .
          Дахиад л хань болох гэж дахиад л түшиг болох гэх байх би ... Тийм
          болохоор мундаг байгаарай . Өрөөлийн өвөрт өнгөрөөсөн жаргалыг чинь
          уучилъя өөрөөс чинь явсан намайгаа чи минь уучлаарай . Их гомдлийн ард
          үг ховор гардаг бололтой ... Энэ л нэрийг чинь хайрлаж явсан болохоор
          нэрээ битгий сэвтээгээрэй энэ хүрээд холдож байгаа ч гэсэн энэ
          насандаа холбоотой шүү бидний нэр . Энэ гомдол бас энэ мэдрэмжийг ямар
          үгээр яаж илэрхийлэхийг би даан ч мэдэхгүй юм...
          {/* <p>
            Шөнөжин бодсоны эцэст чамаасаа би явахаар шийдлээ 
            Үнэрийг чинь мартаад 
            Үргээд би одлоо 
            Надаас сайхан нь чамд байдаг юм хойно 
            Надгүй хорвоо чамд зөөлөн байх 

            Гишгэлэх газарт чинь би замхараг
            Гишгэлэх газарт чинь би амилаг

            Хайртай гэдгийг минь чи мэдэх болохоор 
            Хэлэхгүйгээр явсан ч болох байх 
            Харамладаг гэдгийг минь чи мэддэг болохоор 
            Хараад л өнгөрөх байхдаа тлүү нэгэн рүү нь 

            Баяртай хайрт минь Баяртай   

            Үүрээр шүлэглэж чамайгаа санахдаа 
            Үүрдийн жаргалыг л чамд хүссэн шүү ...


            </p> */}
        </p>
        <li className="mt-8 text-green-400 list-none"> -----------------------*-----------------------</li>
        <li className="mt-8 list-none"> Шөнөжин бодсоны эцэст чамаасаа би явахаар шийдлээ</li>
        <li className="list-none"> Үнэрийг чинь мартаад</li>
        <li className="list-none">   Үргээд би одлоо  </li>
        <li className="list-none"> </li>
   
        <li className="list-none"> Надаас сайхан нь чамд байдаг юм хойно</li>
        <li className="list-none"> Надгүй хорвоо чамд зөөлөн байх</li>
        <li className="list-none"></li>
        <li className="list-none"> Гишгэлэх газарт чинь би замхараг</li>
        <li className="list-none"> Гишгэлэх газарт чинь би амилаг</li>
        <li className="list-none">{`                               `} </li>

        <li className="list-none">Хайртай гэдгийг минь чи мэдэх болохоор</li>
        <li className="list-none">Хэлэхгүйгээр явсан ч болох байх </li>
        <li className="list-none"> Харамладаг гэдгийг минь чи мэддэг болохоор</li>
        <li className="list-none">Хараад л өнгөрөх байхдаа илүү нэгэн рүү нь</li>
        <li className="list-none">{`                               `} </li>

        <li className="list-none"> Баяртай хайрт минь Баяртай </li>
        <li className="list-none">{`                               `} </li>

        <li className="list-none"> Үүрээр шүлэглэж чамайгаа санахдаа</li>
        <li className="list-none"> Үүрдийн жаргалыг л чамд хүссэн шүү ...</li>

        

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
