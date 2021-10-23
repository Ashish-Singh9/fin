import React from 'react'

function UserProfileComp() {
    return (
        <>
            <div className="userProfile">
            <div className="userImgName">
                <div className="userImg">
                    <img className="userProfileImg hide"src="" alt=""  />
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-camera" viewBox="0 0 16 16">
                        <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z"/>
                        <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"/>
                      </svg>
                </div>
                <div className="name">
                    <div className="info">
                        <label htmlFor="email">Name</label>
                        <input className="inputName"type="text" name="name" id="name" value="Ashish Kumar" disabled />
                    </div>
                </div>
            </div>
            <div className="userInfo">
                <div className="userInfoFlex">
                    <div className="info-1">
                        <div className="info dottedBorder">
                            <label htmlFor="email">Email</label>
                            <input className="inputInfo" type="email" name="email" id="email" value="hello@email.com" disabled />
                        </div>
                        <div className="info dottedBorder">
                            <label htmlFor="phno">Phone Number</label>
                            <input className="inputInfo" type="number" name="phno" id="phno" value="987654321" disabled />
                        </div>
                        <div className="info dottedBorder">
                            <label htmlFor="location">Location</label>
                            <input className="inputInfo" type="text" name="location" id="location" value="India" disabled />
                        </div>
                        <div className="info dottedBorder">
                            <label htmlFor="location">Location</label>
                            <input className="inputInfo" type="text" name="location" id="location" value="India" disabled />
                        </div>
                    </div>
                </div>
                <div className="questionContributed">
                    <div className="headQuestion">
                        <h3>Question Contributed</h3>
                    </div>
                    <div className="question">
                        <p>How this website help save us money?</p>    
                        <div className="badge accepted">
                            <p>accepted</p>
                        </div>
                    </div>
                    <div className="question">
                        <p>How to calculate saving?</p>
                        <div className="badge rejected">
                            <p>rejected</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default UserProfileComp
