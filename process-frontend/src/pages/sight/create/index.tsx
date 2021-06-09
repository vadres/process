import { Breadcrumb, Row, Col } from 'antd';
import { useContext } from 'react';
import { Redirect, useHistory } from 'react-router';

import { AppContext } from '../../../context/AppContext';

import { StyledContent } from '../../../common/StyledContent';
import { Div, Title } from './styles';
import LayoutAdm from '../../../layouts/LayoutAdm';
import FormProcess from '../components/FormProcess';
import { createProcess } from '../../../services/processService';
import Process from '../../../@types/Process';

function CreateProcess() {
  const history = useHistory();
  const { checkUser, user } = useContext(AppContext);
  
  const handleCreateProcess = async (process: Process) => {
    try {
      await createProcess(user, process);
      history.push("/process");
    } catch (e) {}
  }

  return (
    !checkUser()? <Redirect to="/" />: (
      <>
        <LayoutAdm>
          <StyledContent style={{ padding: '0 50px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>Processos</Breadcrumb.Item>
              <Breadcrumb.Item>Novo</Breadcrumb.Item>
            </Breadcrumb>
            <Row>
              <Col lg={{span:12, push: 6}} sm={{span:20, push: 2}} >
                <Div>
                  <Title>Novo Processo</Title>
                  <FormProcess handleFinish={handleCreateProcess} />              
                </Div>
              </Col>
            </Row>
          </StyledContent>
           
        </LayoutAdm>
      </>
    )
  );
}

export default CreateProcess;
