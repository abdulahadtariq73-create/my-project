import React, {  useContext } from 'react'
 import { Button, Form, Input, Card } from "antd";
import { useNavigate } from 'react-router-dom';
import Authcontext from '../context/Authcontext';
const Login = () => {
 const authCtx = useContext(Authcontext)
    const navigator = useNavigate()
  
  const onFinish = (values) => {
    if(values.email === "ahad16@gmail.com" && values.password === "123456"){
  authCtx.setIslogin(true)
          navigator("/dashboard/audio")
    } else {
    alert("Invalid Email or Password");
  }
  }
  
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-l from-black  p-4">
      <Card
        className="shadow-2xl rounded-2xl"
        style={{ width: 450 }}
      >
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Login
        </h1>

        <Form
          name="basic"
        
      
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          {/* Email */}
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please enter your email!",
              },
              {
                type: "email",
                message: "Please enter a valid email!",
              },
            ]}
          >
            <Input
              size="large"
              placeholder="Enter your email"
            />
          </Form.Item>

          {/* Password */}
          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please enter your password!",
              },
            ]}
          >
            <Input.Password
              size="large"
              placeholder="Enter your password"
            />
          </Form.Item>

          {/* Button */}
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              className="w-full"
           >
              Login
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}

export default Login ;
