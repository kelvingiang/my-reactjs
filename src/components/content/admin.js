import React, { Component } from 'react';

import AdminMember from '../admin/admin-member';


// THEM CAC COMPONENTS CUA MINH


class Admin extends Component {
  render() {
    return (
      <div className='row' style={{ margin: '0px' }}>
        <div className='col-lg-3'>
          <h2>ssss</h2>
        </div>
        <div className='col-lg-9'>
           <AdminMember />
        </div>

      </div>
    );
  }
}

export default Admin;