import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

import { AppWrap } from "../../wrapper";
import { urlFor, client } from "../../client";

import "./Testimonial.css";

const Testimonials = () => {
  const [brands, setBrands] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const query = '*[_type == "testimonials"]';
    const brandsQuery = '*[_type == "brands"]';

    client.fetch(query).then((data) => {
      // console.log(data);
      setTestimonials(data);
    });

    client.fetch(brandsQuery).then((data) => {
      // console.log(data);
      setBrands(data);
    });
  }, []);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  const test = testimonials[activeIndex];
  return (
    <>
      <Helmet>
        <title>Testimonials</title>
        <meta name="description" content="Testimonials" />
      </Helmet>
      {testimonials.length && (
        <>
          <div className="app__testimonial-item app__flex">
            <img src={urlFor(test.imageurl)} alt="testimonial" />
            <div className="app__testimonial-content">
              <p className="p-text">{test.feedback}</p>
              <div>
                <h4 className="bold-text">{test.name}</h4>
                <h5 className="p-text">{test.company}</h5>
              </div>
            </div>
          </div>

          <div className="app__testimonial-btns app__flex">
            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  activeIndex === 0 ? testimonials.length - 1 : activeIndex - 1
                )
              }
            >
              <HiChevronLeft />
            </div>
            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  activeIndex === testimonials.length - 1 ? 0 : activeIndex + 1
                )
              }
            >
              <HiChevronRight />
            </div>
          </div>
        </>
      )}

      <div className="app__testimonial-brands app__flex">
        {brands.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: "tween" }}
            key={brand._id}
          >
            <img src={urlFor(brand.imgUrl)} alt={brand.name} />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(Testimonials, "testimonial", "app__whitebg");
