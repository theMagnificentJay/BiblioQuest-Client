import React, { useState } from "react";
import Login from './Login';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
} from "reactstrap";

const LoginModal = (props) => {
  const { className } = props;
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Form inline onSubmit={(e) => e.preventDefault()}>
        <Button onClick={toggle}>Login/Register/User</Button>
      </Form>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Login</ModalHeader>
        <ModalBody>
            <Login />
        </ModalBody>
      </Modal>
    </div>
  );
};

export default LoginModal;
