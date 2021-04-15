import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Nav from '../nav/nav';

import Right from '../sidebar/right';
import Left from '../sidebar/left';
;


class Front extends Component {
    render() {
        return (
            <div className='row' style={{ margin: '0px' }}>
                <div className='col-lg-12'>
                    <Nav />
                </div>
                <div className='col-lg-3'>
                    <Left />
                </div>
                <div className='col-lg-6'>
                
                </div>
                <div className='col-lg-3'>
                    <Right />
                </div>
            </div>
        );
    }
}

export default Front;