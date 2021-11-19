import { Col, Row } from "react-bootstrap";
import MainContent from "./MainContent";

const Sidebar = () => {
  return (
    <>
      <div className="spotifysidebar">
        <img
          src="https://thumbs.dreamstime.com/b/vinnytsia-ukraine-may-spotify-logo-dark-mode-cool-music-service-offers-legal-streaming-music-spotify-logo-dark-mode-218033923.jpg"
          alt="Spotify logo"
          style={{ width: "200px", height: "10%", margin: "10px" }}
        />
        <Row>
          <Col md={11} className="sidebarcol">
            <h6 style={{ margin: "5%", marginLeft: "10%", color: "white" }}>
              <i class="fas fa-home" style={{ marginRight: "10px" }}></i>
              Home
            </h6>
          </Col>
          <Col md={11} className="sidebarcol">
            <h6 style={{ margin: "5%", marginLeft: "10%", color: "white" }}>
              <i class="fas fa-search" style={{ marginRight: "10px" }}></i>
              Search
            </h6>
          </Col>

          <Col md={11} className="sidebarcol">
            <h6 style={{ margin: "5%", marginLeft: "10%", color: "white" }}>
              <i
                class="fas fa-grip-lines-vertical"
                style={{ marginRight: "10px" }}
              ></i>
              Your Library
            </h6>
          </Col>

          <Col md={11} className="sidebarcol">
            <h6 style={{ margin: "5%", marginLeft: "10%", color: "white" }}>
              <i class="fas fa-plus-square" style={{ marginRight: "10px" }}></i>
              Create Playlist
            </h6>
          </Col>
          <Col md={11} className="sidebarcol">
            <h6 style={{ margin: "5%", marginLeft: "10%", color: "white" }}>
              <i class="fas fa-heart" style={{ marginRight: "10px" }}></i>
              Liked Songs
            </h6>
          </Col>
        </Row>
      </div>
      <MainContent />
    </>
  );
};

export default Sidebar;
