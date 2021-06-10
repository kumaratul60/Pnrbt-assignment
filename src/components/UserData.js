import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../actions";
import MapComponent from "./MapComponent";

class UserData extends Component {
  render() {
    const { userData } = this.props;
    return (
      <div style={{ display: "flex" }}>
        <div className="profile-det-cont">
          <div className="profile-image">
            <img src={userData.profilepicture} alt="profile pic" />
          </div>
          <div>
            <strong>{userData.name}</strong>
          </div>
          <div className="det-item">
            <div className="label">Username : </div>
            <div className="value"> {userData.username}</div>
          </div>
          <div className="det-item">
            <div className="label">E-mail : </div>
            <div className="value"> {userData.email}</div>
          </div>
          <div className="det-item">
            <div className="label">Phone : </div>
            <div className="value"> {userData.phone}</div>
          </div>
          <div className="det-item">
            <div className="label">Website : </div>
            <div className="value"> {userData.website}</div>
          </div>

          <div className="det-item border-top">
            <div className="label">Company </div>
          </div>

          <div className="det-item">
            <div className="label">Name : </div>
            <div className="value">
              {userData.company && userData.company.name}
            </div>
          </div>
          <div className="det-item">
            <div className="label">catchPhrase : </div>
            <div className="value">
              {userData.company && userData.company.catchPhrase}
            </div>
          </div>
          <div className="det-item">
            <div className="label">bs : </div>
            <div className="value">
              {userData.company && userData.company.bs}
            </div>
          </div>
        </div>
        <div className="profile-map-cont ">
          <div className="profile-det-cont">
            <div className="det-item ">
              <div className="label">Address </div>
              <div className="value"></div>
            </div>
            <div className="det-item">
              <div className="label">Street : </div>
              <div className="value">
                {userData.address && userData.address.street}
              </div>
            </div>
            <div className="det-item">
              <div className="label">Suite : </div>
              <div className="value">
                {userData.address && userData.address.suite}
              </div>
            </div>
            <div className="det-item">
              <div className="label">City : </div>
              <div className="value">
                {userData.address && userData.address.city}
              </div>
            </div>
            <div className="det-item">
              <div className="label">Zipcode : </div>
              <div className="value">
                {userData.address && userData.address.zipcode}
              </div>
            </div>
          </div>
          <MapComponent />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.users.users,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserData);
