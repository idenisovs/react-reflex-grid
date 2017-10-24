/**
 * Created by I.Denisovs on 24.10.2017.
 */

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import 'reflex-grid';

class Container extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let className = this.getClassName();

        return (
            <div className={classNames(className, this.props.className)}>
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
    full: PropTypes.bool
};

export default Container;