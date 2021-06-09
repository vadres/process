import { Button, Space, Tag, Tooltip } from "antd";
import {
  EditOutlined, SnippetsOutlined
} from '@ant-design/icons';
import Sight from "../../../@types/Sight";

interface TableStructProps {
  edit: (record: any) => void,
  addUserSight: (record: any) => void
}

const TableStruct = (props: TableStructProps) => {
  return [
    {
      title: '#',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Descrição',
      dataIndex: 'description',
      key: 'description',
      render: (text:string) => <Button type="link">{text}</Button>,
    },
    {
      title: 'Usuários parecer',
      dataIndex: 'sights',
      key: 'sights',
      render: (sights: Sight[]) => (
        <>
          {sights.map((sight: Sight) => {
            let color = 'geekblue';
            return (
              <Tag color={color} key={sight.id + sight.user.id}>
                {sight.user.name.toUpperCase()}
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
          <Tooltip title="Editar Processo">
            <Button type="link" onClick={() => props.edit(record)}>
              <EditOutlined />
            </Button>
          </Tooltip>

          <Tooltip title="Adicionar usuário para responser">
            <Button type="link" onClick={() => props.addUserSight(record)}>
              <SnippetsOutlined /> 
            </Button>
          </Tooltip>
        </Space>
      )
    }
  ];
}

export default TableStruct;