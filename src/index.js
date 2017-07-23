import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader'

import App from './App';


function render() {
  const MOUNT_ROOT = document.getElementById('root');

  ReactDOM.render(
    <AppContainer>
      <App />
    </AppContainer>,
    MOUNT_ROOT
  );
}

render();

if (module.hot) {
  module.hot.accept('./App', () => {
    render();
  });
}
