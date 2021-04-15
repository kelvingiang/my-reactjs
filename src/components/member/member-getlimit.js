import { wait } from '@testing-library/dom';
import React, { Component, useState } from 'react';
import MemberApi from '../../api/member_api.js';
import MemberView from './member-view';

import Nav from '../nav/nav';
import Right from '../sidebar/right';

class MemberGetLimit extends Component {

    constructor(props) {
        super(props);
        this.state = {
            memberArr: []
        }
    }

    componentDidMount() {

        const fetchMemberList = async () => {
            try {
                const params = { _offset: 1, _page: 8 }
                const response = await MemberApi.getMemberLimit(params);
                this.setState({ memberArr: response });
                console.log(this.state.memberArr);
            } catch (error) {
                console.log('loi get data');
            }
        }
        fetchMemberList();
    }


    render() {

        return (
            <div className='row'>
                <div className='col-lg-12'>
                    <Nav />
                </div>
                <div className='col-lg-12'>
                    <div className='row'>
                        <div className='col-lg-3'>
                            <Right />
                        </div>
                        <div className='col-lg-9'>
                            <h2>Member get limit</h2>
                            <ul className={'member-list'}>
                                {this.state.memberArr.map(member => <li key={member.key}>
                                    <MemberView
                                        serial={member.key}
                                        name={member.name}
                                        phone={member.phone}
                                        email={member.email}
                                        img={member.img} />
                                </li>)}
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default MemberGetLimit;