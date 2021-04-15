import React, { Component } from 'react';
import MyColor from './mybox';

class ColorBox extends Component {
    render() {
        return (
            <div>
                <h1>use useState Changed box background Color</h1>
                <MyColor />
                <MyColor />
            </div>

        )
    }
}



export default ColorBox;