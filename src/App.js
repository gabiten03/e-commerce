import React from 'react'
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import MyNavBar from './components/MyNavBar/MyNavBar'
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";

import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'



function App() {
  return (

    <Router>

      <MyNavBar />
      <Switch>
        <Route exact path="/detail/:id" component={ItemDetailContainer}>
        </Route>
        <Route path="/users">
        </Route>
        <Route exact path="/">

          <ItemListContainer />
        </Route>
      </Switch>


    </Router >

  );
}

export default App;
