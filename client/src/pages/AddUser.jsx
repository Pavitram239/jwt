import React from "react";
import { ContentContainer, Input } from "../components";
import FormContainer from "../components/FormContainer";
import { Form } from "react-router-dom";

const AddUser = () => {
  return (
    <FormContainer title="Add Uder">
      <Form method="post">
        <Input type="text" name="name" id="name" label="name" />
        <Input type="text" name="username" label="username" id="username" />
        <select className="form-select mb-3" name="isAdmin">
          <optgroup label="Admin">
            <option value="false">no</option>
            <option value="true">yes</option>
          </optgroup>
        </select>
        <button type="submit" className="btn btn-primary w-100">
          Add User
        </button>
      </Form>
    </FormContainer>
  );
};

export default AddUser;
