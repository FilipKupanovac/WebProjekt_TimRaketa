//MISC
import React, { Component } from 'react';
//COMPONENTS

//CSS

class UserProfile extends Component {
    render() {
        let { username } = this.props;

        return (
            <h1>{username}</h1>
        )
    }
}

export default UserProfile;