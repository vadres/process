import { Space, Tag } from "antd";
import {
  CloseOutlined, EditOutlined
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
      render: (text:string) => <a>{text}</a>,
    },
    
    {
      title: 'Ações',
      key: 'actions',
      render: (text: any, record: any) => (
        <Space size="middle">
          <a onClick={() => props.edit(record)}>
            <EditOutlined />
          </a>
        </Space>
      )
    }
  ];
}

export default TableStruct;