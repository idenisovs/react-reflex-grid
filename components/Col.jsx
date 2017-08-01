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
        let className = `grid__${this.props.type}`;

        return (
            <div className={className}>
                {this.props.children}
            </div>
        );
    }
}

export default Col;