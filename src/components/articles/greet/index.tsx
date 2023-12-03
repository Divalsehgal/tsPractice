import React from 'react'
import { Greet } from './Greet';

function index() {
  return (
    <div>
      <Greet name="Dival" age={25} isLoggedIn={true} />
    </div>
  ); 
}

export default index
