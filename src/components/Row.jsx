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

    componentWillMount() {
        let directionAttributes = this.countDirectionAttributes();

        if (directionAttributes.length > 1) {
            console.warn('Many direction attributes used simultaneously:', directionAttributes.join(', '));
        }
    }

    render() {
        let bleed = { 'grid-bleed': this.props.bleed };
        let hidden = this.getHiddenClasses();
        let align = this.props.align ? 'align-' + this.props.align : null;
        let direction = {
            reverse: { 'direction-row-reverse': this.props['direction-row-reverse'] },
            column: { 'direction-column': this.props['direction-column'] },
            'column-reverse': { 'direction-column-reverse': this.props['direction-column-reverse'] }
        };

        let classes = classNames("grid", bleed, hidden, align, direction.reverse, direction.column, direction['column-reverse'], this.props.className);

        return (
            <div className={classes}>
                {this.props.children}
            </div>
        )
    }

    countDirectionAttributes() {
        let directionAttributes = ['direction-row-reverse', 'direction-column', 'direction-column-reverse'];

        return directionAttributes.filter((attr) => this.props[attr]);
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