import React from 'react';

class Button extends React.Component {
    render() {
        return (
            <button
                className={this.props.light ? 'light-button' : 'dark-button'}>
                Refresh
            </button>
        );
    }
}

/* 
// functional component

import React from 'react';

function Button(props) {
    return (
        <button onClick={props.onClick} className={props.light ? 'light-button' : 'dark-button'}>
            Refresh
        </button>
    );
}

export default Button;
*/