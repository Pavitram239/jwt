import React from "react";
import { Container, Input } from "../components";
import { Form, redirect, useActionData } from "react-router-dom";
import { toast } from "react-toastify";
import customFetch from "../utils/customFetch";
export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData.entries());
  const errors = { msg: "" };
  try {
    await customFetch.post("/auth/login", data);
    toast.success("Login successfull");
    return redirect("/dashboard");
  } catch (error) {
    errors.msg = error.message;
    return errors;
  }
};

const Login = () => {
  const errors = useActionData();
  return (
    <Container title="login">
      {errors?.msg && <p style={{ color: "red" }}>{errors.msg}</p>}
      <Form method="post">
        <Input type="text" name="username" label="username" />
        <Input type="password" name="password" label="password" />
        <button type="submit" className="btn btn-primary w-100 mb-3">
          Login
        </button>
      </Form>
    </Container>
  );
};

export default Login;
