import React from "react";
import { Form } from "react-router-dom";
import { Container, ContentContainer, Input } from "../components";
import FormContainer from "../components/FormContainer";

const AddProduct = () => {
  return (
    <FormContainer title="Add Product">
      <Form method="post">
        <Input type="text" name="name" id="name" label="Product name" />
        <Input
          type="text"
          name="description"
          id="description"
          label="Product description"
        />
        <Input type="number" name="price" id="price" label="Product price" />
        <button type="submit" className="btn btn-primary w-100">
          Add Product
        </button>
      </Form>
    </FormContainer>
  );
};

export default AddProduct;
