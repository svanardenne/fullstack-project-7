import React from 'react';
import Form from './Form'
import Nav from './Nav';
import PhotoContainer from './PhotoContainer';
import apiKey from '../config';

function App() {
  return (
    <div className="container">
      <Form />
      <Nav />
      <PhotoContainer />
    </div>
  );
}

export default App;
