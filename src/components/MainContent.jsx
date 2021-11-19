import { Button, Col, Row } from "react-bootstrap";

const MainContent = () => {
  return (
    <>
      <div className="maincontent">
        {" "}
        <div md={1}>
          <h3>
            <i class="fas fa-arrow-circle-left ml-3 mt-3"></i>
            <i class="fas fa-arrow-circle-right ml-3 mt-3"></i>
            <Button variant="outline-secondary" style={{ marginLeft: "55%" }}>
              Upgrade
            </Button>
          </h3>
        </div>
        <div>
          <h1>Hello</h1>
        </div>
      </div>
    </>
  );
};

export default MainContent;
