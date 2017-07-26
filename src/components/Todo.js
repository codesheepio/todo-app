import React from 'react';
import classNames from 'classnames/bind';

import Title from './Title';
import TaskCreate from './TaskCreate';
import TaskList from './TaskList';

import styles from './Todo.local.scss';

const cx = classNames.bind(styles);
const TASKS = [
  {
    id: 1,
    title: 'Prepare dinner ingredients',
    state: 'active',
  },
  {
    id: 2,
    title: 'Do dishes left over from lastnight',
    state: 'active',
  },
  {
    id: 3,
    title: 'Do homework',
    state: 'done',
  },
];

function Todo() {
  return (
    <div className="container">
      <Title>todos</Title>
      <div className="row">
        <div className="col-lg-6 col-lg-push-3 col-sm-8 col-sm-push-2">
          <TaskCreate />
          <hr />
          <TaskList>
            {
              TASKS.map(task => <TaskItem key={task.id} task={task} />)
            }
          </TaskList>
          <hr />
          <div className="row">
            <div className="col-sm-3 text-center">
              <button className="btn btn-sm btn-link">Clear done</button>
            </div>
            <div className="col-sm-6 text-center">
              <ul className={cx('pagination', 'pagination-sm', 'taskFilter')}>
                <li className="active"><span>All</span></li>
                <li><span>Active</span></li>
                <li><span>Done</span></li>
              </ul>
            </div>
            <div className="col-sm-3 text-center hidden-xs">
              <span className={cx('text-muted', 'small', 'activeCount')}>2 items left</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Todo;
