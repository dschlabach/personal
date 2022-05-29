import React from "react";
import { graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";

export default function filtrd({ data }) {
  console.log(data);

  return (
    <Layout>
      <div className="text-center">
        <h1 className="text-2xl font-bold">Filtrd</h1>
        <p>
          I used React, Express, and PostgreSQL to build a website for reviewing
          third wave coffee shops and roasters. I designed the interface and
          graphics myself.
        </p>

        <div className="mt-6">
          <StaticImage
            className="my-3 rounded-lg"
            src={"../images/Filtrd-homepage.png"}
            alt="homepage for Filtrd.co"
          ></StaticImage>
          <StaticImage
            className="my-3 rounded-lg"
            src={"../images/Filtrd-coffee-shop-page.png"}
            alt="Filtrd's coffee shop profile page"
          ></StaticImage>
          <StaticImage
            className="my-3 rounded-lg"
            src={"../images/Filtrd-map-page.png"}
            alt="bottom of coffee shop profile page for Filtrd.co"
          ></StaticImage>
          <StaticImage
            className="my-3 rounded-lg"
            src={"../images/Filtrd-search-page.png"}
            alt="Filtrd's search page"
          ></StaticImage>
        </div>
      </div>
    </Layout>
  );
}

export const data = graphql`
  query Images {
    allImageSharp(filter: { fixed: { originalName: { regex: "/Filtrd/" } } }) {
      edges {
        node {
          id
          fixed {
            ...GatsbyImageSharpFixed
            originalName
          }
        }
      }
    }
  }
`;
