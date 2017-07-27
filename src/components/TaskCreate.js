import React from 'react';
import PropTypes from 'prop-types';

class TaskCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleChange(e) {
    const { value } = e.target;

    this.setState({ title: value });
  }

  handleKeyPress(e) {
    const { key } = e;

    if (key === 'Enter' && this.state.title.replace(/\s/g, '') !== '') {
      this.props.handleTaskCreate(this.state.title);
      this.setState({ title: '' });
    }
  }

  render() {
    const { title } = this.state;

    return (
      <input
        className="form-control input-lg"
        type="text"
        placeholder="What is needed to be done ?"
        value={title}
        onChange={this.handleChange}
        onKeyPress={this.handleKeyPress}
      />
    );
  }
}
TaskCreate.propTypes = {
  handleTaskCreate: PropTypes.func.isRequired,
};

export default TaskCreate;
