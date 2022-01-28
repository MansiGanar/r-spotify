import { Button, Card, CardGroup, Col, Row } from "react-bootstrap";
import { useEffect, useState } from "react";

const RecentlyPlayed = () => {
  const [resources, setResources] = useState([]);
  const getMusic = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=queen"
      );
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        setResources(data.data);
        // console.log(resources);
      } else {
        console.log("Error");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getMusic();
    console.log(resources);
  }, []);

  return (
    <>
      <Row>
        {resources.map((m) => (
          <p>{m.title}</p>
        ))}
      </Row>
    </>
  );
};

export default RecentlyPlayed;
