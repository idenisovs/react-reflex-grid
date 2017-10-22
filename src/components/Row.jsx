/**
 * Created by I.Denisovs on 01.08.2017.
 */

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import 'reflex-grid';

class Row extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={classNames("grid", this.props.className)}>
                {this.props.children}
            </div>
        )
    }
}

Row.propTypes = {
    children: PropTypes.element.isRequired
};

export default Row;