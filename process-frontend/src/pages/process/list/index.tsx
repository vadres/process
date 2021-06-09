import { Breadcrumb, Table, Space, Button } from 'antd';
import { useCallback, useContext, useEffect, useState } from 'react';
import { Redirect, useHistory } from 'react-router';
import { PlusOutlined } from '@ant-design/icons';

import { AppContext } from '../../../context/AppContext';
import { getAllProcess } from '../../../services/processService';

import { StyledContent } from '../../../common/StyledContent';
import { Div } from './styles';
import TableStruct from '../components/TableStruct';
import LayoutAdm from '../../../layouts/LayoutAdm';
import Process from '../../../@types/Process';

function ProcessPage() {
  const history = useHistory();
  const { checkUser, user } = useContext(AppContext);

  const [ processData, setProcessData ] = useState([]);
  
  const handleCreateProcess = () => {
    history.push("/process/create");
  }

  const handleEditProcess = (id: number) => {
    history.push(`/process/edit/${id}`);
  }

  const fetchProcess = useCallback(async () => {
    try {
        const resp = await getAllProcess(user);
        if (resp.data.length !== processData.length)
          setProcessData(resp.data);
      } catch (e) {
        console.log(e);
      }
  }, [ user, processData.length ]);

  useEffect(() => {
    fetchProcess();
  }, [ fetchProcess ]);

  return (
    !checkUser()? <Redirect to="/" />: (
      <>
        <LayoutAdm>
          <StyledContent style={{ padding: '0 50px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>Processos</Breadcrumb.Item>
              <Breadcrumb.Item>Listar</Breadcrumb.Item>
            </Breadcrumb>
            <Div>
              <Space style={{ marginBottom: 16 }}>
                <Button type="primary" onClick={handleCreateProcess}>
                  <PlusOutlined /> Novo Processo
                </Button>
              </Space>

              <Table rowKey="id" columns={TableStruct({
                edit: async (record: Process) => { handleEditProcess(record.id) }
              })} dataSource={processData} />
            </Div>
          </StyledContent>
         
        </LayoutAdm>
      </>
    )
  );
}

export default ProcessPage;
