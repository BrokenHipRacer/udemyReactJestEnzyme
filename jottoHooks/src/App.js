import React, { Component } from 'react';
import './App.css';

import GuessedWords from "./GussedWords";
import Congrats from "./Congrats";

class App extends Component {

  render() {
    return (
      <div className="container" data-test="component-app">
        <h1>Jotto</h1>
        <Congrats success={true} />
        <GuessedWords guessedWords={[
          { guessedWord: 'train', letterMatchedCount: 3}
          ]} />
      </div>
    );
  };
}

export default App;
