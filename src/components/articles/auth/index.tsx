import React from 'react'
import { Private } from './private';
import {Profile} from './profile';

function index() {
  return (
    <div>
      <Private isLoggedIn={true} component={Profile} />
    </div>
  );
}

export default index
