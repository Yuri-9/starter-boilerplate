import React, { useEffect, useState } from "react";
import { Form, Avatar, Button, Input, Row, Col, message, Upload, Drawer } from "antd";
import { UserOutlined } from "@ant-design/icons";
import Flex from "components/shared-components/Flex";
import { ROW_GUTTER } from "constants/ThemeConstant";
import Utils from "utils";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import UserService from "services/UserService";

const avatarEndpointMock = "https://run.mocky.io/v3/64bd9b50-773d-46a7-b60f-1cc2cf72edb0";
const avatarUrlMock = "/img/avatars/thumb-6.jpg";

export const EditClient = ({ user, visible, onClose, onUpdateUser }) => {
  const [avatarUrl, setAvatarUrl] = useState(avatarUrlMock);
  const isMobile = !Utils.getBreakPoint(useBreakpoint()).includes("md");
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue({
      name: user.name,
      email: user.email,
      username: user.username,
      id: user.id,
      phone: user.phone,
      website: user.website,
      address: user.address?.street,
      city: user.address?.city,
      postcode: user.address?.zipcode,
    });
  }, [form, user]);

  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  };

  const onFinish = (updatedUser) => {
    const key = "updatable";
    message.loading({ content: "Updating...", key });

    UserService.updateUser(updatedUser)
      .then(() => {
        message.success({ content: "Done!", key, duration: 2 });
        onUpdateUser(updatedUser);
        onClose();
      })
      .catch(() => message.error({ content: "Error!", key, duration: 2 }));
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onUploadAvatar = (info) => {
    const key = "updatable";
    if (info.file.status === "uploading") {
      message.loading({ content: "Uploading...", key, duration: 1000 });
      return;
    }
    if (info.file.status === "done") {
      getBase64(info.file.originFileObj, (imageUrl) => setAvatarUrl(imageUrl));
      message.success({ content: "Uploaded!", key, duration: 1.5 });
    }
  };

  const onRemoveAvatar = () => {
    setAvatarUrl("");
  };

  return (
    <Drawer forceRender width={isMobile ? 400 : 600} placement="right" onClose={onClose} visible={visible}>
      <Flex alignItems="center" mobileFlex={false} className="text-center text-md-left">
        <Avatar size={90} src={avatarUrl} icon={<UserOutlined />} />
        <div className="ml-md-3 mt-md-0 mt-3">
          <Upload onChange={onUploadAvatar} showUploadList={false} action={avatarEndpointMock}>
            <Button type="primary">Change Avatar</Button>
          </Upload>
          <Button className="ml-2" onClick={onRemoveAvatar}>
            Remove
          </Button>
        </div>
      </Flex>
      <div className="mt-4">
        <Form form={form} name="client-edit" layout="vertical" onFinish={onFinish} onFinishFailed={onFinishFailed}>
          <Row>
            <Col xs={24} sm={24} md={24} lg={24}>
              <Row gutter={ROW_GUTTER}>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item
                    label="Name"
                    name="name"
                    rules={[
                      {
                        required: true,
                        message: "Please input your name!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: "Please input your username!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                      {
                        required: true,
                        type: "email",
                        message: "Please enter a valid email!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item label="Id" name="id">
                    <Input disabled />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item label="Phone Number" name="phone">
                    <Input />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item label="Website" name="website">
                    <Input />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={24}>
                  <Form.Item label="Address" name="address">
                    <Input />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item label="City" name="city">
                    <Input />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item label="Post code" name="postcode">
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
              <Button type="primary" htmlType="submit">
                Save Change
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </Drawer>
  );
};

export default EditClient;
