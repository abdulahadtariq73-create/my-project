import React, { useState } from "react";
import { Button, Card, Form, Input, InputNumber, Select } from "antd";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
 import subcategory from "../data/camera/subcategory"
const Create = () => {
  const navigate = useNavigate();
  const { category} = useParams();

  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);

    const productData = {
      ...values,
      type: category,
    };

    try {
      await axios.post(
        "https://6a2b211eb687a7d5cbc4e1f3.mockapi.io/product",
        productData
      );

      navigate(`/dashboard/${category}`);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-l from-black p-4">
      <Card
        className="shadow-2xl rounded-2xl"
        style={{ width: 550 }}
      >
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800 capitalize">
          Create {category} Product
        </h1>

        <Form
          name="create-product"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Product Name"
            name="name"
            rules={[
              {
                required: true,
                message: "Please enter product name",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Price"
            name="price"
            rules={[
              {
                required: true,
                message: "Please enter price",
              },
            ]}
          >
            <InputNumber
              min={0}
              style={{ width: "100%" }}
            />
          </Form.Item>

          {category === "dealproduct" && (
  <Form.Item
    label="Deal Price"
    name="dealPrice"
    rules={[{ required: true }]}
  >
    <InputNumber min={0} style={{ width: "100%" }} />
  </Form.Item>
)}




          <Form.Item
            label="Rating"
            name="rating"
            rules={[
              {
                required: true,
                message: "Please enter rating",
              },
            ]}
          >
            <InputNumber
              min={1}
              max={5}
              style={{ width: "100%" }}
            />
          </Form.Item>

          <Form.Item
            label="Image URL"
            name="image"
            rules={[
              {
                required: true,
                message: "Please enter image URL",
              },
            ]}
          >
            <Input />
          </Form.Item>



          <Form.Item
  label="Sub Category"
  name="subcategory"
  rules={[
    {
      required: true,
      message: "Please select subcategory",
    },
  ]}
>
  <Select>
    { subcategory[category]?.map((item)=>(
      <Select.Option
        key={item}
        value={item}
      >
        {item}
      </Select.Option>
    ))}
  </Select>
</Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
            >
              Create Product
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Create;