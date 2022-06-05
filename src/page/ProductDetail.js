import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);
  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/jgkang9402/hnm/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setProduct(data);
  };
  useEffect(() => {
    getProductDetail();
  }, []);
  return (
    <Container>
      <Row className="product-img">
        <Col>
          <img src={product?.img} />
        </Col>
        <Col>
        <div>{product?.choice == true?"conscious choice":""}</div>
          <div>{product?.title}</div>
          <div>{product?.price}</div>
          <div>{product?.new == true?"신제품":""}</div> 
        </Col>
      </Row>
    </Container>
  );
};

{/* <img src={item?.img} />
<div>{item?.choice == true?"conscious choice":""}</div>
<div>{item?.title}</div>
<div>\{item?.price}</div>
<div>{item?.new == true?"신제품":""}</div> */}

export default ProductDetail;
