import React from 'react';
import PropTypes from 'prop-types';

import TaskItem from './TaskItem';

function TaskList({ tasks, filter, handleTaskRemove }) {
  return (
    <ul className="list-group">
      {
        tasks
          .filter(({ state }) => (filter === 'all' ? true : filter === state))
          .map(task => (<TaskItem
            key={task.id}
            task={task}
            handleTaskRemove={handleTaskRemove}
          />))
      }
    </ul>
  );
}
TaskList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    state: PropTypes.oneOf(['active', 'done']),
  })).isRequired,
  filter: PropTypes.oneOf(['all', 'active', 'done']).isRequired,
  handleTaskRemove: PropTypes.func.isRequired,
};

export default TaskList;
