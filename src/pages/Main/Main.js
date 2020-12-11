import React from "react";


import { Presentation, MainContainer  } from "./styles";
import { animateScroll as scroll } from "react-scroll";

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
        <Presentation>
          <h1> Welcome Hunter </h1>
        </Presentation>
      </MainContainer>
    );
  }
}
