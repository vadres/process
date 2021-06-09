import { Breadcrumb, Row, Col } from 'antd';
import { useCallback, useContext, useEffect, useState } from 'react';
import { Redirect, RouteComponentProps, useHistory } from 'react-router';

import { AppContext, appContextDefault } from '../../../context/AppContext';

import { StyledContent } from '../../../common/StyledContent';
import { Div, Title } from './styles';
import LayoutAdm from '../../../layouts/LayoutAdm';
import FormUser from '../components/FormUser';
import User from '../../../@types/User';
import { getUser, updateUser } from '../../../services/userService';

interface MatchParams {
  id: string;
}

const EditUser: React.FC<RouteComponentProps<MatchParams>> = (props) => {
  const history = useHistory();
  const [ initialUser, setInitialUser ] = useState<User>(appContextDefault.user.userDetails);
  const { checkUser, user } = useContext(AppContext);
  
  const fetchUser = useCallback(async () => {
      try {
        const resp = await getUser(user, parseInt(props.match.params.id));
        setInitialUser(resp.data);
      } catch (e) {
        console.log(e);
      }
    
  }, [ user, props.match.params.id ]);
  
  useEffect(() => {
    fetchUser();
  }, [ fetchUser ]);

  const handleEditUser = async (userBean: User) => {
    try {
      await updateUser(user, userBean);
      history.push("/user");
    } catch (e) {}
  }

  return (
    !checkUser()? <Redirect to="/" />: (
      <>
        <LayoutAdm>
          <StyledContent style={{ padding: '0 50px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>Usuários</Breadcrumb.Item>
              <Breadcrumb.Item>Edit</Breadcrumb.Item>
            </Breadcrumb>
            <Row>
              <Col lg={{span:12, push: 6}} sm={{span:20, push: 2}} >
                <Div>
                  <Title>Editando Usuário</Title>
                  <FormUser initialValues={initialUser} handleFinish={handleEditUser} />              
                </Div>
              </Col>
            </Row>
          </StyledContent>
           
        </LayoutAdm>
      </>
    )
  );
}

export default EditUser;
