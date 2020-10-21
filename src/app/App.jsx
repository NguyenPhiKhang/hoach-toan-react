import React from 'react';
import '../styles/App.scss';
import '../styles/utilities/positionings.scss';
import MatxTheme from './MatxLayout/MatxTheme/MatxTheme';
import SignIn from './views/sessions/SignIn';
import { Provider } from "react-redux";
import {Store} from './redux/Store';
import AppContext from "./appContext";
import routes from "./RootRoutes";


function App() {
  return (
    <AppContext.Provider value={{ routes }}>
      <Provider store={Store}>
        <MatxTheme>
          <SignIn />
        </MatxTheme>
      </Provider>
    </AppContext.Provider>
  );
}

export default App;
