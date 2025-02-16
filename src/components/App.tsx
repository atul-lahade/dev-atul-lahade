import "../assets/styles/animate.min.css";
import "../assets/styles/backToTop.css";
import "../assets/styles/flaticon_gerold.css";
import "../assets/styles/font-awesome-pro.min.css";
import "../assets/styles/magnific-popup.css";
import "../assets/styles/nice-select.css";
import "../assets/styles/odometer-theme-default.css";
import "../assets/styles/owl.carousel.min.css";
import "../assets/styles/style.css";
import "../assets/styles/swiper.min.css";

import Blog from "./Blog";
import Contact from "./Contact";
import Experience from "./Experience";
import Footer from "./Footer";
import HeaderSticky from "./HeaderSticky";
import Hero from "./Hero";
import MainHeader from "./MainNavBar";
import Portfolio from "./Portfolio";
import Services from "./Services";
import Skills from "./Skills";
import Testimonials from "./Testimonials";
import ThemeController from "./ThemeController";

export default function App() {

  return (
    <>
      <ThemeController/>
      <div className="progress-wrap" id="scrollUp">
        <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
      </div>
      <MainHeader />
      <HeaderSticky/>
      <div className="main-wrapper">
        <Hero />
        <Services />
        <Portfolio />
        <Experience />
        <Skills />
        <Testimonials />
        <Blog />
        <Contact />
      </div>
      <Footer />
    </>
  )
}
