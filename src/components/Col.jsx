/**
 * Created by I.Denisovs on 01.08.2017.
 */

import React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import AbstractGridComponent from './Abstract.jsx';
import responsiveOrderValidator from '../validators/responsive-order-validator';
import 'reflex-grid';

class Col extends AbstractGridComponent {
    constructor(props) {
        super(props);

        this.size = props.col || props.size || (props.auto ? 'auto' : null);

        if (!this.size) {
            let message = 'Column size or auto property should be defined!';
            console.error(message);
            return new Error(message);
        }
    }

    render() {
        const columnClasses = classNames(
            this.makeColClass(),
            this.getBleedClass(),
            this.getHiddenClasses(),
            this.props.order ? 'order-' + this.props.order : null,
            this.getResponsiveOrderClasses(),
            this.props.className
        );

        return (
            <div className={columnClasses}>
                {this.props.children}
            </div>
        );
    }

    makeColClass() {
        if (this.props.col) {
            console.warn('col property is deprecated!');
            return 'col-' + this.props.col;
        }

        let nameParts = [ 'col' ];

        let breakpoint = this.findBreakpoint();

        if (breakpoint) {
            nameParts.push(breakpoint);
        }

        nameParts.push(this.size);

        return nameParts.join('-');
    }

    findBreakpoint() {
        let breakpoints = [ 'xlg', 'lg', 'md', 'sm', 'xs' ];

        return breakpoints.find((bp) => {
            if (bp in this.props) {
                return bp;
            }
        })
    }

    getBleedClass() {
        switch(this.props.bleed) {
            case 'x':
            case 'y':
                return { ['col-bleed-' + this.props.bleed]: true };
            default:
                return { 'col-bleed': this.props.bleed };
        }
    }

    getResponsiveOrderClasses() {
        const responsiveOrder = this.props['responsive-order'];

        if (!responsiveOrder) {
            return;
        }

        return responsiveOrder
            .split(',')
            .map(bp => bp.trim())
            .map(bp => 'order-' + bp);
    }
}

Col.propTypes = {
    col: PropTypes.string,
    size: PropTypes.number,
    auto: PropTypes.bool,
    hidden: PropTypes.string,
    bleed: PropTypes.oneOfType([ PropTypes.bool, PropTypes.string ]),
    order: PropTypes.number,
    'responsive-order': responsiveOrderValidator
};

export default Col;
