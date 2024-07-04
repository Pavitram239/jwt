import React from "react";

const Product = () => {
  return (
    <div className="col">
      <div className="card">
        <img
          className="card-img-top w-100 d-block fit-cover"
          style={{ height: "200px" }}
          src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png"
        />
        <div className="card-body p-4">
          <h4 className="card-title">Lorem libero donec</h4>
          <p className="card-text">$12</p>
          <div className="d-flex">
            <div className="btn-group w-100 gap-3" role="group">
              <button className="btn btn-outline-primary" type="button">
                Button 1
              </button>
              <button className="btn btn-outline-secondary" type="button">
                Button 2
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
