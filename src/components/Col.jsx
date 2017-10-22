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

        this.size = props.col || props.size || (props.auto ? 'auto' : '');

        if (!this.size && this.size.length === 0) {
            let message = 'Column size or auto property should be defined!';
            console.error(message);
            return new Error(message);
        }
    }

    render() {
        let className =`col-${this.size}`;

        return (
            <div className={classNames(className, this.props.className)}>
                {this.props.children}
            </div>
        );
    }
}

Col.propTypes = {
    col: PropTypes.string,
    size: PropTypes.string,
    auto: PropTypes.bool
};

export default Col;