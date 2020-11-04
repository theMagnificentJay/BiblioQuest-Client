import React, { useState } from "react";
import { Button, Container, Label, Input, Form } from "reactstrap";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitLogin = (event) => {
    if(email && password) {
    event.preventDefault();
    fetch("http://localhost:3030/user/login", {
      //!needs to be updated to heroku for "production"
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        props.updateToken(data.token);
        console.log(data.message);
      });
    } else alert("Email and Password are required")
  };

  return (
    <Container>
      <Container className="inputs">
        <Container className="form-group input-group">
          <Form className="form-group input-group">
          <Label htmlFor="email" className="sr-only" />
            <Input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="form-control"
              id="email"
              placeholder="Email Address"
              required
            />
          </Form>
        </Container>

        <Container className="form-group input-group">
          <Form className="form-group input-group">
            <Label htmlFor="password" className="sr-only" />
            <Input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              required
            />
          </Form>  
        </Container>
      </Container>
      <Container className="footerLoginModal text-center">
        <Button onClick={submitLogin} className="signUpBtn">
          Login
        </Button>
      </Container>
    </Container>
  );
};

export default Login;
