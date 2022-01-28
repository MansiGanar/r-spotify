import { Col, Row } from "react-bootstrap";
import MainContent from "./MainContent";

const Sidebar = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "black",
          color: "white",
          height: "100vh",
          position: "fixed",
        }}
      >
        <Col>
          <img
            src="https://thumbs.dreamstime.com/b/vinnytsia-ukraine-may-spotify-logo-dark-mode-cool-music-service-offers-legal-streaming-music-spotify-logo-dark-mode-218033923.jpg"
            alt="Spotify logo"
            style={{ width: "100px", height: "10%" }}
          />
          <Row
            style={{
              alignItems: "center",
              alignContent: "center",
              margin: " 0 50px 0 50px",
            }}
          >
            <i class="fas fa-home" style={{ marginBottom: "15px" }}></i>
            <p>Home</p>
          </Row>
        </Col>
        <Col>
          <Row
            style={{
              alignItems: "center",
              alignContent: "center",
              margin: " 0 50px 0 50px",
            }}
          >
            <i class="fas fa-home" style={{ marginBottom: "15px" }}></i>
            <p>Home</p>
          </Row>
        </Col>
        <Col>
          <Row
            style={{
              alignItems: "center",
              alignContent: "center",
              margin: " 0 50px 0 50px",
            }}
          >
            <i class="fas fa-home" style={{ marginBottom: "15px" }}></i>
            <p>Home</p>
          </Row>
        </Col>
      </div>
    </>
  );
};

export default Sidebar;
