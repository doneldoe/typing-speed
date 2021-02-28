import React, { Component } from "react";
import Preview from "./components/Preview";
import Speed from "./components/Speed";
import getText from "./components/GetText";
import "./App.css";

const initialState = {
  text: getText(),
  userInput: "",
  symbols: 0,
  sec: 0,
  started: false,
  finished: false,
};

class App extends Component {
  state = initialState;

  restart = () => {
    this.setState(initialState);
    window.location.reload();
  };

  onInputChange = (e) => {
    const input = e.target.value;
    this.setTimer();
    console.log(this.state.sec);
    this.onFinish(input);
    this.setState({
      userInput: input,
      symbols: this.countSymbols(input),
    });
  };

  countSymbols(userInput) {
    const text = this.state.text.replace(" ", "");
    return userInput
      .replace(" ", "")
      .split("")
      .filter((s, i) => s === text[i]).length;
  }

  setTimer() {
    if (!this.state.started) {
      this.setState({ started: true });
      this.interval = setInterval(() => {
        this.setState((prevProps) => {
          return { sec: prevProps.sec + 1 };
        });
      }, 1000);
    }
  }

  onFinish(input) {
    if (input === this.state.text) {
      clearInterval(this.interval);
      this.setState({
        finished: true,
      });
    }
  }

  render() {
    return (
      <div className="content">
        <div className="card">
          <Preview text={this.state.text} userInput={this.state.userInput} />
          <textarea
            value={this.state.userInput}
            onChange={this.onInputChange}
            className="form"
            placeholder="Начинайте печатать..."
            readOnly={this.state.finished}
          ></textarea>
          <div className="info">
            <Speed sec={this.state.sec} symbols={this.state.symbols} />
            <button className="restart-btn" onClick={this.restart}>
              Начать Заново
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
