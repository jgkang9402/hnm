import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [query, setquery] = useSearchParams();
  const getProducts = async () => {
    let searchQuery = query.get("q") || "";
    console.log(searchQuery);
    let url = ` https://my-json-server.typicode.com/jgkang9402/hnm/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setProductList(data);
    // console.log(productList);
  };

  useEffect(() => {
    getProducts();
  }, [query]);
  // 쿼리가 바뀔때마다 getProducts함수가 다시 실행되게

  return (
    <div>
      <Container>
        <Row>
          {productList.map((menu,idx) => (
            <Col key={idx} lg={3}>
              <ProductCard item={menu} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductAll;
