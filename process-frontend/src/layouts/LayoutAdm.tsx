import { Layout, Menu } from 'antd';
import { useContext } from 'react';

import { AppContext } from '../context/AppContext';

const { Header, Footer } = Layout;

const LayoutAdm: React.FC = ({ children }) => {
  const { unsetUser } = useContext(AppContext);

  return (
    <Layout className="layout">
      <Header>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item onClick={() => unsetUser()} style={{ float: "right" }} key="1">Sair</Menu.Item>
        </Menu>
      </Header>
      {children}
      <Footer style={{ textAlign: 'center', color: "rgba(0,0,0,0.5)" }}> Process api - ©2021 </Footer>
    </Layout>  
  )
}

export default LayoutAdm;