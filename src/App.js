import React from "react";
import { Button, Col, Row } from "reactstrap";
import ProductDetials from "./components/products/productDetails";
import ProductList from "./components/products/productList";
function App() {
  return (
    <div className="App p-4">
      <h1>Product Card</h1>
      <Row className="g-0">
        <Col sm="6" className="p-5">
          <ProductList />
        </Col>
        <Col sm="6" className="p-5">
          <ProductDetials />
        </Col>
      </Row>
    </div>
  );
}

export default App;
