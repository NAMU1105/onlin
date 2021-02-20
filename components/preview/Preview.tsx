import React from "react";
import styled from "@emotion/styled";

import Intro from "./Intro";
import Invitation from "./Invitation";
import Contact from "./Contact";
import Address from "./Address";
import Gallery from "./Gallery";
import Guestbook from "./Guestbook";
import Footer from "./Footer";

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* width: 30vw; */
  padding: 0 21vw;
  text-align: center;

  /* & section {
    width: 100%;
  } */
`;

const Preview = (props) => (
  <Container>
    <Intro />
    <Invitation />
    <Contact />
    <Address />
    <Gallery />
    <Guestbook />
    <Footer />
  </Container>
);

export default Preview;
