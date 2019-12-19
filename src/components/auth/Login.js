import React from "react";

import { compose } from "redux";
import { connect } from "react-redux";
import { firebaseConnect } from "react-redux-firebase";
import { notifyUser } from "../../actions/notifyActions";
import "antd/dist/antd.css";
import "./Logins.styles.css";
import Swal from "sweetalert2";
import { Form, Icon, Input, Button, Checkbox, Card } from "antd";

class Login extends React.Component {
  state = {
    fields: {},
    errors: {},
    email: "",
    password: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const { firebase } = this.props;
        const { email, password } = values;
        firebase
          .login({
            email,
            password
          })
          .catch(err => Swal.fire("Invalid Credentials"));
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <div className="logins-container">
        <div className="row">
          <div className="col-md-6 mr-0 ml0 mb-0 mt-0 pl-0 pr-0 pt-0 pb-0">
            <div className="header-logins"></div>
          </div>
          <div className="col-md-6 mt-0 ml-0 mb-0 mr-0 pl-0 pr-0 pb-0 pt-0">
            <div className="login-page">
              <Card className="card-container">
                <Form onSubmit={this.handleSubmit} className="login-form">
                  <span
                    style={{
                      fontSize: "50px",
                      display: "flex",
                      justifyContent: "center",
                      color: "primary",
                      paddingBottom: "50px"
                    }}
                  >
                    Login
                  </span>
                  <Form.Item>
                    {getFieldDecorator("email", {
                      rules: [
                        {
                          type: "email",
                          message: "The input is not valid E-mail!"
                        },
                        {
                          required: true,
                          message: "Please input your E-mail!"
                        }
                      ]
                    })(
                      <Input
                        prefix={
                          <Icon
                            type="user"
                            style={{ color: "rgba(0,0,0,.25)" }}
                          />
                        }
                        placeholder="email"
                      />
                    )}
                  </Form.Item>
                  <Form.Item>
                    {getFieldDecorator("password", {
                      rules: [
                        {
                          required: true,
                          message: "Please input your Password!"
                        }
                      ]
                    })(
                      <Input
                        prefix={
                          <Icon
                            type="lock"
                            style={{ color: "rgba(0,0,0,.25)" }}
                          />
                        }
                        type="password"
                        placeholder="Password"
                      />
                    )}
                  </Form.Item>
                  <Form.Item>
                    {getFieldDecorator("remember", {
                      valuePropName: "checked",
                      initialValue: true
                    })(<Checkbox>Remember me</Checkbox>)}
                    <a className="login-form-forgot" href="">
                      Forgot password
                    </a>
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="login-form-button "
                      stye={{ color: "#00a2ae" }}
                    >
                      Log in
                    </Button>
                    Or <a href="/register">register now!</a>
                  </Form.Item>
                </Form>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default compose(
  firebaseConnect(),
  connect(
    (state, props) => ({
      notify: state.notify
    }),
    { notifyUser }
  )
)(Form.create({ name: "normal_login" })(Login));
