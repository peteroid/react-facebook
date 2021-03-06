import React, { PropTypes } from 'react';
import Parser from './Parser';
import getCurrentHref from './utils/getCurrentHref';

export default class CommentsCount extends Parser {
  static contextTypes = {
    ...Parser.contextTypes,
  };

  static propTypes = {
    ...Parser.propTypes,
    href: PropTypes.string,
    children: PropTypes.node,
  };

  renderComponent() {
    const { href = getCurrentHref(), children } = this.props;

    return (
      <span
        className="fb-comments-count"
        data-href={href}
      >
        {children}
      </span>
    );
  }
}
