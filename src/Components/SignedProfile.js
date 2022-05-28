import React from 'react'

const SignedProfile = ({ signedIn, changeCurrentTab, username, logout }) => {
    return signedIn ?
        <div className="toright flex">
            <p className="nav-par" onClick={() => changeCurrentTab('profile')}>{(username !== undefined) ? username : `TU POSLATI USERNAME`}</p>
            <p className="nav-par" onClick={() => logout()}>Log out</p>
        </div>
        :
        <div className="toright flex">
            <p className="nav-par" onClick={() => changeCurrentTab('signin')}>Signin</p>
            <p className="nav-par" onClick={() => changeCurrentTab('register')}>Register</p>
        </div>

}

export default SignedProfile;