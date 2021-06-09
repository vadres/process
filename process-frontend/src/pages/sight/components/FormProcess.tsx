import { useEffect } from 'react';
import { Form, Input, Button, Space } from 'antd';
import Process from '../../../@types/Process';
import { useHistory } from 'react-router';

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
  const history = useHistory();
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
        <Space>
          <Button type="default" htmlType="button" onClick={history.goBack}>
            Cancelar
          </Button>
          <Button type="primary" htmlType="submit">
            Salvar processo
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
};

export default FormUser;