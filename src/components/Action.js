import React from 'react';

const Action = props => (
      <button className="button button--big" onClick={props.handlePick} disabled={!props.hasOptions}>
        What should I do?
      </button>
    );

  export default Action;