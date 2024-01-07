// import images
import Hero_person from "./assets/images/Hero/person.png";

import figma from "./assets/images/Skills/figma.png";
import sketch from "./assets/images/Skills/sketch.png";
import ps from "./assets/images/Skills/ps.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import python from "./assets/images/Skills/python.png";

import services_img1 from "./assets/images/Services/img1.jpg";
import services_img2 from "./assets/images/Services/img2.jpg";
import services_img3 from "./assets/images/Services/img3.png";
import services_img4 from "./assets/images/Services/img4.jpg";
import services_img5 from "./assets/images/Services/img5.jpg";
import services_img6 from "./assets/images/Services/img6.png";
import services_img7 from "./assets/images/Services/img7.png";
import services_img8 from "./assets/images/Services/img8.png";
import services_img9 from "./assets/images/Services/img9.png";
import services_img10 from "./assets/images/Services/img10.png";
import services_img11 from "./assets/images/Services/img11.png";
import services_img12 from "./assets/images/Services/img12.jpg";
import services_img13 from "./assets/images/Services/img13.jpg";
import services_img14 from "./assets/images/Services/img14.jpg";
import services_img15 from "./assets/images/Services/img15.jpg";
import services_img16 from "./assets/images/Services/img16.png";
import services_img17 from "./assets/images/Services/img17.png";
import services_img18 from "./assets/images/Services/img18.png";

// import services_video1 from "./assets/videos/video1.mp4";
// import services_video2 from "./assets/videos/video2.mp4";
// import services_video3 from "./assets/videos/video3.mp4";
// import services_video4 from "./assets/videos/video4.mp4";
// import services_video5 from "./assets/videos/video5.mp4";
// import services_video6 from "./assets/videos/video6.mp4";
// import services_video5 from "./assets/videos/video5.mp4";
// import services_video6 from "./assets/videos/video6.mp4";
// import services_video9 from "./assets/videos/video9.mp4";
// import services_video7 from "./assets/videos/video7.mp4";


import project1 from "./assets/images/Projects/img1.png";
import project2 from "./assets/images/Projects/img2.png";
import project3 from "./assets/images/Projects/img3.png";
import person_project from "./assets/images/Projects/header.png";

