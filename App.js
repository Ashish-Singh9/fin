import React from 'react';
import Login from './myPage/Login'
import Home from './myPage/Home'
import ShowCase from './myPage/ShowCase'
import ResultPage from './myPage/ResultPage'
import EditPage from './myPage/EditPage';
import UserProfile from './myPage/UserProfile';
import EnterOtp from './myPage/EnterOtp';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
function App() {
  return (
    <div>
    <Router>
      <Switch>
        <Route exact path="/Login">
          <Login/>
        </Route>
        <Route exact path="/Home">
          <Home/>
        </Route>
        <Route exact path="/ShowCase">
          <ShowCase/>
        </Route>
        <Route exact path="/ResultPage">
          <ResultPage/>
        </Route>
        <Route exact path="/EditPage">
          <EditPage/>
        </Route>
        <Route exact path="/UserProfile">
          <UserProfile/>
        </Route>
        <Route exact path="/EnterOtp">
          <EnterOtp/>
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
