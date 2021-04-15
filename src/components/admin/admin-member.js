import { wait } from '@testing-library/dom';
import React, { Component, useState } from 'react';
import Function, { ChangeToSlug } from '../helper/functions';
import { NavLink, Redirect } from 'react-router-dom';
import Axios from 'axios';


import MemberApi from '../../api/member_api.js';



class AdminMember extends Component {

    constructor(props) {
        super(props);
        this.state = {
            memberArr: [],
            remove: null
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


   

    delItem = (id) => {
        var self = this;
        Axios({
            method: 'GET',
            url: process.env.REACT_APP_API_URL + 'member-delete.php?_id='+ 72,
            data: {}
        }).then(function (response) {
            console.log(response);
            self.setState({remove: true})
          
        }).catch(function (error) {
            console.log(error);
        });

    }

    render() {
        return (
            <div className='row'>
                <div className="col-lg-6">
                    <h2>Member Page User Axios API </h2>
                </div>
                <div className="col-lg-6">
                    <NavLink activeClassName='menu-active' to='/admin-member-add/'>Add New</NavLink>
                </div>
                <div className="col-lg-12">
                    <ul className='admin-member-list'>
                        <li>
                            <div className='list-title'>
                                <div><h3>ID</h3></div>
                                <div><h3>NAME</h3></div>
                                <div><h3>PHONE</h3></div>
                                <div><h3>EMAIL</h3></div>
                                <div><h3>Delete</h3></div>
                            </div>
                        </li>
                        {this.state.memberArr.map(member => <li id={member.key} key={member.key}>

                            <div className='list-row'>
                                <div>{member.key}</div>
                                <div className='link-item'>
                                    <NavLink to={"admin-member-update/" + member.key + "/" + ChangeToSlug(member.key) + '.html'}>
                                        {member.name}
                                    </NavLink>
                                </div>
                                <div>{member.phone}</div>
                                <div>{member.email}</div>
                                <div className='del-item'>
                                    <i onClick={() => this.delItem(member.key)} className="fas fa-trash-alt"></i>
                                </div>
                            </div>

                        </li>)}
                    </ul>

                </div>
            </div>
        );
    }
}

export default AdminMember;