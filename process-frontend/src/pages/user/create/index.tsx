import { Layout, Menu, Breadcrumb, Row, Col } from 'antd';
import { useContext, useEffect, useState } from 'react';
import { Redirect, useHistory } from 'react-router';

import { AppContext } from '../../../context/AppContext';

import { StyledContent } from '../../../common/StyledContent';
import { Div, FormContent, Title } from './styles';
import LayoutAdm from '../../../layouts/LayoutAdm';
import FormUser from '../components/FormUser';
import User from '../../../@types/User';
import { createUser } from '../../../services/userService';

const { Header, Content, Footer } = Layout;

function CreateUser() {
  const history = useHistory();
  const { checkUser, user } = useContext(AppContext);
  
  const handleCreateUser = async (userBean: User) => {
    try {
      await createUser(user, userBean);
      history.push("/user");
    } catch (e) {}
  }

  return (
    !checkUser()? <Redirect to="/" />: (
      <>
        <LayoutAdm>
          <StyledContent style={{ padding: '0 50px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>Usuários</Breadcrumb.Item>
              <Breadcrumb.Item>Novo</Breadcrumb.Item>
            </Breadcrumb>
            <Row>
              <Col lg={{span:12, push: 6}} sm={{span:20, push: 2}} >
                <Div>
                  <Title>Novo Usuário</Title>
                  <FormUser handleFinish={handleCreateUser} />              
                </Div>
              </Col>
            </Row>
          </StyledContent>
           
        </LayoutAdm>
      </>
    )
  );
}

export default CreateUser;