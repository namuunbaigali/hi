// import content
import { useEffect, useState } from "react";
import { content } from "../Content";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "60%",
    left: "49%",
    right: "50%",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "90%",
    maxWidth: "23rem",
    maxHeight: "45rem",
    overflow: "auto",
  },
  overlay: {
    zindex: 9000,
    padding: "2rem",
  },
  "@media (max-width: 600px)": {
    content: {
      top: "60%",
      left: "49%",
      right: "50%",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "90%",
      maxWidth: "23rem",
      maxHeight: "45rem",
      overflow: "auto",
      width: "100%",
      maxHeight: "30vh",
    },
  },
};

const Hero = () => {
  const { hero } = content;

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <section id="home" className="overflow-hidden">
      <div className="relative flex flex-col-reverse items-center justify-center min-h-screen md:flex-row md:items-end">
        <div
          data-aos="slide-left"
          data-aos-delay="1200"
          className="absolute top-0 bottom-0 right-0 w-8/12 h-full md:w-4/12 bg-primaryLinear -z-10"
        >
          <h1 className="rotate-90 absolute top-[30%] right-[-15%] text-[#EAF2FA]">
            {hero.firstName}{" "}
            <span className="text-dark_primary">{hero.LastName}</span>
          </h1>
        </div>

        {/* first col */}
        <div className="px-6 pt-5 pb-16" data-aos="fade-down">
          <h2>{hero.title}</h2>
          <br />
          <div className="flex justify-end">
            <button className="btn" onClick={() => openModal()}>
              {hero.btnText}
            </button>
          </div>
          <div className="flex flex-col gap-10 mt-10">
            {hero.hero_content.map((content, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 300}
                className={`flex items-center w-80 gap-5
            ${i === 1 && " flex-row-reverse text-right"}  `}
              >
                <h3>{content.count}</h3>
                <p>{content.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* sec col */}
        <div className="md:h-[56rem] h-[34rem]">
          <img
            src={hero.image}
            data-aos="slide-up"
            alt="..."
            className="object-cover h-full "
          />
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <p className="text-xl">
          Сайн уу ? Миний үр ээ . Жаргаах зүрхний наран минь чамайгаа ямар их
          санаж байгааг чи минь мэддэг ч болоосой. Чамайгаа дэргэд байхад ямар
          сайхан байсан гэдгийг хожуу ойлгосон би толгой лугаа цохих ч багадмаар
          санагдана . Бидний бяцхан хийгээд хамгийн том мөрөөдөл бол чи манай
          хүү болж би танай охин л болох туйлын ганц л хүсэлтэй . Тэр хүсэл
          мөрөөдлөө биелүүлэхийн төлөө төдийгөөс өдийг хүртэл ямар их зүйл
          туулсан юмдээ хамтдаа. Чинийхээ дэргэд зовсон гэж хэлэхгүй ээ яаж
          болох юм бэ . Охин бүрийн хүсдэг хайраар хайрлуулсан юмсан . Дэргэд
          чинь байхдаа хошуугаа тэр доор унжуулчхаад л гоншигнодог байж билээ
          хмм чинийхээ хайр бас халамжийг ямар их санаж байна аа . Чамайг
          явснаас хойш нуурандаа үлдсэн доголон хун шиг л тэнгэрийн хаяа ширтээд
          суудаг сан . Аз жаргал гэж юу вэ гэвэл ямар ч эргэлзээгүй чамайгаа л
          гэж хэлнэ . Чамтай хэрэлдэх үедээ хааяа хэргээс унгадаг байж билээ
          тэгэхээр чи инээгээд шоолохоор чинь би битгий шоолоод бай гээл эрхлээл
          эвлэрчихнэ хаха. Би чамайг өглөө босохдоо өдөр ажил дээрээ орой бүр
          ярилт байхгүй их санадаг . Яаж мартаж чадах билээ дээ тэр ихийг хайрыг
          нулимс болгочиход яаж харамсахгүй байж чадах билээ дээ . Хүнийг
          хайрлана гэдэг , хүнээр хайрлуулна гэдэг хүмүүн биеийг олж төрхийн
          хамгийн сайхан нь байх . Охин хүүхэд , эмэгтэй хүн болж төрсөнийх
          чинийхээ энэ их хайр нь дундаас мэндэлсэн бяцхан үрээ дундаа хөтлөөд
          явах туйлын их хүсэлтэй байж билээ . Би загнаж чи өмөөрдөг өөрийг чинь
          өвчсөн юм шиг дуурайсан бяцхан охинтой болохыг , нэгнээ өмөөрөх
          хөөрхөн 2 ихэр хүүтэй болохыг хүсэж билээ . Охины нэрийг чамд даатгаад
          харин хоёр хүүдээ Уудам, Уужим гэж өгнөө гээд боддогдоо . Тэгээд насны
          эцэст хоёулаа модон дундах байшиндаа хүүхдүүдээ бэрүүдээ , хүргэнээ
          хүлээгээд цонхоор ширтээд цайгаа уугаад суухыг хүсдэг . Аа бас 7
          хоногтоо нэг удаа хүүхдүүдийнхээ нэрийг оруулсан уриатай асрамжийн
          газраа очиж хэдий хэвлийгээс минь унаагүй ч гэлээ бяцхан үрсүүдтэйгээ
          өдөржин тоглоно . Тэгээд оройн ирээд чи миний хөл гарыг тослож өгөөд
          харин би ядарсан гэж эрхлээд унтаад өгнө. Хмм яадаг юм чи л миний
          дэргэд байвал 10 настай хүүхэд шиг өтөлж чинийхээ гардээр эцсийн
          амьсгалаа татна . Чи л дэргэд байвал ямар ч зовлонг би зовлон гэж
          бодолгүй ирээдүйнхээ төлөө зүтгэнээ хайрт минь хоёулаад мэдэхгүй бас
          чадахгүй , хүрэхгүй оргил гэж байхгүй ээ эгэл даруухан хэрнээ хүн
          төрлөхтний хамгийн том тансаглал болох хайр дүүрэн гэр бүл , сэтгэлийн
          их диваажинг хамтдаа бүтээнээ . Төрсөн гэрт минь чамайг л ороосой гэж
          нар сарандаа хүртэл залбирдаг шүү . Чамаасаа өөр хэнийг ч хүсэх билээ
          дээ энэ амьдралд алдаж болохгүй энэхэн биенийхээ дутууг минь нөхөж
          дундуурийг нь дүүргэх , үлдсэн амьдралыг минь залуурдах аав шигээ
          хүнийг олсон юмсан би ... Чинийхээ үнэрийг үнэрлэхэд л тайвширдагсан
          зулзаган би чинь энгэрт чинь тэврүүлээд хэвтэхдээ энэ орчлонгын
          хамгийн амар тайван газар хамгийн бөх нойрыг авдаг шүү . Чинийхээ
          энгэрт өөр хүн байхыг харсан тэр өдөр энэ орчлон дээр дахин нэг удаа
          үхэх болно . Чамайгаа өөр хүний өмнө өвдөг сөгдсөн тэр үед би
          сэтгэлдээ үхсэн юм. Амьдарсан шиг амьдархын төлөө урьдаас нэг үхэх
          ёстой хойно чамайгаа уучилсаан би. Алдадгүй эр гэж хаа байхавдээ тийм
          ч учраас чамайгаа уучилсан харин алдаа олон байх ёсүй гэдгийг чи минь
          надаар хэлүүлтгүй мэдэх байхаа . Ухаантайдаа чи минь . Хүрэн зүрхний
          нандин минь , уйлаад очиход тэврээд авах хань минь , унахад минь
          түшээд авах түшиг минь , өвдөхөд минь дагаад өвдөх ижил минь чамайгаа
          эцсийн хүчээ шавхаад авч үлдмээр байна. Мөрөөдсөн бүхэндээ хүрэхийн
          төлөө өнөөдөр намайг уучлаач өнгөрсөн шиг хатуурхалгүй өнөөдөр үхэх юм
          шиг намайг ахин нэг тэврээч . Амьсгал бүрээрээ хайрлая гарын минь хээ
          шиг ганцхан чамайгаа алдахад чинь түших хань чинь болье . Өрх гэрийн
          чинь үүдийг нь татаж өрхийг чинь чангалах гэргий чинь болье . Харин чи
          минь миний идээний дээжээ аягалж хүлээдэг , энгэрийнхэн товчийг хадаж
          хүлээдэг гэрийг минь дүүргэх гэргий заяаг минь түших эр нөхөр минь
          болоорой. Чамдаа би чиний мэдэх хязгаараас их хайртай хайрыг хэмжих
          хэмжүүр үгүй хойно энэхэн биеэ хөрсөнд шингэх хүртэл чамайгаа
          хайрламаар байна . ХАМГИЙН САЙХАН НЬ &#128173;
        </p>
        <div className="flex justify-end mt-8">
          <button onClick={() => closeModal()} className="btn">
            Xaax
          </button>
        </div>
      </Modal>
    </section>
  );
};

export default Hero;
