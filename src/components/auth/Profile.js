import React, { Component } from "react";
import "./profile.styles.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import Spinner from "../layout/Spinner";
class Profile extends Component {
  onDeleteClick = () => {
    const { client, firestore, history } = this.props;

    firestore
      .delete({ collection: "clients", doc: client.id })
      .then(history.push("/"));
  };
  render() {
    const { client } = this.props;
    if (client) {
      return (
        <div className="profile-cont">
          <div className="col-md-3 ml-5 mr-2 mt-5 mb-5  ">
            <div>
              <Link
                style={{ paddingLeft: "0px", paddingBottom: "23px" }}
                to="/"
                className="btn btn-link"
              >
                <i className="fas fa-arrow-circle-left" /> Back To Dashboard
              </Link>
            </div>
            <div className="btn-group float-center">
              <Link to={`/client/edit/${client.id}`} className="btn btn-dark">
                Edit
              </Link>
              <button onClick={this.onDeleteClick} className="btn btn-danger">
                Delete
              </button>
            </div>
            <br></br>
            <hr></hr>
            <h3> Company</h3>
            <h5>Logo here</h5>
          </div>

          <div className="col-md-7  ml-2 mr-5  mt-5 mb-5 ">
            <h2 className="name-lead">
              {client.firstName} {client.lastName}
            </h2>
            <h2 className="description">Web developer</h2>
            <br />
            <hr />
            <h6 className="details-font">
              phone: <span className="details-span-phone"> {client.phone}</span>
            </h6>
            <h6 className="details-font">
              address:
              <span className="details-span-address">{client.address}</span>
            </h6>
            <h6 className="details-font">
              Email:
              <span className="details-span-email"> {client.email}</span>
            </h6>

            <br />
            <hr />
          </div>
        </div>
      );
    } else {
      return <Spinner />;
    }
  }
}
Profile.propTypes = {
  firestore: PropTypes.object.isRequired
};
export default compose(
  firestoreConnect(props => [
    { collection: "clients", storeAs: "client", doc: props.match.params.id }
  ]),
  connect(({ firestore: { ordered } }, props) => ({
    client: ordered.client && ordered.client[0]
  }))
)(Profile);
