//MISC
import React, { Component } from 'react';
//COMPONENTS
import Navigation from '../Components/Navigation'
import Pokedex from '../Components/Pokedex'
import Map from '../Components/Map'
import Signin from './SignIn'
import Register from './Register'
import UserProfile from './UserProfile';
import WTPmon from './Wtpmon';
import Favorites from './Favorites';
//CSS
import '../CSS/App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      signedIn: false,
      currentTab: 'pokedex',
      username: undefined
    }
  }

  displayCurrentTab = () => {
    let { currentTab, username, signedIn } = this.state;
    switch (currentTab) {
      case `pokedex`: return <Pokedex signedIn={signedIn} username={username}/>
      case `map`: return <Map />
      case `wtpmon`: return <WTPmon />
      case `signin`: return <Signin changeCurrentTab={this.changeCurrentTab} loginUser={this.loginUser} />
      case `register`: return <Register changeCurrentTab={this.changeCurrentTab} loginUser={this.loginUser} />
      case `profile`: return <UserProfile username={username} />
      case `favorites`: return <Favorites username={username} signedIn={signedIn}/>
      default: return <h1>odjava</h1>
    }
  }

  changeCurrentTab = (newTab) => {
    this.setState({ currentTab: newTab })
  }
  loginUser = (_username) => {
    this.setState({ username: _username, signedIn: true })
  }
  logout = () => {
    this.setState({ username: undefined, signedIn: false, currentTab: 'pokedex' })
  }

  render() {
    let { signedIn, username } = this.state;
    return (
      <div className="body">
        <Navigation
          signedIn={signedIn}
          changeCurrentTab={this.changeCurrentTab}
          username={username}
          logout={this.logout}
        />
        {this.displayCurrentTab()}
        <p><a href="https://github.com/FilipKupanovac/WebProjekt_TimRaketa">Work in progress...</a></p>
      </div>
    );
  }
}

export default App;