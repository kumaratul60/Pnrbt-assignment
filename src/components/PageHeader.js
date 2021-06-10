import React, { Component } from 'react';

export default class PageHeader extends Component {
  componentDidMount() {}

  render() {
    const { userData } = this.props;

    return (
      <div className="page-header-cont">
        <div>Page Name</div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div className="item-img ">
            <img src={userData.profilepicture} alt="profile-pic" />
          </div>
          <span>{userData.name}</span>
        </div>
      </div>
    );
  }
}
