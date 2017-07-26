import React from 'react';

import Title from './Title';
import TaskCreate from './TaskCreate';
import TaskList from './TaskList';
import TaskFooter from './TaskFooter';

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
const FILTER = 'all';

function Todo() {
  return (
    <div className="container">
      <Title>todos</Title>
      <div className="row">
        <div className="col-lg-6 col-lg-push-3 col-sm-8 col-sm-push-2">
          <TaskCreate />
          <hr />
          <TaskList tasks={TASKS} filter={FILTER} />
          <hr />
          <TaskFooter tasks={TASKS} filter={FILTER} />
        </div>
      </div>
    </div>
  );
}

export default Todo;
