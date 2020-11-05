import React, { lazy, Suspense } from 'react';
import '../styles/_app.scss';
import MatxTheme from './MatxLayout/MatxTheme/MatxTheme';
import { Provider } from "react-redux";
import { Store } from './redux/Store';
import routes from './RootRoutes';
import AppContext from './appContext';
import MatxLayout from './MatxLayout/MatxLayout';
import Auth from './auth/Auth';
import { Router } from 'react-router-dom';
import history from '../history';
import Loading from '../matx/MatxLoadable/Loading';
import AuthGuard from './auth/AuthGuard';

function App() {
  return (
    <AppContext.Provider value={{ routes }}>
      <Provider store={Store}>
        <MatxTheme>
          <Auth>
            <Router history={history}>
              <AuthGuard>
                <MatxLayout />
              </AuthGuard>
            </Router>
          </Auth>
        </MatxTheme>
      </Provider>
    </AppContext.Provider>
  );
}

export default App;
