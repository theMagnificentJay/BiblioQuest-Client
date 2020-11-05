import React, { useState } from "react";
import { Button, Container, Label, Input } from "reactstrap";

const Register = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const submitRegister = (event) => {
    event.preventDefault();
    if (password === password2) {
      fetch("https://biblioquest.herokuapp.com/user/register", {
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
    } else {
      alert("Password must match: Please reenter credentials");
    }
  };

  return (
    <Container>
      <Container className="inputs">
        <Container className="form-group input-group">
          <Label for="email" className="sr-only" />
          <Input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="form-control"
            id="email"
            placeholder="Email Address"
          />
        </Container>

        <Container className="form-group input-group">
          <Label for="password" className="sr-only" />
          <Input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="form-control"
            id="password"
            placeholder="Choose a password"
          />
        </Container>

        <Container className="form-group input-group">
          <Label for="password2" className="sr-only" />
          <Input
            onChange={(e) => setPassword2(e.target.value)}
            type="password"
            className="form-control"
            id="password2"
            placeholder="Confirm password"
          />
        </Container>
      </Container>

      <Container className="footerLoginModal text-center">
        <Button onClick={submitRegister} className="signUpBtn">
          Sign Up
        </Button>
      </Container>
    </Container>
  );
};

export default Register;
