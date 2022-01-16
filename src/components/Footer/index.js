import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container>
        <hr />
        <Row>
          <Col className="text-center pb-3">
            Copyright &copy; 2022 DevAssist.
            <br/>
            A Javascript Centric Product
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
