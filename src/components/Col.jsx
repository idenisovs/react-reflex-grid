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
    }

    render() {
        let className = `col-${this.props.col}`;

        return (
            <div className={classNames(className, this.props.className)}>
                {this.props.children}
            </div>
        );
    }
}

Col.propTypes = {
    col: PropTypes.string.isRequired
};

export default Col;