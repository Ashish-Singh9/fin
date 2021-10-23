import React from 'react'
import NavBar from './myComp/NavBar'
import EditPageComp from './myComp/EditPageComp'
import './css/editPage.css'
function EditPage() {
    return (
        <div className="editPageBody">
            <NavBar plus="false" user="true" login="false" signup="false"/>
            <EditPageComp/>
        </div>
    )
}

export default EditPage
