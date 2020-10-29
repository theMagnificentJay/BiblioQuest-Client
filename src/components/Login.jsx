import React from "react";
import { 
  Button,
  ModalFooter,
  Container,
  Label,
  Input,
} from 'reactstrap';

const Login = (props) => {
  return (
    <Container>
      <Container className="inputs">
        <Container className="form-group input-group">
          <Label for="email" className="sr-only" />
          <Input
            type="email"
            class="form-control"
            id="email"
            placeholder="Email Address"
          />
        </Container>

        <Container className="form-group input-group">
          <Label for="password" className="sr-only" />
          <Input
            type="password"
            class="form-control"
            id="password"
            placeholder="Password"
          />
        </Container>
      </Container>

      <Container className="footerLoginModal text-center">
      <Button className="signUpBtn">Login</Button>
      <ModalFooter>
        <p>
          Don't have an account?{" "}
          <a href="#loginModal" data-toggle="modal" data-dismiss="modal">
            Sign Up
          </a>
        </p>
      </ModalFooter>
      </Container>
    </Container>
  );
};

export default Login;
