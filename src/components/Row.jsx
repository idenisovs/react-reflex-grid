/**
 * Created by I.Denisovs on 01.08.2017.
 */

import React from 'react';
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

export default Row;