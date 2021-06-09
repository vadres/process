import { Breadcrumb, Table, Space, Button, Modal, Select, Typography, message } from 'antd';
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
import { createSight, getAllFinishers, getProcess } from '../../../services/sightService';
import User from '../../../@types/User';

function ProcessSightPage() {
  const history = useHistory();
  const { checkUser, user } = useContext(AppContext);
    
  const [ modalVisible, setModalVisible ] = useState(false);
  const [ processData, setProcessData ] = useState([]);
  const [ idProcess , setIdProcess ] = useState(0);
  const [ idUser, setIdUser ] = useState(0);
  const [ finishers, setFinishers ] = useState([])
  
  const handleCreateProcess = () => {
    history.push("/process/create");
  }

  const handleEditProcess = (id: number) => {
    history.push(`/process/edit/${id}`);
  }

  const handleUserSightChange = (value: any) => {
    setIdUser(value);
  }

  const handleOnModalOk = async () => {
    try {
      await createSight(user, idUser, idProcess);          
      setModalVisible(false);
      fetchProcess();
    } catch (e) {
      if (e.message.includes("400")) {
        message.error('Usuário já foi adicionado anteriormente');
      }
    }
  }
  
  const fetchFinishers = useCallback(async () => {
    try {
      const resp = await getAllFinishers(user);
      if (resp.data.length !== finishers.length)
        setFinishers(resp.data);
    } catch (e) {
      console.log(e);
    }
  }, [ user, finishers.length ]);

  const fetchProcess = useCallback(async () => {
    try {
        const resp = await getProcess(user);
        setProcessData(resp.data);
      } catch (e) {
        console.log(e);
      }
  }, [ user ]);

  useEffect(() => {
    fetchProcess();
  }, [ fetchProcess ]);
  
  useEffect(() => {
    fetchFinishers();
  }, [ fetchFinishers ]);

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
              <Table rowKey="id" columns={TableStruct({
                edit: async (record: Process) => { handleEditProcess(record.id) },
                addUserSight: async (record: Process) => { 
                  await setModalVisible(true);
                  setIdProcess(record.id)
                }
              })} dataSource={processData} />
            </Div>
          </StyledContent>

          <Modal
            width={300}
            title="Adicionar Usuário"
            centered
            visible={modalVisible}
            onOk={handleOnModalOk}
            onCancel={() => setModalVisible(false)}
          >
            <Typography.Text>Finalizador</Typography.Text>
            <Select
              showSearch
              style={{ width: "100%" }}
              placeholder="Select a person"
              optionFilterProp="children"
              onChange={handleUserSightChange}
              filterOption={(input, option) =>
                option?.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              {
                finishers.map((f: User) => (
                  <Select.Option key={f.id} value={f.id}>{f.name}</Select.Option>
                ))
              }
            </Select>
          </Modal>   
        </LayoutAdm>
      </>
    )
  );
}

export default ProcessSightPage;
