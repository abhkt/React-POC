import React from 'react';
import { UserConsumer } from '../../userContext';

function ComponentF(props) {
  return (
    <div>
      <UserConsumer>
        {(contextValue) => {
          return <div>Hello {contextValue.name}!!!</div>;
        }}
      </UserConsumer>
    </div>
  );
}

export default ComponentF;
