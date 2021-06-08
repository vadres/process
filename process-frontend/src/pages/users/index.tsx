import { Layout, Menu, Breadcrumb, Table, Tag, Space } from 'antd';
import { useContext, useEffect, useState } from 'react';
import { Redirect } from 'react-router';

import { AppContext } from '../../context/AppContext';
import { getAllUsers } from '../../services/userService';

import { StyledContent } from '../../common/StyledContent';
import { Div } from './styles';
import TableStruct from './components/TableStruct';

const { Header, Content, Footer } = Layout;

function Users() {
  const { checkUser, removeUser, user } = useContext(AppContext);

  const [ usersData, setUsersData ] = useState([]);
  
  const fetchUsers = () => {
    (async () => {
      try {
        const resp = await getAllUsers(user);
        setUsersData(resp.data);
      } catch (e) {
        console.log(e);
      }
    })();
  }

  useEffect(() => {
    fetchUsers();
  }, [ ]);

  return (
    !checkUser()? <Redirect to="/" />: (
      <>
        <Layout className="layout">
          <Header>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
              <Menu.Item onClick={() => removeUser()} style={{ float: "right" }} key="1">Sair</Menu.Item>
            </Menu>
          </Header>
          <StyledContent style={{ padding: '0 50px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>Usuários</Breadcrumb.Item>
            </Breadcrumb>
            <Div>
              <Table rowKey="id" columns={TableStruct} dataSource={usersData} />
            </Div>
          </StyledContent>
          <Footer style={{ textAlign: 'center' }}> ©2021 </Footer>
        </Layout>
      </>
    )
  );
}

export default Users;
