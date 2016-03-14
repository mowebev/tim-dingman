import React from 'react';
import { Component } from 'react';
import { PropTypes } from 'react';
import classnames from 'classnames';

import styles from './styles.scss';


/**
 * Thumbnail component is used for...
 */
class Thumbnail extends Component {
  render() {
    const props = this.props;
    const className = classnames(
      styles.default,
      props.className,
    );
    return (
      <thumbnail
        className={className}
        style={props.style}
      >
        <a
          style={{
            backgroundImage: `url(media/${props.img})`,
          }}
        />
      </thumbnail>
    );
  }
}


Thumbnail.propTypes = {
  /**
   * Add custom className
  */
  className: PropTypes.string,
  /**
   * Add custom inline styles
  */
  style: PropTypes.object,
  img: PropTypes.string.isRequired,
};


Thumbnail.defaultProps = {
};


export default Thumbnail;
