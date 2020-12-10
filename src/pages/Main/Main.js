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
          <img src="https://www.flaticon.com/svg/static/icons/svg/2026/2026498.svg" alt='Space Hunter'></img>
        </Presentation>
      </MainContainer>
    );
  }
}
