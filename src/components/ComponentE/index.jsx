import React from 'react';
import UserContext from '../../userContext';
import ComponentF from '../ComponentF';

class ComponentE extends React.Component {
  // Syntax-1: to assign the contextType
  static contextType = UserContext;

  render() {
    return (
      <div>
        Hello ComponentE!!!
        <b>context value--- {this.context.name}</b>
        <ComponentF />
      </div>
    );
  }
}

// Syntax-2: to assign the contextType
// ComponentE.contextType = UserContext;

export default ComponentE;
