import React from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "reactstrap";
import "./Header.scss";

const Header = (props) => {
  return (
    <header className="header">
     <Container>
         <Row className="header__top">
             <Col xs="auto">
                 <Link to={"/"} title={"Home"}><span className="photo">Photo</span><span className="app">App</span></Link>
             </Col>
         </Row>
     </Container>
    </header>
  );
};

Header.propTypes = {}

export default Header;
