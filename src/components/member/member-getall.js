import { wait } from '@testing-library/dom';
import React, { Component, useState } from 'react';
import MemberView from '../member/member-view';
import axios from 'axios';



class MemberGetAll extends Component {

    constructor(props) {
        super(props);
        this.state = {
            memberlist: []
        }
    }

    componentDidMount() {
        // phan nay goi axios truc tiep
        axios.get(process.env.REACT_APP_API_URL)
            .then(res => {
                const members = res.data;
                this.setState({ memberlist: members });
            })
            .catch(error => console.log(error));
    }

    render() {
        return (
            <div>
                <h2>Member Page General</h2>
                <ul className={'member-list'}>
                    {this.state.memberlist.map(member => <li key={member.key}>
                        <MemberView name={member.name} phone={member.phone} email={member.email} img={member.img} />
                    </li>)}
                </ul>
            </div>
        );
    }
}

export default MemberGetAll;