import React, { Component } from "react";
import logo from "./dbz.png";
import "./App.css";
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Footer from "./components/Footer";
import Cards from "./components/Cards/Cards";
import Characters from "./characters.json";

let topScore = 0;
let score = 0;
let message =
  "Click an image to begin & earn points, but don't repeat the same one.";

class App extends Component {
  state = {
    Characters,
    topScore,
    score,
    message
  };

  setClicked = id => {
    const Characters = this.state.Characters;
    const cardClicked = Characters.filter(Character => Character.id === id);

    if (cardClicked[0].clicked) {
      score = 0;
      message = "BUMP! Start over";

      for (let i = 0; i < Characters.length; i++) {
        Characters[i].clicked = false;
      }
      this.setState({ score });
      this.setState({ Characters });
      this.setState({ message });
    } else {
      cardClicked[0].clicked = true;

      score = score + 1;
      message = "Nice! keep going";

      if (score > topScore) {
        topScore = score;
        this.setState({ topScore });
        this.setState({ message });
      }
      Characters.sort((a, b) => {
        return 0.5 - Math.random();
      });
      this.setState({ Characters });
      this.setState({ score });
      this.setState({ message });
    }
  };

  render() {
    return (
      <div className="App">
        <Nav score={this.state.score} topScore={this.state.topScore}>
          <a className="nav-link">{this.state.message}</a>
          <a className="nav-link">
            Score: {this.state.score} | Top Score: {this.state.topScore}
          </a>
        </Nav>
        <Jumbotron>
          <img src={logo} className="App-logo" alt="Portal" />
        </Jumbotron>
        <div className="container">
          <div className="row">
            {this.state.Characters.map(Character => (
              <Cards
                setClicked={this.setClicked}
                id={Character.id}
                key={Character.id}
                image={Character.image}
                name={Character.name}
              />
            ))}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
