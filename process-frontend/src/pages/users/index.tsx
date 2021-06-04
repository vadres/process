import { Layout, Menu, Breadcrumb, Table, Tag, Space } from 'antd';

import "./style.css";

const { Header, Content, Footer } = Layout;

function Users() {
  
  const columns = [
    {
      title: 'Nome',
      dataIndex: 'nome',
      key: 'nome',
      render: (text:string) => <a>{text}</a>,
    },
    {
      title: 'Login',
      dataIndex: 'login',
      key: 'login',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Permissões',
      key: 'roles',
      dataIndex: 'roles',
      render: (roles: any) => (
        <>
          {roles.map((tag: string) => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (text:string, record:any) => (
        <Space size="middle">
          <a>Invite {record.nome}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];
  
  const data = [
    {
      key: '1',
      nome: 'John Brown',
      email: 32,
      login: 'New York No. 1 Lake Park',
      roles: ['nice', 'developer'],
    },
    {
      key: '2',
      nome: 'Jim Green',
      email: 42,
      login: 'London No. 1 Lake Park',
      roles: ['loser'],
    },
    {
      key: '3',
      nome: 'Joe Black',
      email: 32,
      login: 'Sidney No. 1 Lake Park',
      roles: ['cool', 'teacher'],
    },
  ];

  return (
    <>
    <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">Usuários</Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>Usuários</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-content">
        <Table columns={columns} dataSource={data} />,
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>
  </>
  );
}

export default Users;
