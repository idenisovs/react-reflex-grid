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

        this.allowedDirectionAttributes = [ 'direction-row-reverse', 'direction-column', 'direction-column-reverse' ];
        this.allowedJustifyAttributes = [ 'justify-end', 'justify-center', 'justify-space-between', 'justify-space-around' ];
    }

    render() {
        let bleed = { 'grid-bleed': this.props.bleed };
        let hidden = this.getHiddenClasses();
        let align = this.props.align ? 'align-' + this.props.align : null;
        let direction = this.getDirectionClass();
        let justify = this.getJustifyClass();

        let classes = classNames("grid", bleed, hidden, align, direction, justify, this.props.className);

        return (
            <div className={classes}>
                {this.props.children}
            </div>
        )
    }

    getDirectionClass() {
        let usedDirectionAttributes = this.allowedDirectionAttributes.filter((attr) => this.props[attr]);

        if (!usedDirectionAttributes.length) {
            return null;
        }

        if (usedDirectionAttributes.length > 1) {
            console.warn('Many direction attributes used simultaneously:', usedDirectionAttributes.join(', '));
        }

        return usedDirectionAttributes.pop();
    }

    getJustifyClass() {
        let usedJustifyAttributes = this.allowedJustifyAttributes.filter((attr) => this.props[attr]);

        if (!usedJustifyAttributes.length) {
            return null;
        }

        if (usedJustifyAttributes.length > 1) {
            console.warn('Many justify attributes used simultaneously:', usedJustifyAttributes.join(', '));
        }

        return usedJustifyAttributes.pop();
    }
}

Row.propTypes = {
    children: PropTypes.oneOfType([ PropTypes.element, PropTypes.array ]).isRequired,
    bleed: PropTypes.bool,
    hidden: PropTypes.string,
    align: PropTypes.oneOf(['start', 'center', 'end']),
    'direction-row-reverse': PropTypes.bool,
    'direction-column': PropTypes.bool,
    'direction-column-reversed': PropTypes.bool,
    'justify-end': PropTypes.bool,
    'justify-center': PropTypes.bool,
    'justify-space-between': PropTypes.bool,
    'justify-space-around': PropTypes.bool
};

export default Row;
