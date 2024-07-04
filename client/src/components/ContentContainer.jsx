import React from "react";
import Title from "./Title";

const ContentContainer = ({ children, title }) => {
  return (
    <div className="container py-4 py-xl-5">
      <div className="row mb-5">
        <Title text={title} />
      </div>
      {children}
    </div>
  );
};

export default ContentContainer;
