import React from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Input, Button } from 'antd';
import { FormInstance } from 'antd/lib/form';

import { Container, FormContent, Title } from './styles';

function Login() {
  const history = useHistory();
  const formRef = React.createRef<FormInstance>();

  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  return (
    <Container>
      <FormContent>
        <Title>Entrar</Title>
        <Form layout="vertical" ref={formRef} name="control-ref">
          <Form.Item
            label="Login"
            name="login"
            rules={[{ required: true, message: 'Digite seu login!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Digite a senha!' }]}
          >
            <Input.Password />
          </Form.Item>

        
          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit" onClick={() => { history.push("/users") }}>
              Entrar
            </Button>
          </Form.Item>
        </Form>

      </FormContent>
    </Container>
  );
}

export default Login;
