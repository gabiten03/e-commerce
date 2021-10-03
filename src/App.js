import React from 'react'
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import MyNavBar from './components/MyNavBar/MyNavBar'
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";

function App() {
  return (

    <Router>

      <MyNavBar />
      <Switch>
        <Route path="/comida">
          <ItemListContainer />
        </Route>
        <Route path="/users">

        </Route>
        <Route path="/">

        </Route>
      </Switch>


    </Router >

  );
}

export default App;
