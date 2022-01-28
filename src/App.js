import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import MainContent from "./components/MainContent";

import Sidebar from "./components/Sidebar";

function App() {
  return (
    <Row>
      <Col md="2" className="p-0">
        <Sidebar />
      </Col>
      <Col md="10">
        <MainContent />
      </Col>
    </Row>
  );
}

export default App;
