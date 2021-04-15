import { wait } from '@testing-library/dom';
import React, { Component, useState } from 'react';
import Function, { ChangeToSlug } from '../helper/functions';
import { NavLink } from 'react-router-dom';
import Axios from 'axios';

import MemberApi from '../../api/member_api.js';



class AdminMemberAddNew extends Component {

    constructor(props) {
        super(props);
        this.state = {
            txtName: '',
            txtPhone: '',
            txtEmail: '',
            member: []
        }
        this.onSave = this.onSave.bind(this);
    }

    onSave = (e) => {
        // e.prevenDefault();
        var { txtName, txtPhone, txtEmail } = this.state;
        Axios({
            method: 'POST',
            url: process.env.REACT_APP_API_URL + 'member-add.php',
            data: {
                txtname: txtName,
                txtphone: txtPhone,
                txtemail: txtEmail
            }
        }).then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });
        console.log('onlick');
    }

    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        });
    }

    componentDidMount() {

    }

    render() {
        var { txtName, txtPhone, txtEmail } = this.state;
     
        return (
            <div className={'row'}>

                <div className={'col-lg-3'}>
                    <NavLink activeClassName='menu-active' to='/admin'>Member List</NavLink>
                </div>


                <div className={'col-lg-9'}>

                    <div>
                        <h1> Add New Member </h1>
                    </div>

                    <div>
                        <div><label>Name : </label></div>
                        <div>
                            <input type='text'
                                name='txtName'
                                value={txtName}
                                onChange={this.onChange}
                                placeholder='Full Name'

                            >
                            </input>
                        </div>
                    </div>

                    <div>
                        <div>
                            <label>Phone : </label>
                        </div>
                        <div>
                            <input type='text'
                                name='txtPhone'
                                value={txtPhone}
                                onChange={this.onChange}
                                placeholder='Phone Number'

                            />
                        </div>
                    </div>

                    <div>
                        <div>
                            <label>Email : </label>
                        </div>
                        <div>
                            <input type='text'
                                name='txtEmail'
                                value={txtEmail}
                                onChange={this.onChange}
                                placeholder='Email Address'

                            />
                        </div>
                    </div>

                    <div>
                        <button type='button' onClick={this.onSave} className='btn btn-secondary' > Submit </button>
                    </div>




                </div>
                <div className='col-12'>
                    {this.state.txtName}
                    {this.state.txtPhone}
                    {this.state.txtEmail}
                </div>
            </div>
        );
    }
}

export default AdminMemberAddNew;