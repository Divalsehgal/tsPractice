import React from 'react'
import CustomButton from './Button';

function index() {
  return (
    <div>
      <CustomButton variant="primary" onClick={() => console.log("clicked")}>
        Demo button
      </CustomButton>
    </div>
  );
}

export default index
