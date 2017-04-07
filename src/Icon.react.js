// inspired by https://github.com/andreypopp/react-fa
import React, { PropTypes } from 'react';

export default class Icon extends React.Component {

  static propTypes = {
    name: PropTypes.string.isRequired,
    className: PropTypes.string,
    size: PropTypes.oneOf(['lg', '2x', '3x', '4x', '5x']),
    rotate: PropTypes.oneOf(['45', '90', '135', '180', '225', '270', '315']),
    flip: PropTypes.oneOf(['horizontal', 'vertical']),
    fixedWidth: PropTypes.bool,
    spin: PropTypes.bool,
    pulse: PropTypes.bool,
    stack: PropTypes.oneOf(['1x', '2x']),
    inverse: PropTypes.bool,
    Component: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  };

  static defaultProps = {
    Component: 'span',
  };

  render() {
    const { Component, name, size, rotate, flip, spin, fixedWidth, stack, inverse, pulse, className,
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
    if (fixedWidth) {
      classNames = `${classNames} ci-fw`;
    }
    if (spin) {
      classNames = `${classNames} ci-spin`;
    }
    if (pulse) {
      classNames = `${classNames} ci-pulse`;
    }

    if (stack) {
      classNames = `${classNames} ci-stack-${stack}`;
    }
    if (inverse) {
      classNames = `${classNames} ci-inverse`;
    }

    if (className) {
      classNames = `${classNames} ${className}`;
    }
    return <Component {...props} className={classNames} />;
  }
}
