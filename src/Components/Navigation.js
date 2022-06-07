//MISC
import React, { Component } from 'react'
//COMPONENTS
import SignedProfile from './SignedProfile'
//CSS
import '../CSS/Navigation.css'

class Navigation extends Component {
  render() {
    return (
      <nav className="flex" id="navigation-main">
        <p className="nav-par"
          onClick={() => this.props.changeCurrentTab(`pokedex`)}>
          Pokedex
        </p>
        <p className="nav-par"
          onClick={() => this.props.changeCurrentTab(`map`)}>
          Map
        </p>
        <p className="nav-par"
          onClick={() => this.props.changeCurrentTab(`wtpmon`)}>
          Who's that POKEMON?
        </p>
        { this.props.signedIn ?
          <p className="nav-par"
            onClick={() => this.props.changeCurrentTab(`favorites`)}>
              Favorites
          </p>
          : <></>
        }

        <SignedProfile
          signedIn={this.props.signedIn}
          changeCurrentTab={this.props.changeCurrentTab}
          username={this.props.username}
          logout={this.props.logout}
        />
      </nav>
    );
  }
}

export default Navigation;
