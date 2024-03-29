import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './style.module.css';

const Header = props => {
  const { children, className, ...otherProps } = props;

  return (
    <header className={classNames(className, styles.header)} {...otherProps}>
      {children}
    </header>
  );
};

Header.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

Header.defaultProps = {
  children: null,
  className: '',
};

export default Header;
