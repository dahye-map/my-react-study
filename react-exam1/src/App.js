import React from 'react';
import './App.css';
import MyHeader from './MyHeader'
import MyFooter from './MyFooter'

function App() {
  return (
    <div className='App'>
      <MyHeader />
      <h1>안녕 리액트</h1>
      <MyFooter />
    </div>
  );
}

export default App;
