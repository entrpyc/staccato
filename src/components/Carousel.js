import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./Carousel.scss";

import Slider from "react-slick";
import { settings } from "../helpers/SliderSettings";

import CarouselSlide from "./CarouselSlide"


function Carousel() {

  const text1 = (
    <div className="text">
      <p className="present"><strong>Registration</strong>, <strong>renewal</strong> and <strong>representation</strong> in the procedure for all types of applied and registered industrial property:</p>
      <ul className="gap-large no-bullets flex ai-stretch wrap">
        <li>Trademarks</li>
        <li>Industrial designs</li>
        <li>Inventions</li>
        <li>Useful models</li>
        <li>Geographic indications</li>
        <li>Geographic indications</li>
        <li>Geographic indications</li>
      </ul>
    </div>
  )

  const text2 = (
    <div className="text">
      <blockquote>
        <p className="ta-center i present ">We can assist you through the process of obtaining a Bulgarian visa, Bulgarian residency permit or Bulgarian citizenship.</p>
      </blockquote>
    </div>
  )

  const text3 = (
    <div className="text">
      <blockquote>
        <p className="ta-center i present ">Company registration in Bulgaria and all accompanying services with no complications.</p>
      </blockquote>
    </div>
  )

  return (
    <div className="carousel">
      <Slider {...settings}>
        <CarouselSlide title="INTELLECTUAL PROPERTY" text={text1} />
        <CarouselSlide title="BULGARIAN VISA" text={text2} />
        <CarouselSlide title="COMMERCIAL LAW" text={text3} />
      </Slider>
      <div className="bottom-ribbon">
        <div className="container flex column ai-center">
          <h2>About Us</h2>
          <p className="gap">The company was established in 2010 as a boutique company for private clients, providing <strong className="seo">legal services</strong> in the area of <strong>commercial law</strong>, <strong>real estate</strong>, <strong>visa issues</strong>, <strong>intellectual property rights</strong> and <strong>non-profit associations</strong>.</p>
          <a role="button" href="/" className="gap-large">Contact Us</a>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
