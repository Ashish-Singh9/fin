import React from 'react'
import NavBar from './myComp/NavBar'
import ResultPageComp from './myComp/ResultPageComp'
import './css/resultPage.css'
function ResultPage() {
    return (
        <div>
           <NavBar plus="true" user="true" login="false" signup="false"/> 
           <ResultPageComp/>
        </div>
    )
}

export default ResultPage
