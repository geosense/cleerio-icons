// inspired by https://github.com/andreypopp/react-fa
import React from 'react';
import PropTypes from 'prop-types';


export default class Icon extends React.PureComponent {

  static propTypes = {
    name: PropTypes.string.isRequired,
    className: PropTypes.string,
    size: PropTypes.oneOf(['12', '14', '18', '22', '24']),
    rotate: PropTypes.oneOf(['90', '180', '270']),
    flip: PropTypes.oneOf(['horizontal', 'vertical']),
    spin: PropTypes.bool,
    pulse: PropTypes.bool,
    pull: PropTypes.oneOf(['left', 'right']),
    Component: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  };

  static defaultProps = {
    Component: 'span',
  };

  render() {
    const { Component, name, size, rotate, flip, spin, pulse, className, pull,
      ...props } = this.props;

    let classNames = `ci ci-${name}`;

    if (size) {
      classNames = `${classNames} ci-${size}`;
    }
    if (rotate) {
      classNames = `${classNames} ci-rotate-${rotate}`;
    }
    if (flip) {
      classNames = `${classNames} ci-flip-${flip}`;
    }
     if (spin) {
      classNames = `${classNames} ci-spin`;
    }
    if (pulse) {
      classNames = `${classNames} ci-pulse`;
    }
    if (pull) {
      classNames = `${classNames} ci-flip-${pull}`;
    }

    if (className) {
      classNames = `${classNames} ${className}`;
    }
    return <Component {...props} className={classNames} />;
  }
}
