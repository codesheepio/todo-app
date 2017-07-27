import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './TaskFilter.local.scss';

const cx = classNames.bind(styles);

function TaskFilter({ filter, handleFilterSet }) {
  return (
    <ul className={cx('pagination', 'pagination-sm', 'taskFilter')}>
      {
        ['all', 'active', 'done'].map(state => (
          <li key={state} className={cx({ active: state === filter })}>
            <span
              role="button"
              tabIndex={-1}
              onClick={handleFilterSet(state)}
            >{state}</span>
          </li>
        ))
      }
    </ul>
  );
}
TaskFilter.propTypes = {
  filter: PropTypes.oneOf(['all', 'active', 'done']).isRequired,
  handleFilterSet: PropTypes.func.isRequired,
};

export default TaskFilter;
