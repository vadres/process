import { Layout, Menu, Breadcrumb, Table, Tag, Space, Button } from 'antd';
import { useContext, useEffect, useState } from 'react';
import { Redirect, useHistory } from 'react-router';
import { PlusOutlined } from '@ant-design/icons';

import { AppContext } from '../../../context/AppContext';
import { getAllUsers, deleteUser } from '../../../services/userService';

import { StyledContent } from '../../../common/StyledContent';
import { Div } from './styles';
import TableStruct from '../components/TableStruct';
import LayoutAdm from '../../../layouts/LayoutAdm';
import User from '../../../@types/User';

const { Header, Content, Footer } = Layout;

function Users() {
  const history = useHistory();
  const { checkUser, user } = useContext(AppContext);

  const [ usersData, setUsersData ] = useState([]);
  
  const handleCreateUser = () => {
    history.push("/user/create");
  }

  const handleEditUser = (id: number) => {
    history.push(`/user/edit/${id}`);
  }

  const fetchUsers = () => {
    (async () => {
      try {
        const resp = await getAllUsers(user);
        if (resp.data.length !== usersData.length)
          setUsersData(resp.data);
      } catch (e) {
        console.log(e);
      }
    })();
  }

  useEffect(() => {
    fetchUsers();
  }, [ usersData ]);

  return (
    !checkUser()? <Redirect to="/" />: (
      <>
        <LayoutAdm>
          <StyledContent style={{ padding: '0 50px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>Usuários</Breadcrumb.Item>
              <Breadcrumb.Item>Listar</Breadcrumb.Item>
            </Breadcrumb>
            <Div>
              <Space style={{ marginBottom: 16 }}>
                <Button type="primary" onClick={handleCreateUser}>
                  <PlusOutlined /> Novo Usuário
                </Button>
              </Space>

              <Table rowKey="id" columns={TableStruct({
                delete: async (record: User) => { 
                  await deleteUser(user, record);
                  await fetchUsers();
                },
                edit: async (record: User) => { handleEditUser(record.id) }
              })} dataSource={usersData} />
            </Div>
          </StyledContent>
         
        </LayoutAdm>
      </>
    )
  );
}

export default Users;
