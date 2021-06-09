import { Button, Space } from "antd";
import {
  EditOutlined
} from '@ant-design/icons';

interface TableStructProps {
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
          <Button type="link" onClick={() => props.edit(record)}>
            <EditOutlined />
          </Button>
        </Space>
      )
    }
  ];
}

export default TableStruct;