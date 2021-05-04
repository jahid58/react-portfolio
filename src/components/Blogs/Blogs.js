import React, { useEffect, useState } from "react";
import { blogsData } from "../../fakeData";
import Blog from "../Blog/Blog";
import "./Blogs.css";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    setBlogs(blogsData);
  });
  return (
    <div>
      <div className="blogs__container text-center">
        <div className="blogs__heading p-5">
          <h1>BLOGS</h1>
          <h5></h5>
        </div>
        <div className="row">
          {blogs.length && blogs.map((blog) => <Blog blog={blog}></Blog>)}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
