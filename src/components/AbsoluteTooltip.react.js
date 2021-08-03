import PropTypes from 'prop-types';
import './css/AbsoluteTooltip.css';

/**
 * A tooltip with an absolute position.
 */
const AbsoluteTooltip = props => {
    const { bbox } = props;

    const containerStyle = {
        top: `${bbox.y0}px`,
        left: `${bbox.x0}px`,
        width: `${bbox.x1 - bbox.x0}px`,
        height: `${bbox.y1 - bbox.y0}px`,
        display: props.show ? 'block' : 'none',
    };

    return (
        <div
            id={props.id}
            className={`dccAbsoluteTooltip-container ${props.className}`}
            style={containerStyle}
        >
            <div className="dccAbsoluteTooltip-content">
                {props.children}
            </div>
        </div>
    )
}

AbsoluteTooltip.defaultProps = {
    show: false,
};

AbsoluteTooltip.propTypes = {
    // Dash specific props
    /**
     * The children of this component
     */
    children: PropTypes.node,

    /**
     * The ID of this component, used to identify dash components
     * in callbacks. The ID needs to be unique across all of the
     * components in an app.
     */
    id: PropTypes.string,

    /**
     * The class of the input element
     */
    className: PropTypes.string,

    /**
     * The input's inline styles
     */
    style: PropTypes.object,

    /**
     * Dash-assigned callback that gets fired when the value changes.
     */
    setProps: PropTypes.func,

    // Component specific props
    /**
     * The bounding boxes coordinates
     */
    bbox: PropTypes.exact({
        x0: PropTypes.number,
        y0: PropTypes.number,
        x1: PropTypes.number,
        y1: PropTypes.number,
    }),

    /**
     * Whether to show the tooltip or not
     */
    show: PropTypes.bool,
}

export default AbsoluteTooltip;