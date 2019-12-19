import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { firebaseConnect } from "react-redux-firebase";
import { notifyUser } from "../../actions/notifyActions";
import "antd/dist/antd.css";
import "./register.styles.css";
import { Form, Input, Button } from "antd";
import Swal from "sweetalert2";

class Register extends Component {
  state = {
    email: "",
    password: "",
    confirmDirty: false,
    autoCompleteResult: [],
    loading: false,
    iconLoading: false
  };
  enterLoading = () => {
    this.setState({ loading: true });
  };

  enterIconLoading = () => {
    this.setState({ iconLoading: true });
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        let timer;
        const { firebase } = this.props;
        const { email, password } = this.state;
        this.setState({ iconLoading: true });
        timer = setTimeout(
          () =>
            firebase.createUser({ email, password }).catch(err => {
              this.setState({ iconLoading: false });
              Swal.fire(" user is already exist");
              console.log(err);
            }),
          3000
        );
      } else {
        return null;
      }
    });
  };

  handleConfirmBlur = e => {
    const { value } = e.target;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue("password")) {
      callback("Two passwords that you enter is inconsistent!");
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && this.state.confirmDirty) {
      form.validateFields(["confirm"], { force: true });
    }
    callback();
  };

  handleWebsiteChange = value => {
    let autoCompleteResult;
    if (!value) {
      autoCompleteResult = [];
    } else {
      autoCompleteResult = [".com", ".org", ".net"].map(
        domain => `${value}${domain}`
      );
    }
    this.setState({ autoCompleteResult });
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      }
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0
        },
        sm: {
          span: 16,
          offset: 8
        }
      }
    };

    return (
      <div className="register-cont">
        <div className="card-reg">
          <Form
            className="form-register-cont"
            {...formItemLayout}
            onSubmit={this.handleSubmit}
          >
            <label
              style={{
                display: "flex",
                justifyContent: "center",
                fontSize: "40px"
              }}
            >
              {" "}
              Register
            </label>
            <Form.Item label="E-mail">
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
              })(<Input onChange={this.onChange} name="email" />)}
            </Form.Item>
            <Form.Item label="Password" hasFeedback>
              {getFieldDecorator("password", {
                rules: [
                  {
                    required: true,
                    message: "Please input your password!"
                  },
                  {
                    validator: this.validateToNextPassword
                  }
                ]
              })(
                <Input.Password
                  minLength="7"
                  onChange={this.onChange}
                  name="password"
                />
              )}
            </Form.Item>
            <Form.Item label="Confirm Password" hasFeedback>
              {getFieldDecorator("confirm", {
                rules: [
                  {
                    required: true,
                    message: "Please confirm your password!"
                  },
                  {
                    validator: this.compareToFirstPassword
                  }
                ]
              })(<Input.Password onBlur={this.handleConfirmBlur} />)}
            </Form.Item>

            <Form.Item {...tailFormItemLayout}>
              <Button
                type="primary"
                htmlType="submit"
                loading={this.state.iconLoading}
              >
                Register
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
}

export default compose(
  firebaseConnect(),
  connect(
    (state, props) => ({
      notify: state.notify,
      settings: state.settings
    }),
    { notifyUser }
  )
)(Form.create({ name: "register" })(Register));
