import React from 'react';
import classNames from 'classnames/bind';

import Title from './Title';
import styles from './Todo.local.scss';


const cx = classNames.bind(styles);

function Todo() {
  return (
    <div className="container">
      <Title>todos</Title>
      <div className="row">
        <div className="col-lg-6 col-lg-push-3 col-sm-8 col-sm-push-2">
          <input
            className="form-control input-lg"
            type="text"
            placeholder="What is needed to be done ?"
          />
          <hr />
          <ul className="list-group">
            <li className={cx('list-group-item', 'taskItem')}>
              <input type="checkbox" className={cx('btnToggle')} />
              <button className={cx('btn', 'btn-sm', 'btn-link', 'btnRemove')}>✕</button>
              <div className={cx('title')}>
                Prepare dinner ingredients
              </div>
            </li>
            <li className={cx('list-group-item', 'taskItem')}>
              <input type="checkbox" className={cx('btnToggle')} />
              <button className={cx('btn', 'btn-sm', 'btn-link', 'btnRemove')}>✕</button>
              <div className={cx('title')}>
                Do dishes left over from lastnight
              </div>
            </li>
            <li className={cx('list-group-item', 'taskItem', 'done')}>
              <input type="checkbox" className={cx('btnToggle')} defaultChecked />
              <button className={cx('btn', 'btn-sm', 'btn-link', 'btnRemove')}>✕</button>
              <div className={cx('title')}>
                Do homework
              </div>
            </li>
          </ul>
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
