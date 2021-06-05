import "antd/dist/antd.css";
import React, { Component, useCallback, useState } from "react";
import { AppContext, appContextDefault, AppContextType } from "./context/AppContext";

import GlobalStyle from "./config/globalStyles";
import Routes from "./config/routes";
import { authenticate } from "./services/authService";

const App: React.FC = () => {
  const [ user, setUser ] = useState(appContextDefault.user);
  
  const loadUser = useCallback(async(login, password) => {
    try {
      const resp = await authenticate(login, password);
      setUser(resp.data);
    } catch (e) {
      console.log(e);
    }
  }, [ user, setUser, authenticate ]);

  const removeUser = useCallback(async() => {
    setUser(appContextDefault.user);
  }, [ user, setUser ]);
  
  const value: AppContextType = {
    user,
    loadUser,
    removeUser,
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