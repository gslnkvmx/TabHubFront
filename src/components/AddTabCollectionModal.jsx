import React, { useState } from "react";
import { Button, Form, Input, Modal } from "antd";

function AddTabCollectionModal({
  isModalOpen,
  setIsModalOpen,
  onCreateTabCol,
}) {
  const [form] = Form.useForm();

  const [tabColValues, setTabColValues] = useState();
  const onCreate = async (values) => {
    console.log("Received values of form: ", values);
    setTabColValues({
      ...tabColValues,
      name: values.name,
      description: values.description,
    });
    onCreateTabCol({
      name: values.name,
      description: values.description,
    });
    setIsModalOpen(false);
  };

  return (
    <>
      <Modal
        open={isModalOpen}
        title="Add a new tab collection"
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
          name="name"
          label="Name"
          rules={[
            {
              required: true,
              message: "Please input an name!",
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

export default AddTabCollectionModal;
