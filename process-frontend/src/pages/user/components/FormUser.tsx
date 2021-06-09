import { useEffect, useState } from 'react';
import { Form, Input, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';
import User from '../../../@types/User';

const { Option } = Select;

type FormUserType = {
  handleFinish: (user: User) => void,
  initialValues?: User
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

const FormUser: React.FC<FormUserType> = ({ handleFinish, initialValues }) => {
  const [ disableField, setDisableField ] = useState(false);
  const [form] = Form.useForm();
  
  const onFinish = (values: any) => {
    handleFinish(values);
  };

  useEffect(() => {
    if (initialValues && initialValues.authorities.length > 0)
      initialValues.role = initialValues.authorities[0].description
    
    if (initialValues) {
      setDisableField(true);
    }

    form.setFieldsValue(initialValues);
  }, [ initialValues ]);

  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      scrollToFirstError
    >
       <Form.Item
        name="name"
        label="Nome"
        rules={[
          {
            required: true,
            message: 'Por favor digite um Nome!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'E-mail inválido!',
          },
          {
            required: true,
            message: 'Por favor digite um E-mail!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      
      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Por favor digite um password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirmar Password"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Por favor confirme o password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('Os dois passwords não correspondem!'));
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="username"
        label="Login"
        tooltip="Como o usuário deve ser chamado?"
        rules={[{ required: true, message: 'Por favor digite um login!', whitespace: true }]}
      >
        <Input disabled={disableField} />
      </Form.Item>

      <Form.Item
        name="role"
        label="Função"
        rules={[{ required: true, message: 'Por favor selecione uma função!' }]}
      >
        <Select placeholder="selecione uma função">
          <Option value="ADMIN">Admin</Option>
          <Option value="TRIADOR">Triador</Option>
          <Option value="FINALIZADOR">Finalizador</Option>
        </Select>
      </Form.Item>
     
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Salvar usuário
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormUser;