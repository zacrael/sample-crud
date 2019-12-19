import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import Spinner from "../layout/Spinner";
import { Form, Input, Select, Checkbox, Button } from "antd";
import Swal from "sweetalert2";
const { Option } = Select;

class EditClient extends Component {
  state = {
    balance: "",
    phone: "",
    hasChange: false
  };

  handleSubmit = e => {
    e.preventDefault();
    const { client, firestore, history } = this.props;
    this.props.form.validateFieldsAndScroll((err, values) => {
      firestore
        .update({ collection: "clients", doc: client.id }, values)
        .catch(err => Swal.fire("that user is already exist"))
        .then(history.push("/"));
    });
  };
  render() {
    const { client } = this.props;
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

    if (client) {
      return (
        <div className="register-cont">
          <div className="card-reg">
            <Form
              className="form-register-cont"
              {...formItemLayout}
              onSubmit={this.handleSubmit}
            >
              <div>
                <Link to="/" className="btn btn-link">
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
                Update
              </label>
              <Form.Item label="First Name">
                {getFieldDecorator("firstName", {
                  rules: [
                    {
                      required: true,
                      message: "Please input your First Name!"
                    }
                  ],
                  initialValue: client.firstName
                })(<Input />)}
              </Form.Item>
              <Form.Item label="Last Name">
                {getFieldDecorator("lastName", {
                  rules: [
                    {
                      required: true,
                      message: "Please input your Last Name!"
                    }
                  ],
                  initialValue: client.lastName
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
                  ],
                  initialValue: client.email
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
                  ],
                  initialValue: client.password
                })(<Input.Password minLength="7" />)}
              </Form.Item>
              <Form.Item label="Address">
                {getFieldDecorator("address", {
                  rules: [
                    {
                      required: true,
                      message: "Please input your Address!"
                    }
                  ],
                  initialValue: client.address
                })(<Input />)}
              </Form.Item>
              <Form.Item label="Phone Number">
                {getFieldDecorator("phone", {
                  rules: [
                    {
                      required: true,
                      message: "Please input your phone number!"
                    }
                  ],
                  initialValue: client.phone
                })(
                  <Input
                    addonBefore={prefixSelector}
                    style={{ width: "100%" }}
                  />
                )}
              </Form.Item>
              <Form.Item label="balance">
                {getFieldDecorator("balance", {
                  rules: [
                    {
                      required: true,
                      message: "Please input your balance!"
                    }
                  ],
                  initialValue: client.balance
                })(<input className="form-control" type="number" />)}
              </Form.Item>

              <Form.Item {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit">
                  Update
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      );
    } else {
      return <Spinner />;
    }
  }
}

EditClient.propTypes = {
  firestore: PropTypes.object.isRequired
};

export default compose(
  firestoreConnect(props => [
    { collection: "clients", storeAs: "client", doc: props.match.params.id }
  ]),
  connect(({ firestore: { ordered }, settings }, props) => ({
    client: ordered.client && ordered.client[0],
    settings
  }))
)(Form.create({ name: "register" })(EditClient));