import avatar1 from "./assets/images/Testimonials/avatar1.jpg";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";
import avatar5 from "./assets/images/Testimonials/avatar5.png";
import avatar6 from "./assets/images/Testimonials/avatar6.jpg";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// \nХайртай гэж олон хэлэх дургүй ээ би .\nХарин хайртай даа гэж олон бодох дуртай .\nГанц амьдрахад ганц эр ч ихдэм санагддаг  .\nГанц эр нь чи байхад л хангалттай .\nҮлдсэн насанд минь өөрийгөө тамгалаад үлдээсэн мэт. . .
import { FcLandscape } from "react-icons/fc";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram, BsFacebook } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#login",
      icon: TbSmartHome,
    },
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Бидний хайрын түүх",
    firstName: "GARID",
    LastName: "NAMUUK",
    btnText: " ",
    image: Hero_person,
    hero_content: [
      {
        count: "2 ",
        text: "Үерхэж эхлээд хэдийн 2 жил 4 сарыг ардаа үджээ бид.",
      },
      {
        count: "11 ЖИЛ",
        text: "Маш урт хугацааны турш нэгнээ ойлгож ярилцаж ганцаардах үед нь түшиг болж өвдөх үед нэгнээ халамжилж байж.",
      },
    ],
  },
  skills: {
    title: "Бидний хамтдаа хийх гэж төлөвлөсөн зүйлс ",
    subtitle: "2024",
    skills_content: [
      {
        name: "SkyResort ",
        para: "Цастай , өвөлтэй холбоотой дурсамжаа нэмэх . ",
        logo: figma,
      },
      {
        name: "Аялал ",
        para: "Очиж үзээгүй олон сонирхолтой газар очих ,хамт хол замыг туулах .",
        logo: nodejs,
      },
      {
        name: "Уран зургын кафе",
        para: "Хамтдаа зураг зурах , зурсан зургаа ханандаа өлгөх",
        logo: ps,
      },
      {
        name: "Студид зургаа даруулах",
        para: "Чанартай бас том хэмжээний олон гоё зурагтай болох ",
        logo: reactjs,
      },
      {
        name: "Шивээс",
        para: "Хос шивээс хийлгээд энэ насаа дуустал хосоороо байх ",
        logo: sketch,
      },
      {
        name: "Python",
        para: "Lorem ipsum text  dummy",
        logo: python,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Бидний хамтдаа хийдэг зүйлс",
    subtitle: "2021-2023",
    service_content: [
      {
        title: "Аялал",
        para: "Чөлөөт цаг заваа аль болох хоёулхнаа агаарт гарч ярилцаж алхахыг илүүд үздэг . Байгальд ээлтэй хосууд жүү",
        logo: services_img1,
      },
      {
        title: "Сээр цохих наадгай",
        para: "Энэ спортод гүнжтэн эхлээд дургүй байсан ч сүүлдээ хөөрхөн Гарьдыг яваж үзнэ гэж уурладаг болсон . Нэгнийхээ дуртай спортыг дэмждэг хос",
        logo: services_img2,
      },
      {
        title: "Сээр цохих наадгай",
        para: "Энэ спортод гүнжтэн эхлээд дургүй байсан ч сүүлдээ хөөрхөн Гарьдыг яваж үзнэ гэж уурладаг болсон . Нэгнийхээ дуртай спортыг дэмждэг хос",
        logo: services_img3,
      },
      {
        title: "PhotoShop Editing",
        para: "",
        logo: services_img4,
      },
      {
        logo: services_img5,
      },
      {
        logo: services_img6,
      },
      {
        logo: services_img7,
      },
      {
        logo: services_img8,
      },
      {
        logo: services_img9,
      },
      {
        logo: services_img7,
      },
      {
        logo: services_img11,
      },
      {
        logo: services_img12,
      },
      {
        logo: services_img13,
      },
      {
        logo: services_img14,
      },
      {
        logo: services_img15,
      },
      {
        logo: services_img16,
      },
      {
        logo: services_img17,
      },
      {
        logo: services_img18,
      },
      // {
      //   video: services_video1,
      // },
      // {
      //   video: services_video2,
      // },
      // {
      //   video: services_video3,
      // },
      // {
      //   video: services_video4,
      // },
      // {
      //   video: services_video5,
      // },
      // {
      //   video: services_video6,
      // },
      // {
      //   video: services_video7,
      // },
      // {
      //   video: services_video8,
      // },
      // {
      //   video: services_video9,
      // },
      // {
      //   video: services_video10,
      // },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "test ",
        image: project1,
      },
      {
        title: " test ",
        image: project2,
      },
      {
        title: "est",
        image: project3,
      },
    ],
  },
  Testimonials: {
    title: "Урмын үг ",
    subtitle:
      " \nХайртай гэж олон хэлэх дургүй ээ би .\nХарин хайртай даа гэж олон бодох дуртай .\nГанц амьдрахад ганц эр ч ихдэм санагддаг  .\nГанц эр нь чи байхад л хангалттай .\n Чи яг л үлдсэн насанд минь өөрийгөө тамгалаад үлдээсэн мэт. . .",
    testimonials_content: [
      {
        review:
          "“Чи маш хөдөлмөрч ядарсан ч , өлссөн ч , даарсан ч хичээдэг үргэлж хичээдэг . Чамаасаа би хөдөлмөрч шаргуу занг сурсан анх ажил хийж үзээгүй бараг үзэх ч хүсэлгүй хүн байсан би чиний яаж хичээж мундаг байгааг хараад ажил хайж хийж эхлэсэн . Чи яаж ч ядарсан намайг ажил хийгээд  ядарсан уу гээд үргэлж л намайг анхаарч халамжилдаг үнэхээр чиний дэргэд л би нялхарч ядарлаа гэж хэлээ хазаж чадах юм билээ. Миний баатар чиний дэргэд би яг ээж аавтайгаа байгаа юм шиг юунд  ч санаа зоволгүй эрх дураараа байж чаддаг. Одооноос хамтдаа хичээж бүгдийг өөрсдийн хүчээрээ бүтээх болно оо . ”",
        img: avatar1,
        name: "JOHN DOE",
      },
      {
        review:
          "“Чи маш ёс суртахуунтай хүмүүжилтэй юм билээ . 2 жилийн хугацаанд миний хоёр эгчийг өөрийн төрсөн эгч шиг хүндэлж байдаг бахархмаар . Бас яг л миний хүсдэг Монгол ёс жаягаа мэддэг хүнтэй яаж мэндлэх айлд ороод хаана яаж суух гээд миний багаасаа бодож мөрөөдөж явсан Монгол эр хүн . Яг энэ цаг мөчид ямар их хайр дүүрсэн мэдрэмж төрж байна аа хальж цалгисан сэтгэлээс уран цэцэн үг гарахгүй юм . Миний төсөөлж явдаг хүний хань нөхөр , гэрийн эзэн , үрсийн минь аав юм шүү нандин минь... ”",
        img: avatar2,
        name: "Tom Alex",
      },
      {
        review:
          "“Зөвхөн чиний байгаа байдал л надтай яг тохирдог чиний цэвэрч нямбай байдал надад таалагддаг . Чамаас өөр хүн манай гэрт ороход манайд ч надад ч тохирохгүй юм билээ. Чи манайд бие засчихаж ч чаддаггй нь инээдтэй ч зөвхөн тэр үйлдэлээс чинь намайг бас эмэгтэй хүмүүсийг хүндэлдэг хүндлэл чинь харагддаг. Орой орохоор уурладаг болохоор чи хаалгаа маш хичээнгүй онгойлгож бас хаадаг энэ үйлдэл бүр чиний хувьд маш жижиг зүйл ч гэсэн миний хувьд маш том зүйл бүр үнэхээр чамайг сонгох шалтгааны нэгээхэн хэсэг. Намайг ойлгож бас хүндэлж байгаа хэлбэр гэж боддог. <3 ”",
        img: avatar3,
        name: "Johnny",
      },
      {
        review:
          "“ Хичнээн ч хугацаа өнгөрсөн миний дурласан залуу хамгийн сайхан нь хэвээрээ . Хамгийн царайлаг , хамгийн лаг , хамгийн уйланхай , хамгийн зөөлөн . Миний хайрласан тэр хүн бүхний утга учир хэвээрээ байна . Цаг хугацааны сүүдэрт төрх нь өртлөө ч ман чанар нь үлдэнэ гэдэгт би итгэдэг .  ”",
        img: avatar4,
        name: "ROBBIN",
      },
      {
        review:
          "“ Нас чацуу хэрнээ чи хэзээд ээж аав шиг ах эгч шиг ямар нөмөр нөөлөгтэй гэж бодож байна . Хэн ч намайг тэгэж халамжилж буруу эрхлээд уйлаад сууж байхад намайг тэвэрч аргадахгүй байх . Чиний дэргэд байдаг би яг 16 настай байхаа шилжилтйин насны хүүхэд шиг ойлгомжгүй дураараа ааштай бас эрхийн балай миний байгаа байдал 16 магадгүй тэрнээс ч бага байх . Хүнийг яаж тэгэж хайрладаг байна аа . Чамаараа хайрлуулж үзсэн би азтай хүн хайр гэдгийг мэдрүүлээгүй ч мэдэрсэн азтайгаас азтай хүн дээ би <3  ”",
        img: avatar5,
        name: "ROBBIN",
      },
      {
        review:
          "“ Ямар чухал бас нандин юм дээ чи минь чамайгаа байхгүй байна  гэж бодох төдийд л цэлмэг байсан тэнгэр бүрхээд л ирэх юм . Чи минь надад дэлхий юм байна . Чамайгаа байхгүй байна гэж бодох төдийд л өдөр хэрнээ шөнө болчих юм . Чи минь миний нар юм байна . Чамайгаа байхгүй байна гэж бодох төдийд л уйлчих юм . Чи минь миний нүд юм байна . Чамайгаа байхгүй байна гэж бодох төдийд л хоосорчих юм . Чи минь л дан ганцаар намайг дүүргэдэг юм байна . Чамайг байхгүй байна гэж бодох төдийд л ганцаардах юм . Чи минь л миний энэхэн биений нөгөө тал эгэлхэн амьдралын минь утга учир юм байна.  ”",
        img: avatar6,
        name: "ROBBIN",
      },
    ],
  },
  Hireme: {
    title: "Зургийн булан",
    subtitle: "Бидний хамтдаа өнгөрүүлсэн цаг хугацаа",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "Чамтайгаа байсан цаг хугацаа ямар нандин бас үнэтэй байсныг өдөр хоног бүр ойлгуулж байна нандин минь .\nЭнэ л зургууд хамт байсан цаг хугацаа бүрийг минь эргэн сануулж дурсамж бүрийг нүднээ тодхон харуулах юм .\nЧамдаа ямар их хайртай юм дээ би . . .",
    btnText: "Дурсамжаараа аялая",
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",

    social_media: [
      {
        text: "Л . Ганбагана",
        icon: BsFacebook,
        link: "https://www.facebook.com/ganbagana.lhamdulam",
      },
      {
        text: "Battulga Namuunbaigali",
        icon: BsFacebook,
        link: "https://www.facebook.com/profile.php?id=100011411903547",
      },
      {
        text: "_nmunbaigli",
        icon: BsInstagram,
        link: "https://www.instagram.com/_nmunbaigli/?fbclid=IwAR3iINaSHNflORAy8StgUFLMKpaSitxHQo_6Efm-iGUC_YhHO7kyzmK9qbg",
      },
      {
        text: "codeaprogram",
        icon: BsInstagram,
        link: "https://www.instagram.com/codeaprogram/",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};
