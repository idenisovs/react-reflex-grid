/**
 * Created by I.Denisovs on 01.08.2017.
 */

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import 'reflex-grid';

class Col extends React.Component {
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
        let className = this.makeClassName();
        let bleed = { 'col-bleed': this.props.bleed };
        let hidden = this.getHiddenClasses();

        return (
            <div className={classNames(className, bleed, hidden, this.props.className)}>
                {this.props.children}
            </div>
        );
    }

    makeClassName() {
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

    getHiddenClasses() {
        if (!this.props.hidden) {
            return;
        }

        let hidden = this.props.hidden.replace(/\s/g, '').split(',');

        return hidden.map((bp) => {
            return 'hidden-' + bp;
        });
    }
}

Col.propTypes = {
    col: PropTypes.string,
    size: PropTypes.number,
    auto: PropTypes.bool,
    hidden: PropTypes.string
};

export default Col;