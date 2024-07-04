import React from "react";
import Title from "./Title";

const FormContainer = ({ children, title }) => {
  return (
    <section className="position-relative py-4 py-xl-5">
      <div className="container position-relative">
        <Title text={title} />
        <div className="row d-flex justify-content-center">
          <div className="col-md-8 col-lg-6 col-xl-5 col-xxl-4">
            <div className="card mb-5">
              <div className="card-body p-sm-5">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormContainer;
