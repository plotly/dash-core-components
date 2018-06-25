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
  value
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
          background-color: ${offWhiteColor};
          border: 1px solid ${greyColor};
          padding: 20px;
          transition: background-color, color 200ms;
          font-family: 'system-ui';
          width: 100%;
          box-sizing: border-box;
        }
        .tab:hover {
          cursor: pointer;
        }
        .tab--selected {
          border-top: 2px solid ${primaryColor};
          border-bottom: none;
          color: black;
        }

        @media screen and (min-width: 1000px) {
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
      return (
        <EnhancedTab
          key={index}
          index={index}
          label={child.props.label || child.props.children.props.label}
          selected={this.state.selected === index}
          selectHandler={this.selectHandler}
          className={child.props.className || child.props.children.props.className}
          style={child.props.style || child.props.children.props.style}
          selectedClassName={child.props.selectedClassName || child.props.children.props.selectedClassName}
          selectedStyle={child.props.selectedStyle || child.props.children.props.selectedStyle}
          value={child.props.value || child.props.children.props.value}
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
          @media screen and (min-width: 1000px) {
            .tab-parent--vert {
              flex-direction: row;
            }
          }
        `}</style>
      </div>
    );
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
   * Array that holds TabItems
   */
  children: PropTypes.node
};
