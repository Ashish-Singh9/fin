import React from 'react'
import './css/showCase.css'
import NavBar from './myComp/NavBar'
import ShowCaseComp from './myComp/ShowCaseComp'
function ShowCase() {
    return (
        <div>
            <NavBar  plus="true" user="true" login="false" signup="false"/>
            <ShowCaseComp/>
        </div>
    )
}

export default ShowCase
