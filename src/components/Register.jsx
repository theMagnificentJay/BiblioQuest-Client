import React from "react";
import { 
  Button,
  Container,
  Label,
  Input,
} from 'reactstrap';

const Register = (props) => {
  return (
    <Container>
      <Container className="inputs">
        <Container className="form-group input-group">
          <Label for="email" className="sr-only" />
          <Input
            type="email"
            className="form-control"
            id="email"
            placeholder="Email Address"
          />
        </Container>

        <Container className="form-group input-group">
          <Label for="password" className="sr-only" />
          <Input
            type="password"
            className="form-control"
            id="password"
            placeholder="Choose a password"
          />
        </Container>

        <Container className="form-group input-group">
          <Label for="password2" className="sr-only"/>
          <Input
            type="password"
            className="form-control"
            id="password2"
            placeholder="Confirm password"
          />
        </Container>
      </Container>

      <Container className="footerLoginModal text-center">
      <Button className="signUpBtn">Sign Up</Button>
      </Container>
    </Container>
  );
};

export default Register;
