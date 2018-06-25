import React, { Component } from 'react';
import PropTypes from 'prop-types';

const greyColor = '#d6d6d6';
const offWhiteColor = '#f9f9f9';
const primaryColor = '#1975FA';

const EnhancedTab = ({
  index,
  label,
  selected,
  className,
  style,
  selectedClassName,
  selectedStyle,
  selectHandler,
  value,
  mobile_breakpoint,
}) => {
  return (
    <div
      className={
        selected
          ? `${className || ''} ${selectedClassName || ''} tab tab--selected`
          : `${className || ''} tab`
      }
      style={selected ? { ...style, ...selectedStyle } : style}
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
          border: none;
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
    if(this.props.setProps) {
      this.props.setProps({value: value})
    }
  }
  render() {
    // enhance Tab components coming from Dash (as dcc.Tab) with methods needed for handling logic
    // TODO: handle components that are not dcc.Tab components (throw error)
    const EnhancedTabs = this.props.children.map((child, index) => {
      let childProps;

      if(child.props.children) {
        // if props appears on .children, props are coming from Dash
        childProps = child.props.children.props
      } else {
        // else props are coming from React (Demo.react.js)
        childProps = child.props
      }
      return (
        <EnhancedTab
          key={index}
          index={index}
          label={childProps.label}
          selected={this.state.selected === index}
          selectHandler={this.selectHandler}
          className={childProps.className}
          style={childProps.style}
          selectedClassName={childProps.selectedClassName}
          selectedStyle={childProps.selectedStyle}
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
        className={`${tabParentClass} ${this.props.parentClassName || ''}`}
        style={this.props.parentStyle}
      >
        <div
          className={`${tabContainerClass} ${this.props.className || ''}`}
          style={this.props.style}
        >
          {EnhancedTabs}
        </div>
        <div
          className={`${tabContentClass} ${this.props.contentClassName || ''}`}
          style={this.props.contentStyle}
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
            border-top: 1px solid ${greyColor};
            border-left: 2px solid ${primaryColor};
            border-right: none;
          }
          .tab-content {
          }
          .tab-content--vert {
            display: inline-flex;
            flex-direction: column;
          }
          @media screen and (min-width: ${this.props.mobile_breakpoint}) {
            .tab-parent--vert {
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
}

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
  contentClassName: PropTypes.string,

  /**
   * Appends a class to the top-level parent container holding both the Tabs container and the content container.
   */
  parentClassName: PropTypes.string,

  /**
   * Appends (inline) styles to the Tabs container holding the individual Tab components.
   */
  style: PropTypes.object,

  /**
   * Appends (inline) styles to the top-level parent container holding both the Tabs container and the content container.
   */
  parentStyle: PropTypes.object,

  /**
   * Appends (inline) styles to the tab content container holding the children of the Tab that is selected.
   */
  contentStyle: PropTypes.object,

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
