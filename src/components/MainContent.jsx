import { Button, Col, Dropdown, Row } from "react-bootstrap";
import RecentlyPlayed from "./RecentlyPlayed";

const MainContent = () => {
  return (
    <>
      <div>
        {" "}
        <Row>
          <Col md="8">
            <i class="fas fa-arrow-circle-left ml-3 mt-3 fa-2x"></i>
            <i class="fas fa-arrow-circle-right ml-3 mt-3 fa-2x"></i>
          </Col>
          <Col md="2">
            <Button variant="outline-secondary" style={{}}>
              Upgrade
            </Button>
          </Col>
          <Col md="2">
            <Dropdown>
              <Dropdown.Toggle
                variant="outline-secondary"
                id="dropdown-basic"
                style={{ borderRadius: "20px" }}
              >
                <img
                  src="https://frspros.com/images/easyblog_shared/July_2018/7-4-18/b2ap3_large_totw_network_profile_400.jpg"
                  alt="profile pic"
                  style={{
                    width: "20px",
                    borderRadius: "50%",

                    //   marginRight: "5px",
                    marginBottom: "3px",
                  }}
                />
                User
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Account</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Profile</Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                  Upgrade to premium
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">Log out</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
        <Row className="ml-2">
          <RecentlyPlayed />
        </Row>
      </div>
    </>
  );
};

export default MainContent;
