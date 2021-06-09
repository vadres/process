import { Space, Tag } from "antd";
import {
  CloseOutlined
} from '@ant-design/icons';

import Authority from "../../../@types/Authority";

interface TableStructProps {
  delete: (record: any) => void
  edit: () => void
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
    },
    {
      title: 'Ações',
      key: 'actions',
      render: (text: any, record: any) => (
        <Space size="middle">
          <a onClick={() => props.delete(record)}>
            <CloseOutlined />
          </a>
        </Space>
      )
    }
  ];
}

export default TableStruct;