import React, { useState } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { meta } from "../../content_option";
import ProjectGrid from "../../components/portfolio/ProjectGrid";
import PortfolioNav from "../../components/portfolio/PortfolioNav";

export const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("video-summary");

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Portfolio </h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>

        <PortfolioNav 
          activeCategory={activeCategory} 
          onCategoryChange={setActiveCategory}
        />

        <ProjectGrid category={activeCategory} />
      </Container>
    </HelmetProvider>
  );
};

export default Portfolio;