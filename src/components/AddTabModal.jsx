import React, { useState } from "react";
import { Button, Form, Input, Modal } from "antd";

function AddTabModal({ isModalOpen, setIsModalOpen }) {
  const [form] = Form.useForm();
  const [formValues, setFormValues] = useState();
  const onCreate = (values) => {
    console.log("Received values of form: ", values);
    setFormValues(values);
    setIsModalOpen(false);
  };

  return (
    <>
      <Modal
        open={isModalOpen}
        title="Create a new collection"
        okText="Create"
        cancelText="Cancel"
        okButtonProps={{
          autoFocus: true,
          htmlType: "submit",
        }}
        onCancel={() => setIsModalOpen(false)}
        destroyOnClose
        modalRender={(dom) => (
          <Form
            layout="horizontal"
            form={form}
            name="form_in_modal"
            clearOnDestroy
            onFinish={(values) => onCreate(values)}
          >
            {dom}
          </Form>
        )}
      >
        <Form.Item
          name="url"
          label="Link"
          rules={[
            {
              required: true,
              message: "Please input an url!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="description" label="Description">
          <Input type="textarea" />
        </Form.Item>
      </Modal>
    </>
  );
}

export default AddTabModal;
