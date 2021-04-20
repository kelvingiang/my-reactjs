import React, { Component, useState } from 'react';
import MemberApi from '../../api/member_api.js';
import MemberView from '../member/member-view';


class MemberGetAxios extends Component {

    constructor(props) {
        super(props);
        this.state = {
            memberArr: []
        }
    }

    componentDidMount() {

        const fetchMemberList = async () => {
            try {
                const response = await MemberApi.getAll();
                this.setState({ memberArr: response });
            } catch (error) {
                console.log('loi get data');
            }
        }
        fetchMemberList();
    }

    render() {
        return (
            <div>
                <h2>Member Page User Axios API </h2>
                <ul className={'member-list'}>
                    {this.state.memberArr.map(member => <li key={member.key}>
                        <MemberView name={member.name} phone={member.phone} email={member.email} img={member.img} />
                    </li>)}
                </ul>
            </div>
        );
    }
}

export default MemberGetAxios;