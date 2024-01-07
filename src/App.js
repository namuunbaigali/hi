import React, { useEffect, useState } from "react";
import Hero from "./components/Hero";
// import Navbar from "./Layouts/Navbar";
// import Skills from "./components/Skills";
// import Service from "./components/Services";
// import Projects from "./components/Projects";
// import Testimonials from "./components/Testimonials";
import Hireme from "./components/Hireme";
import Contact from "./components/Contact";
import Aos from "aos";
import "aos/dist/aos.css";
// import Login from "./components/Login";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
      disable: "mobile",
    });
  }, []);

  const handleLogin = () => {
    // Perform your login logic here
    // For simplicity, we'll toggle the login state
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div className="italic">
      {isLoggedIn ? (
        <>
          {/* <Navbar /> */}
          <Hero />
          {/* <Service /> */}
          {/* <Skills /> */}
          {/* <Projects /> */}
          {/* <Testimonials /> */}
          {/* <MyPhotoAlbum /> */}
          <Hireme />
          <Contact />

          {/* <button className="border border-[red] bg-blue-600 p-8">
            hi
          </button> */}
          <footer className="p-3 text-center not-italic">
            <h6 className="mb-3">GARID & NAMUUK</h6>
            <p>Эцсийн хүчээ шавхаад энэ амьдралд чамайг л авч үлдмээр байна.</p>
            <h2> ХАМГИЙН САЙХАН НЬ . . .</h2>
          </footer>
        </>
      ) : (null
        // <Login onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
