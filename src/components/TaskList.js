import React from 'react';
import PropTypes from 'prop-types';

function TaskList(props) {
  return (
    <ul className="list-group">
      {props.children}
    </ul>
  );
}
TaskList.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TaskList;
