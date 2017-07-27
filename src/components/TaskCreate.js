import React from 'react';

class TaskCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: '' };
  }

  render() {
    const { title } = this.state;

    return (
      <input
        className="form-control input-lg"
        type="text"
        placeholder="What is needed to be done ?"
        value={title}
      />
    );
  }
}

export default TaskCreate;
