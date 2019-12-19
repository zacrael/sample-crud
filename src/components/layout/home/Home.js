import React, { Component } from "react";
import "./home-styles.css";
import Konyo from "../konyo.jpg";
class Home extends Component {
  render() {
    return (
      <div className="home.container">
        <div className="sidebar">
          <nav>
            <ul>
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/">Portfolio</a>
              </li>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">Home</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="home.content">
          <div className="home-profile">
            <img src={Konyo} alt="Loading..." />
            <div className="profile-content">
              <h1>
                Passionate <br></br> Front End developer
              </h1>
              <p>
                just porskillwqeeeeeeeeeeeeeeeeeeeeeeeeeeee
                dasdqwwnoiqhnpynpraejvnpoJNNNNNNNNNNNNNNNN
                NNN9YQEVTPNQYTYPVTIOVPOIUTPEIONYNYpympvrt
              </p>
              <a className="action-btn" href="/">
                Hire me
              </a>
            </div>
          </div>
        </div>
        <div className="footer">
          <footer>
            <ul>
              <li>
                <a href="/">
                  <i class="fab fa-facebook"></i>
                </a>
              </li>

              <li>
                <a href="/">
                  <i class="fab fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </footer>
        </div>
      </div>
    );
  }
}
export default Home;
