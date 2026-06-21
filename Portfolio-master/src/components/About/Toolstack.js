import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiPowerbi,
  SiTableau,
  SiPython,
  SiJupyter,
  SiMysql,
  SiMicrosoftexcel,
  SiGit,
  SiPostman,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px", rowGap: "30px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiPowerbi />
         <span className="tech-name">Power BI</span>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiTableau />
        <span className="tech-name">Tableau</span>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiPython />
         <span className="tech-name">Python</span>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiJupyter />
        <span className="tech-name">Jupyter</span>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
        <span className="tech-name">MySql</span>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftexcel />
        <span className="tech-name">Microsoft Excel</span>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiGit />
        <span className="tech-name">Git</span>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <span className="tech-name">Postman</span>
      </Col>
    </Row>
  );
}

export default Toolstack;