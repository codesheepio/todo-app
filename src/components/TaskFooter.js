import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import TaskFilter from './TaskFilter';
import styles from './TaskFooter.local.scss';

const cx = classNames.bind(styles);

function TaskFooter({ tasks, filter }) {
  return (
    <div className="row">
      <div className="col-sm-3 text-center">
        <button className="btn btn-sm btn-link">Clear done</button>
      </div>
      <div className="col-sm-6 text-center">
        <TaskFilter filter={filter} />
      </div>
      <div className="col-sm-3 text-center hidden-xs">
        <span className={cx('text-muted', 'small', 'activeCount')}>
          {tasks.filter(({ state }) => state === 'active').length} items left
        </span>
      </div>
    </div>
  );
}
TaskFooter.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  filter: PropTypes.oneOf(['all', 'active', 'done']).isRequired,
};

export default TaskFooter;
