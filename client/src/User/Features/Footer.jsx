import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import style from "../../Assets/globalStyles.module.css";

export default function Footer() {
  return (
    <Row sm={2} lg={4} md={4} xs={2} className={style.footer}>
      <Col>
        <h1>Icono</h1>
      </Col>
      <Col>
        <ul>
          <li>Enlace 1</li>
          <li>Enlace 2</li>
          <li>Enlace 3</li>
          <li>Enlace 4</li>
        </ul>
      </Col>
      <Col>
        <ul>
          <li>Enlace 1</li>
          <li>Enlace 2</li>
          <li>Enlace 3</li>
          <li>Enlace 4</li>
        </ul>
      </Col>
      <Col>
        <ul>
          <li>Enlace 1</li>
          <li>Enlace 2</li>
          <li>Enlace 3</li>
          <li>Enlace 4</li>
        </ul>
      </Col>
    </Row>
  );
}
