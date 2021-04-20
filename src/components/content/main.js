import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Front from './front';

import Product from '../product/product';
import Contact_us from '../contact/contact';
import Home from '../home/home';
import About_us from '../about/about';
import Detail from '../product/detail';
import Member from '../member/member-getall';
import MemberGetAxio from '../member/member-getaxios';
import MemberGetLimit from "../member/member-getlimit";
import MemberInfo from "../member/member-info";

import Admin from './admin';
import AdminMemberUpdate from '../admin/admin-member-update';
import AdminMemberAddNew from '../admin/admin-member-addnew';

// ===Hook ====
import ColorBox from '../use_state/changcolor/colorbox';
import DataList from '../use_state/todolist/index';
import EffectIndex from '../use_effect/index';

import Error404 from '../error/404';




class Main extends Component {
    render() {
        return (
            <div className='row' style={{ margin: '0px' }}>
                <div className='col-lg-12'>
                    <Switch>
                        <Route exact path="/" component={Front} />
                        <Route path="/About" component={About_us} />
                        <Route exact path="/" component={Home} />
                        <Route path="/About" component={About_us} />
                        <Route path="/contact" component={Contact_us} />
                        <Route path="/product" component={Product} />
                        <Route path="/detail/:id/:name.html" component={Detail} />
                        <Route path="/member" component={Member} />
                        <Route path="/memberaxios" component={MemberGetAxio} />
                        <Route path="/memberlimit" component={MemberGetLimit} />
                        <Route path="/memberinfo/:id/:mane.html" component={MemberInfo} />

                        <Route path="/admin" component={Admin} />
                        <Route path="/admin-member-update/:id/:mane.html" component={AdminMemberUpdate} />
                        <Route path="/admin-member-add/" component={AdminMemberAddNew} />

                        <Route path="/usestate" component={ColorBox} />
                        <Route path="/todolist" component={DataList} />
                        <Route path='/useeffect' component={EffectIndex} />

                        <Route component={Error404} />

                    </Switch>
                </div>
            </div>
        );
    }
}

export default Main;