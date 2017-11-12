/**
 * Created by I.Denisovs on 01.08.2017.
 */

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import AbstractGridComponent from './Abstract.jsx';
import 'reflex-grid';

class Row extends AbstractGridComponent {
    constructor(props) {
        super(props);
    }

    render() {
        let bleed = { 'grid-bleed': this.props.bleed };
        let hidden = this.getHiddenClasses();
        let align = this.props.align ? 'align-' + this.props.align : null;
        let direction = {
            reverse: {'direction-row-reverse': this.props['direction-row-reverse']}
        };

        return (
            <div className={classNames("grid", bleed, hidden, align, direction.reverse, this.props.className)}>
                {this.props.children}
            </div>
        )
    }
}

Row.propTypes = {
    children: PropTypes.oneOfType([ PropTypes.element, PropTypes.array ]).isRequired,
    bleed: PropTypes.bool,
    hidden: PropTypes.string,
    align: PropTypes.oneOf(['start', 'center', 'end']),
    'direction-row-reverse': PropTypes.bool
};

export default Row;