import React, { Component } from 'react';
import Store from './store';
import MemberApi from '../../api/member_api.js';





class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            memberlist: []
        }
    }


    componentDidMount() {

        const fetchMemberList = async () => {
            try {
                const response = await MemberApi.getAll();
                this.setState({ memberlist: response });
            } catch (error) {
                console.log('loi get data');
            }
        }
        fetchMemberList();

    }


    render() {
        return (
            <div style={{ backgroundColor: '#666', color: '#fff' }}>
                <Store address="123 ly chien thang" phone='02658774' email='gmail123@gmail.com'>
                    CUA HANG CHUYEN MAY MAC
                </Store>
                <Store address="58 tran hung dao" phone='892689978' email='yahoo@yahoo.com'>
                    CUA HANG CHUYEN DIEN MAY
                </Store>
                <Store address="203 bui minh truc" phone='33987544' email='giadung@gmail.com'>
                    CUA HANG CHUYEN GIA DUNG
                </Store>
                <Store address="89 nguyen trai" phone='896554545' email='thucpham@gmail.com'>
                    CUA HANG CHUYEN THUC PHAM
                </Store>
                <div className='col-lg-12'>
                    <ul className={'member-list'}>
                        {this.state.memberlist.map(member => <li key={member.key}>
                            <div className={'member-item'}>
                                <div>
                                    <img src={member.img} />
                                </div>
                                <div>
                                    <div><h4>{member.name}</h4></div>
                                    <div>{member.phone}</div>
                                    <div>{member.email}</div>
                                </div>
                            </div>

                        </li>)}
                    </ul>
                  
                </div>
            </div>
        );
    }
}

export default Footer;