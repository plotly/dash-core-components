import React from 'react';
import PropTypes from 'prop-types';

const Tab = ({ children }) => <div>{children}</div>;

Tab.propTypes = {
  /**
   * The tab's label
   */
  label: PropTypes.string,

  /**
   * The content of the tab - will only be displayed if this tab is active
   */
  children: PropTypes.node,

  /**
   * Appends a class to the tab item
   */
  className: PropTypes.string,

  /**
   * Appends a class to the tab that's selected
   */
  selectedClassName: PropTypes.string,

  /**
   * Overrides the default styles for a tab item
   */
  style: PropTypes.object,

  /**
   * Overrides the default styles for the active tab
   */
  selectedStyle: PropTypes.object
};

export default Tab;
