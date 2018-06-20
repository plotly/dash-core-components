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
  children: PropTypes.node
};

export default Tab;
