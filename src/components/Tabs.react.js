import React, { Component } from 'react';
import PropTypes from 'prop-types';

const EnhancedTab = ({ index, label, children, selected, selectHandler }) => {
  return (
    <div>
      <p
        onClick={() => {
          selectHandler(index);
        }}
      >
        {label}
      </p>
      <div>{selected ? children : ''}</div>
    </div>
  );
};

export default class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 0
    };

    this.selectHandler = this.selectHandler.bind(this);
  }
  selectHandler(index) {
    this.setState({
      selected: index
    });
  }
  render() {
    // enhance Tab components coming from Dash (as dcc.Tab) with methods needed for handling logic
    // TODO: ensure that children are Tab components
    const EnhancedTabs = this.props.children.map((child, index) => {
      return (
        <EnhancedTab
          key={index}
          index={index}
          label={child.props.label || child.props.children.props.label}
          selected={this.state.selected === index}
          selectHandler={this.selectHandler}
          children={child.props.children}
        />
      );
    });

    return <div>{EnhancedTabs}</div>;
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
  tabs: PropTypes.arrayOf(PropTypes.shape({})),

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
  contentStyles: PropTypes.string,

  /**
   * Array that holds TabItems
   */
  children: PropTypes.node
};
