import React from "react";
import PhotoAlbum from "react-photo-album";
import img1 from "../../assets/albumPhoto/img1.JPG";
import img2 from "../../assets/albumPhoto/img2.JPG";
import img3 from "../../assets/albumPhoto/img3.JPG";
import img4 from "../../assets/albumPhoto/img4.JPG";
import img5 from "../../assets/albumPhoto/img5.JPG";
import img6 from "../../assets/albumPhoto/img6.JPG";
import img7 from "../../assets/albumPhoto/img7.JPG";
import img8 from "../../assets/albumPhoto/img8.jpg";
import img9 from "../../assets/albumPhoto/img9.jpg";
import img10 from "../../assets/albumPhoto/img10.jpg";
import img11 from "../../assets/albumPhoto/img11.jpg";
import img12 from "../../assets/albumPhoto/img12.JPG";
import img13 from "../../assets/albumPhoto/img13.png";
import img14 from "../../assets/albumPhoto/img14.png";
import img15 from "../../assets/albumPhoto/img15.png";
import img16 from "../../assets/albumPhoto/img16.png";
import img17 from "../../assets/albumPhoto/img17.png";
import img18 from "../../assets/albumPhoto/img18.png";
import img19 from "../../assets/albumPhoto/img19.png";
import img20 from "../../assets/albumPhoto/img20.png";
import img21 from "../../assets/albumPhoto/img21.png";
import img22 from "../../assets/albumPhoto/img22.png";
import img23 from "../../assets/albumPhoto/img23.png";
import img24 from "../../assets/albumPhoto/img24.png";
import img25 from "../../assets/albumPhoto/img25.png";
import img26 from "../../assets/albumPhoto/img26.png";
import img27 from "../../assets/albumPhoto/img27.jpg";
import img28 from "../../assets/albumPhoto/img28.jpg";
import img29 from "../../assets/albumPhoto/img29.jpg";

const album = [
    {
      id: 1,
      src: img1,
      alt: "Image 1",
      width: 600,
      height: 820,
    },
    {
      id: 2,
      src: img2,
      alt: "Image 2",
      width: 600,
      height: 820,
    },
    {
      id: 3,
      src: img3,
      alt: "Image 3",
      width: 600,
      height: 820,
    },
    {
      id: 4,
      src: img4,
      alt: "Image 1",
      width: 600,
      height: 820,
    },
    {
      id: 5,
      src: img5,
      alt: "Image 2",
      width: 600,
      height: 820,
    },
    {
      id: 6,
      src: img6,
      alt: "Image 6", width: 600, height: 820
    },
    {
      id: 7,
      src: img7,
      alt: "Image 7", width: 600, height: 750
    },
    {
      id: 8,
      src: img8,
      alt: "Image 8", width: 600, height: 820
    },
    {
      id: 9,
      src: img9,
      alt: "Image 9", width: 600, height: 820
    },
    {
      id: 10,
      src: img10,
      alt: "Image 10", width: 600, height: 820
    },
    {
      id: 11,
      src: img11,
      alt: "Image 11",
      width: 800,
      height: 600,
    },
    {
      id: 12,
      src: img12,
      alt: "Image 12",
      width: 800,
      height: 600,
    },
  
    {
      id: 13,
      src: img13,
      alt: "Image 13",  width: 600, height: 750
    },
    {
      id: 14,
      src: img14,
      alt: "Image 14", width: 800, height: 600
    },
    {
      id: 15,
      src: img15,
      alt: "Image 15", width: 600, height: 750
    },
    {
      id: 16,
      src: img16,
      alt: "Image 16", width: 600, height: 750
    },
    {
      id: 17,
      src: img17,
      alt: "Image 17", width: 800, height: 600
    },
    {
      id: 18,
      src: img18,
      alt: "Image 18", width: 600, height: 750
    },
    {
      id: 19,
      src: img19,
      alt: "Image 19", width: 600, height: 750
    },
    {
      id: 20,
      src: img20,
      alt: "Image 20", width: 600, height: 750
    },
    {
      id: 21,
      src: img21,
      alt: "Image 21", width: 600, height: 750
    },
    {
      id: 22,
      src: img22,
      alt: "Image 22", width: 600, height: 750
    },
    {
      id: 23,
      src: img23,
      alt: "Image 23", width: 600, height: 750
    },
    {
      id: 24,
      src: img24,
      alt: "Image 24", width: 600, height: 750
    },
    {
      id: 25,
      src: img25,
      alt: "Image 25", width: 600, height: 750
    },
    {
      id: 26,
      src: img26,
      alt: "Image 26", width: 600, height: 750
    },
    {
      id: 27,
      src: img27,
      alt: "Image 27", width: 600, height: 750
    },
    {
      id: 28,
      src: img28,
      alt: "Image 28", width: 600, height: 750
    },
    {
      id: 29,
      src: img29,
      alt: "Image 29", width: 800, height: 600
    },
  ];

const TravelPhoto = () => {
    return (
      <div className="">
        <h1> </h1>
        <PhotoAlbum layout="columns" photos={album} />
      </div>
    );
  };

  export default TravelPhoto