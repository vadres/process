import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { Form, Input, Button } from 'antd';
import { FormInstance } from 'antd/lib/form';

import { Container, FormContent, Title } from './styles';
import { AppContext } from '../../context/AppContext';

const Login: React.FC = () => {
  const { user, checkUser, loadUser } = useContext(AppContext);
  
  const [ form ] = Form.useForm();
  const formRef = React.createRef<FormInstance>();
   
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };
  
  const login = () => {
    const l: string = form.getFieldValue("login"); 
    const p: string = form.getFieldValue("password");
    
    if (l && l.trim() !== "" &&
        p && p.trim() !== "") 
    {
      loadUser(
        form.getFieldValue("login"), 
        form.getFieldValue("password")
      );
    }
  }

  if (checkUser()) {
    console.log(user.userDetails.authorities[0].description);
    switch(user.userDetails.authorities[0].description) {
      case 'ADMIN':
        return <Redirect to="/user" />
      case 'TRIADOR':
        return <Redirect to="/process" />
      case 'FINALIZADOR':
        return <Redirect to="/user" />
      default:
        return <Redirect to="/" />
    }
  }

  return (
    <Container>
      <FormContent>
        <Title>Entrar</Title>
        <Form form={form} layout="vertical" ref={formRef} name="control-ref">
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
            <Button type="primary" htmlType="submit" onClick={() => login()}>
              Entrar
            </Button>
          </Form.Item>
        </Form>

      </FormContent>
    </Container>
  );
}

export default Login;
