import React from "react";
import { Grid, Row, Col } from "./components/ExampleComponent";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Responsive grid</h1>
      <Grid>
        <Row>
          <Col size={2}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            voluptatem magni esse deleniti dicta nihil sapiente numquam minima
            voluptatum? Nostrum rerum soluta impedit officiis? Odit eum nihil
            esse perspiciatis error, veritatis sequi, autem, cumque magnam
            soluta sapiente amet aliquam voluptatibus.
          </Col>
          <Col size={3}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            voluptatem magni esse deleniti dicta nihil sapiente numquam minima
            voluptatum? Nostrum rerum soluta impedit officiis? Odit eum nihil
            esse perspiciatis error, veritatis sequi, autem, cumque magnam
            soluta sapiente amet aliquam voluptatibus. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Maxime voluptatem magni esse
            deleniti dicta nihil sapiente numquam minima voluptatum? Nostrum
               aliquam voluptatibus.
          </Col>
        </Row>
        <Row>
          <Col size={4}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            voluptatem magni esse deleniti dicta nihil sapiente numquam minima
            voluptatum? Nostrum rerum soluta impedit officiis? Odit eum nihil
            esse perspiciatis error, veritatis sequi, autem, cumque magnam
            soluta sapiente amet aliquam voluptatibus.
          </Col>
          <Col size={3}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            voluptatem magni esse deleniti dicta nihil sapiente numquam minima
            voluptatum? Nostrum rerum soluta impedit officiis? Odit eum nihil
            esse perspiciatis error, veritatis sequi, autem, cumque magnam
            soluta sapiente amet aliquam voluptatibus. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Maxime voluptatem magni esse
            deleniti dicta nihil sapiente numquam minima voluptatum? Nostrum
               aliquam voluptatibus.
          </Col>
          <Col size={1} collapse="xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            voluptatem magni esse deleniti dicta nihil sapiente numquam minima
            voluptatum? Nostrum rerum soluta impedit
          </Col>
        </Row>
      </Grid>
    </div>
  );
}

export default App;
