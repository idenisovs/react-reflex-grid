/**
 * Created by I.Denisovs on 06.11.2017.
 */

import React from 'react';

class Abstract extends React.Component {
    constructor(props) {
        super(props);
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

export default Abstract;