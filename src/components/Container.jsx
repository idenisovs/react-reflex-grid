/**
 * Created by I.Denisovs on 24.10.2017.
 */

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import AbstractGridComponent from './Abstract.jsx';
import 'reflex-grid';

class Container extends AbstractGridComponent {
    constructor(props) {
        super(props);
    }

    render() {
        let className = this.getClassName();
        let hidden = this.getHiddenClasses();

        return (
            <div className={classNames(className, hidden, this.props.className)}>
                {this.props.children}
            </div>
        );
    }

    getClassName() {
        let classParts = [ 'container' ];

        if (this.props.full) {
            classParts.push('full');
        }

        return classParts.join('-');
    }
}

Container.propTypes = {
    full: PropTypes.bool,
    hidden: PropTypes.string
};

export default Container;