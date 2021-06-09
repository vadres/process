import { Breadcrumb, Row, Col } from 'antd';
import { useCallback, useContext, useEffect, useState } from 'react';
import { Redirect, RouteComponentProps, useHistory } from 'react-router';

import { AppContext } from '../../../context/AppContext';

import { StyledContent } from '../../../common/StyledContent';
import { Div, Title } from './styles';
import LayoutAdm from '../../../layouts/LayoutAdm';
import FormProcess from '../components/FormProcess';
import Process from '../../../@types/Process';
import { getProcess, updateProcess } from '../../../services/processService';

interface MatchParams {
  id: string;
}

const EditProcess: React.FC<RouteComponentProps<MatchParams>> = (props) => {
  const history = useHistory();
  const [ initialProcess, setInitialProcess ] = useState<Process>({ description: "", id: 0, sights: [] });
  const { checkUser, user } = useContext(AppContext);
  
  const fetchProcess = useCallback(async () => {
      try {
        const resp = await getProcess(user, parseInt(props.match.params.id));
        setInitialProcess(resp.data);
      } catch (e) {
        console.log(e);
      }
    
  }, [ user, props.match.params.id ]);
  
  useEffect(() => {
    fetchProcess();
  }, [ fetchProcess ]);

  const handleEditProcess = async (process: Process) => {
    try {
      await updateProcess(user, process, parseInt(props.match.params.id));
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
              <Breadcrumb.Item>Edit</Breadcrumb.Item>
            </Breadcrumb>
            <Row>
              <Col lg={{span:12, push: 6}} sm={{span:20, push: 2}} >
                <Div>
                  <Title>Editando Processo</Title>
                  <FormProcess initialValues={initialProcess} handleFinish={handleEditProcess} />              
                </Div>
              </Col>
            </Row>
          </StyledContent>
           
        </LayoutAdm>
      </>
    )
  );
}

export default EditProcess;
