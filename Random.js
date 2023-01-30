import React from 'react';
import ReactDOM from 'react-dom';

class Random extends React.Component {
    componentDidMount() {
        this.applyColor();
    }

    componentDidUpdate(prevProps, prevState) {
        this.applyColor();
    }

    formatColor(ary) {
        return 'rgb(' + ary.join(', ') + ')';
    }

    isLight() {
        const rgb = this.state.color;
        return rgb.reduce((a, b) => a + b) < 127 * 3;
    }

    applyColor() {
        const color = this.formatColor(this.state.color);
        document.body.style.background = color;
    }

    chooseColor() {
        const random = [];
        for (let i = 0; i < 3; i++) {
            random.push(Math.floor(Math.random() * 256));
        }
        return random;
    }

    render() {
        return (
            <div>
                <h1 className={this.isLight() ? 'white' : 'black'}>

                </h1>
            </div>
        );
    }
}

ReactDOM.render(
    <Random />,
    document.getElementById('app')
);



/* 
//functional component

import React, { useState, useEffect } from 'react';
import Button from '../Button/Button';

function Random() {
    const [color, setColor] = useState([92, 132, 153]);

    useEffect(() => {
        applyColor();
    });

    const handleClick = () => {
        setColor(chooseColor);
    };

    const formatColor = (ary) => {
        return 'rgb(' + ary.join(', ') + ')';
    };

    const applyColor = () => {
        const newColor = formatColor(color);
        document.body.style.background = newColor;
    };

    const chooseColor = () => {
        const random = [];
        for (let i = 0; i < 3; i++) {
            random.push(Math.floor(Math.random() * 256));
        }
        return random;
    };

    return (
        <div>
            <h1 className={color.reduce((a, b) => a + b) < 127 * 3 ? 'white' : 'black'}>Your color is {formatColor(color)}.</h1>
            <Button light={color.reduce((a, b) => a + b) < 127 * 3} onClick={handleClick} />
        </div>
    );
}

export default Random;
*/