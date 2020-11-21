import React, { Component } from "react";

import DisplayCooperResult from "./components/DisplayCooperResult";
import InputFields from './components/InputFields';
import LoginForm from "./components/LoginForm";
import DisplayPerformanceData from "./components/DisplayPerformanceData";
import { authenticate } from './modules/auth';
import Header from './components/Header'

import { Image, Button } from 'semantic-ui-react'

class App extends Component {
  state = {
    distance: "",
    gender: "female",
    age: "",
    renderLoginForm: false,
    authenticated: false,
    message: "",
    entrySaved: false,
    renderIndex: false
  };

  onChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value, entrySaved: false });
  };

  onLogin = async e => {
    e.preventDefault();
    const response = await authenticate(
      e.target.email.value,
      e.target.password.value
    );
    if (response.authenticated) {
      this.setState({ authenticated: true });
    } else {
      this.setState({ message: response.message, renderLoginForm: false });
    }
  };

  render() {
    const { renderLoginForm, authenticated, message } = this.state;
    let renderLogin;
    let performanceDataIndex;
    switch (true) {
      case renderLoginForm && !authenticated:
        renderLogin = <LoginForm submitFormHandler={this.onLogin} />;
        break;
      case !renderLoginForm && !authenticated:
        renderLogin = (
          <>
            <Button
              id="login"
              onClick={() => this.setState({ renderLoginForm: true })}
            >
              Login
            </Button>
            <p id="message">{message}</p>
          </>
        );
        break;
      case authenticated:
        renderLogin = (
          <p id="message"> Hi {JSON.parse(sessionStorage.getItem("credentials")).uid}</p>
        );
        if (this.state.renderIndex) {
          performanceDataIndex = (
            <>
              <DisplayPerformanceData
                updateIndex={this.state.updateIndex}
                indexUpdated={() => this.setState({ updateIndex: false })}
              />
              <Button onClick={() => this.setState({ renderIndex: false })}>Hide past entries</Button>
            </>
          )
        } else {
          performanceDataIndex = (
            <Button id="show-index" onClick={() => this.setState({ renderIndex: true })}>
              Show past entries
            </Button>
          )
        }
        break;
      default:
    }

    return (
      <>
        <Header />
        <Image src='/images/running_icon.png' size='small' alt="Image can't be found" id="running"/>
        <InputFields onChangeHandler={this.onChangeHandler} />
        {renderLogin}
        <DisplayCooperResult
          distance={this.state.distance}
          gender={this.state.gender}
          age={this.state.age}
          authenticated={this.state.authenticated}
          entrySaved={this.state.entrySaved}
          entryHandler={() => this.setState({ entrySaved: true, updateIndex: true })}
        />
        {performanceDataIndex}
      </>
    );
  }
}

export default App;
