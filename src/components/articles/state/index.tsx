import React from 'react'
import {Counter} from './counter';
import { LoggedIn } from './loggedIn';
import User from './user';

function index() {
  return (
    <div>
      <Counter />
      <LoggedIn/>
      <User/>
    </div>
  );
}

export default index
