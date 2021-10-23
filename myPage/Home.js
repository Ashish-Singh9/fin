import React from 'react'
import NavBar from './myComp/NavBar'
import './css/home.css'
import HomeComp from './myComp/HomeComp'
function Home() {
    return (
        <div className="homeBody">
            <NavBar plus="true" user="true" login="false" signup="false"/>
            <HomeComp/>
        </div>
    )
}

export default Home
