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

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasksNextId: TASKS.length + 1,
      tasks: TASKS,
      filter: FILTER,
    };

    this.handleTaskCreate = this.handleTaskCreate.bind(this);
    this.handleTaskRemove = this.handleTaskRemove.bind(this);
    this.handleFilterSet = this.handleFilterSet.bind(this);
    this.handleClearDone = this.handleClearDone.bind(this);
  }

  handleTaskCreate(title) {
    const { tasksNextId, tasks } = this.state;
    this.setState({
      tasks: [...tasks, {
        id: tasksNextId,
        title,
        state: 'active',
      }],
      tasksNextId: tasksNextId + 1,
    });
  }

  handleTaskRemove(id) {
    return () => {
      const { tasks } = this.state;

      this.setState({
        tasks: tasks.filter(task => task.id !== id),
      });
    };
  }

  handleFilterSet(filter) {
    return () => this.setState({ filter });
  }

  handleClearDone() {
    const { tasks } = this.state;

    this.setState({
      tasks: tasks.filter(({ state }) => state !== 'done'),
    });
  }

  render() {
    const { tasks, filter } = this.state;

    return (
      <div className="container">
        <Title>todos</Title>
        <div className="row">
          <div className="col-lg-6 col-lg-push-3 col-sm-8 col-sm-push-2">
            <TaskCreate handleTaskCreate={this.handleTaskCreate} />
            <hr />
            <TaskList
              tasks={tasks}
              filter={filter}
              handleTaskRemove={this.handleTaskRemove}
            />
            <hr />
            <TaskFooter
              tasks={tasks}
              filter={filter}
              handleFilterSet={this.handleFilterSet}
              handleClearDone={this.handleClearDone}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Todo;
