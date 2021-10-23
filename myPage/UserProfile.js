import React from 'react'
import NavBar from './myComp/NavBar'
import UserProfileComp from './myComp/UserProfileComp'
import './css/userProfile.css'
function UserProfile() {
    return (
        <div>
            <NavBar plus="false" user="false" login="false" signup="false" setting="true" edit="true"/>
            <UserProfileComp/>
        </div>
    )
}

export default UserProfile
