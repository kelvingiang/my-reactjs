import React, { Component } from 'react';
import { Prompt, Redirect } from 'react-router-dom';


/*
Prompt trong react-router-dom 
se kiem tra cac input trong form neu co du lieu se hoi truoc khi chuyen qua trang khac

Redirest in react-router-dom
dung cho truong hop chuyen trang nhu se chuyen trang khi submit

lay noi dung cua input dat ten cac input trung voi ten cac state de tien cho viec lay gia tri tung input 
*/

class Contact_us extends Component {
    constructor(porps) {
        super(porps);
        this.state = {
            isbooking: false,
            isredirest: false,
            txtUser: '',
            txtAddress: '',
            txtPhone: '',
            txtEmail: '',
            txtFax: '',
            sltCity: '2',
        }
    }

    submitForm = (e) => {
        e.preventDefault()
        e.target.reset()

        this.setState({
            isredirest: false, // true chuyen trang, false khong chuyen trang 
            isbooking: false,
        });

        var content = '';
        content += 'Name:' + this.state.txtUser;
        content += ', Address:' + this.state.txtAddress;
        content += ', Emai:' + this.state.txtEmail;
        content += ', phone:' + this.state.txtPhone;
        content += ', fax:' + this.state.txtFax;
        content += ', city:' + this.state.sltCity;

        console.log(content);

    }

    isInputChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState({
            isbooking: target.value.length > 0,
            [name]: value
        });
    }

    render() {
        if (this.state.isredirest) {
            return (
                <Redirect to='/' />
            )
        }

        return (

            <div className='row'>
                <Prompt when={this.state.isbooking} message={location => ('ban muon thoat khoi trang nay khong ')} />

                <div className='col-12'>
                    <h2> Contact_Us</h2>
                </div>
                <div className='col-12'>
                    <form onSubmit={(e) => this.submitForm(e)} >
                        <div className='row contact-row'>
                            <div className='col-3 from-text'>User name</div>
                            <div className='col-9'>
                                <input type='text' placeholder='user name' name='txtUser' onChange={(event) => this.isInputChange(event)} value={this.state.txtUser} />
                            </div>

                            <div className='col-3 from-text'>Address</div>
                            <div className='col-9'>
                                <input type='text' placeholder='address' name='txtAddress' onChange={(event) => this.isInputChange(event)} value={this.state.txtAddress} />
                            </div>

                            <div className='col-3 from-text'>Phone</div>
                            <div className='col-9'>
                                <input type='text' placeholder='phone' name='txtPhone' onChange={(event) => this.isInputChange(event)} value={this.state.txtPhone} />
                            </div>

                            <div className='col-3 from-text'>Email</div>
                            <div className='col-9'>
                                <input type='text' placeholder='emai' name='txtEmail' onChange={(event) => this.isInputChange(event)} value={this.state.txtEmail} />
                            </div>

                            <div className='col-3 from-text'>Fax</div>
                            <div className='col-9'>
                                <input type='text' placeholder='fax' name='txtFax' onChange={(event) => this.isInputChange(event)} value={this.state.txtFax} />
                            </div>

                            <div className='col-3 from-text'>City</div>
                            <div className='col-9'>
                                <select name='sltCity' value={this.state.sltCity} onChange={(event) => this.isInputChange(event)}>
                                    <option value=''>select city</option>
                                    <option value='1'>HCMC</option>
                                    <option value='2'>HA NOi</option>
                                    <option value='3'>NHA TRANG</option>
                                    <option value='4'>CAN THO</option>
                                </select>
                            </div>

                            <div className='col-3 from-text'>code</div>
                            <div className='col-9'>
                                <label className='from-text'><input type='checkbox' name='chkSubjust' value='php' /> php</label>
                                <label className='from-text'><input type='checkbox' name='chkSubjust' value='asp' /> asp</label>
                                <label className='from-text'><input type='checkbox' name='chkSubjust' value='c' /> c#</label>
                                <label className='from-text'><input type='checkbox' name='chkSubjust' value='react' /> react</label>
                                <label className='from-text'><input type='checkbox' name='chkSubjust' value='note' /> note</label>
                                <label className='from-text'><input type='checkbox' name='chkSubjust' value='android' /> android</label>
                                <label className='from-text'><input type='checkbox' name='chkSubjust' value='jave' /> java</label>
                            </div>

                            <div className='col-3 from-text'>gender</div>
                            <div className='col-9'>
                                <label className='from-text'><input type='radio' name='rdoGenden' value='male' /> male</label>
                                <label className='from-text'><input type='radio' name='rdoGenden' value='female' /> female</label>
                                <label className='from-text'><input type='radio' name='rdoGenden' value='other' /> other</label>
                            </div>

                            <div className='col-12' style={{ marginTop: '10px', textAlign: "center" }}>
                                <input type='submit' className="btn-submit" value='submit form' />
                            </div>
                        </div>
                    </form>
                </div>

            </div>
        );
    }
}

export default Contact_us;