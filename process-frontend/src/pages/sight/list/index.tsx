import { Breadcrumb, Table, Button, Modal, message, Form, Input } from 'antd';
import { useCallback, useContext, useEffect, useState } from 'react';
import { Redirect } from 'react-router';

import { AppContext } from '../../../context/AppContext';

import { StyledContent } from '../../../common/StyledContent';
import { Div } from './styles';
import TableStruct from '../components/TableStruct';
import LayoutAdm from '../../../layouts/LayoutAdm';
import Process from '../../../@types/Process';
import { createSight, createSightResponse, getAllFinishers, getProcess } from '../../../services/sightService';

function ProcessSightPage() {
  const { checkUser, user } = useContext(AppContext);
  const [form] = Form.useForm();

  const [ modalVisible, setModalVisible ] = useState(false);
  const [ processData, setProcessData ] = useState([]);
  const [ idProcess , setIdProcess ] = useState(0);
  const [ finishers, setFinishers ] = useState([])
  
  const onFinish = (values: any) => {
    handleFinish(values);
  };

  const handleFinish = async (values: any) => {
    try {
      await createSightResponse(user, values.description, idProcess);          
      setModalVisible(false);
      fetchProcess();
    } catch (e) {
      if (e.message.includes("400")) {
        message.error('Dados errados');
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
                addSight: async (record: Process) => { 
                  await setModalVisible(true);
                  setIdProcess(record.id)
                }
              })} dataSource={processData} />
            </Div>
          </StyledContent>

          <Modal
            width={400}
            title="Responder processo"
            centered
            visible={modalVisible}
            onCancel={() => setModalVisible(false)}
            footer={null}
          >
            <Form
              layout="vertical"
              form={form}
              name="register"
              scrollToFirstError
              onFinish={onFinish}
            >
              <Form.Item
                name="description"
                label="Parecer"
                rules={[
                  {
                    required: true,
                    message: 'Por favor digite um parecer',
                  },
                ]}
              >
                <Input.TextArea />
              </Form.Item>

              <Form.Item>
                  <Button type="primary" htmlType="submit">
                    Salvar processo
                  </Button>
               </Form.Item>
            </Form>
          </Modal>   
        </LayoutAdm>
      </>
    )
  );
}

export default ProcessSightPage;
