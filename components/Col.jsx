/**
 * Created by I.Denisovs on 01.08.2017.
 */

import React from 'react';
import 'reflex-grid';

class Col extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let className = `grid__col-${this.props.col}`;

        return (
            <div className={className}>
                {this.props.children}
            </div>
        );
    }
}

export default Col;