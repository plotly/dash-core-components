import React from 'react';
import PropTypes from 'prop-types';

const Tab = ({ children }) => <div>{children}</div>;

Tab.propTypes = {
  /**
   * The tab's label
   */
  label: PropTypes.string,

  /**
   * The content of the tab - will only be displayed if this tab is selected
   */
  children: PropTypes.node,

  /**
   * Appends a class to the Tab component.
   */
  className: PropTypes.string,

  /**
   * Appends a class to the Tab component when it is selected.
   */
  selectedClassName: PropTypes.string,

  /**
   * Overrides the default (inline) styles for the Tab component.
   */
  style: PropTypes.object,

  /**
   * Overrides the default (inline) styles for the Tab component when it is selected.
   */
  selectedStyle: PropTypes.object
};

export default Tab;
