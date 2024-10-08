// src/components/LoginPage.js
import React, { useState } from "react";
import { Form, Input, Button, Checkbox } from "antd";

const HomePage = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  return (
    <Form form={form} name="login" onFinish={onFinish} layout="vertical">
      <Form.Item
        name="username"
        label="用户名"
        rules={[{ required: true, message: "请输入用户名!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="password"
        label="密码"
        rules={[{ required: true, message: "请输入密码!" }]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>记住我</Checkbox>
        </Form.Item>
        <a className="login-form-forgot" href="">
          忘记密码
        </a>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          登录
        </Button>
        <a href="/registerPage">注册</a>
      </Form.Item>
    </Form>
  );
};

export default HomePage;
