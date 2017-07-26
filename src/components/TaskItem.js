import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './TaskItem.local.scss';

const cx = classNames.bind(styles);

function TaskItem({ task }) {
  const { title, state } = task;

  return (
    <li className={cx(
      'list-group-item',
      'taskItem',
      { done: state === 'done' },
    )}
    >
      <input
        type="checkbox"
        className={cx('btnToggle')}
        defaultChecked={state === 'done'}
      />
      <button className={cx(
        'btn', 'btn-sm',
        'btn-link', 'btnRemove')}
      >
        ✕
      </button>
      <div className={cx('title')}>
        {title}
      </div>
    </li>
  );
}
TaskItem.propTypes = {
  task: PropTypes.shape({
    title: PropTypes.string.isRequired,
    state: PropTypes.oneOf(['active', 'done']),
  }).isRequired,
};

export default TaskItem;
