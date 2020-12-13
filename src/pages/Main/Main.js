import React from "react";


import { MainContainer } from "./styles";
import { animateScroll as scroll } from "react-scroll";
import { Link } from "react-router-dom";

export default class Main extends React.Component {
  constructor() {
    super();
    this.state = { main: {}, loader: true };
  }
  componentDidMount() {
    scroll.scrollToTop();

  }
  render() {
    return (
      <MainContainer>
        <main>
          <h1> Welcome Hunter </h1>
          <p>Come and explore the universe, find everything you need here!</p>
        </main>
        <section>
        </section>
      </MainContainer>
    );
  }
}
