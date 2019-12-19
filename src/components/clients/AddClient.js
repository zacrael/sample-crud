import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";

import { Form, Input, Select, Checkbox, Button } from "antd";
import Swal from "sweetalert2";

const { Option } = Select;

class AddClient extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    balance: "",
    hasChange: false,
    inputValue: 1,
    loading: false
  };

  handleSubmit = e => {
    e.preventDefault();
    const { firestore, history } = this.props;

    this.props.form.validateFieldsAndScroll((err, values) => {
      if (values.balance === "") {
        values.balance = 0;
      }
      firestore
        .add({ collection: "clients" }, values)
        .then(() => history.push("/"))
        .catch(err => Swal.fire("that user is already exist"));
    });
  };

  onChanges = value => {
    this.setState({
      inputValue: value
    });
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
    const prefixSelector = getFieldDecorator("prefix", {
      initialValue: "63"
    })(
      <Select style={{ width: 70 }}>
        <Option value="63">+63</Option>
        <Option value="87">+87</Option>
      </Select>
    );

    return (
      <div className="register-cont">
        <div className="card-reg">
          <Form
            className="form-register-cont"
            {...formItemLayout}
            onSubmit={this.handleSubmit}
          >
            <div>
              <Link
                style={{ paddingLeft: "0px", paddingBottom: "23px" }}
                to="/"
                className="btn btn-link"
              >
                <i className="fas fa-arrow-circle-left" /> Back To Dashboard
              </Link>
            </div>
            <label
              style={{
                display: "flex",
                justifyContent: "center",
                fontSize: "40px"
              }}
            >
              {" "}
              Add Client
            </label>

            <Form.Item label="First Name">
              {getFieldDecorator("firstName", {
                rules: [
                  {
                    required: true,
                    message: "Please input your First Name!"
                  }
                ]
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Last Name">
              {getFieldDecorator("LastName", {
                rules: [
                  {
                    required: true,
                    message: "Please input your Last Name!"
                  }
                ]
              })(<Input />)}
            </Form.Item>
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
              })(<Input />)}
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
              })(<Input.Password minLength="7" />)}
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
            <Form.Item label="Phone Number">
              {getFieldDecorator("phone", {
                rules: [
                  {
                    required: true,
                    message: "Please input your phone number!"
                  }
                ]
              })(
                <Input addonBefore={prefixSelector} style={{ width: "100%" }} />
              )}
            </Form.Item>
            <Form.Item label="Address">
              {getFieldDecorator("address", {
                rules: [
                  {
                    required: true,
                    message: "Please input your Address!"
                  }
                ]
              })(<Input />)}
            </Form.Item>
            <Form.Item label="balance">
              {getFieldDecorator("balance", {
                rules: [
                  {
                    required: true,
                    message: "Please input your balance!"
                  }
                ],
                initialValue: this.state.balance
              })(<input className="form-control" type="number" />)}
            </Form.Item>

            <Form.Item {...tailFormItemLayout}>
              <Button type="primary" htmlType="submit">
                Add Client
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
}

AddClient.propTypes = {
  firestore: PropTypes.object.isRequired,
  settings: PropTypes.object.isRequired
};

export default compose(
  firestoreConnect(),
  connect((state, props) => ({
    settings: state.settings
  }))
)(Form.create({ name: "register" })(AddClient));
