import { Tag } from "antd";
import Authority from "../../../@types/Authority";

const TableStruct = [
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

export default TableStruct;