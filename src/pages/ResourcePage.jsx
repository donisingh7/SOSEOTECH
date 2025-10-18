// src/pages/ResourcePage.jsx

import React from "react";
import BlogPosts from "./Blogs";
import Newsletters from "./Newsletter";
import CaseStudies from "./CaseStudies";

const ResourcePage = () => {
  return (
    <div className="bg-white min-h-screen">
          <Newsletters />
          <BlogPosts />
          <CaseStudies />
    </div>
  );
};

export default ResourcePage;
