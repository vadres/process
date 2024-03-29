import { Button, Space, Tag, Tooltip } from "antd";
import {
  CloseOutlined, EditOutlined
} from '@ant-design/icons';

import Authority from "../../../@types/Authority";

interface TableStructProps {
  delete: (record: any) => void
  edit: (record: any) => void
}

const TableStruct = (props: TableStructProps) => {
  return [
    {
      title: '#',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Nome',
      dataIndex: 'name',
      key: 'name',
      render: (text:string) => <Button type="link">{text}</Button>,
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
    },
    {
      title: 'Ações',
      key: 'actions',
      render: (text: any, record: any) => (
        <Space size="middle">
          <Tooltip title="Remover usuário">
            <Button type="link" onClick={() => props.delete(record)}>
              <CloseOutlined />
            </Button>
          </Tooltip>
          
          <Tooltip title="Editar usuário">
            <Button type="link" onClick={() => props.edit(record)}>
              <EditOutlined />
            </Button>
          </Tooltip>
        </Space>
      )
    }
  ];
}

export default TableStruct;