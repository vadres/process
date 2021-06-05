import { Layout, Menu, Breadcrumb, Table, Tag, Space } from 'antd';
import { useContext, useEffect, useState } from 'react';
import { Redirect } from 'react-router';
import Authority from '../../@types/Authority';
import { AppContext } from '../../context/AppContext';
import { getAllUsers } from '../../services/userService';

import "./style.css";

const { Header, Content, Footer } = Layout;

function Users() {
  const { checkUser, removeUser, user } = useContext(AppContext);

  const [ usersData, setUsersData ] = useState([]);
  
  const fetchUsers = () => {
    (async () => {
      try {
        const resp = await getAllUsers(user);
        setUsersData(resp.data);
        console.log(resp);
      } catch (e) {
        console.log(e);
      }
    })();
  }

  useEffect(() => {
    fetchUsers();
  }, [ ]);

  const columns = [
    {
      title: '#',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Nome',
      dataIndex: 'name',
      key: 'name',
      render: (text:string) => <a>{text}</a>,
    },
    {
      title: 'Login',
      dataIndex: 'username',
      key: 'username',
    },   
    {
      title: 'Permissões',
      key: 'authorities',
      dataIndex: 'authorities',
      render: (roles: Authority[]) => (
        <>
          {roles.map((role: Authority) => {
            let color = role.authority === "ADMIN" ? 'geekblue' : 'green';
            if (role.authority === "FINALIZADOR") {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={role.id}>
                {role.authority.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    }
  ];
  
  return (
    !checkUser()? <Redirect to="/" />: (
      <>
        <Layout className="layout">
          <Header>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
              <Menu.Item onClick={() => removeUser()} style={{ float: "right" }} key="1">Sair</Menu.Item>
            </Menu>
          </Header>
          <Content style={{ padding: '0 50px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>Usuários</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-content">
              <Table columns={columns} dataSource={usersData} />
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}> ©2021 </Footer>
        </Layout>
      </>
    )
  );
}

export default Users;
