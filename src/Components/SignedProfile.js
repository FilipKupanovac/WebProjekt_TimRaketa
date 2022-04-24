import React from 'react'

const SignedProfile = ({signedIn, signinClick, changeCurrentTab}) => {
    return signedIn ? 
        <div className="toright flex">
            <p className="nav-par" onClick={() => changeCurrentTab('profile')}>TU POSLATI USERNAME</p>
            <p className="nav-par" onClick={() => changeCurrentTab('')}>Log out</p>
        </div> 
        :
        <div className="toright flex">
            <p className="nav-par" onClick={signinClick}>Signin</p>
            <p className="nav-par" onClick={signinClick}>Register</p>
        </div> 
                
}

export default SignedProfile;