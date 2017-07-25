import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Title.local.scss';


const cx = classNames.bind(styles);

function Title(props) {
  return (
    <h1 className={cx('text-center', 'heading')}>
      {props.children}
    </h1>
  );
}
Title.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Title;
