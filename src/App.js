import React, { useState } from "react";
import NavBar from "./components/NavBar";
import AppRoutes from "./components/AppRoutes";
import {BrowserRouter} from "react-router-dom"
import AuthContext from "./context";

const App = () => {
  const [isAuth, setIsAuth] = useState(false);
  return(
    <AuthContext.Provider
    value = {{
      isAuth,
      setIsAuth
    }}>
      <BrowserRouter>
        <NavBar />
        <AppRoutes />
      </BrowserRouter>
    </AuthContext.Provider>
  )
}

export default App;
