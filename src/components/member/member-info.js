import React, { Component } from 'react';
import MemberApi from '../../api/member_api.js';

import Nav from '../nav/nav';
import Right from '../sidebar/right';


class MemberInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            membertest: [{ id: '1', ten: 'tran van hung', tuoi: '15', phone: '0223544' }],
            member: [],
        }
    }

    componentDidMount() {
        var idp = this.props.match.params.id;
        const fetchMemberList = async () => {
            try {
                const params = { _id: idp }
                const response = await MemberApi.getMemberInfo(params);
                this.setState({ member: response });
                console.log(this.state.member);
            } catch (error) {
                console.log('loi get data');
            }
        }
        fetchMemberList();
    }


    render() {
        const value = Object.values(this.state.member);
        console.log(value);
        return (
            <div className='row'>
                <div className='col-lg-12'>
                    <Nav />
                </div>
                <div className='col-lg-3'>
                    <Right />
                </div>

                <div className='col-lg-9'>
                    <h1> Member Infomation</h1>
                    <div>
                        <label><i> Name : </i> {value[1]} </label>
                    </div>
                    <div>
                        <label><i> Address : </i> {value[3]} </label>
                    </div>
                    <div>
                        <img style={{ width: '80%', margin: '2rem', borderRadius: '0.5rem', border: "0.2rem #ccc solid" }}
                            src={"http://reactjs.astcc24.net/images/img/" + value[2]} />
                    </div>
                </div>
            </div>
        );
    }
}

export default MemberInfo;