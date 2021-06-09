import "antd/dist/antd.css";
import React, { Component, useCallback, useState } from "react";
import { AppContext, appContextDefault, AppContextType } from "./context/AppContext";

import GlobalStyle from "./common/globalStyles";
import Routes from "./config/routes";
import { authenticate } from "./services/authService";
import { message } from "antd";

const App: React.FC = () => {
  const [ user, setUser ] = useState(appContextDefault.user);
  
  const loadUser = useCallback(async(login, password) => {
    try {
      const resp = await authenticate(login, password);
      setUser(resp.data);
    } catch (e) {
      if (e.message.includes("401")) {
        message.error('Usuário ou senha errados');
      }
      if (e.message.includes("400")) {
        message.error('Requisição contém erros');
      }
    }
  }, [ user, setUser, authenticate ]);

  const unsetUser = useCallback(async() => {
    setUser(appContextDefault.user);
  }, [ user, setUser ]);
  
  const value: AppContextType = {
    user,
    loadUser,
    unsetUser,
    checkUser: () => (user.token !== ""),
  }

  return (
    <AppContext.Provider value={value}>
      <GlobalStyle />
      <Routes />
    </AppContext.Provider>
  );
  
}

export default App;