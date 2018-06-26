import React, { Component } from 'react';
import PropTypes from 'prop-types';

const greyColor = '#d6d6d6';
const offWhiteColor = '#f9f9f9';
const primaryColor = '#1975FA';

const EnhancedTab = ({
  index,
  id,
  label,
  selected,
  className,
  style,
  selectedClassName,
  selected_style,
  selectHandler,
  value,
  mobile_breakpoint
}) => {
  return (
    <div
      className={
        selected
          ? `${className || ''} ${selectedClassName || ''} tab tab--selected`
          : `${className || ''} tab`
      }
      id={id}
      style={selected ? { ...style, ...selected_style } : style}
      onClick={() => {
        selectHandler(index, value);
      }}
    >
      <span>{label}</span>
      <style jsx>{`
        .tab {
          display: inline-block;
          background-color: white;
          border: 1px solid ${greyColor};
          padding: 20px;
          transition: background-color, color 200ms;
          font-family: 'system-ui';
          width: 100%;
          box-sizing: border-box;
        }
        .tab:hover {
          cursor: pointer;
          background-color: ${offWhiteColor};
        }
        .tab--selected {
          border: 1px solid ${greyColor};
          border-top: 2px solid ${primaryColor};
          color: black;
        }
        .tab--selected:hover {
          background-color: white;
        }

        @media screen and (min-width: ${mobile_breakpoint}px) {
          .tab {
            width: auto;
          }
          .tab--selected {
            border-bottom: none;
            border-top: 2px solid ${primaryColor};
          }
        }
      `}</style>
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
  selectHandler(index, value) {
    this.setState({
      selected: index
    });
    if (this.props.setProps) {
      this.props.setProps({ value: value });
    }
  }
  render() {
    let EnhancedTabs;

    if (!Array.isArray(this.props.children)) {
      // if dcc.Tabs.children contains just one single element, it gets passed as an object
      // instead of an array - so we put in in array ourselves!
      this.props.children = [this.props.children];
    }

    EnhancedTabs = this.props.children.map((child, index) => {
      // TODO: handle components that are not dcc.Tab components (throw error)
      // enhance Tab components coming from Dash (as dcc.Tab) with methods needed for handling logic
      let childProps;

      if (child.props.children) {
        // if props appears on .children, props are coming from Dash
        childProps = child.props.children.props;
      } else {
        // else props are coming from React (Demo.react.js)
        childProps = child.props;
      }
      return (
        <EnhancedTab
          key={index}
          index={index}
          id={childProps.id}
          label={childProps.label}
          selected={this.state.selected === index}
          selectHandler={this.selectHandler}
          className={childProps.className}
          style={childProps.style}
          selectedClassName={childProps.selected_className}
          selected_style={childProps.selected_style}
          value={childProps.value}
          mobile_breakpoint={this.props.mobile_breakpoint}
        />
      );
    });

    const tabContainerClass = this.props.vertical
      ? 'tab-container tab-container--vert'
      : 'tab-container';

    const tabContentClass = this.props.vertical
      ? 'tab-content tab-content--vert'
      : 'tab-content';

    const tabParentClass = this.props.vertical
      ? 'tab-parent tab-parent--vert'
      : 'tab-parent';

    return (
      <div
        className={`${tabParentClass} ${this.props.parent_className || ''}`}
        style={this.props.parent_style}
      >
        <div
          className={`${tabContainerClass} ${this.props.className || ''}`}
          style={this.props.style}
        >
          {EnhancedTabs}
        </div>
        <div
          className={`${tabContentClass} ${this.props.content_className || ''}`}
          style={this.props.content_style}
        >
          {this.props.children[this.state.selected].props.children}
        </div>
        <style jsx>{`
          .tab-parent {
            display: flex;
            flex-direction: column;
          }
          .tab-container {
          }
          .tab-container--vert {
            display: inline-flex;
            flex-direction: column;
          }
          :global(.tab-container--vert .tab--selected) {
            border: 1px solid ${greyColor};
            border-left: 2px solid ${primaryColor};
            border-right: none;
          }
          .tab-content {
          }
          .tab-content--vert {
            display: inline-flex;
            flex-direction: column;
          }
          @media screen and (min-width: ${this.props.mobile_breakpoint}px) {
            .tab-parent--vert {
              display: inline-flex;
              flex-direction: row;
            }
          }
        `}</style>
      </div>
    );
  }
}

Tabs.defaultProps = {
  mobile_breakpoint: 1000
};

Tabs.propTypes = {
  /**
   * The ID of this component, used to identify dash components
   * in callbacks. The ID needs to be unique across all of the
   * components in an app.
   */
  id: PropTypes.string,

  /**
   * The value of the currently selected Tab
   */
  value: PropTypes.string,

  /**
   * Appends a class to the Tabs container holding the individual Tab components.
   */
  className: PropTypes.string,

  /**
   * Appends a class to the Tab content container holding the children of the Tab that is selected.
   */
  content_className: PropTypes.string,

  /**
   * Appends a class to the top-level parent container holding both the Tabs container and the content container.
   */
  parent_className: PropTypes.string,

  /**
   * Appends (inline) styles to the Tabs container holding the individual Tab components.
   */
  style: PropTypes.object,

  /**
   * Appends (inline) styles to the top-level parent container holding both the Tabs container and the content container.
   */
  parent_style: PropTypes.object,

  /**
   * Appends (inline) styles to the tab content container holding the children of the Tab that is selected.
   */
  content_style: PropTypes.object,

  /**
   * Renders the tabs vertically (on the side)
   */
  vertical: PropTypes.bool,

  /**
   * Breakpoint at which tabs are rendered full width (can be 0 if you don't want full width tabs on mobile)
   */
  mobile_breakpoint: PropTypes.number,

  /**
   * Array that holds Tab components
   */
  children: PropTypes.node
};
