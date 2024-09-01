import React, { useState } from "react";
import { Button, Form, Input, Modal } from "antd";

function AddTabModal({
  isModalOpen,
  setIsModalOpen,
  onCreateTab,
  collectionId,
}) {
  const [form] = Form.useForm();

  const [tabValues, setTabValues] = useState();
  const onCreate = async (values) => {
    console.log("Received values of form: ", values);
    setTabValues({
      ...tabValues,
      url: values.url,
      collection: collectionId,
      description: values.description,
    });
    onCreateTab({
      url: values.url,
      collection: collectionId,
      description: values.description,
    });
    setIsModalOpen(false);
  };

  return (
    <>
      <Modal
        open={isModalOpen}
        title="Add a new tab"
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
