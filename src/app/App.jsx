import React from 'react';
import '../styles/_app.scss';
import MatxTheme from './MatxLayout/MatxTheme/MatxTheme';
import { Provider } from "react-redux";
import { Store } from './redux/Store';
// import { Redirect, Route, Switch } from 'react-router-dom';
// import sessionRoutes from './views/sessions/SessionRoutes';
import routes from './RootRoutes';
import AppContext from './appContext';
import MatxLayout from './MatxLayout/MatxLayout';
import Auth from './auth/Auth';
import { Router } from 'react-router-dom';
import history from '../history';
import AuthGuard from './auth/AuthGuard';

function App() {
  return (
    // // <AppContext.Provider value={routes}>
    //   <Provider store={Store}>
    //     <MatxTheme>
    //       {/* <Switch>
    //         {
    //           routes.map((value) => {
    //             return <Route key={value.name} path={value.path} component={value.component} />
    //           })
    //         },
    //         <Redirect to="/session/signin" exact />
    //       </Switch> */}
    //       <MatxLayout/>
    //     </MatxTheme>
    //   </Provider>
    // // </AppContext.Provider>

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
