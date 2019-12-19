import React, { Component } from "react";
import { Drawer, Button, Icon } from "antd";
import "./sidebar.styles.css";
class Sidebar extends Component {
  state = { visible: false };

  showDrawer = () => {
    this.setState({
      visible: true
    });
  };

  onClose = () => {
    this.setState({
      visible: false
    });
  };

  render() {
    return (
      <div className="sidebar-home">
        <Button onClick={this.showDrawer}>
          <Icon type="menu" />
        </Button>
        <div className="ant-drawer-body">
          <Drawer
            style={{ padding: "0px" }}
            placement="left"
            closable={false}
            onClose={this.onClose}
            visible={this.state.visible}
          >
            <div className="drawer-header">
              <Icon style={{ margin: "20px" }} type="menu" />{" "}
              <Icon type="home" /> Home
            </div>
            <ul>
              <li>
                {" "}
                <a href="/about">
                  <Icon style={{ margin: "21px" }} type="info-circle" About />{" "}
                  About
                </a>
              </li>
              <li>
                {" "}
                <a href="/portfolio">
                  <Icon style={{ margin: "20px" }} type="file" Portfolio />{" "}
                  Portfolio
                </a>
              </li>
              <li>
                {" "}
                <a href="/contact">
                  <Icon style={{ margin: "20px" }} type="phone" Contact />{" "}
                  Contact
                </a>
              </li>
            </ul>
          </Drawer>
        </div>
      </div>
    );
  }
}

export default Sidebar;
