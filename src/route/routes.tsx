import React, { Suspense } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store/store';

const Landing = React.lazy(() => import('../screens/home/landing'));

interface PathModel {
  exact: Boolean;
  path: string;
  component: any;
}

const publicPaths: PathModel[] = [
  { exact: true, path: '/', component: Landing },
  // { exact: false, path: '/details/:id', component: Details }
];

const publicRoutes = publicPaths.map(({ path, ...props }: any, index: number) => (
  <Route key={index} path={path} {...props} />
));

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Suspense fallback={<div />}>
            {publicRoutes}
          </Suspense>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
