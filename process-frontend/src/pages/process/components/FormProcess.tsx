import { useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import Process from '../../../@types/Process';

type FormProcessType = {
  handleFinish: (process: Process) => void,
  initialValues?: Process
}

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 17 },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const FormUser: React.FC<FormProcessType> = ({ handleFinish, initialValues }) => {
  const [form] = Form.useForm();
  
  const onFinish = (values: any) => {
    handleFinish(values);
  };

  useEffect(() => {
    form.setFieldsValue(initialValues);
  }, [ initialValues, form ]);

  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      scrollToFirstError
    >
       <Form.Item
        name="description"
        label="Descrição"
        rules={[
          {
            required: true,
            message: 'Por favor digite uma descrição!',
          },
        ]}
      >
        <Input />
      </Form.Item>
     
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Salvar processo
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormUser;