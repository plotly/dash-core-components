import React from 'react';
import PropTypes from 'prop-types';

const Tab = ({ children }) => {
  return (
    <div>
      {children}
      <style jsx>{`
        p {
          color: red;
        }
      `}</style>
    </div>
  );
};

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
