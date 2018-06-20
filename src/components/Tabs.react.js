import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = { value: props.value };
  }
  render() {
    return <div>{this.props.children}</div>;
  }
}

Tabs.propTypes = {
  /**
   * The ID of this component, used to identify dash components
   * in callbacks. The ID needs to be unique across all of the
   * components in an app.
   */
  id: PropTypes.string
};
