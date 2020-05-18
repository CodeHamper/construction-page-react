import React from 'react';
import Countdown from 'react-countdown';
import {Container} from "./styles";

const Completionist = () => <span>You are good to go!</span>;

function App() {
  return (
    <Container>
      <div className="title">
        <h1>CodeHamper</h1>
      </div>
      <div className="count">
        <Countdown date="2021-02-01T01:02:03">
          <Completionist />
        </Countdown>
      </div>
    </Container>
  );
}

export default App;
