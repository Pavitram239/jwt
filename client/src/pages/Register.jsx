import React from "react";
import { Container, Input } from "../components";
import { Form } from "react-router-dom";

const Register = () => {
  return (
    <Container title="Register">
      <Form>
        <Input type="text" name="name" label="Name" id="name" />
        <Input type="text" name="username" label="username" id="username" />
        <Input type="password" name="password" label="Password" id="password" />
        <Input
          type="text"
          name="cpassword"
          label="Confirm Password"
          id="cpassword"
        />
        <button type="submit" className="btn btn-primary w-100 mb-3">
          Register
        </button>
      </Form>
    </Container>
  );
};

export default Register;
