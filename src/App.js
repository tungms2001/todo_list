import './App.css';
import React from "react";
//Importing Components
import Profile from "./components/Profile";
import Main from "./Main";
import {Route, Switch} from "react-router-dom";

function App() {
  return (
      <>
        <Switch>
          <Route path='/' component={Main} exact />
          <Route path='/profile' component={Profile} />
        </Switch>
      </>
  );
}

export default App;
