import React from 'react'
import Text from './text';

function index() {
  return (
    <div>
      <Text as="p1" size="md">
        Paragraph
      </Text>
      <Text as="h1" size="sm">
        title
      </Text>
      <Text as="label" htmlFor="nameLabel" size="lg" color="secondary">
        large test
      </Text>
    </div>
  );
}

export default index
