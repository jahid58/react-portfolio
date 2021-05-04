import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Blog = (props) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const { subject, image } = props.blog;
  return (
    <div className="col-md-3 ">
      <div className="blog shadow rounded" data-aos="fade-left">
        <img src={image} alt=" this is image" className="img" />
        <div className="blog__info">
          <h6 className="m-2">{subject}</h6>
          <a className="mb-2" href="">
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

export default Blog;
