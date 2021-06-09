import { Button, Space, Tooltip } from "antd";
import {
  EditOutlined, SnippetsOutlined
} from '@ant-design/icons';

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
            <Button type="link" onClick={() => props.edit(record)}>
              <SnippetsOutlined /> 
            </Button>
          </Tooltip>
        </Space>
      )
    }
  ];
}

export default TableStruct;