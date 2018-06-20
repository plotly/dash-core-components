import React, { Component } from 'react';
import PropTypes from 'prop-types';

const TabItem = ({ tab }) => {
  // render tab here
  return (
    <div>
      <p>{tab.label}</p>
    </div>
  );
};

export default class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = { value: props.value };
  }
  render() {
    // create TabItems for all tabs
    const TabElements = this.props.tabs.map((tab, index) => {
      return <TabItem key={index} tab={tab} />;
    });

    return <div>{TabElements}</div>;
  }
}

Tabs.propTypes = {
  /**
   * The ID of this component, used to identify dash components
   * in callbacks. The ID needs to be unique across all of the
   * components in an app.
   */
  id: PropTypes.string,

  /**
   * An array holding the values for tabs - it should contain objects of options that holds a 'label' value for the label displayed on the tab, and a 'content' value which holds all the content for that tab.
   */
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      /**
       * The tab's label
       */
      label: PropTypes.string,

      /**
       * The content of the tab - will only be displayed if this tab is active
       */
      content: PropTypes.node
    })
  ),

  /**
   * Overrides the default class for the tabs container
   */
  className: PropTypes.string,

  /**
   * Overrides the default class for a tab item
   */
  tabClassName: PropTypes.string,

  /**
   * Overrides the default class for the active tab
   */
  activeClassName: PropTypes.string,

  /**
   * Overrides the default class for the tab content container
   */
  contentClassName: PropTypes.string,

  /**
   * Overrides the default styles for the tabs container
   */
  styles: PropTypes.string,

  /**
   * Overrides the default styles for a tab item
   */
  tabStyles: PropTypes.string,

  /**
   * Overrides the default styles for the active tab
   */
  activeStyles: PropTypes.string,

  /**
   * Overrides the default styles for the tab content container
   */
  contentStyles: PropTypes.string
};
