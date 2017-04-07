// inspired by https://github.com/andreypopp/react-fa
import React, { PropTypes } from 'react';

export default class IconStack extends React.Component {

  static propTypes = {
    className: PropTypes.string,
    size: PropTypes.oneOf(['lg', '2x', '3x', '4x', '5x']),
    children: PropTypes.node.isRequired
  };

  render() {
    const { className, size, children, ...props } = this.props;

    const classNames = ['ci-stack'];

    if (size) {
      classNames.push(`ci-${size}`);
    }

    if (className) {
      classNames.push(className);
    }

    const iconStackClassName = classNames.join(' ');

    return (
      <span {...props} className={iconStackClassName}>
        {children}
      </span>
    );
  }
}
