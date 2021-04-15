import React, { Component } from 'react';
import MemberApi from '../../api/member_api.js';
import { NavLink, Redirect } from 'react-router-dom';
import Axios from 'axios';



class AdminMemberUpdate extends Component {

    constructor(props) {
        super(props);
        this.state = {
            redirect: null,
            member: [],
            txtID: '',
            txtName: '',
            txtPhone: '',
            txtEmail: '',
            txtImg: ''
        }

        this.onInputchange = this.onInputchange.bind(this);


    }

    componentDidMount() {
        var idp = this.props.match.params.id;
        const fetchMemberList = async () => {
            try {
                const params = { _id: idp }
                const response = await MemberApi.getMemberInfo(params);
                const info = Object.values(response);
                this.setState({ member: info });
                console.log(this.state.member);
                this.setState({
                    txtID: info[0],
                    txtName: info[1],
                    txtPhone: info[4],
                    txtEmail: info[5],
                    txtImg: info[2]
                });


            } catch (error) {
                console.log('loi get data');
            }
        }
        fetchMemberList();

    }

    submit = () => {
        // e.prevenDefault();
        var { txtID, txtName, txtPhone, txtEmail, txtImg, redirect } = this.state;
        var self = this; // 1/3 chuyen this thanh self de chuyen trang sau khi update
        Axios({
            method: 'POST',
            url: process.env.REACT_APP_API_URL + 'member-add.php',
            data: {
                txtid: txtID,
                txtname: txtName,
                txtphone: txtPhone,
                txtemail: txtEmail,
                txtimg: txtImg
            }

        }).then(function (response) {
            console.log(response.data);
            self.setState({ redirect: 'true' }) // 2/3 set lai state de chuyen trang
        }).catch(function (error) {
            console.log(error);
        });

    }

    onInputchange(e) {
        var target = e.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        });
    }

    render() {
        // =-====== 3/3 kiem tra state de chuyen trang    
        if (this.state.redirect) {
            return <Redirect to={'/admin'} />
        }

        var { txtID, txtName, txtPhone, txtEmail, txtImg } = this.state;
        return (
            <div className='row'>
                <div className='col-lg-3'>
                    <NavLink activeClassName='menu-active' to='/admin'>Member List</NavLink>
                </div>

                <div className='col-lg-9'>
                    <h1> Member Infomation</h1>
                    <div>
                        <img style={{
                            width: '100px',
                            margin: '2rem',
                            borderRadius: '0.5rem',
                            border: "0.2rem #ccc solid"
                        }}
                            src={"http://reactjs.astcc24.net/images/img/" + txtImg} />
                    </div>

                    <div>
                        <div><label>Name : </label></div>
                        <div>
                            <input type='text'
                                name='txtName'
                                value={txtName}
                                onChange={this.onInputchange}
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
                                onChange={this.onInputchange}
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
                                onChange={this.onInputchange}

                            />
                        </div>
                    </div>

                    <div>
                        <button onClick={() => this.submit()}
                            className='btn btn-secondary'>
                            submit
                        </button>
                    </div>


                    <div className='col-12'>
                        {this.state.txtname}
                        {this.state.txtaddress}
                    </div>
                </div>
            </div>
        );
    }
}

export default AdminMemberUpdate;