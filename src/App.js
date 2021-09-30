import React from 'react'
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import MyNavBar from './components/MyNavBar/MyNavBar'


function App() {
  return (
    <div>
      <div>
        <MyNavBar />
      </div>
      <div>
        <ItemListContainer />
      </div>
    </div>
  );
}

export default App;
