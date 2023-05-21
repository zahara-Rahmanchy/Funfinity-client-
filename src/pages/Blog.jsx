import React, {useEffect} from "react";

const Blog = () => {
  useEffect(() => {
    document.title = `Funfinity|Blog`;
  }, []);
  return <div>Blog</div>;
};

export default Blog;
