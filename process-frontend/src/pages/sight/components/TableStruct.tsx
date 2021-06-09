import { Button, Space, Tag, Tooltip } from "antd";
import {
  SnippetsOutlined
} from '@ant-design/icons';
import Sight from "../../../@types/Sight";
import Process from "../../../@types/Process";

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
      title: 'Status',
      dataIndex: 'sights',
      key: 'sights',
      render: (sights: Sight[]) => (
        <>
          {sights.map((sight: Sight) => {
            let color = sight.status === 1? 'green': 'geekblue';

            return (
              <Tag color={color} key={sight.id + sight.user.id}>
                {sight.status === 1? "Pendente": "Respondido" }
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Ações',
      key: 'actions',
      render: (text: any, record: Process) => record.sights[0].status === 1 && (
        <Space size="middle">
          <Tooltip title="Adicionar parecer">
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